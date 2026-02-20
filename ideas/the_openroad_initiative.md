# The OpenROAD Initiative — Project Ideas

**Source:** https://docs.google.com/document/d/1X6xxUonxgEQ_iD5G5vFp2ZOH1vbkRSspEdYrpSf4khE/edit?usp=sharing
**Scraped:** 2026-02-20T12:04:23.180286

---

GSoC 2026 ORI Projects

ORI will offer 4–5 well-scoped GSoC 2026 projects focused on the growth, strengthening, and long-term sustainment of OpenROAD across the ORI ecosystem.

Each project will be clearly defined with measurable goals and outcomes, prioritizing direct contributions to the OpenROAD codebase, along with learning, training, tutorials and high-quality documentation.

Mentorship will be provided by experts drawn from across the ORI ecosystem, including Google, PII, ASU, Brown University, and other contributing partners.

___PROJECT_TITLE_HERE___

Topics: Docker, GitHub Actions, Linux/macOS/Windows development, shell scripting

Skills: DevOps, Containerization, Cross-Platform Development, CI/CD

Difficulty: Easy/Medium/Hard

Size: Small (90 hours)/ Medium (175 hours)/ Large (350 hours)

Mentor: _MENTOR1_, _MENTOR2_

Overview

- Abc

Goals

- Asd

Deliverables

- Asd

Topics: Software installation, technical documentation, chip design basics

Skills:

Difficulty: Easy

Size: Medium

Mentor: Jack, Ethan

Overview

Goals

Deliverables

Topics: EDA Tooling

Skills:

Difficulty: Hard

Size: Hard (350 hours)

Mentor: (Google), Mehdi Saligane

Overview

- Extend OpenROAD's Unified Power Format (UPF) support beyond basic power domain recognition to include comprehensive UPF standard parsing, validation, and multi-power domain design checks for advanced low-power design enablement.

Goals

- Implement full UPF 2.1/3.0 standard parsing for advanced constructs beyond basic create_power_domain
- Add support for multiple power switches per domain (currently limited to one)
- Implement comprehensive validation checks for isolation strategies, level shifters, and power switch configurations
- Add documentation for the currently empty
[limitations](https://www.google.com/url?q=https://github.com/The-OpenROAD-Project/OpenROAD/blob/5e8f15c0/src/upf/README.md%23limitations&sa=D&source=editors&ust=1771589062870161&usg=AOvVaw1_ARp9jHvcwUdLVaHTqGyD)section

Deliverables

- Enhanced UPF parser supporting advanced commands (supply nets, supply ports, power states)
- Validation framework checking UPF rule compliance (e.g., proper isolation cell placement, level shifter requirements)
- Comprehensive test suite with multi-voltage designs demonstrating power domain interactions
- Updated documentation with examples and resolved limitations section

Topics: EDA Tooling

Skills:

Difficulty: Hard

Size: Hard (350 hours)

Mentor: (Google)

Overview

- Complete the migration from CMake to Bazel as the primary build system to provide hermetic builds, better scalability, improved caching, and enhanced developer productivity.

Goals

- Achieve feature parity between Bazel and CMake build systems
- Migrate all tool modules currently using CMake to Bazel build definitions
- Implement platform-specific configurations for cross-compilation support
- Ensure all regression tests pass under Bazel
- Burn down the
[remaining known Github Issues](https://www.google.com/url?q=https://github.com/The-OpenROAD-Project/OpenROAD/issues?q%3Dis%253Aissue%2520state%253Aopen%2520label%253Abazel-conversion-must&sa=D&source=editors&ust=1771589062874758&usg=AOvVaw1pSBnnNFuTPu40rkz2m958)blocking the migration.

Deliverables

- Complete Bazel BUILD files for all source modules replacing CMakeLists.txt functionality
- Migration guide documenting the transition from CMake to Bazel workflows
- CI/CD pipeline updates utilizing Bazel's caching and remote execution capabilities
- Performance comparison report showing build time improvements
- Proposed deprecation plan for CMake build system

Topics: EDA Tooling

Skills:

Difficulty: Hard

Size: Hard (350 hours)

Mentor: (Google)

Overview

- Migrate OpenROAD's parallelization framework from OpenMP to Kokkos to enable portable performance across multi-core CPUs, GPUs, and heterogeneous architectures for compute-intensive placement and routing operations.

Goals

[Finish the integration of the Kokkos library](https://www.google.com/url?q=https://github.com/The-OpenROAD-Project/OpenROAD/pull/5352&sa=D&source=editors&ust=1771589062878370&usg=AOvVaw2NmSABqWTWv9MGfSzPVKYL)into OpenROAD, along with Bazel build support.- Replace OpenMP #pragma omp parallel for directives with Kokkos parallel patterns
- Enable GPU acceleration for performance-critical algorithms in global placement and detailed routing
- Implement Kokkos Views to replace raw pointer-based data structures for better memory management
- Create abstraction layer allowing runtime selection of execution spaces (CPU/GPU)

Deliverables

- Build system integration with GPU backend support (CUDA)
- Kokkos-based implementation of global placement bin operations and density calculations
- Kokkos-based parallelization of detailed routing worker processing
- Performance benchmarking suite comparing OpenMP vs. Kokkos (CPU) vs. Kokkos (GPU) execution
- Developer documentation on Kokkos programming patterns for future contributors

Topics: EDA Tooling

Skills:

Difficulty: Hard

Size: Hard (350 hours)

Mentor: (Google)

Overview

- Enhance the Resizer module’s optimization capabilities by implementing advanced buffering strategies, multi-objective optimization (power/area/timing trade-offs), and/or machine learning-guided transform selection to improve timing closure quality and runtime.

Goals

- Implement adaptive buffering algorithms that consider congestion and routability
- Add power-aware resizing with dynamic voltage threshold (Vt) swapping optimization
- Enhance the arithmetic module replacement framework with more architecture variants
- Implement ML-based heuristics to predict which transforms will be most effective for specific violations

Deliverables

- Proposed improvements
- Benchmark results showing QoR improvements on established open source designs (TNS, WNS, area, power metrics)
- Profiling and optimization reducing repair_design and repair_timing runtime

OpenROAD - New resizer transformations

Topics: EDA tool development

Skills: C++ programming, algorithm design, basic knowledge of circuit theory

Difficulty: Hard

Size: Medium (175 hours)

Mentor: Martin Povišer, Jonas Gava

Overview

- OpenROAD’s Resizer tool is a design optimizer which autonomously carries out targeted edits with the goal of improving Quality of Results and to satisfy design rules.
- The tool internally employs a library of available “moves”. Each is a localized transformation which can optimize the design while keeping the design function intact. An example of a move is buffer gate insertion, swapping the inputs on an AND gate, or adjusting the drive strength of a gate. Each move comes with heuristic criteria for its application.
- The contributor will be tasked with implementing new moves in C++ and evaluating their performance.

Goals

- Work out a proposal for one or more new moves in discussion with mentors who can provide suggestions.
- Implement said moves in C++, evaluate their performance on the provided design suite and analyze cases where enabling new moves led to design degradation. Adjust the implementation based on findings.

Deliverables

- One or more accepted pull requests against the OpenROAD repository with move implementation
- Data on move performance to help the OpenROAD team make a decision on whether to enable the new move by default, and at what stages in the flow

Topics: DevOps, Containerization, Cross-Platform Development, CI/CD, Testing, Quality Assurance, CI/CD, Performance Engineering, Reliability

Skills: Docker, GitHub Actions, Linux/macOS/Windows development, shell scripting, Python, pytest, async programming, performance benchmarking, profiling

Difficulty: Medium

Size: Medium (175 hours)

Mentor: Jack Luar, Chaitanya Gambali

Overview

- Make OpenROAD MCP easily accessible through containerization and cross-platform support. Currently, setup requires manual installation. This project creates production Docker images and validates the tool across all major platforms. Build comprehensive testing infrastructure to ensure production readiness for v1.0 release. The project currently has basic tests but needs validation against real chip design workflows, performance benchmarking, and reliability testing at scale.
- Frontend Stability

Goals

- Create optimized multi-stage Dockerfiles with proper layer caching
- Publish images to GitHub Container Registry (GHCR) with automated CI/CD
- Validate and support Windows/WSL2 deployment
- Write comprehensive deployment documentation for various use cases

Deliverables

- Production-ready Docker images (optimized for size and build time)
- GitHub Actions workflows for automated GHCR publishing
- Cross-platform validation test suite (Ubuntu, macOS, Windows/WSL2)
- Deployment guides and troubleshooting documentation
- Implement integration tests using real ORFS flows (complete RTL-to-GDSII)
- Create performance benchmarking framework with historical tracking
- Build load testing infrastructure (validate 50+ concurrent sessions)
- Add memory profiling and leak detection
- Integration test suite covering major ORFS flows
- Performance benchmarking framework with metrics tracking over time
- Load testing infrastructure with automated regression detection
- Memory profiling tools integrated into CI pipeline

Topics: Workflow Automation, Design Space Exploration, Algorithms, Distributed Systems, Hyperparameter Optimization

Skills: Python, async programming, graph algorithms, optimization, chip design fundamentals

Difficulty: Hard

Size: Large (350 hours)

Mentor: Jack Luar, Kevin Guan

Overview

- Build a workflow orchestration system that automates complex chip design flows and enables intelligent design space exploration. Currently, designers run parameter sweeps manually or with fragile scripts. This project makes automated exploration a first-class feature.

Goals

- Create API for defining design flows as directed acyclic graphs (DAGs)
- Implement intelligent scheduler with dependency resolution and resource management
- Build parameter exploration engine (grid search, random search, Bayesian optimization)
- Add checkpoint/resume functionality for long-running designs
- Enable parallel execution across multiple sessions

Deliverables

- Flow definition API with DAG-based workflow specification
- Task scheduler with dependency tracking and resource allocation
- Parameter exploration engine with multiple optimization strategies
- Checkpoint/resume system with failure recovery
- Parallel execution framework
- End-to-end examples demonstrating design space exploration

Topics: Generative AI, LLM Agents, EDA Tooling, Prompt Engineering

Skills: Python, LangGraph/LangChain, LLMs

Difficulty: Medium

Size: Medium (175 hours)

Mentor: Jack Luar, (Pal/Avi)

Overview

- Enhance ORAssistant's RAG architecture to support complex, multi-step reasoning. Currently, ORAssistant retrieves documentation based on single queries. This project will build on existing retrieval tools, and implement a planning agent that can break down ambiguous debugging requests into actionable workflows. Additionally, this project aims to bridge the gap between the LLM and the OpenROAD flow configuration, enabling Makefile generation and integrating the RAG system with an optimizer to utilize historical data for smarter design space exploration.

Goals

- Implement a Planning Agent: Develop an agent that can decompose complex, high-level user requests (e.g., "Analyze timing, then suggest a fix") into a sequential plan of action involving retrieval, analysis, and tool execution.
- Automated Makefile & Flow Config Generation: Create a specialized module that generates correct, syntax-verified Makefiles or config.mk files to set up ORFS runs based on user PPA constraints.
- RAG-Optimizer Integration: Implement a system where the RAG module can be used to fetch optimal hyperparameters from documentation or past logs for smarter design space exploration.
- Generate context from codebase to customize commands

Topics: EDA tool development

Skills: C++ programming, algorithm design, knowledge on global routing

Difficulty: Hard

Size: Hard (350 hours)

Mentor: [Eder Monteiro](mailto:emrmonteiro@precisioninno.com)

Overview

- OpenROAD’s global routing tool has two solver options, FastRoute and CUGR. FastRoute is the first global router integrated into OpenROAD, and has had several updates and enhancements over the years.
- One of the main features implemented on FastRoute was the ability to perform incremental updates on selected nets. This is important when repairing timing violations, where changes are made to a subset of the nets on the design, and only the modified nets should be rerouted.
- Recently, CUGR was added as an option to FastRoute, but it lacks some major features compared to FastRoute, including incremental capabilities.

- The contributor will be tasked with the implementation of the incremental mode on CUGR. Incremental FastRoute can be used as a reference for the implementation.

Goals

- Study CUGR data structures to understand how incremental capabilities can be introduced to the tool.
- Design a solution for the problem, describing what data structures will be added/modified.
- Implement the solution in C++, followed by thoroughly testing for correctness, efficiency and quality of results.

Deliverables

- Design documentation for the proposed solution.
- One or more accepted pull requests against the OpenROAD repository with the incremental CUGR implementation.
- Data on efficiency, correctness and results of the solution to show the quality of the incremental CUGR tool.

Topics: EDA Tooling, Generative AI

Skills: familiarity with tool EDA verification workflow, Python, Large Language Models

Difficulty: Medium

Size: Large (350 hours)

Mentor: Lenny Guo, Yara Al-Shorman

Overview

- OpenROAD Agent is an LLM that integrates directly with OpenROAD. It enables real-time script generation with error detection and correction to help automate the chip design and verification process. OpenROAD-Agent's current verification functionality is limited to generating Python scripts for a small subset of the verification workflow.
- This project aims to expand the scope of OpenROAD-Agent to fully automate all OpenROAD verification modules, including: Design for Test (DFT), Static Timing Analysis (STA), Layout versus Schematic (LVS), Design Rule Checking (DRC), and IR Drop Analysis.

Goals

- For each verification module (DFT, STA, LVS, DRC, IR Drop Analysis), enhance OpenROAD-Agent's RAG database with OpenROAD verification modules and example scripts and templates.
- Test correctness and performance using open-source datasets, such as the EDA corpus.
- Upgrade OpenROAD-Agent with more advanced agentic models specialized in code generation and programming to improve the percentage of first-pass successful script generations.

Deliverables

- Enhanced OpenROAD-Agent with the automated verification workflow for all five verification modules.
- Data on the performance of the enhanced OpenROAD-Agent as it relates to each of the five verification modules to showcase quality.

Project Title: Chipathon Knowledge Hub & RAG Chatbot for OpenROAD-Based Flows

Topics: IEEE SSCS Chipathon, Documentation, Developer Experience, Knowledge Management, Generative AI (RAG), EDA Tooling

Skills: Technical writing, Markdown, MkDocs/Docusaurus, Python, embeddings/vector search, prompt engineering, GitHub Actions, basic chip design flow familiarity

Difficulty: Hard

Size: Hard (350 hours)

Mentor: Mehdi Saligane (Chipathon + OpenROAD flow repos)

Overview

- The IEEE SSCS Chipathon brings together many teams who often use OpenROAD-based flows (and related wrappers such as ORFS/OpenROAD-MCP/track-specific templates) to go from RTL to GDSII. During the competition, participants repeatedly run into the same hurdles: environment setup, tool/version mismatches, flow configuration, interpreting logs, and debugging timing/DRC/routing failures. Answers exist—but they’re scattered across GitHub repos, issues, Slack/Discord, Google Docs, and past Chipathon guidance.

Goals

- This project creates a central Chipathon Knowledge Hub and an “Ask Chipathon” chatbot that retrieves and cites canonical Chipathon/OpenROAD sources, helping participants quickly self-serve and reducing mentor/maintainer load—while making it clear that OpenROAD is the backbone of the Chipathon flow.

Deliverables

- A public, well-structured Chipathon Knowledge Hub site (MkDocs or Docusaurus) organized around:

- Getting Started (track-oriented)
- OpenROAD flow fundamentals
- Reference flows/templates (OpenROAD/ORFS/OpenROAD-MCP as applicable)
- Debugging playbooks (timing/DRC/routing/performance)
- Submission artifacts + checklists
- FAQ + “Seen During Chipathon” canonical answers

- A standardized Chipathon artifact map explaining where to find logs/reports/DEF/GDS/metrics and how to interpret common OpenROAD outputs.
- A contributor workflow and style guide so mentors can add or update answers during the event.
- An “Ask Chipathon” RAG chatbot (CLI required; minimal web UI optional) that:

- answers Chipathon/OpenROAD flow questions with citations to exact doc sections and/or canonical GitHub threads
- supports “related answers” / “answered before” suggestions via similarity search
- includes safe fallback behavior (asks for specific logs or points to triage steps when retrieval confidence is low)

- Automated indexing and refresh via GitHub Actions (rebuild on doc updates; optional scheduled refresh during Chipathon season).
- A small evaluation harness (30–60 Chipathon-style questions) with basic regression checks for:

- citation coverage
- groundedness (low hallucination rate)
- “no-answer” correctness when evidence is missing

- A maintainer handoff guide (how to curate sources, label canonical answers, and extend the knowledge base).
