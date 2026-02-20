# gprMax

> Simulating electromagnetic wave propagation

**Technologies:** python, cuda, openmp, mpi, opencl
**Topics:** science, engineering, geophysics, electromagnetics, ground penetrating radar
**Website:** https://www.gprmax.com
**Ideas:** https://github.com/gprMax/GSoC/blob/main/project-ideas-2026.md
**GSoC Page:** https://summerofcode.withgoogle.com/programs/2026/organizations/gprmax

## Description

gprMax is open source software that simulates electromagnetic wave propagation. It uses Yee's algorithm to solve Maxwell’s equations in 3D using the Finite-Difference Time-Domain (FDTD) method.

It is designed for simulating Ground Penetrating Radar (GPR) and is used to model electromagnetic wave propagation in fields such as engineering, geophysics, archaeology, and medicine. There are a wide range of applications from assessing infrastructure such as bridges and roads, locating buried utilities, mapping glaciers, finding anti-personnel landmines, to detecting tumours in the human body, and exploring the sub-surface of Mars and the Moon.

gprMax is command-line-driven software written in Python with performance-critical parts written in Cython. It does not currently feature a graphical user interface (GUI) which allows it to be very flexible and scriptable software that can run in high-performance computing (HPC) environments, i.e. on supercomputers.

gprMax can be run on either CPU or GPU. The CPU solver has been parallelised using OpenMP which enables it to run on multi-core CPUs. The GPU solver has been developed using the NVIDIA CUDA programming model. gprMax also features a Messaging Passing Interface (MPI) task farm, which can operate with CPU nodes or multiple GPUs.

