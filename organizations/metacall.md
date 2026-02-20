# MetaCall

> Simplifying the embedding of programming languages

**Technologies:** python, c++, rust, nodejs, docker
**Topics:** cloud, polyglot, faas, languages, ffi
**Website:** https://metacall.io
**Ideas:** https://github.com/metacall/gsoc-2026
**GSoC Page:** https://summerofcode.withgoogle.com/programs/2026/organizations/metacall

## Description

When working with different technologies and developers of different programming languages, the productivity of the entire team worsens due to the lack of interoperability and communication between them. If the developers need two technologies which are written in different programming languages, for instance, a C/C++ library called from NodeJS, the team usually needs to port to one of the two languages or write a wrapper around them. Maintaining a port of a library or the plumbing code is frequently error-prone, time-consuming, and does not add any value to the final product.

The main objective of MetaCall is to provide a transparent interoperability in both ways, no matter what language you are using, so you feel like you are using a library written in the same language but in fact, it may be written in C, NodeJS or any other language.

MetaCall currently provides a mechanism to introspect the types and function signatures, which allows us to provide this type info to the caller language. You can have type safety and at the same time avoid boilerplate in both directions.

It addresses the main shortcomings of embedding independent languages separately. Having a common implementation with a plugin architecture allows you to implement newer languages without rewriting more code. With a single solution you get C#, Ruby, Python or any other language you prefer. We can improve the core continuously and add new languages.

Finally, we are using the polyglot runtime in cloud computing so we take advantage of the interoperability capabilities and allow to build complex polyglot distributed systems with ease. It is possible to build monolithic and mono-repo projects that can be distributed and scaled separately through our Function as a Service built on top of MetaCall, allowing the developer to maximize the productivity without the need of DevOps plumbing or thinking about intercommunication protocols and architectural details.

