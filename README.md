# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Process

I picked this profile card challenge initially because I wanted something small, simple and self-contained with which to finally get to grips with [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

### Decide the structure

Right at the start I got sidetracked thinking about the best way to structure the HTML. Generally speaking I like to begin any task by parsing content out of the designs and structuring it as I would in, say, an MS Word doc. That usually gives me some kind of insight into the headings hierachy and what kind of semantic tags might be appropriate as root elements.

That works fine for document-like web-content, but can often be tricky with app-like components. I may make a video about the different options I considered and the thought process I followed to end up where I did, but I'm done for the moment.

### Approximate the design

I have access to the figma files, but I deliberately refrained from using them for this challenge. I wanted to see how close I could get just from the .jpg images and style guide that come with the free version.

I **think** I've done a pretty good job, though it's a painstaking process! much quicker and easier to extract values directly from the design artefacts!

At some point I'll probably check them out and see what I got right and wrong.

### Convert to web component

I watched a bunch of youtube videos about web components - they're all more or less the same, but Brad Traversy's covers the bases pretty well.

The whole process felt a bit too much like manipulating the DOM with vanilla JS for my liking. I might do a couple more things with the native web APIs and then start looking at something like LitHTML once I'm comfortable with what it abstracts.

### Add random user data

One of the reasons I spent so long on the structure was that in addition to good semantics I wanted the component to be usable

1. in static HTML as part of a website and
2. in an web app consuming user data via an API
   I needed to prove that the component could accept generic user data without the UI breaking, so I made some calls to [randomuser.me](https://randomuser.me/).

The initial page loads with the content in the design, then updates 3 times at 5 second intervals with user data from the API.

Oh, and I chucked in some JS to generate random user stats as well.

### Useful resources

- [DesignCourse YouTube Episode](https://www.youtube.com/watch?v=mNtLjzzxGQM)
- [Traversy Media web component crash course](https://www.example.com)
- [The MDN page on web components, obvs](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [CSS tricks, for styling](https://css-tricks.com/styling-a-web-component/)
- [Digital Ocean page on named slots](https://www.digitalocean.com/community/tutorials/web-components-composing-slots-named-slots)
- [Observed attributes](https://alligator.io/web-components/attributes-properties/)
- [RandomUser.me API docs](https://randomuser.me/documentation)

## Author

- Frontend Mentor - [@markup-mitchell](https://www.frontendmentor.io/profile/markup-mitchell)
- Twitter - [@markup_mitchell](https://www.twitter.com/markup_mitchell)
