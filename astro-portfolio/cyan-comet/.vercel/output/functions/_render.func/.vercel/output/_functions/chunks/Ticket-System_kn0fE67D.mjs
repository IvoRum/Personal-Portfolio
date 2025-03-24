import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_CzNe6w_R.mjs';
import { a as getImage } from './_astro_assets_CyzqKUXR.mjs';
import 'clsx';

const Astro__ZhBfz6 = new Proxy({"src":"/_astro/ex1.hOAOslxe.png","width":1707,"height":716,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/public/projects/ticketflow/ex1.png";
							}
							
							return target[name];
						}
					});

const Astro__Zhxbnp = new Proxy({"src":"/_astro/ex2.McEndAmV.png","width":1767,"height":730,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/public/projects/ticketflow/ex2.png";
							}
							
							return target[name];
						}
					});

const Astro__2d9Jxh = new Proxy({"src":"/_astro/flow1.1V-TlzJG.png","width":1312,"height":836,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/public/projects/ticketflow/flow1.png";
							}
							
							return target[name];
						}
					});

const Astro__2ddNIX = new Proxy({"src":"/_astro/flow2.CJzXXfcB.png","width":1385,"height":885,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/public/projects/ticketflow/flow2.png";
							}
							
							return target[name];
						}
					});

const Astro__77FvA = new Proxy({"src":"/_astro/impl.BqCtsw86.png","width":1521,"height":895,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/public/projects/ticketflow/impl.png";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/projects/ticketflow/ex1\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/projects/ticketflow/ex1.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZhBfz6, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/projects/ticketflow/ex2\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/projects/ticketflow/ex2.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Zhxbnp, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/projects/ticketflow/flow1\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/projects/ticketflow/flow1.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__2d9Jxh, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/projects/ticketflow/flow2\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/projects/ticketflow/flow2.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__2ddNIX, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/projects/ticketflow/impl\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/projects/ticketflow/impl.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__77FvA, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<p>Ticket Flow is my implementation of the waiting-in-line problem. It was developed as my bachelor’s thesis. In essence, the system is a way for any business to organize their line problems. The application is applicable for various businesses and will work for many unusual scenarios.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/projects/ticketflow/ex1.png&#x22;,&#x22;alt&#x22;:&#x22;Example 1&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Her you can see a plain example of how the system is meant to be used. The example shows how a\r\nadministrative unit uses the system to simplify the line and waiting time.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/projects/ticketflow/ex2.png&#x22;,&#x22;alt&#x22;:&#x22;Example 2&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Example 2 shows the system in a more unseal manner ware the user picks a move that they what to watch and is directed to the right auditorium.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/projects/ticketflow/flow1.png&#x22;,&#x22;alt&#x22;:&#x22;Flow 1&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>In this flow diagram is shown how a typical user experience is conducted.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/projects/ticketflow/flow2.png&#x22;,&#x22;alt&#x22;:&#x22;Flow 2&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>The second flow shows how the system is used by the Administrator and the process of creating a new type of ticket.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/projects/ticketflow/impl.png&#x22;,&#x22;alt&#x22;:&#x22;Implementation&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>In the diagram is shown how the system is implemented as a many-to-many node system of inner connected favors and ticket types. And how the system knows witch person is next in line when you have many counted byt all of them are doing different tickets but some of them game tickets in common. This is very hard to get your head around. But in many administrative structures one counter may on 3 different favors and the counter next to it will work only 2 of the 3 favors. So as a wrap the system supports many favors all being done by a mix of counters.</p>\n<h1 id=\"links\">Links</h1>\n<p><a href=\"https://github.com/IvoRum/TicketSystem\">Ticket Flow Repo</a></p>");
	

				const frontmatter = {"title":"Ticket Flow","description":"A line management service implemented with virtual tickets ","pubDate":"Jun 09 2023","heroImage":"/projects/banner/ticketflow.png"};
				const file = "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/content/projects/Ticket-System.md";
				const url = undefined;
				function rawContent() {
					return "\r\nTicket Flow is my implementation of the waiting-in-line problem. It was developed as my bachelor's thesis. In essence, the system is a way for any business to organize their line problems. The application is applicable for various businesses and will work for many unusual scenarios.\r\n\r\n![Example 1](../../../public/projects/ticketflow/ex1.png)\r\n\r\nHer you can see a plain example of how the system is meant to be used. The example shows how a\r\nadministrative unit uses the system to simplify the line and waiting time.\r\n\r\n![Example 2](../../../public/projects/ticketflow/ex2.png)\r\n\r\nExample 2 shows the system in a more unseal manner ware the user picks a move that they what to watch and is directed to the right auditorium.\r\n\r\n![Flow 1](../../../public/projects/ticketflow/flow1.png)\r\n\r\nIn this flow diagram is shown how a typical user experience is conducted.\r\n\r\n![Flow 2](../../../public/projects/ticketflow/flow2.png)\r\n\r\nThe second flow shows how the system is used by the Administrator and the process of creating a new type of ticket.\r\n\r\n![Implementation](../../../public/projects/ticketflow/impl.png)\r\n\r\nIn the diagram is shown how the system is implemented as a many-to-many node system of inner connected favors and ticket types. And how the system knows witch person is next in line when you have many counted byt all of them are doing different tickets but some of them game tickets in common. This is very hard to get your head around. But in many administrative structures one counter may on 3 different favors and the counter next to it will work only 2 of the 3 favors. So as a wrap the system supports many favors all being done by a mix of counters.\r\n\r\n# Links\r\n\r\n[Ticket Flow Repo](https://github.com/IvoRum/TicketSystem)\r\n";
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
