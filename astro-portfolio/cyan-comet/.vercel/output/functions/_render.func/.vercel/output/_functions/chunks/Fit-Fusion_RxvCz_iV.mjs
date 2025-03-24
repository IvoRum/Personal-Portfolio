import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CzNe6w_R.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Fit fusion is a side project of mine where I focus on building on my Angular knowledge.</p>\n<p>In concept the app is a fitness and well ness training adviser in every wey. It provides courses, exercises, diet and wellness publications.</p>\n<h1 id=\"links\">Links</h1>\n<p><a href=\"https://github.com/IvoRum/Fit-Fusion\">Fit-Fusion Repo</a></p>";

				const frontmatter = {"title":"Fit Fusion","description":"A Angular practice project","pubDate":"Sep 01 2023","heroImage":"/projects/banner/fitfusion.png"};
				const file = "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/content/projects/Fit-Fusion.md";
				const url = undefined;
				function rawContent() {
					return "\r\nFit fusion is a side project of mine where I focus on building on my Angular knowledge.\r\n\r\nIn concept the app is a fitness and well ness training adviser in every wey. It provides courses, exercises, diet and wellness publications.\r\n\r\n# Links\r\n\r\n[Fit-Fusion Repo](https://github.com/IvoRum/Fit-Fusion)\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"links","text":"Links"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
