# webpack — Project Ideas

**Source:** https://docs.google.com/document/d/1Mr_IPVdbupGwmGtcvLlVqFEL8wYN_rlfHUghJ2EPBVE/edit?usp=sharing
**Scraped:** 2026-02-20T12:04:24.185909

---

Webpack - Ideas List

Google Summer of Code 2026

- Webpack: Universal Targets

Difficulty: Hard

Project Size: 350 hours

Mentors: Alexander Akait, Nitin Kumar

Introduction

This project aims to enhance the versatility of Webpack's targets. Currently, there are limitations, and a web bundle doesn't seamlessly fit into Node.js or a web worker environment. The proposal is to introduce a Universal Target that incorporates runtime code suitable for web, web worker, and Node.js. While this may increase code size slightly, the benefit is the ability to create Universal Module Definition (UMD) bundles that work seamlessly across all environments. Additionally, this enhancement facilitates sharing chunks between web and web worker environments.

Related Issue(s): [#6525](https://www.google.com/url?q=https://github.com/webpack/webpack/issues/6525&sa=D&source=editors&ust=1771589064043958&usg=AOvVaw2E8C6G7eoTIB2gps3Tl4wA)

Prerequisites

JavaScript, Node.js

- Webpack: New Documentation Website

Difficulty: Medium

Project Size: 350 hours

Mentors: Claudio Wunder, Even Stensberg, Nitin Kumar

Introduction

We’re redesigning and reworking on Webpack’s website and its documentation. This project is a fundamental work for the release of Webpack 6 and ensures we have a redesigned website, redesigned docs, updated docs with improved DevEx, UX and that is AI-friendly.

Related Issue(s): [#4](https://www.google.com/url?q=https://github.com/webpack/docs.webpack.js.org/issues/4&sa=D&source=editors&ust=1771589064045733&usg=AOvVaw36Lnlp8H0ZML7M55MfpnIO)

Prerequisites

JavaScript, CSS, HTML

- Webpack: Entry points as HTML

Difficulty: Medium

Project Size: 350 hours

Mentors: Even Stensberg, Nitin Kumar, Alexander Akait

Introduction

Webpack allows entry points to be as JavaScript but we also want to support having HTML files as entry points. When webpack internally notices an .html extension, it will automatically apply the correct bundling technique similar to [html-bundler-plugin](https://www.google.com/url?q=https://github.com/webdiscus/html-bundler-webpack-plugin&sa=D&source=editors&ust=1771589064047316&usg=AOvVaw2hnNhRQ9_FMG_RPJPdmMzf).

Related Issue(s): [#536](https://www.google.com/url?q=https://github.com/webpack/webpack/issues/536&sa=D&source=editors&ust=1771589064047648&usg=AOvVaw1g-5xzqzeaApwZ4FB2klDS)

Prerequisites

JavaScript, CSS, HTML
