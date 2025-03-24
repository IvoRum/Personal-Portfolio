import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CzNe6w_R.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"introduction\">Introduction</h1>\n<p>This posed is one the will be updated as I lean and build new things whit markdown.</p>\n<h1 id=\"images\">Images</h1>\n<p>You can add images using:</p>\n<p><code>![alt text](image_url)</code></p>\n<h1 id=\"links\">Links</h1>\n<p><code>[Link text](link_address)</code></p>\n<p><a href=\"link_address\">Link text</a></p>\n<p>Last updated: 06.08.2024</p>";

				const frontmatter = {"title":"Markdown Tips","description":"Ticks and tricks for md files","pubDate":"Jun 30 2024","heroImage":"/blog/mdbanner.png"};
				const file = "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/content/blog/Md-tips.md";
				const url = undefined;
				function rawContent() {
					return "\r\n# Introduction\r\n\r\nThis posed is one the will be updated as I lean and build new things whit markdown.\r\n\r\n# Images\r\n\r\nYou can add images using:\r\n\r\n`![alt text](image_url)`\r\n\r\n# Links\r\n\r\n`[Link text](link_address)`\r\n\r\n[Link text](link_address)\r\n\r\nLast updated: 06.08.2024\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"introduction","text":"Introduction"},{"depth":1,"slug":"images","text":"Images"},{"depth":1,"slug":"links","text":"Links"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
