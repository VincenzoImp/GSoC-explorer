# GNU Radio

> The free & open software radio ecosystem

**Technologies:** python, c++, qt, simd
**Topics:** real-time, dsp, communications engineering, cybersecurity, Software-Defined Radio
**Website:** https://www.gnuradio.org
**Ideas:** https://wiki.gnuradio.org/index.php/GSoCIdeas
**GSoC Page:** https://summerofcode.withgoogle.com/programs/2026/organizations/gnu-radio

## Description

GNU Radio is a free & open-source software development toolkit that provides signal processing blocks to implement software radios. It can be used with readily-available low-cost external RF hardware to create software-defined radios, or without hardware in a simulation-like environment. It is widely used in research, industry, academia, government, and hobbyist environments to support both wireless communications research and real-world radio systems.

In brief, a software radio is a radio system which performs the required signal processing in software instead of using dedicated integrated circuits in hardware. The benefit is that since software can be easily replaced in the radio system, the same hardware can be used to create many kinds of radios for many different communications standards; thus, one software radio can be used for a variety of applications!

You can use GNU Radio to write applications to receive and transmit data with radio hardware, or to create entirely simulation-based applications. GNU Radio has filters, channel codes, synchronization elements, equalizers, demodulators, vocoders, decoders, and many other types of blocks which are typically found in signal processing systems. More importantly, it includes a method of connecting these blocks and then manages how data is passed from one block to another. Extending GNU Radio is also quite easy; if you find a specific block that is missing, you can quickly create and add it.

GNU Radio applications can be written in either C++ or Python, while the performance-critical signal processing path is implemented in C++ using processor floating-point extensions where available. This enables the developer to implement real-time, high-throughput radio systems in a simple-to-use, rapid-application-development environment.

