# German Center for Open Source AI — Project Ideas

**Source:** https://github.com/gc-os-ai/mentoring-projects/blob/main/2026/ideas_list.md
**Scraped:** 2026-02-20T12:06:20.101424

---

The following is the list of projects participating under GC.OS umbrella in GSoC 2026.



---

## pgmpy

## Pairwise Causal Discovery Algorithms

Causal discovery methods aim to infer causal relationships among random variables from observational data. pgmpy already includes several causal discovery methods under the `causal_discovery` module. This project proposes extending that module with **pairwise (bivariate) causal discovery** algorithms.

Pairwise causal discovery focuses on a simpler interface **two variables at a time** by estimating the causal direction between a pair (e.g., `X -> Y` vs. `Y -> X`). Despite the reduced scope, the problem is often *harder* in practice because it is generally not identifiable without additional assumptions. As a result, pairwise methods typically rely on stronger constraints on the data-generating process (e.g., additive noise structure, non-Gaussianity, distributional asymmetries) than many multivariate causal discovery approaches.

The main objectives of this project are:
1. Design base classes and a consistent API similar to the current causal discvoery methods.
2. Implement an initial set of pairwise algorithms:
     - **Additive Noise Models (ANM)**: regress in both directions and test independence of residuals.
     - **Information-Geometric Causal Inference (IGCI)**: exploits asymmetries between cause and effect distributions.
     - **Linear non-Gaussian (LiNGAM-style) bivariate direction**: direction based on non-Gaussianity/independence criteria under a linear model.

**Reference:** https://www.jmlr.org/papers/volume17/14-518/14-518.pdf  
**Expected Time:** 350 hours  
**Difficulty Rating:** Medium  
**Potential Mentors:** Ankur Ankan, Nimish Purohit

## Expand Linear Gaussian Bayesian Networks

pgmpy currently provides three Bayesian Network (BN) classes designed for different variable types:

1. **Discrete Bayesian Network**: for fully discrete datasets  
2. **Gaussian Bayesian Network**: for fully continuous Gaussian datasets  
3. **Functional Bayesian Network**: for datasets containing a mix of continuous, discrete, and ordinal variables  

Each BN class has two core components:

- **Network structure**: the directed acyclic graph (DAG) defining dependencies  
- **Parameterization**: the conditional distributions associated with the structure  

At present, all three implementations share a common structural representation (they inherit from the `DAG` class), but each class defines its own parameterization and exposes a slightly different set of methods. In the longer term, pgmpy would benefit from a unified BN interface: a single BN class whose behavior is determined by the chosen parameterization (discrete, Gaussian, or functional). Since the current codebase uses three separate classes, a practical first step toward this unification is to align their capabilities and APIs.

This project focuses on improving feature parity by extending the Linear Gaussian BN functionality. Proposed tasks include:

1. **Expand simulation support for Linear Gaussian BNs**
   - Add support for **virtual evidence** during simulation.
   - Add support for **missing-data simulations** (e.g., generating samples with missingness patterns, or simulating under partially observed settings).

2. **Extend parameter learning for Linear Gaussian BNs**
   - Enhance the `fit` method to support **Bayesian estimation** (in addition to existing estimation approaches, if any).
   - Based on Bayesian estimation support, implement `fit_update` to enable **online learning** (incremental updates as new data arrives).

**Expected Time:** 350 hours  
**Difficulty Rating:** Hard  
**Potential Mentors:** Ankur Ankan, Nimish Purohit

## Implement a Benchmarking framework

pgmpy includes a broad set of tools for causal discovery, conditional independence (CI) testing, and causal identification/effect estimation. In both research and practice, users often want to compare these methods on datasets. However, for most real-world problems, the causal ground truth is unknown, which makes meaningful evaluation difficult. As a result, users typically rely on simulated data where a known model is used to simulate data, and the known model is then used as the ground truth. 

In this project, we would like to make this process easier by building a flexible benchmarking framework that standardizes how pgmpy causal methods are evaluated both on simulated or real data (in the presence of ground truth). The resulting framework should have the following features:
- takes one or more **data simulators** (configurable data-generation procedures),
- takes one or more **method objects** for tasks such as causal discovery or CI testing,
- takes one or more **metrics** suitable for the task,
- runs the full set of experiments across combinations, and
- outputs results in a structured, reproducible format (e.g., tables/JSON, with optional summaries).

**Expected Time:** 350 hours  
**Difficulty Rating:** Medium  
**Potential Mentors:** Ankur Ankan, Nimish Purohit

## Expand Causal Discovery Algorithms

pgmpy already includes several causal discovery methods, but many newer methods have been proposed. These methods can perform better for certain datasets, support different data types, or are faster.
This project aims to expand the set of causal discovery algorithms available in pgmpy, with an emphasis on modern functional/SEM-based and continuous-optimization-based methods. We would like to add these new methods to pgmpy while maintaining a consistent API and sklearn compatibility. The methods to add are:

- **Functional / SEM-based methods**
  - **LiNGAM**
  - **DirectLiNGAM**

- **Continuous optimization-based methods**
  - **NOTEARS**
  - **DAGMA** (and related variants where feasible)

**Expected Time:** 350 hours  
**Difficulty Rating:** Medium  
**Potential Mentors:** Ankur Ankan, Nimish Purohit


---

## pyGAM

We propose the following lines of work which we believe would represent a significant improvement in the quality of the library while being feasible within a focused period of work (~3 months).

# 1. Implement a modern p-value computation. 
The library is in need of more reliable p-values. We receive many citations from academics in social and earth sciences, and from reading their work it is clear that hypothesis testing is important to them. The current calculation in pyGAM uses an outdated approximation from Wood 2006 that is known to reject the null hypothesis too eagerly. Luckily Wood 2014 contains improved p-value calculations which are the standard in MGCV.    
  - Expected Outcomes: Read and understand the reference text to undertstand improved p-value calculation. Implement modernised statistical calculations in GAM._compute_p_values(). Implement unit tests that compare to theoretical performance from references eg Wood 2014 using simple datasets.   
  - Skills required/preferred: software development, scientific computing, unit testing, python, numpy, pytest, statistics  
  - Time estimate: 350 hours  
  - Difficulty: Medium  
  - https://github.com/dswah/pyGAM/issues/163  
  - Mentor: Daniel Servén [dswah](https://github.com/dswah/mentoring-projects/new/main/2026#:~:text=Skip%20to%20content-,dswah,-mentoring%2Dprojects)   


# 2. Scikit-Learn Interface. 
We seek to integrate pyGAM smoothly into the python ML ecosystem. However, our library has become out of sync with the modernisations in sklearn. We propose to improve pyGAM's base models and model methods (fit, predict) by allowing them to work smoothly as sklearn estimators.    
  - Expected Outcomes: Reading scikit-learn documentation to understand API requirements, improvements to main pygam class definitions, inits and methods to ensure compatilibility with main scikit-learn API. Implementation of unit tests for these changes, 
  - Skills required/preferred: software development, unit testing, python, numpy, pytest, object oriented programming  
  - Time estimate: 175 hours  
  - Difficulty: Medium  
  - https://github.com/dswah/pyGAM/issues/422  
  - Mentor: Daniel Servén [dswah](https://github.com/dswah/mentoring-projects/new/main/2026#:~:text=Skip%20to%20content-,dswah,-mentoring%2Dprojects)


# 3. Centered Feature Functions.
pyGAM is currently missing a key element of statistical rigor, which is to reduce model identifiability issues by enforcing that all spline-based feature functions sum to unity over the data distribution. This should improve numerical stability during estimation by avoiding colinearity of the intercept with multiple feature functions.
   - Expected Outcomes: Read and understand the reference text to undertstand the underlying mathemicatics. Implement a main feature-centering method in the base Term class of pygam.termns.py and modifications of this method for specific terms. Implement unit tests with simple datasets to confirm correct implementation and to rule out numerical problems.  
  - Skills required/preferred: software development, scientific computing, unit testing, python, numpy, pytest  
  - Time estimate: 350 hours  
  - Difficulty: Medium   
  - https://github.com/dswah/pyGAM/issues/24
  - Mentor: Daniel Servén [dswah](https://github.com/dswah/mentoring-projects/new/main/2026#:~:text=Skip%20to%20content-,dswah,-mentoring%2Dprojects)


---

## sktime_all

# Project Ideas for 2026

Below is a list of ideas for longer mid-year projects 2026 with `sktime`, `skpro`, and `pytorch-forecasting`.
For getting started or smaller projects, see our curated list of [good first issues and advice on getting started as an sktime developer](https://github.com/sktime/sktime/issues/1147).

The list below is only an ideas starter - we welcome and actively encourage bringing your own ideas to the table!

For information on mentoring, summer programmes, and application processes, see [here](https://github.com/sktime/mentoring) for the newest information.

## sktime

`sktime` is a Python library that makes it easy to analyze and forecast time series data using a scikit-learn-like interface.

**Github:** https://github.com/sktime/sktime  
**Website:** https://www.sktime.net/  
**Organisation:** [GC.OS](https://gcos.ai/)  
**Contributor Guide:** https://github.com/sktime/sktime/blob/main/CONTRIBUTING.md  

### Project 1: Migrate tapnet, resnet, and cntc `tensorflow` based models to `torch` and enhance the `torch` models in `sktime` by adding support for features from the wishlist.

Detailed description of the project:
* Complete the migration of deep learning models from `TensorFlow` to `Torch`. See issue [sktime/#8699](https://github.com/sktime/sktime/issues/8699) for more details. The comment section of the linked issue contains already migrated models, which can be used as a template. For example, [RNN classifier from sktime/#8842](https://github.com/sktime/sktime/pull/8842) and [RNN regressor from sktime/#9013](https://github.com/sktime/sktime/pull/9013)
* Create a unified workflow with the base `dataset` and `model` class. See issue [sktime#7598](https://github.com/sktime/sktime/issues/7598)
* Issue [sktime/#8928](https://github.com/sktime/sktime/issues/8928) has more ideas that can be incorporated as part of advanced projects.
* Add new models with `torch` implementation.
* Task 1: migrate tapnet, resnet, and cntc models. Refer: [sktime/#8699](https://github.com/sktime/sktime/issues/8699). Template for migration will be provided. This will give you familiarity with the codebase and an entry point to think about task 2.
* Task 2: implement 2 to 3 enhancements (of your interest) from issue: [sktime#7598](https://github.com/sktime/sktime/issues/7598) and [sktime/#8928](https://github.com/sktime/sktime/issues/8928).

**Expected Outcomes:** Migrate tapnet, resnet, and cntc `tensorflow` based models to `torch` in `sktime` and implement 1-3 enhancements of your choice from [sktime/#8928](https://github.com/sktime/sktime/issues/8928)  
**Skills:** `torch`, some parts may require knowledge of torch ecosystem libraries (such as `lightning`, `torchmetrics`), methodology (deep learning), familiarity with training, checkpointing, interence, and hubs.  
**Mentors:** RecreationalMath  
**Length:** 350 hours  
**Difficulty:** Medium   
**Getting started:** Migrate one `tensorflow` based model to `torch` in `sktime`. See issue [sktime/#8699](https://github.com/sktime/sktime/issues/8699) for more details.  

### Project 2: Migrate fcn, cnn `TensorFlow` based models to `Torch` and enhance the `torch` models in `sktime` by adding support for features from the wishlist.

Detailed description of the project:
* Complete the migration of deep learning models from `TensorFlow` to `Torch`. See issue [sktime/#8699](https://github.com/sktime/sktime/issues/8699) for more details. The comment section of the linked issue contains already migrated models, which can be used as a template. For example, [RNN classifier from sktime/#8842](https://github.com/sktime/sktime/pull/8842) and [RNN regressor from sktime/#9013](https://github.com/sktime/sktime/pull/9013)
* Create a unified workflow with the base `dataset` and `model` class. See issue [sktime#7598](https://github.com/sktime/sktime/issues/7598)
* Issue [sktime/#8928](https://github.com/sktime/sktime/issues/8928) has more ideas that can be incorporated as part of advanced projects.
* Add new models with `torch` implementation.
* Task 1: migrate fcn and cnn models (of your choice) from [sktime/#8699](https://github.com/sktime/sktime/issues/8699). Template for migration will be provided. This will give you familiarity with the codebase and an entry point to think about task 2.
* Task 2: migrate the `mvts_transformer`, `GRU`, `GRUFCNN`, and `convtimenet` models from the old interface to the new interface in sktime. Details in above linked issue. This is a small task and can give insights into alternate implementations before picking an enhancement of your choice in task 3.
* Task 3: implement 2 or 3 enhancements (of your choice) from issues: [sktime#7598](https://github.com/sktime/sktime/issues/7598) and [sktime/#8928](https://github.com/sktime/sktime/issues/8928). 

**Expected Outcomes:** Migrate fcn and cnn `tensorflow` based models to `torch` in `sktime` and implement 1-3 enhancements of your choice from [sktime/#8928](https://github.com/sktime/sktime/issues/8928)  
**Skills:** `torch`, some parts may require knowledge of torch ecosystem libraries (such as lightning, torchmetrics), methodology (deep learning), familiarity with training, checkpointing, interence, hubs.  
**Mentors:** RecreationalMath  
**Length:** 350 hours  
**Difficulty:** Medium    
**Getting started:** Migrate one `tensorflow` based model to `torch` in `sktime`. See issue [sktime/#8699](https://github.com/sktime/sktime/issues/8699) for more details.  

### Project 3: Interface foundations models - development, interfaces, research

* Mature and complete integrations of pre-trained models and foundation models in `sktime`: [umbrella issue](https://github.com/sktime/sktime/issues/6177)
  * chronos2 - [Issue](https://github.com/sktime/sktime/issues/8988)
  * TabPFN-TS - [Issue](https://github.com/sktime/sktime/issues/8664)
  * TabICL-TS - [Issue](https://github.com/sktime/sktime/issues/8665)
  * momentfm Anomaly Detection  - [Issue](https://github.com/sktime/sktime/issues/6542)
* Layer integration with `pytorch-forecasting` and `scikit-base`
* Re-design of foundation model API elements - pre-training, fine-tuning

**Expected outcomes:** interface 1 or 2 foundational models of your choice into sktime and while doing so work towards consolidating the interfaces for pre-trained model and forecasting.  
**Skills:** `torch`, `huggingface`, `transformers`, methodology (DL, LLM), familiarity with training, checkpointing, interence, hubs.  
**Mentors:** geetu040, fkiraly, RecreationalMath  
**Length:**  350 hours  
**Difficulty:** Moderate to hard, depending on the choice of models.  
**Getting started:** Interface a 3rd party foundation model please refer [umbrella issue](https://github.com/sktime/sktime/issues/6177)  
**Stretch goal:** Other learning tasks, research benchmark study for contributors interested in advanced projects.  

### Project 4: Interface foundations models - development, interfaces, research

* Mature and complete integrations of pre-trained models and foundation models in `sktime`: [umbrella issue](https://github.com/sktime/sktime/issues/6177)
  * chronos2 - [Issue](https://github.com/sktime/sktime/issues/8988)
  * TabPFN-TS - [Issue](https://github.com/sktime/sktime/issues/8664)
  * TabICL-TS - [Issue](https://github.com/sktime/sktime/issues/8665)
  * momentfm Anomaly Detection  - [Issue](https://github.com/sktime/sktime/issues/6542)
* Layer integration with `pytorch-forecasting` and `scikit-base`
* Rearchitecture of existing foundation models in `sktime`, integration with `pytorch-forecasting`

**Expected outcomes:** Interface 1-2 foundational models of your choice into sktime, and while doing so work towards consolidating the interfaces for pre-trained models and forecasting.  
**Skills:** `torch`, `huggingface`, `transformers`, methodology (DL, LLM), familiarity with training, checkpointing, interence, hubs  
**Mentors:** geetu040, fkiraly, RecreationalMath  
**Length:**  175 or 350 based on the choice of model from the wishlist in the linked issue above.  
**Difficulty:** Medium to hard based on the choice of models.  
**Getting started:** Interface a 3rd party foundation model please refer [umbrella issue](https://github.com/sktime/sktime/issues/6177)  
**Stretch goal:** Other learning tasks, research benchmark study for contributors interested in advanced projects.  

### Project 5: Hierarchical models and hierarchical distributions

* Extend hierarchical model features in sktime, skpro, prophetverse
* Help implement hierarchical estimators, see [hierarchical reconciliation](https://github.com/sktime/sktime/issues/2157)
* API extension to hierarchical predictive distributions: https://github.com/sktime/skpro/issues/212
* Advanced: prophetverse - improvements to effects abstractions
* Advanced: hierarchical and multi-factor models for proba regression and survival analysis

**Expected outcomes:** Improved support for probabilistic models - API extension or more estimators implemented  
**Skills:** pandas/index handling, methodology (hierarchical models), probability, "rolling your own estimator", sklearn internals  
**Mentors:** felipeangelimvieira, fkiraly  
**Length:** 175 hours (basic) or 350 hours (advanced)  
**Difficulty:** Medium (basic), hard (advanced)  
**Getting started:** Implement a new hierarchical reconciliation algorithm in `sktime`: https://github.com/sktime/sktime/issues/7609  
**Stretch goal:** Improved integration between sktime, skpro, prophetverse for hierarchical indices  

### Project 6: Stream and online support for forecasting and detection tasks

* Help expand efficient stream/online update for existing forecasting models in `sktime`
* Stream/update compositors for forecasting models and transformation models
* Short: add `update` method for one or two existing, widely used estimators
* Advanced: stream/update API architecture for transformations
* Advanced: stream/update API architecture for anomaly and changepoint detection, predictive monitoring

**Expected outcomes:** implemented update feature for 3-5 forecasters  
**Skills:** methodology (forecasting, stream/online), "rolling your own estimator"; advanced: sklearn and sktime internals  
**Mentors:** fkiraly, felipeangelimvieira  
**Length:** 90 hours (short), 175 hours (basic), or 350 hours (advanced)  
**Difficulty:** Easy (short), hard (advanced)  
**Getting started:** Adding dedicated `update` to `statsmodels` estimators, or `NaiveForecaster`  
**Stretch goal:** Stream and online API for forecasting, transformations, and/or detection  

### Project 7: Detection framework with sktime and skchange

* Expand the detection framework in sktime - segmentation, change point detection, anomaly detection
* Short project: implementing and interfacing new algorithms and metrics
* Advanced: multi-channel detection
* Advanced: tuning, auto-ml, ensembles
* Optional: application in affiliated real-world projects

**Expected outcomes:** algorithms implemented; advanced compositors (if advanced)  
**Skills:** `sklearn` and `sklearn`-like extensions, "rolling your own estimator"; helpful: familiarity with detection tasks   
**Mentors:** tveten, alex-jg3, robot-psychologist  
**Length:** 90 hours (short), 175 hours (basic), or 350 hours (advanced)  
**Difficulty:** Easy (short), medium (advanced)  
**Getting started:** [detection algorithms and metrics wishlist](https://github.com/sktime/sktime/issues/6481)   
**Stretch goal:** Become maintainer or join an application project  


## pytorch-forecasting and DSIPTS

`pytorch-forecasting` is a high-level library for neural network–based time series forecasting.  

**Github:** https://github.com/sktime/pytorch-forecasting  
**Website:** https://pytorch-forecasting.readthedocs.io/  
**Organisation:** [GC.OS](https://gcos.ai/)  
**Contributor Guide:** https://github.com/sktime/pytorch-forecasting/blob/main/CONTRIBUTING.md  

### 1. Foundation Models
Complete integrations of pre-trained models and foundation models in `pytorch-forecasting`: [pytorch-forecasting#1959](https://github.com/sktime/pytorch-forecasting/issues/1959)

#### 1.1 Difficulty: Advanced
* Mature and complete integrations of pre-trained models and foundation models in `sktime` and `pytorch-forecasting`: [pytorch-forecasting#1959](https://github.com/sktime/pytorch-forecasting/issues/1959)
* Layer integration with `pytorch-forecasting` and `scikit-base`.
* Interfacing a 3rd party foundation model from the umbrella issue
* Create new `DataModule`, `Model` and `pkg` layer specifically for foundation models for `pytorch-forecasting-v2`.
* Creating `pytorch-forecasting` a reliable provider of Foundation models to `sktime` with complete integration

**Expected outcomes:** Consolidated interfaces for pre-trained model, forecasting  
**Skills:** `torch`, `huggingface`, `transformers`, methodology (DL, LLM), familiarity with training, checkpointing, interence, hubs  
**Mentors:** phoeenniixx, agobbifbk, PranavBhatP  
**Length:** 350 hours    
**Difficulty:** Hard  
**Getting started:** Interface a 3rd party foundation model  
**Stretch goal:** Other learning tasks, research benchmark study  

### 2. pytorch-forecasting & dsipts - redesign, sktime integration
Complete `pytorch-forecasting` v2 rework and releasing a stable version 2. See Roadmap issue [here](https://github.com/sktime/pytorch-forecasting/issues/1993)

#### 2.1 Difficulty: Medium
* Improving D1/D2 layer and `pkg` layer to complete the v2 version (Look at the work items [here](https://github.com/sktime/pytorch-forecasting/issues/1974))
* Adding new `train_test_split` strategies.
* Add adapter for `nn` losses and `MultiLoss` support (See issue [here](https://github.com/sktime/pytorch-forecasting/issues/1970))
* Improve the test framework to include more scenarios and edge cases.

**Expected outcomes:** `pytorch-forecasting` rearchitecture & integration to 2.0  
**Skills:** `torch`, methodology (deep learning), familiarity with training, checkpointing, interence, hubs   
**Mentors:** phoeenniixx, agobbifbk, PranavBhatP  
**Length:** 175 hours  
**Difficulty:** Medium    
**Getting started:** Rework one `pytorch-forecasting` model  
**Stretch goal:** Research benchmark study, Addition of `polars` backend to v2 (preferably v2.x)  

#### 2.2 Difficulty: Medium
* Complete migration of v1  model implementations to v2 (preferably with minimal changes to the source code).
* Complete integration with `DSIPTS` and `sktime`.
* Addition of new models from `tslib` and related packages (see umbrella issue [here](https://github.com/sktime/pytorch-forecasting/issues/1992)).

**Expected outcomes:** `pytorch-forecasting` rearchitecture & integration to 2.0  
**Skills:** `torch`, methodology (deep learning), familiarity with training, checkpointing, interence, hubs  
**Mentors:** phoeenniixx, agobbifbk, PranavBhatP  
**Length:** 175 hours  
**Difficulty:** Medium  
**Getting started:** Rework one `pytorch-forecasting` model  
**Stretch goal:** Research benchmark study, Addition of `polars` backend to v2 (preferably v2.x)  


### 3. Pre-training, Global Learning and fine-tuning API
Design of foundation model API elements - pre-training, fine-tuning. See issues [sktime#6580](https://github.com/sktime/sktime/issues/6580) and [sktime#7838](https://github.com/sktime/sktime/issues/7838)

#### 3.1 Difficulty: Hard
* Designing API elements for pre-training, fine-tuning and global learning.
  * The contributors can propose their own designs. For reference, please look at this [Enhancement Proposal](https://github.com/sktime/enhancement-proposals/pull/41).
* Implementation of API for fine-tuning and pre-training and complete integration with `pytorch-forecasting-v2`.
* Integration with test framework of `pytorch-forecasting` using `skbase`. 
* Implementing and Designing Global Forecasting Pipeline in `pytorch-forecasting-v2`.

**Expected outcomes:** Mature Pre-training API & integration to 2.0   
**Skills:** `torch`, `huggingface`, `transformers`, methodology (DL, LLM), familiarity with training, checkpointing, interence, hubs   
**Mentors:** phoeenniixx, agobbifbk  
**Length:** 350 hours  
**Difficulty:** Hard  
**Getting started:** Rework one `pytorch-forecasting` model  
**Stretch goal:** Research benchmark study  


## skpro

`skpro` is a unified framework for tabular probabilistic regression, time-to-event prediction, and probability distributions in Python.  

**Github:** https://github.com/sktime/skpro      
**Website:** https://skpro.readthedocs.io/en/latest/  
**Organisation:** [GC.OS](https://gcos.ai/)  
**Contributor Guide:** https://github.com/sktime/skpro/blob/main/CONTRIBUTING.md  

### Probabilistic forecasting, survival models, Bayesian interfaces

* Help developing the [`skpro`](https://github.com/sktime/skpro/issues) package - distributions, time-to-event models, reductions
* Project 1: help implement estimators and compositors from the wishlists:
   * skpro: [estimators](https://github.com/sktime/skpro/issues/7), [distributions](https://github.com/sktime/skpro/issues/22)
   * sktime: [proba forecasting list](https://github.com/sktime/sktime/issues/1742), [proba for compositors list](https://github.com/sktime/sktime/issues/2088)
   * examples: model-based prediction intervals, probabilistic ensembles 
* Project 2: develop Bayesian modelling API for regression and forecasting - prior/posterior handling, update
* Project 3: on-line, stream/update functionality for regression

**Skills:** Methodology (forecasting), probability, "rolling your own estimator", sklearn internals; advanced: methodology (Bayesian, online)  
**Getting started:** Adding `predict_interval` and `predict_proba` for estimators  
**Expected outcomes:** Implemented 3-5 interesting estimators in the area  
**Stretch goal:** Stream or point process modelling functionality (option 1); Bayesian modelling framework integration (option 2)  
**Mentors:** fkiraly, felipeangelimvieira, marrov  

Difficulty: 
- Project 1: medium 
- Project 2: hard 
- Project 3: hard

Length: 
- Project 1: 175 hours
- Project 2: 350 hours
- Project 3: 350 hours

