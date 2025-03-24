import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_V6XCgpI1.mjs';
import { a as createComponent, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, r as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_CzNe6w_R.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc) || imageSrc.startsWith("/")) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  params.set("importer", filePath);
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://example.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = rawEntry.filePath ? updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap) : rawEntry.data;
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/AI-chains.md": () => import('./AI-chains_BG3Lf7KH.mjs'),"/src/content/blog/Fusinon360.md": () => import('./Fusinon360_DXYB1-Fu.mjs'),"/src/content/blog/Home_server.md": () => import('./Home_server_5jftew3p.mjs'),"/src/content/blog/I_Failed.md": () => import('./I_Failed_C7Q-LI-v.mjs'),"/src/content/blog/Md-tips.md": () => import('./Md-tips_VKMO12VB.mjs'),"/src/content/blog/Mocks-and-Ream-methods.md": () => import('./Mocks-and-Ream-methods_DOZpt2BL.mjs'),"/src/content/blog/Modbus-JavaScrit.md": () => import('./Modbus-JavaScrit_ByDIVrDY.mjs'),"/src/content/blog/So-you-want-to-mock.md": () => import('./So-you-want-to-mock_BUEwVPOb.mjs'),"/src/content/blog/Spring-pipeline.md": () => import('./Spring-pipeline_CZSqQyj3.mjs'),"/src/content/blog/UI_Libraries_p1.md": () => import('./UI_Libraries_p1_sheftN1r.mjs'),"/src/content/blog/disign_document.md": () => import('./disign_document_C9NY5xRy.mjs'),"/src/content/blog/one_week_challenge.md": () => import('./one_week_challenge_C34nfsjm.mjs'),"/src/content/blog_example/Ai-Chain_notes.md": () => import('./Ai-Chain_notes_BOY5jLjj.mjs'),"/src/content/blog_example/Kafka.md": () => import('./Kafka_CXvRhbkD.mjs'),"/src/content/blog_example/first-post.md": () => import('./first-post_BVIFrmz-.mjs'),"/src/content/blog_example/markdown-style-guide.md": () => import('./markdown-style-guide_CA55aiwO.mjs'),"/src/content/blog_example/second-post.md": () => import('./second-post_DSxOdlf9.mjs'),"/src/content/blog_example/third-post.md": () => import('./third-post_DkVxmDaE.mjs'),"/src/content/blog_example/using-mdx.mdx": () => import('./using-mdx_hmsQdgNd.mjs'),"/src/content/projects/Chat-Unity.md": () => import('./Chat-Unity_Cri7AJWc.mjs'),"/src/content/projects/Fit-Fusion.md": () => import('./Fit-Fusion_BmMpwqGC.mjs'),"/src/content/projects/Mind-Zone.md": () => import('./Mind-Zone_DRrYNVm4.mjs'),"/src/content/projects/Terra-Scan.md": () => import('./Terra-Scan_CbGswIK2.mjs'),"/src/content/projects/Ticket-System.md": () => import('./Ticket-System_D4ib7hKv.mjs'),"/src/content/projects/Volts.md": () => import('./Volts_A-eFbpla.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"disign_document":"/src/content/blog/disign_document.md","ai-chains":"/src/content/blog/AI-chains.md","fusinon360":"/src/content/blog/Fusinon360.md","home_server":"/src/content/blog/Home_server.md","i_failed":"/src/content/blog/I_Failed.md","md-tips":"/src/content/blog/Md-tips.md","mocks-and-ream-methods":"/src/content/blog/Mocks-and-Ream-methods.md","modbus-javascrit":"/src/content/blog/Modbus-JavaScrit.md","one_week_challenge":"/src/content/blog/one_week_challenge.md","so-you-want-to-mock":"/src/content/blog/So-you-want-to-mock.md","ui_libraries_p1":"/src/content/blog/UI_Libraries_p1.md","spring-pipeline":"/src/content/blog/Spring-pipeline.md"}},"blog_example":{"type":"content","entries":{"ai-chain_notes":"/src/content/blog_example/Ai-Chain_notes.md","first-post":"/src/content/blog_example/first-post.md","kafka":"/src/content/blog_example/Kafka.md","markdown-style-guide":"/src/content/blog_example/markdown-style-guide.md","second-post":"/src/content/blog_example/second-post.md","third-post":"/src/content/blog_example/third-post.md","using-mdx":"/src/content/blog_example/using-mdx.mdx"}},"projects":{"type":"content","entries":{"chat-unity":"/src/content/projects/Chat-Unity.md","ticket-system":"/src/content/projects/Ticket-System.md","mind-zone":"/src/content/projects/Mind-Zone.md","fit-fusion":"/src/content/projects/Fit-Fusion.md","terra-scan":"/src/content/projects/Terra-Scan.md","volts":"/src/content/projects/Volts.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/AI-chains.md": () => import('./AI-chains_w3kVAOnL.mjs'),"/src/content/blog/Fusinon360.md": () => import('./Fusinon360_CeTfOBMT.mjs'),"/src/content/blog/Home_server.md": () => import('./Home_server_CcbzFkH8.mjs'),"/src/content/blog/I_Failed.md": () => import('./I_Failed_DJdxbT6l.mjs'),"/src/content/blog/Md-tips.md": () => import('./Md-tips_FeBbk4_V.mjs'),"/src/content/blog/Mocks-and-Ream-methods.md": () => import('./Mocks-and-Ream-methods_DRCoHVG9.mjs'),"/src/content/blog/Modbus-JavaScrit.md": () => import('./Modbus-JavaScrit_C_cY94cM.mjs'),"/src/content/blog/So-you-want-to-mock.md": () => import('./So-you-want-to-mock_TmzeOY22.mjs'),"/src/content/blog/Spring-pipeline.md": () => import('./Spring-pipeline_Cpc1bSbm.mjs'),"/src/content/blog/UI_Libraries_p1.md": () => import('./UI_Libraries_p1_Bot0HLCB.mjs'),"/src/content/blog/disign_document.md": () => import('./disign_document_DEdgcJ8M.mjs'),"/src/content/blog/one_week_challenge.md": () => import('./one_week_challenge_CtgurMTE.mjs'),"/src/content/blog_example/Ai-Chain_notes.md": () => import('./Ai-Chain_notes_DHoTb5Fr.mjs'),"/src/content/blog_example/Kafka.md": () => import('./Kafka_CKRXiR5c.mjs'),"/src/content/blog_example/first-post.md": () => import('./first-post_BQjzYC11.mjs'),"/src/content/blog_example/markdown-style-guide.md": () => import('./markdown-style-guide_DL5zb3aY.mjs'),"/src/content/blog_example/second-post.md": () => import('./second-post_-kd2HZUo.mjs'),"/src/content/blog_example/third-post.md": () => import('./third-post_DAvl-JWJ.mjs'),"/src/content/blog_example/using-mdx.mdx": () => import('./using-mdx_BHTIl0Hg.mjs'),"/src/content/projects/Chat-Unity.md": () => import('./Chat-Unity_DEL9sxFe.mjs'),"/src/content/projects/Fit-Fusion.md": () => import('./Fit-Fusion_fj-4SAzt.mjs'),"/src/content/projects/Mind-Zone.md": () => import('./Mind-Zone_BSudXPxU.mjs'),"/src/content/projects/Terra-Scan.md": () => import('./Terra-Scan_n1jZ3xVL.mjs'),"/src/content/projects/Ticket-System.md": () => import('./Ticket-System_DXf1qqHq.mjs'),"/src/content/projects/Volts.md": () => import('./Volts_BE6OYzKe.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };
