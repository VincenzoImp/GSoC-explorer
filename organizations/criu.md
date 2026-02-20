# CRIU

> Chekpoint/Restore for Linux tasks and containers

**Technologies:** c, python, linux, go
**Topics:** cloud, containers, Checkpoint/Restore
**Website:** https://criu.org
**Ideas:** https://criu.org/Google_Summer_of_Code_Ideas
**GSoC Page:** https://summerofcode.withgoogle.com/programs/2026/organizations/criu

## Description

CRIU (stands for Checkpoint/Restore In Userspace), is a Linux software. It can freeze a running container (or an individual application) and checkpoint its state to disk. The data saved can be used to restore the application and run it exactly as it was during the time of the freeze. Using this functionality, application or container live migration, snapshots, remote debugging, and many other things are now possible. 
CRIU is packaged for all leading Linux distributions and it is integrated wit lots of popular projects such as Docker, Podman, LXC/LXD, OpenVZ,  runc,  open-mpi and others

