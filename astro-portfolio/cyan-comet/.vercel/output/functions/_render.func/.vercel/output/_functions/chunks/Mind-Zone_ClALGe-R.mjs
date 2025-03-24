import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_CzNe6w_R.mjs';
import { a as getImage } from './_astro_assets_CyzqKUXR.mjs';
import 'clsx';

const Astro__ZMIP1A = new Proxy({"src":"/_astro/survey.ZVp3ZvZM.PNG","width":1274,"height":869,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/public/projects/mindzone/survey.PNG";
							}
							
							return target[name];
						}
					});

const Astro__Zrk9T2 = new Proxy({"src":"/_astro/activeGames.Ck4pmHeI.PNG","width":1169,"height":757,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/public/projects/mindzone/activeGames.PNG";
							}
							
							return target[name];
						}
					});

const Astro__V4Nmz = new Proxy({"src":"/_astro/hanoi.BJjBqOly.png","width":484,"height":1076,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/public/projects/mindzone/hanoi.png";
							}
							
							return target[name];
						}
					});

const Astro__Z1hde1M = new Proxy({"src":"/_astro/jars.eSyeeaDU.png","width":490,"height":1083,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/public/projects/mindzone/jars.png";
							}
							
							return target[name];
						}
					});

const Astro__1iOWVn = new Proxy({"src":"/_astro/slider.f8GrSedR.png","width":478,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/public/projects/mindzone/slider.png";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/projects/mindzone/survey\\.PNG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/projects/mindzone/survey.PNG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZMIP1A, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/projects/mindzone/activeGames\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/projects/mindzone/activeGames.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Zrk9T2, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/projects/mindzone/hanoi\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/projects/mindzone/hanoi.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__V4Nmz, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/projects/mindzone/jars\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/projects/mindzone/jars.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1hde1M, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/projects/mindzone/slider\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/projects/mindzone/slider.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1iOWVn, ...props});
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
			const html = await updateImageReferences("<p>Mindzone is designed to support <a href=\"https://www.linkedin.com/showcase/dxc-technology-bulgaria/posts/?feedView=all\">DXC</a> representatives during various events. It engages the audience in a fun and interactive way while simultaneously collecting valuable feedback to assist the HR department. The app offers a variety of games that can be adapted to different age groups through adjustable difficulty settings. Additionally, the ability to maintain multiple survey templates allows for the selection of the most suitable one based on the audience’s profile.</p>\n<p>The application was developed as part of a <a href=\"https://www.linkedin.com/showcase/dxc-technology-bulgaria/posts/?feedView=all\">DXC</a> hackathon that spanned two months. During this time, my colleagues <a href=\"https://www.linkedin.com/in/boyan-boyanov-3b673b21a/\">Boyan Boyanov</a> and <a href=\"https://www.linkedin.com/in/darinastaevska/\">Darina Staevska</a> and I collaborated to design, build, and test the application. The front end was built using <strong>React.js</strong> with <strong>Vite</strong>, while the back end was developed with <strong>Spring Boot</strong>.</p>\n<h2 id=\"admin-interface\">Admin interface</h2>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/projects/mindzone/survey.PNG&#x22;,&#x22;alt&#x22;:&#x22;survay&#x22;,&#x22;index&#x22;:0}\"></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/projects/mindzone/activeGames.png&#x22;,&#x22;alt&#x22;:&#x22;create game&#x22;,&#x22;index&#x22;:0}\"></p>\n<h2 id=\"games\">Games</h2>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/projects/mindzone/hanoi.png&#x22;,&#x22;alt&#x22;:&#x22;towers of hanoi| 150&#x22;,&#x22;index&#x22;:0}\"></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/projects/mindzone/jars.png&#x22;,&#x22;alt&#x22;:&#x22;water jars&#x22;,&#x22;index&#x22;:0}\"></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/projects/mindzone/slider.png&#x22;,&#x22;alt&#x22;:&#x22;slider&#x22;,&#x22;index&#x22;:0}\"></p>");
	

				const frontmatter = {"title":"Mind Zone","description":"A stand application designed to support representatives during various events.","pubDate":"Mar 24 2025","heroImage":"/projects/mindzone/banner.png"};
				const file = "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/content/projects/Mind-Zone.md";
				const url = undefined;
				function rawContent() {
					return "\r\nMindzone is designed to support [DXC](https://www.linkedin.com/showcase/dxc-technology-bulgaria/posts/?feedView=all) representatives during various events. It engages the audience in a fun and interactive way while simultaneously collecting valuable feedback to assist the HR department. The app offers a variety of games that can be adapted to different age groups through adjustable difficulty settings. Additionally, the ability to maintain multiple survey templates allows for the selection of the most suitable one based on the audience's profile.\r\n\r\nThe application was developed as part of a [DXC](https://www.linkedin.com/showcase/dxc-technology-bulgaria/posts/?feedView=all) hackathon that spanned two months. During this time, my colleagues [Boyan Boyanov](https://www.linkedin.com/in/boyan-boyanov-3b673b21a/) and [Darina Staevska](https://www.linkedin.com/in/darinastaevska/) and I collaborated to design, build, and test the application. The front end was built using **React.js** with **Vite**, while the back end was developed with **Spring Boot**.\r\n\r\n## Admin interface\r\n\r\n![survay](../../../public/projects/mindzone/survey.PNG)\r\n\r\n![create game](../../../public/projects/mindzone/activeGames.png)\r\n\r\n## Games\r\n\r\n![towers of hanoi| 150](../../../public/projects/mindzone/hanoi.png)\r\n\r\n![water jars](../../../public/projects/mindzone/jars.png)\r\n\r\n![slider](../../../public/projects/mindzone/slider.png)\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"admin-interface","text":"Admin interface"},{"depth":2,"slug":"games","text":"Games"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
