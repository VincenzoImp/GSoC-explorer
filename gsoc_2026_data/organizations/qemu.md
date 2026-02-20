# QEMU

> Open source machine emulator and virtualizer

**Technologies:** c, python, linux, rust
**Topics:** systems programming, kernel, compiler, emulator, hypervisor
**Website:** https://qemu.org/
**Ideas:** https://wiki.qemu.org/Google_Summer_of_Code_2026
**GSoC Page:** https://summerofcode.withgoogle.com/programs/2026/organizations/qemu

## Description

The QEMU Project includes the QEMU open source machine emulator and virtualizer and also acts as an umbrella organization for the KVM Linux kernel module and rust-vmm community.

When used as a machine emulator, QEMU can run operating systems and programs made for one machine (e.g. an ARM board) on a different machine (e.g. your own PC). By using dynamic translation, it achieves very good performance.

When used as a virtualizer, QEMU achieves near native performances by executing the guest code directly on the host CPU. QEMU supports virtualization when executing under the Xen hypervisor or using the KVM kernel module in Linux. When using KVM, QEMU can virtualize x86, ARM, server and embedded PowerPC, and S390 guests.

