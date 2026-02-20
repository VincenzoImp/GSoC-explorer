# OpenAFS — Project Ideas

**Source:** https://www.openafs.org/pages/gsoc/project-ideas.html
**Scraped:** 2026-02-20T12:13:36.789226

---

The following list represents some of our ideas as starting points. Suggesting your own ideas is encouraged and we will be happy to discuss your ideas on the OpenAFS development mail list at openafs-devel@openafs.org

Please review the [OpenAFS
Gerrit](https://gerrit.openafs.org) code review system and [OpenAFS Contrib](https://github.com/openafs-contrib) github repositories for work already in
progress.

Please see our main [ Google Summer of Code](https://www.openafs.org/gsoc.html) page for
information about OpenAFS's participation in the Google Summer of Code project
and application guidelines.

- Proficiency in C programming.
- Experience with the Linux development environment
- Experience with Git
- Understanding of filesystem concepts
- Understanding of the kernel VFS and libfuse

The OpenAFS cache manager has a modular architecture with different backends
to interface with various kernel-level VFS implementations. This project aims
to add a new, **low-level FUSE backend** to the existing set, which includes
backends for Linux, Solaris, macOS, AIX, and other platforms.

The core task is to create the FUSE-specific backend for the OpenAFS cache manager that integrates with the libfuse framework. This involves implementing the low-level FUSE API callbacks and translating incoming filesystem requests into the appropriate calls to the OpenAFS internal functions.

This low-level FUSE backend would use `struct fuse_lowlevel_ops`

from `fuse_lowlevel.h`

to more tightly integrate FUSE with the
OpenAFS cache manager. This would eventually replace the existing OpenAFS FUSE
client, which is implemented using `struct fuse_operations`

from
`fuse.h`

.

This is an opportunity to contribute to a mature open-source project, gaining hands-on experience in filesystem development and modern user-space library integration.

- Proficiency in C programming
- Experience with file system concepts and operations
- Familiarity with command-line interface (CLI) design

The OpenAFS **afsio** utility is a command-line client for interacting
with the AFS filesystem without requiring the OpenAFS kernel module. Recent
changes in the OpenAFS code base make authenticated use of **afsio** without
a kernel module possible.

This project aims to expand **afsio**'s capabilities, enabling AFS volume
mount point creation manipulation of Access Control Lists (ACLs) in
directories. The goal of this project is to enhance **afsio** so it can be
used by site administrators and developers to create OpenAFS cells without
requiring a kernel module.

- Proficiency in C programming
- Experience with network programming
- Understanding of basic network security concepts
- Familiarity with
**netcat**

**netcat** (**nc**) is a versatile utility for reading and writing
data over TCP/UDP connections. This project aims to create a similar tool
specifically for Rx, the network protocol used by OpenAFS. This new tool will
provide a simple and powerful way to interact with Rx-based services, enabling
automated testing, debugging, and scripting, much like netcat does for TCP/UDP.
Prior knowledge of OpenAFS or Rx is not required, making this a great project
for learning about network protocols.

- Experience in C programming
- Proficiency in shell scripting
- Understanding of with shell completion for bash and zsh

OpenAFS provides a suite of command-line tools for managing and interacting
with the distributed file system. Currently, these tools lack shell
command-line completion, making them less user-friendly and efficient to use,
especially for complex commands or unfamiliar users. This project aims to
implement comprehensive **Bash** completion for the most commonly used
OpenAFS commands, significantly improving the command-line experience. The
preferred solution would automatically add new command line completions as new
options and subcommands are added to the code base, so would require some code
changes in the command-line syntax handling library in OpenAFS.

- GNOME JavaScript (GJS)
- GNOME Shell Extension Development
- Understanding of D-Bus for inter-process communication
- Basic understanding of Kerberos authentication
- Linux Development

The GNOME Shell Extension for OpenAFS provides a user-friendly interface for starting and stopping the OpenAFS client on a GNOME desktop. However, the user must manually acquire Kerberos tickets and OpenAFS tokens using command line tools for authenticated access to files in the AFS filesystem.

The idea for this project is to improve the user experience by integrating the extension with the GNOME Online Accounts (GOA) framework over D-Bus to manage Kerberos credentials and integrate with the OpenAFS tools for token management. The project goal is to have the extension handle both initial token acquisition and subsequent renewals in a secure manner.

- Proficiency in C programming
- Experience with file system concepts and operations
- Familiarity with command-line interface (CLI) design

The **fs** took can be used to examine a given path to show information
about the directory or file in the path. The goal of this project is to support
feature to resolve the absolute path and provide information for each component
on the path.
