import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CzNe6w_R.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h4 id=\"aws-optimum-neuron\">AWS-Optimum Neuron</h4>\n<p>🤗 Optimum Neuron is the interface between the 🤗 Transformers library and AWS Accelerators including AWS Trainium and AWS Inferentia. It provides a set of tools enabling easy model loading, training and inference on single- and multi-Accelerator settings for different downstream tasks. The list of officially validated models and tasks is available here.</p>";

				const frontmatter = {};
				const file = "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/content/blog_example/Ai-Chain_notes.md";
				const url = undefined;
				function rawContent() {
					return "#### AWS-Optimum Neuron\r\n\r\n🤗 Optimum Neuron is the interface between the 🤗 Transformers library and AWS Accelerators including AWS Trainium and AWS Inferentia. It provides a set of tools enabling easy model loading, training and inference on single- and multi-Accelerator settings for different downstream tasks. The list of officially validated models and tasks is available here.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":4,"slug":"aws-optimum-neuron","text":"AWS-Optimum Neuron"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
