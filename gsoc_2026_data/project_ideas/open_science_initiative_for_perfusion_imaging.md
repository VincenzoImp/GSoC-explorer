# Open Science Initiative for Perfusion Imaging — Project Ideas

**Source:** https://docs.google.com/document/d/e/2PACX-1vTs3n_pm3ZM7t-6rKooThwrBtCRQMCkYJcbIyl0ekhm5O4jBgC0BqdBDFKVUDhDvbFM1ShBoV3Q2pFM/pub
**Scraped:** 2026-02-20T11:48:56.923006

---

Our organization focuses on a subdomain of medical imaging: quantitative MRI. Our projects then use several imaging techniques: DSC, DCE, ASL, and IVIM. While our project descriptions use specific terminology, we do not require deep knowledge of the field unless explicitly stated otherwise. Our mentors will provide the necessary domain expertise so contributors can focus on the tasks at hand.

Python development:

While OSIPI's current software resources are in separate repositories, split by perfusion technique (ASL, DCE/DSC, and IVIM), our overall aim is to develop a unified OSIPI software package in which each technique is a submodule. This will require a collaborative effort from multiple developers and is not expected to be fully developed through GSoC. Here, we defined several medium- to large-sized subprojects to take the next steps toward the unified project.

- Extend and consolidate the previous package to include several modeling and data-processing options:
[BBB-ASL module](https://docs.google.com#id.shu6tzc3u2k9),[ASL QC toolbox](https://docs.google.com#id.piyqr5sux1r). - Improve and extend a module for
[automatic parameter reporting](https://docs.google.com#id.h1shqbjnruls) - Create a GUI and preclinical functionality for the
[pyASL toolbox](https://docs.google.com#id.ner8diw1oe19) - Implement a framework for scoring results from the
[ASL and DSC/DCE](https://docs.google.com#id.fudc1iluezsr)challenges - Harmonize the previous modules developed within OSIPI into an
[OSIPY toolbox](https://docs.google.com#id.ox5ezufao6u) - Create a repository for browsing and uploading examples of image artifacts:
[AURA framework](https://docs.google.com#id.v85t7m48ki3e)

General GitHub link: [https://github.com/OSIPI](https://www.google.com/url?q=https://github.com/OSIPI&sa=D&source=editors&ust=1771587958742128&usg=AOvVaw1X4G2PWDJOKYDVvAAP2mXb)

Proposed mentors: Jan Petr, Ben Dickie

Languages/skills: Python, GitHub

Estimated project length: 350 hours

Links: [BBB ASL module](https://www.google.com/url?q=https://github.com/limonenmelissa/gsoc_bbb/blob/main/src/bbb_exchange/README.md&sa=D&source=editors&ust=1771587958743319&usg=AOvVaw30fmldQz0FPasSyEdBqfyi)

Difficulty: Large

Category: Intermediate

Project description: Arterial spin labeling (ASL) data acquired at multiple timepoints need to be quantified by voxel-wise fitting a kinetic model to the acquired time series. Two options are generally used: nonlinear least-squares fitting or Bayesian fitting. Both options are currently implemented, providing two models that address standard multi-delay and multi-delay multi-echo ASL measurements in the [BBB ASL](https://www.google.com/url?q=https://github.com/limonenmelissa/gsoc_bbb/blob/main/src/bbb_exchange/README.md&sa=D&source=editors&ust=1771587958744549&usg=AOvVaw2xeNlTDuaCcG4lbkRfqy9K) Python package. While the package works in general, it is not very user-friendly, and the code needs to be cleaner and more modular. Several functionalities need to be implemented: 1) full modularity enabling independently choosing the fitting model and the ASL model, while making the code easy to expand with more models; 2) parameters of the fitting and the ASL model needs to be inputted in JSON configuration files rather than as commandline or hard-coded options; 3) several parameters (e.g, T1 of blood/tissue and T2 of blood/tissue) should be passed both as a scalar value and as an input image; 4) prepare the code so that it integrates seamlessly with [PyASL modules](https://www.google.com/url?q=https://github.com/OSIPI/TF2.2_OSIPI-ASL-toolbox/tree/main/PyASL/pyasl/modules&sa=D&source=editors&ust=1771587958745922&usg=AOvVaw0y8RYRgT-hpFZ6n-jFkkY5), following a similar architectural design (i.e., [https://pyasl.readthedocs.io/en/latest/modules/index.html](https://www.google.com/url?q=https://pyasl.readthedocs.io/en/latest/modules/index.html&sa=D&source=editors&ust=1771587958746367&usg=AOvVaw2noNfS6Ygkencgg5_jaei2)).

Expected outcomes:

- Modular package for fitting multi-timepoint ASL data

Requirements:

- Python proficiency, GitHub

Optional:

- Image processing, MRI physics, ASL

Proposed mentors: Jan Petr, Dave Thomas, Ibrahim Abdelazim

Languages/skills: Python, GitHub

Estimated project length: 175 hours

Links: [GSoC 2025 report](https://www.google.com/url?q=https://medium.com/@ibrahim.abdelazim/google-summer-of-code-25-with-open-science-initiative-for-perfusion-imaging-osipi-2f95fab822ce&sa=D&source=editors&ust=1771587958748094&usg=AOvVaw3hnLEdFevBUjTqB3ByrzYo), [Documentation](https://www.google.com/url?q=https://docs.page/1brahimmohamed/ASL-Parameter-Generator&sa=D&source=editors&ust=1771587958748407&usg=AOvVaw2sVCDz1e7hhpp-RwEdX4XN), [Python package](https://www.google.com/url?q=https://pypi.org/project/pyaslreport/&sa=D&source=editors&ust=1771587958748597&usg=AOvVaw3_H1mYJficMzUu_MwrML5L), [Repository](https://www.google.com/url?q=https://github.com/1brahimmohamed/ASL-Parameter-Generator&sa=D&source=editors&ust=1771587958748779&usg=AOvVaw0TjNGu4nMzMO51EH6vq3Bl)

Difficulty: Moderate

Category: Intermediate

Project description: ASL Method section generator, as currently implemented, is a tool with a GUI that takes ASL-MRI data (but further extensions are possible) in BIDS format as input and creates a short paragraph as output that can be used for the methods section of scientific papers. It also allows DICOM images to be used as input and automatically extracts the necessary parameters. The goal of the current GSoC project is to improve the code's reliability and enable further extensions by writing automated tests that use a set of input files and compare their outputs with the expected outputs. Prepare a structure for the tests so that further testing files for all modules can be easily uploaded. Create a GitHub Actions workflow for automated CI tests.

Expected outcomes:

- Automated tests allowing easy extension to new examples and modules.

Requirements:

- Python proficiency, GitHub

Optional:

- DICOM, BIDS, MRI metadata knowledge

Proposed mentors: Lena Václavů, Olivia Jones, Puneet Kumar

Languages/skills: Python, Containerisation/Docker, Git/GitHub, skills for testing, documentation, and logging.

Estimated project length: 175 hours

Links: [OSIPI/TF6.2_DCE-DSC-MRI_Challenges: TF6.2](https://www.google.com/url?q=https://github.com/OSIPI/TF6.2_DCE-DSC-MRI_Challenges&sa=D&source=editors&ust=1771587958752203&usg=AOvVaw3Qph3qvOb5Nzc5qJcLozfE), [ASL OSIPI Challenge](https://www.google.com/url?q=https://pubmed.ncbi.nlm.nih.gov/38502108/&sa=D&source=editors&ust=1771587958752593&usg=AOvVaw3S0tkW5jPVLLlDbtqEmOIZ), [DCE OSIPI Challenge](https://www.google.com/url?q=https://pubmed.ncbi.nlm.nih.gov/38115695/&sa=D&source=editors&ust=1771587958752794&usg=AOvVaw0Jum1ZZvIevFBWF9VCH6mW), [OSIPI TF 6.2](https://www.google.com/url?q=https://github.com/OSIPI/TF6.2_DCE-DSC-MRI_Challenges&sa=D&source=editors&ust=1771587958753007&usg=AOvVaw3rJI1z-TcM1ZQK0j3S_Vfx)

Difficulty: Moderate

Category: Easy

Project description: This project aims to benchmark methods and reveal the differences between various quantification methods, including both classical and emerging tools to compute parameter maps from perfusion imaging methods (i.e., cerebral blood flow, Ktrans, arterial transit time), in order to advance standardisation in (clinical) research and clinical use of multi-delay ASL and DCE/DSC MRI. The project will develop a software pipeline to handle incoming data submissions (including 3D parameter maps and the code used to create them) and to score results and evaluate performance metrics against the selected ground-truth dataset (accuracy, reproducibility, repeatability). The pipeline must have options for extension and must generalise to both ASL and DCE/DSC challenges.

Expected outcomes:

- Standardized pipeline in Python for evaluation of OSIPI challenges that:

- Accepts data submissions (parameter maps + code)
- Validates their format (NIfTI, parameter values, MRI data standard BIDS)
- Runs the submitted codes in a controlled environment (e.g., Docker)
- Performs scoring in a structured format (RMSE, bias, CoV, ICC, per voxel/region-of-interest of a mask)
- Produces a report and visualisations (PDF or HTML)

Requirements:

- Python proficiency, GitHub

Proposed mentors: Maria Mora, Sudipto Dolui

Languages/skills: Python, GitHub

Estimated project length: 350 hours

Links: [QC ASL MRICloud](https://www.google.com/url?q=https://analyticalsciencejournals.onlinelibrary.wiley.com/doi/abs/10.1002/nbm.4051&sa=D&source=editors&ust=1771587958839730&usg=AOvVaw10zAaG_EwgbHhp45d7syM_), [QEI ASL](https://www.google.com/url?q=https://pubmed.ncbi.nlm.nih.gov/38400805/&sa=D&source=editors&ust=1771587958840209&usg=AOvVaw3l0wyFJSCdmF3OOPN952nK), [Explore ASL QC](https://www.google.com/url?q=https://exploreasl.github.io/Documentation/1.12.0_beta/Tutorials-QC/&sa=D&source=editors&ust=1771587958840433&usg=AOvVaw2v5jIBgumQD7hPWKzmOQlL), [AURA ASL](https://www.google.com/url?q=https://redcap1.ugent.be/surveys/?s%3DHYRAL4AETKLHPKYY&sa=D&source=editors&ust=1771587958840618&usg=AOvVaw3DVgyA30VvvQOIZwknonNq)

Difficulty: Moderate

Category: Advanced

Project description: This project aims to develop a Quality Control (QC) Toolbox for Arterial Spin Labeling (ASL) MRI data. The toolbox will automatically compare current QC-derived cerebral blood flow (CBF) metrics against reference values to detect corrupted or low-quality ASL scans and optimize classification thresholds across different populations. The tool is intended to support data curation for large retrospective and multicenter clinical studies, enabling standardized, reproducible QC across datasets.

Expected outcomes:

- Develop QC-Toolbox with the following functionalities:

- QEI
- Motion tracking
- Control-label pattern
- M0 checking
- SNR threshold
- Histogram analysis, spatial CoV, RMS difference
- Tissue mask quality assessment
- Others

- Establish thresholds to aid in curating data for retrospective clinical trials.

- Test toolbox with AURA ASL dataset
- Establish data-driven QC thresholds
- Provide automated flagging of poor-quality ASL scans
- Facilitate standardized data curation for retrospective clinical trials

Requirements:

- Python proficiency, GitHub

Optional:

- Image processing, MRI physics, perfusion imaging, ASL

Proposed mentors: Zhiliang Wei, Maria Mora

Languages/skills: Python, GitHub

Estimated project length: 350 hours

Links: [PyASL](https://www.google.com/url?q=https://pyasl-doc.readthedocs.io/&sa=D&source=editors&ust=1771587958844605&usg=AOvVaw2XPBFgr_VTz-la2RywrGp1), [PyASL ISMRM 2025 abstract](https://www.google.com/url?q=https://archive.ismrm.org/2025/3692.html&sa=D&source=editors&ust=1771587958845022&usg=AOvVaw1x1Ne4XY21RIdn9p5TZ7wv), [ISMRM 2022 abstract - OSIPI TF 2.2 abstract](https://www.google.com/url?q=https://cds.ismrm.org/protected/22MProceedings/PDFfiles/0914.html&sa=D&source=editors&ust=1771587958845991&usg=AOvVaw3-kXJMnu_cstlx8Q8-00ss), [OSIPI TF 2.2](https://www.google.com/url?q=https://osipi.ismrm.org/task-forces/task-force-2-2/&sa=D&source=editors&ust=1771587958846346&usg=AOvVaw0hBs3R-ShxG4a53NIOm6Ry)

Difficulty: Moderate

Category: Intermediate

Project description: In previous roadmaps, we collected code to create PyASL, a Python library to preprocess ASL data (both preclinical and human brain data). PyASL not only enables users to compare different preprocessing pipelines, but its modular structure also allows users to mix and match functionalities from different established pipelines to best suit their needs. To facilitate its usage among non-experts, we aim to develop a GUI for this library and expand its functionalities.

Expected outcomes:

- To develop a GUI and batch-wise processing mode for PyASL to improve ease of use.
- Add features to preclinical PyASL:

- Co-registration
- Normalization

Requirements:

- Python proficiency, GitHub

Optional:

- Image processing, MRI physics, perfusion imaging, ASL

Proposed mentors: Luis Torres

Languages/skills: Python, GitHub

Estimated project length: 350 hours

Links:

Difficulty: Moderate

Category: Advanced

Project description: In previous road maps, modular code has been developed to process different perfusion MRI modalities. The overarching aim is to combine these modules into a single harmonised Python package. The purpose of this project is to design and build the architecture of that package in a way that can be easily extended and built upon as the field advances.

Expected outcomes:

- To develop the software architecture and skeleton code that defines the main functionality of OSIPY, including the 3 main perfusion modalities of ASL, DCE/DSC, and IVIM.

Requirements:

- Python proficiency, git, code design

Proposed mentors: Patricia Clements, Sudipto Dolui

Languages/skills: Python, GitHub

Estimated project length: 350 hours

Links: [AURA Survey ](https://www.google.com/url?q=https://redcap1.ugent.be/surveys/?s%3DHYRAL4AETKLHPKYY&sa=D&source=editors&ust=1771587958852841&usg=AOvVaw23YfwIjK9u8hm49-xQCOPa)

Difficulty: Moderate

Category: Intermediate

Project description: For a year, OSIPI has been working on a user repository for perfusion artifacts, named AURA. This is mainly aimed to become an online dictionary to: a) create some more consensus on perfusion artifacts, b) better understand these artifacts, and c) aid researchers and clinicians in recognising perfusion artifacts. The goal of this project is to create a website or platform that allows users to consult dictionaries for ASL, DCE, DSC, and IVIM (initially for ASL, with the possibility of future expansion) and to upload perfusion image artifacts within AURA’s Framework.

Expected outcomes:

- To develop a platform that allows the creation of an artifact repository under AURA’s framework
- Integrate Quality CheckToolbox V1.0

Requirements:

- Python proficiency, GitHub, Website Development

Optional:

- Image processing, MRI physics, perfusion imaging, ASL
