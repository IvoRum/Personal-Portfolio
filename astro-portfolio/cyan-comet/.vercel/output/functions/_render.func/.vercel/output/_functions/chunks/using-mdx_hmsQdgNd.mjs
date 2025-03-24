const id = "using-mdx.mdx";
						const collection = "blog_example";
						const slug = "using-mdx";
						const body = "\r\nThis theme comes with the [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) integration installed and configured in your `astro.config.mjs` config file. If you prefer not to use MDX, you can disable support by removing the integration from your config file.\r\n\r\n## Why MDX?\r\n\r\nMDX is a special flavor of Markdown that supports embedded JavaScript & JSX syntax. This unlocks the ability to [mix JavaScript and UI Components into your Markdown content](https://docs.astro.build/en/guides/markdown-content/#mdx-features) for things like interactive charts or alerts.\r\n\r\nIf you have existing content authored in MDX, this integration will hopefully make migrating to Astro a breeze.\r\n\r\n## Example\r\n\r\nHere is how you import and use a UI component inside of MDX.  \r\nWhen you open this page in the browser, you should see the clickable button below.\r\n\r\nimport HeaderLink from \"../../components/HeaderLink.astro\";\r\n\r\n<HeaderLink href=\"#\" onclick=\"alert('clicked!')\">\r\n  Embedded component in MDX\r\n</HeaderLink>\r\n\r\n## More Links\r\n\r\nTwo 🍰 is: {Math.PI * 2}\r\n\r\n- [MDX Syntax Documentation](https://mdxjs.com/docs/what-is-mdx)\r\n- [Astro Usage Documentation](https://docs.astro.build/en/guides/markdown-content/#markdown-and-mdx-pages)\r\n- **Note:** [Client Directives](https://docs.astro.build/en/reference/directives-reference/#client-directives) are still required to create interactive components. Otherwise, all components in your MDX will render as static HTML (no JavaScript) by default.\r\n";
						const data = {title:"Using MDX",description:"Lorem ipsum dolor sit amet",pubDate:"Jul 02 2022",heroImage:"/blog/blog-placeholder-5.jpg"};
						const _internal = {
							type: 'content',
							filePath: "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/content/blog_example/using-mdx.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
