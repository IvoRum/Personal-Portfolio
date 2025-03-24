import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_CzNe6w_R.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_C_kkxfSH.mjs';
import { $ as $$BlogPost } from '../../chunks/BlogPost_DKDu_JRh.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const posts = await getCollection("blog");
  const { slug } = Astro2.params;
  const post = posts.find((page) => page.slug === slug);
  if (!post) return Astro2.redirect("/404");
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
