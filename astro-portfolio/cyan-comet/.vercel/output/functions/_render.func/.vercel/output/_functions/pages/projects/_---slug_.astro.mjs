import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot, m as maybeRenderHead } from '../../chunks/astro/server_CzNe6w_R.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_C_kkxfSH.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../../chunks/Footer_DTfXC20z.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_Dn2bces8.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$ProjectPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectPost;
  const {
    title,
    description,
    pubDate,
    updatedDate,
    heroImage
  } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-rng236ea> <head><meta property="og:image"${addAttribute(heroImage, "content")}>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-rng236ea": true })}${renderHead()}</head> <body data-astro-cid-rng236ea> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-rng236ea": true })} <main data-astro-cid-rng236ea> <article data-astro-cid-rng236ea> <div class="hero-image" data-astro-cid-rng236ea> ${heroImage && renderTemplate`<img${addAttribute(1020, "width")}${addAttribute(510, "height")}${addAttribute(heroImage, "src")} alt="" data-astro-cid-rng236ea>`} </div> <div class="prose" data-astro-cid-rng236ea> <div class="title" data-astro-cid-rng236ea> <div class="date" data-astro-cid-rng236ea> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-rng236ea": true })} ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-rng236ea>
Last updated on${" "} ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-rng236ea": true })} </div>`} </div> <h1 data-astro-cid-rng236ea>${title}</h1> <hr data-astro-cid-rng236ea> </div> ${renderSlot($$result, $$slots["default"])} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-rng236ea": true })} </body></html>`;
}, "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/layouts/ProjectPost.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const posts = await getCollection("projects");
  const { slug } = Astro2.params;
  const post = posts.find((page) => page.slug === slug);
  if (!post) return Astro2.redirect("/404");
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$ProjectPost, { ...post.data }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${post.data.title}</h1> ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/pages/projects/[...slug].astro", void 0);

const $$file = "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/pages/projects/[...slug].astro";
const $$url = "/projects/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
