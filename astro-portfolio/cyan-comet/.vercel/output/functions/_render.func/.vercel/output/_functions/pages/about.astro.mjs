import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CzNe6w_R.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from '../chunks/BlogPost_DKDu_JRh.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "About Me", "description": "Lorem ipsum dolor sit amet", "pubDate": /* @__PURE__ */ new Date("August 08 2021"), "heroImage": "blog/blog-placeholder-about.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Short summary</h1> <p>
I'm Ivaylo Rumenov, a programmer who started this
    journey after finishing high school. I first learned C
    and C++ at university and worked as an intern in a
    factory, programming robots like Kuka and Fanuc. Wanting
    to tackle more complex challenges, I then focused on
    Java, and gained experience as a system administrator
    and web programmer at DXC. I also participated in a DXC
    hackathon, where I developed a digital ticket system and
    won the competition. Currently, I'm completing my
    master's degree in Computer Science while working at
    DXC.
</p> <h1>Full story</h1> <p>
Hello to whoever is reading this. My name is Ivaylo
    Rumenov, and essentially, I'm a programmer. I started my
    journey to become a programmer after finishing high
    school. Before that, I had no idea what a programming
    language was or how to use it. However, school taught me
    discipline, and I began my journey to become a
    programmer.
</p> <p>
When I started university after school, I learned C and
    C++, as per the university standards, and decided to
    work as an intern in a factory, programming and
    automating robots. The robots I had the pleasure of
    working with were Kuka, Panasonic, and Fanuc. I spent
    two summers in total working at the factory, learning
    everything there is to know about factory automation.
    However, I decided that the field of automation was very
    limiting and not for me, as I craved complex algorithms.
</p> <p>
During my third semester at university, I focused on
    learning Java from front to back and everything about
    object-oriented programming. That summer, I worked as a
    system administrator for a small local business. After
    the summer ended, I landed my first web programming
    internship at DXC. That internship shaped me into the
    programmer I am today—hardworking and intense are just
    some of the words to describe the experience.
</p> <p>
After the internship ended, I decided to enter a big
    hackathon organized by DXC and my university, along with
    two of my friends. However, my friends dropped out after
    the second week, leaving me with a project meant for
    three people. But I did not falter and continued
    working. Along the way, I was tremendously supported by
    my two mentors, Zhivka Kotomanova and Nedko Nikolov. In
    those two months, I created a Ticket System for
    organizing lines using digital tickets that you can
    draft from your phone. You can read more about the
    project in the Projects tab under 'Ticket System.'
    Simultaneously, I attended university and all the
    lectures. At the end of the two months, I was pronounced
    the winner of the hackathon. After winning the
    hackathon, I was offered a place on the DXC team and
    have been working with them to this day.
</p> <p>
At the moment, I'm finishing up my master's diploma and
    thesis in Computer Science.
</p> ` })}`;
}, "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/pages/about.astro", void 0);

const $$file = "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
