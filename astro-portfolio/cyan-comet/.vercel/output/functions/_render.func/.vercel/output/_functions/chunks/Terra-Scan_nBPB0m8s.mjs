import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_CzNe6w_R.mjs';
import { a as getImage } from './_astro_assets_CyzqKUXR.mjs';
import 'clsx';

const Astro__Z24zkcC = new Proxy({"src":"/_astro/terrascnanlivedemo.B1_ZBZHr.jpg","width":1536,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/public/projects/terrascan/terrascnanlivedemo.jpg";
							}
							
							return target[name];
						}
					});

const Astro__Z17vgnn = new Proxy({"src":"/_astro/app_colers.C8JIR2dV.png","width":1190,"height":1684,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/public/projects/terrascan/app_colers.png";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/projects/terrascan/terrascnanlivedemo\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/projects/terrascan/terrascnanlivedemo.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z24zkcC, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/projects/terrascan/app_colers\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/projects/terrascan/app_colers.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z17vgnn, ...props});
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
			const html = await updateImageReferences("<p>This mobile application provides real-time insights into soil types and earthquake activity. It is powered by a robust Java Spring backend, secured with Spring Security, ensuring data integrity and protection. The backend leverages PostgreSQL for data management and PostGIS for handling geospatial data. The Android frontend, built with a Single Activity architecture using Jetpack Compose, offers a seamless and dynamic user experience with multiple views. Users can explore and analyze geospatial data interactively, with up-to-date information on soil conditions and seismic events.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/projects/terrascan/terrascnanlivedemo.jpg&#x22;,&#x22;alt&#x22;:&#x22;Live demo&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Live demo</p>\n<hr>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/projects/terrascan/app_colers.png&#x22;,&#x22;alt&#x22;:&#x22;Style Guide&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Style Guide</p>\n<h1 id=\"links\">Links</h1>\n<p><a href=\"https://github.com/IvoRum/Terra-Scan-Mobile\">Terra scan Android Repo</a></p>\n<p><a href=\"https://github.com/IvoRum/Terra-Scan-Server\">Terra scan Spring server Repo</a></p>");
	

				const frontmatter = {"title":"Terra Scan","description":"Revolutionizing mapping with real-time soil and earthquake data visualization ","pubDate":"Jul 25 2024","heroImage":"/projects/banner/terrascan.png"};
				const file = "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/content/projects/Terra-Scan.md";
				const url = undefined;
				function rawContent() {
					return "\r\nThis mobile application provides real-time insights into soil types and earthquake activity. It is powered by a robust Java Spring backend, secured with Spring Security, ensuring data integrity and protection. The backend leverages PostgreSQL for data management and PostGIS for handling geospatial data. The Android frontend, built with a Single Activity architecture using Jetpack Compose, offers a seamless and dynamic user experience with multiple views. Users can explore and analyze geospatial data interactively, with up-to-date information on soil conditions and seismic events.\r\n\r\n![Live demo](../../../public/projects/terrascan/terrascnanlivedemo.jpg)\r\n\r\nLive demo\r\n\r\n---\r\n\r\n![Style Guide](../../../public/projects/terrascan/app_colers.png)\r\n\r\nStyle Guide\r\n\r\n# Links\r\n\r\n[Terra scan Android Repo](https://github.com/IvoRum/Terra-Scan-Mobile)\r\n\r\n[Terra scan Spring server Repo](https://github.com/IvoRum/Terra-Scan-Server)\r\n";
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
