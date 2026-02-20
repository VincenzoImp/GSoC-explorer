# GeomScale

> Scalable geometric and statistical software

**Technologies:** python, c++, r, jupyter, github-actions
**Topics:** mathematics, data science, computational biology, computational geometry, statistics
**Website:** https://geomscale.github.io
**Ideas:** https://github.com/GeomScale/gsoc26/wiki/table-of-proposed-coding-projects
**GSoC Page:** https://summerofcode.withgoogle.com/programs/2026/organizations/geomscale

## Description

GeomScale is a research and development project that delivers open source code for state-of-the-art algorithms for problems at the intersection of data science, optimization, geometric, and statistical computing. The current focus of GeomScale is on scalable algorithms for sampling from high-dimensional distributions, integration, convex optimization, and their applications. One of our ambitions is to fill the gap between theory and practice by turning state-of-the-art theoretical tools in geometry and optimization to state-of-the-art implementations. Towards this goal, we will deliver various innovative solutions in a variety of application fields, like finance, computational biology, and statistics that will extend the limits of contemporary computational tools. GeomScale aims in serving as a building block for an international, interdisciplinary, and open community in high dimensional geometrical and statistical computing. The main development is currently performed in volesti, a generic open source C++ library, with R and python interfaces (the latter is hosted in package dingo), for high-dimensional sampling, volume approximation, and copula estimation for financial modelling. In particular, the current implementation scales up to hundred or thousand dimensions, depending on the problem. To our knowledge it is the most efficient software package for sampling and volume computation to date. It is, in several cases, orders of magnitude faster compared to packages that solve the same problems. It can be used to compute challenging multivariate integrals and to approximate optimal solutions in optimization problems. It has already found important applications in systems biology by analyzing large metabolic networks (e.g., the latest human network) and in FinTech by detecting shock events and by evaluating portfolios performance in stock markets with thousands of assets. Other application areas include AI and in particular approximate weighted model integration. Recent studies has shown a potential application of volesti methods in trustworthy AI, static analysis of programs and differential privacy.

