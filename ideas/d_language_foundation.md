# D Language Foundation — Project Ideas

**Source:** https://dlang.github.io/GSoC/gsoc-2026/project-ideas.html
**Scraped:** 2026-02-20T12:11:18.522487

---

# DLang GSoC 2026 Project Ideas



---

## Dcompute Vulkan Backend

# Dcompute Vulkan Backend

**Mentor:** [Nicholas Wilson](https://dlang.github.io/iamthewilsonator@hotmail.com)

| Spec | Details |
|---|---|
Difficulty Level | hard |
Project Duration | 350 hours |
Number of Contributors | 1 |
Prerequisites | Compilers (prefereably LLVM and/or DMD), C++ or D, Graphics or Compute APIs (Prefereably vulkan) |

## Description

Dcompute is a compiler extension and runtime library that currently interfaces to OpenCL and CUDA by the SPIRV and PTX backends of LLVM to generate programs that can run D code natively on GPUs.

LLVM’s SPIRV backend has recently been enhanced to be able to produce compute shaders for use with the Vulkan API for graphics and compute.

The goal of this project is to extend the LLVM D compiler (LDC) to utilise the new capabilities of the SPIRV backend to produce and run Vulkan compute shaders.

## Project Milestones

- Build LDC + LLVM with the vulkan backend enabled, become familiar with the IR accpted by the SPIRV Vulkan backend
- Add Vulkan as a backend for Dcompute to LDC (see
[this PR](https://github.com/ldc-developers/ldc/pull/4958)- add command line switches
- generate IR in the format accepted by the SRPIV Vulkan backend.
- Design a consistent ABI for the compiler and Dcompute runtime to interface to each other to launch compute shaders

- Write a dcompute runtime backend to interface to Vulkan
- Test and validate generated shaders using Vulkan

## First Step

Clone and build LDC and LLVM


---

## Separate Semantic Routines From AST Nodes

# Separate Semantic Routines From AST Nodes

**Mentor:** [Razvan Nitu](https://dlang.github.io/razvan.nitu1305@gmail.com)

| Spec | Details |
|---|---|
Difficulty Level | easy-medium |
Project Duration | 175 hours |
Number of Contributors | 1 |
Prerequisites | Familiarity with compiler organization, visitor pattern, object oriented programming |

## Description

In the DMD compiler codebase, AST nodes are defined as classes within various files. The ideal structure for these nodes is to have minimal fields and methods focused solely on field queries. However, the current state of the DMD frontend deviates from this ideal. AST nodes are laden with numerous methods that either perform or are dependent on semantic analysis. Furthermore, many AST node files contain free functions related to semantic analysis. Our objective is to decouple AST nodes from these functions.

## How to start working on this project

- Clone the compile repository - check
[this guideline](https://github.com/dlang/dmd/blob/master/CONTRIBUTING.md). - Choose an AST node file: start by selecting a file from
[this list](https://github.com/orgs/dlang/projects/41)of AST node definition files. - Examine Imports: open your chosen file and scrutinize the top-level imports.
- Isolate semantic imports: temporarily comment out one of the imports that includes semantic routines, particularly those ending in sem (e.g., dsymbolsem, expressionsem, etc.).
- Build and identify dependencies: compile DMD and observe any unresolved symbols that emerge.
- Relocate functions: shift the functions reliant on the unresolved symbols to the semantic file where the import was commented out.
- Move and test a function: select a function for relocation and ensure it functions correctly in its new location.
- Submit a Pull Request: Once you’re satisfied with the changes, create a PR that follows
[the guidelines](https://github.com/dlang/dmd/blob/master/CONTRIBUTING.md).

Check this [PR](https://github.com/dlang/dmd/pull/15755) for an illustration of the above steps.

Sometimes, more intricate solutions are required. For instance, if an overridden method in an AST node calls a semantic function, it can’t be simply relocated. In these cases, using a visitor to collate all overrides, along with the original method, into the appropriate semantic file is the way forward. A notable instance of this approach is detailed in [this pull request](https://github.com/dlang/dmd/pull/15782).

Other complex scenarios may arise, especially when dealing with AST nodes that interact with the backend. Finding solutions to those will be the fun part of the project.

This project helps advance the development of the compiler library by creating a clear separation between compilation phases.

This project is ideal for someone that has no prior experience with real-life compilers but wants to start by doing valuable work.

Recently, progress has been made on this project, so in case the dependency is broken, we can advance by improving the dmd as a library project, which directly depend on the completion of this project.


---

## Performance Regression Publisher

# Performance Regression Publisher

**Mentor:** [Dennis Korpel](https://dlang.github.io/dkorpel@gmail.com)

| Spec | Details |
|---|---|
Difficulty Level | easy-medium |
Project Duration | 175 hours |
Number of Contributors | 1 |
Prerequisites | Github actions, webdev, performance testing |

## Description

The D compiler currently does not have an automated performance regression test. Oftentimes pull requests that claim to improve compiler performance are being made (be it spatial or temporal). However, it’s up to the reviewer to actually believe the committer or to test things on their own. To make things simpler and more transparent, we want to implement a bot that monitors all the pull requests made to the compiler codebase and analyzes the compiler’s performance with and without the pull request.

The list of stats should include, but not be limited to:

- size of some predefined binaries (like a “hello world” program)
- compile time of popular projects
- compiler size
- runtime of test suite

Adding more performance tests, such as stress tests also falls under the scope of this project. Ideally the bot could also store a history of performance regressions within a web page.

## Project milestones:

- Analyze the best way to publish the results: it could be a GitHub action, a bot that sends data to a website. Depending on your skills and preferences, we expect you propose something and toghether we will decide what’s best.
- Implement the initial part that simply collects how long running the testing pipeline took and publishes the result.
- Decide on other metrics that need to be collected and implement them.
- Add more stress tests to the compiler testing suite.

