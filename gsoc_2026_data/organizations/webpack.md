# webpack

> webpack is the module bundler for web projects

**Technologies:** javascript, typescript, node
**Topics:** web development, javascript, webassembly, Node.js, webpack
**Website:** https://webpack.js.org
**Ideas:** https://docs.google.com/document/d/1Mr_IPVdbupGwmGtcvLlVqFEL8wYN_rlfHUghJ2EPBVE/edit?usp=sharing
**GSoC Page:** https://summerofcode.withgoogle.com/programs/2026/organizations/webpack

## Description

webpack is THE build tool for modern web applications run on NodeJS
webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

Overview
Currently in the web, modules are not fully adopted, and therefore we need tooling to help compile your module code into something that will work in the browser. webpack champions this by not only supporting CommonJS, AMD, RequireJS module systems, but also ECMAScript Modules (ESM).

What makes webpack unique?
Extensibility webpack is built using an extensible event-driven architecture. This means that a majority of our code is Plugins that hook into a set of lifecycle events. This means that it is infinitely flexible and configurable. This architecture also lets us pivot very quickly. Plugins isolate functionality (and can even be used in your configuration), and allow us to add and drop new functionality without breaking the rest of the system.

Focused around Web Performance webpack revived a classic technique from Google Web Toolkit known as "code splitting". Code splitting let's developers write imperative instructions (as a part of their code), to split up their JavaScript bundles (at build time) into multiple pieces that can be loaded lazily.

Built in JavaScript webpack's configuration format, and architecture is all built and run on NodeJS. This means that anyone comfortable with JavaScript can break open our source code with a low level of entry to learn, contribute to, and improve.

Used at Scale webpack is used by companies like AirBnB, Microsoft, Housing.com, Flipkart, Alibaba, to build high performance, scaled web applications.

Community Owned webpack is not backed by a single organization, rather by its users, contributors, backers, sponsors, and shareholders. This means that every decision we make is for them, and them only.

