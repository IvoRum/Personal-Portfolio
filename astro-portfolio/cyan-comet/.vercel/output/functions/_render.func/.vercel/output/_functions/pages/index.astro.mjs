import { a as createComponent, r as renderTemplate, d as renderComponent, e as renderHead, b as addAttribute } from '../chunks/astro/server_CzNe6w_R.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_DTfXC20z.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_BMrRQnwf.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-j7pv25f6": true })}${renderHead()}</head> <body data-astro-cid-j7pv25f6>  ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} <main data-astro-cid-j7pv25f6> <div class="introduction" data-astro-cid-j7pv25f6> <div class="portfolio-description" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Hello, World!</h1> <p data-astro-cid-j7pv25f6>
Here I dive into a realm where coding finesse
            intertwines with creative vision, sculpting
            interactive experiences that captivate and
            inspire. Explore a fusion of artistry and
            technical prowess, where every line of code is a
            brushstroke in the canvas of digital innovation.
</p> </div> <div class="portfolio-picture" data-astro-cid-j7pv25f6> <img src="CropIvo5.png" data-astro-cid-j7pv25f6> </div> </div> <div class="projects" data-astro-cid-j7pv25f6> <div class="project-item padding-right" data-astro-cid-j7pv25f6> <a${addAttribute(`/projects/mind-zone/`, "href")} data-astro-cid-j7pv25f6> <img src="MindZone.png" data-astro-cid-j7pv25f6> </a> </div> <div class="project-item" data-astro-cid-j7pv25f6> <a${addAttribute(`/projects/volts/`, "href")} data-astro-cid-j7pv25f6> <img src="Volts.png" data-astro-cid-j7pv25f6> </a> </div> <div class="project-item padding-right" data-astro-cid-j7pv25f6> <a${addAttribute(`/projects/terra-scan/`, "href")} data-astro-cid-j7pv25f6> <img src="Terra_Scan.png" data-astro-cid-j7pv25f6> </a> </div> <div class="project-item" data-astro-cid-j7pv25f6> <a${addAttribute(`/projects/chat-unity/`, "href")} data-astro-cid-j7pv25f6> <img src="Chat_unity.png" data-astro-cid-j7pv25f6> </a> </div> <div class="project-item padding-right" data-astro-cid-j7pv25f6> <a${addAttribute(`/projects/fit-fusion/`, "href")} data-astro-cid-j7pv25f6> <img src="FitFusionNew.png" data-astro-cid-j7pv25f6></a> </div> <div class="project-item" data-astro-cid-j7pv25f6> <a${addAttribute(`/projects/ticket-system/`, "href")} data-astro-cid-j7pv25f6> <img src="TicketFlow.png" data-astro-cid-j7pv25f6> </a> </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} </body></html>`;
}, "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/pages/index.astro", void 0);

const $$file = "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
