import { a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CzNe6w_R.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Volts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1>hello</h1>`;
}, "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/pages/volts.astro", void 0);

const $$file = "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/pages/volts.astro";
const $$url = "/volts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Volts,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
