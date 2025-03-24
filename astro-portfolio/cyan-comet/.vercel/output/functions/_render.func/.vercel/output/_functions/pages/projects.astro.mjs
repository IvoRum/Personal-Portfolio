import { a as createComponent, r as renderTemplate, d as renderComponent, e as renderHead, b as addAttribute } from '../chunks/astro/server_CzNe6w_R.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_DTfXC20z.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_BMrRQnwf.mjs';
import { g as getCollection } from '../chunks/_astro_content_C_kkxfSH.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_Dn2bces8.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("projects")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-2hwget37> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-2hwget37": true })}${renderHead()}</head> <body data-astro-cid-2hwget37> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-2hwget37": true })} <main data-astro-cid-2hwget37> <section data-astro-cid-2hwget37> <ul data-astro-cid-2hwget37> ${posts.map((post) => renderTemplate`<li data-astro-cid-2hwget37> <a${addAttribute(`/projects/${post.slug}/`, "href")} data-astro-cid-2hwget37> <img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(post.data.heroImage, "src")} alt="" data-astro-cid-2hwget37> <h4 class="title" data-astro-cid-2hwget37>${post.data.title}</h4> <p class="date" data-astro-cid-2hwget37> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-2hwget37": true })} </p> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-2hwget37": true })} </body></html>`;
}, "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/pages/projects/index.astro", void 0);

const $$file = "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
