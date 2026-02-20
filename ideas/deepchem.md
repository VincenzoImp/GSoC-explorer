# DeepChem — Project Ideas

**Source:** https://github.com/deepchem/deepchem/discussions/4703
**Scraped:** 2026-02-20T11:48:56.944523

---

-

|
We have a lot of newcomers coming onto here. Welcome to the community! I am scoping out potential projects for GSoC 2026 (remember we have to apply to get in, so no guarantee DeepChem will be selected yet). Here are some tentative project directions (I will update this forums post as we get new ideas): **Symbolic machine learning**
**Description**: We want to implement a symbolic regression capability in PyTorch that we can use in DeepChem (we prefer not to call to a Julia backend like PySR). Think of something like[https://arxiv.org/abs/2305.01582](https://arxiv.org/abs/2305.01582)except implemented in PyTorch.
**Skills Required**: PyTorch experience, some mathematical background
**Expected Outcomes**: (1) A robust implementation of a symbolic regression system using PyTorch within DeepChem, (2), Comprehensive benchmarks comparing the proposed system against standard tools like PySR, .
**Potential Mentors**: Aryan, Shreyas, Bharath
**Expected Size**: Medium
**Expected Difficulty**: Medium**MLIP support**
**Description**: Implement a MLIP model as a TorchModel in DeepChem. Make sure to leverage existing deepchem equivariance tools and not to just call out to an external framework. For reference see,[https://github.com/instadeepai/mlip](https://github.com/instadeepai/mlip), but we want to do a full implementation in pytorch
**Expected Outcomes**: (1) A robust implementation of a MLIP such as Nequip or MACE using PyTorch within DeepChem leveraging DeepChem's existing equivariant architecture, (2), Comprehensive benchmarks testing the MLIP on standard tests like force correctness or stability of small molecular dynamics simulations.
**Skills Required**: PyTorch, some mathematical background
**Potential Mentors**: Jose
**Expected Size**: Medium or Large
**Expected Difficulty**: Hard**LLM support for 7B models in DeepChem**
**Description**: Make a Olmo model in DeepChem[https://huggingface.co/allenai/OLMo-7B](https://huggingface.co/allenai/OLMo-7B)using the`HuggingFaceModel` wrapper in DeepChem. Should be able to train/run inference with Olmo. Make sure you support the ability to do generation, regression, and classification and have the ability to continue pretraining on molecular data.
**Expected Outcomes**: (1) A robust implementation of Olmo in DeepChem using the`HuggingFaceModel` wrapper. (2) Demonstration of how to do fine-tuning for classification/regression/generation and (3) the ability to perform additional pretraining on molecular datasets.
**Skills Required**: HuggingFace, PyTorch
**Potential Mentors**: Riya, Harindhar
**Expected Size**: Medium or Large
**Expected Difficulty**: Medium**Implement RFDiffusion, RFDiffusion-2**
**Description**: Implement RFDiffusion/RFDiffusion2 or other protein design models in DeepChem. Implementations should be end-to-end in PyTorch and interface with standard DeepChem abstractions such as TorchModel and DeepChem datasets
**Expected Outcomes**: (1) A clean implementation of RFDiffusion/RFDiffusion2 in DeepChem using torch model. Should leverage existing equivariance primitives. (2) Benchmarking of the model on standard protein generation tests/tasks to validate performance.
**Skills Required**: PyTorch, some background in biology and mathematics
**Potential Mentors**: Rishi, Jose, Bharath
**Expected Size**: Medium or Large
**Expected Difficulty**: Hard**Improve DFT support in DeepChem**
**Description**: DeepChem has preliminary density functional theory support ([https://arxiv.org/abs/2309.15985](https://arxiv.org/abs/2309.15985)). Build on this! Can you solve new systems, make this scale better, implement other xc-functions? Can you model more complex systems like reactions?
**Expected Outcomes**: (1) Add a new concrete functionality to DeepChem's DFT support. For example, implement a new XC-functional. You may suggest reasonable alternatives (2) Benchmark this new capability on an appropriate choice of system and validate against existing DFT tools like GPAW or PySCF.
**Skills Required**: PyTorch, some background in chemistry or quantum mechanics
**Potential Mentors**: Rakshit, Aryan, Bharath
**Expected Size**: Small, Medium, or Large
**Expected Difficulty**: Medium**Improve materials machine learning in DeepChem**
**Description**DeepChem has simple crystal graph convolutions and lattice adsorption model support from a few years ago. Test these models on real systems and improve them. We encourage you to explore generative models such as[https://arxiv.org/abs/2110.06197](https://arxiv.org/abs/2110.06197). Possibly implement new papers from the last few years such as MACE. Please make sure to do implementations in DeepChem using standard tools like TorchModel.
**Expected Outcomes**: (1) Implement a new model for materials machine learning such as MACE or Crystal Diffusion Variational Autoencoders in DeepChem using TorchModel. Please leverage DeepChem's existing equivariance utilities as needed. (2) Benchmark this system on a suitable scientific dataset.
**Skills Required**: PyTorch, some background in materials science
**Potential Mentors**: Aryan, Bharath
**Expected Size**: Medium or Large
**Expected Difficulty**: Medium**Single Cell and DNA Foundation Models**
**Description**: Implement a single cell or DNA foundation model in DeepChem. Using the existing ChemBERTa and MolFormer models as a guide. I.e, use HuggingFace as a backend, but make sure to integrate fully with DeepChem pretraining and fine-tuning infrastructure. Also need to inherit from TorchModel and DeepChem datasets
**Expected Outcomes**: (1) Implement a single cell or DNA foundation model in DeepChem leveraging`HuggingFaceModel` (2) Implement tokenizers or other needed utlities in DeepChem. (3) Benchmark this model on a suitable dataset.
**Skills Required**: HuggingFace, PyTorch
**Potential Mentors**: Rishi, Harindhar
**Expected Size**: Medium or Large
**Expected Difficulty**: Medium**Differentiable FEM, FVM**:
**Description**: Implement a differentiable finite element method or finite volume method in DeepChem. Here are couple potential references[https://arxiv.org/abs/2506.18427](https://arxiv.org/abs/2506.18427),[https://arxiv.org/abs/2307.02494](https://arxiv.org/abs/2307.02494). Make sure to benchmark against standard FEM/FVM solvers. Also make sure to use standard DeepChem abstractions such as TorchModel and deepchem datasets.
**Expected Outcomes**: (1) Implement a finite element method (or finite volume method) as a well designed utility function. This must use PyTorch and be end-to-end-differentiable (2) Provide an implementation of a mesh datastructure for use in the finite element method. (3) Run benchmarks to demonstrate differentiability.
**Skills**: PyTorch, numerical methods
**Potential Mentors**: Rakshit, Abhay
**Expected Size**: Medium or Large
**Expected Difficulty**: Hard**Robust Bi-directional Translation Between SMILES and IUPAC Nomenclature**
**Description**: Accurate conversion between systematic IUPAC names and SMILES strings is a fundamental requirement for many chemistry-AI workflows. While current state-of-the-art models like Claude show promise in understanding chemical structures, they are prohibitively expensive for processing millions of molecules in research databases. Furthermore, general-purpose models often lack the necessary precision for complex chemical structures, frequently hallucinating names or failing to correctly interpret stereochemistry and complex ring systems. This project seeks a robust and scalable solution for the bi-directional translation of these identifiers. This is an open-ended challenge where contributors are encouraged to propose and evaluate various architectures. (Potential directions include sequence-to-sequence (Seq2Seq) transformers, specialized graph-to-string architectures, or hybrid rule-based and machine learning approaches.) The primary focus is on achieving high chemical fidelity and computational efficiency compared to proprietary frontier LLM models.
**Expected Outcomes**: (1) A robust implementation of a SMILES-to-IUPAC and IUPAC-to-SMILES translation system within DeepChem, (2), Comprehensive accuracy benchmarks comparing the proposed solution against existing tools and general-purpose LLMs, (3) Support for a wide range of chemical entities, including those with complex branching and stereocenter definitions, (4) A pre-trained model or set of weights available for the DeepChem community.
**Skills Required**: Strong Python programming skills, Experience in machine learning, particularly sequence modeling or natural language processing (NLP), Knowledge of cheminformatics tools such as RDKit, OpenBabel, or PubChem APIs, Understanding of the rules governing IUPAC nomenclature and SMILES syntax.
**Difficulty**: Medium to Hard
**Potential Mentors**: Shreyas, Bharath
If you are looking to apply this year, please start scoping out these directions. The more work you do up front, the more likeley we will pick you! I will restart office hours in limited format by the start of next year once fully back from paternity leave (at least 1 day a week)
This post is mirrored on |

Beta
Was this translation helpful?
[Give feedback.](https://github.com)

## Replies: 9 comments

-

|
Hii sir I’ve chosen to focus on two of the proposed directions: 7B LLM support in DeepChem and RFDiffusion / protein design models. I know the org selection results aren’t out yet, but I wanted to share my interest early. I’m already looking through the relevant DeepChem abstractions and the OLMo and RFDiffusion codebases so I can be ready with a concrete, well-scoped proposal if DeepChem is selected. Looking forward to contributing if things move forward. |

Beta
Was this translation helpful?
[Give feedback.](https://github.com)

-

|
Hi |

Beta
Was this translation helpful?
[Give feedback.](https://github.com)

-

|
Hi |

Beta
Was this translation helpful?
[Give feedback.](https://github.com)

-

|
Hi I’m planning to explore a small DeepChem native prototype, likely starting with a minimal HuggingFace Model integration, and open an exploratory PR to get familiar with the codebase If there are any design constraints or suggested entry points you’d recommend, I’d be happy to take those into account. Looking forward to contributing and learning from the process. |

Beta
Was this translation helpful?
[Give feedback.](https://github.com)

-

|
Hi I am very interested in the I am a Mechanical Engineering graduate with extensive experience in structural and thermal simulations (ANSYS/ABAQUS), which now made me curious about the formulas behind it. Now I've found myself here researching FEM formulations on DeepCharm. This fall, I will also be starting my Master's in Advanced Mechanical Engineering and Robotics in Japan (as a MEXT scholar), with a research focus on Embodied AI. I view differentiable physics as the key to bridging the sim-to-real gap, specifically for co-optimizing physical morphology alongside control policies. To understand the mathematical and software challenges involved in integrating FEM with automatic differentiation, I have built a proof-of-concept suite from scratch using PyTorch: Repository Branch --> In this repository, I implemented: - 1D Poisson Solver: Manual assembly of stiffness matrices and load vectors using the weak formulation (Galerkin method).
- Inverse Heat Conduction: A differentiable simulator that recovers thermal conductivity from noisy measurement data via gradient descent.
- 2D Differentiable Mesh: A triangular mesh generator where node coordinates are learnable parameters, optimized for element quality (aspect ratio) and area conservation.
The code includes comprehensive unit tests (pytest) and follows DeepChem's contribution guidelines (flake8/mypy). I would welcome any feedback on this implementation approach to understand how I can improve myself for the upcoming project. Best regards, |

Beta
Was this translation helpful?
[Give feedback.](https://github.com)

-

|
Hi I am deeply interested in -
Single Cell and DNA Foundation Models support in DeepChem : -
Improve materials machine learning in DeepChem
I have more than 3 years of experience in training and developing Foundational models. I would love to make this support for DNA Foundational model in DeepChem. It would very well fit into my area of expertise just applied to a new field. I have previously worked in ML Research roles at Adobe and YC startups. Also I have helped in developed foundation models in diffusion space before which have been accepted at top conferences like ICLR and WACV. Currently I also have a first author paper under review in ICML 2026. So this is something which directly falls under something I am tremendous expertise it. I will try to start with the implementation of "Crystal Diffusion Variational Autoencoders in DeepChem using TorchModel" : to see what are the technical caveats in this. Thank you |

Beta
Was this translation helpful?
[Give feedback.](https://github.com)

-

|
Hi I’m very interested in the Single Cell Foundation Models direction for GSoC 2026. I have experience working with PyTorch and transformer-based models, as well as single-cell RNA-seq data. I’ve been reviewing DeepChem’s HuggingFaceModel and TorchModel abstractions to understand how pretraining and fine-tuning workflows are structured within DeepChem. I’m particularly interested in exploring how a single-cell foundation model could be integrated cleanly using the existing HuggingFaceModel wrapper while aligning with DeepChem’s Dataset and TorchModel APIs. I plan to begin with small contributions around the HuggingFace integration to familiarize myself with DeepChem’s review and CI process before drafting a detailed proposal. Looking forward to contributing. Cheers, |

Beta
Was this translation helpful?
[Give feedback.](https://github.com)

-

|
Hey Regards |

Beta
Was this translation helpful?
[Give feedback.](https://github.com)

-

|
Hi mentors , I’m Utkarsh, a student contributor interested in the LLM support for 7B models / OLMo in DeepChem GSoC 2026 project. I’ve already started contributing to DeepChem and recently opened this PR fixing HuggingFace checkpoint saving issues and HF tests: 👉 PR: I’m interested to work specifically on the OLMo + HuggingFaceModel integration project, and I’ve begun reading hf_models.py, ChemBERTa, and the TorchModel checkpoint flow to understand the current architecture. I’d really appreciate your guidance on: What would be the best first technical milestone for OLMo integration? Are there any existing design expectations or pitfalls I should be aware of? Would you recommend starting with inference support first, or classification/regression heads? |

Beta
Was this translation helpful?
[Give feedback.](https://github.com)
