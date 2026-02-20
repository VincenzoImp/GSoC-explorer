# JdeRobot

> Toolkit for developing Robotics applications

**Technologies:** python, ros, gazebo, opencv, tensorflow
**Topics:** education, artificial intelligence, robotics, computer vision, developer tools
**Website:** http://jderobot.github.io
**Ideas:** https://jderobot.github.io/activities/gsoc/2026#ideas-list
**GSoC Page:** https://summerofcode.withgoogle.com/programs/2026/organizations/jderobot

## Description

Robotics applications are typically distributed, made up of a collection of concurrent asynchronous components which communicate using some middleware (ROS messages, DDS...). Building robotics applications is a complex task. Integrating existing nodes or libraries that provide already solved functionality, and using several tools may increase the software robustness and shorten the development time. JdeRobot provides several tools, libraries and reusable nodes. They have been written in C++, Python or JavaScript.

Our community mainly works on four development areas:
1.- Education in Robotics
* RoboticsAcademy (https://jderobot.github.io/RoboticsAcademy/): a ROS-based framework to learn robotics and computer vision with drones, autonomous cars.... It is a collection of Python programmed exercises for engineering students. 
* Unibotics: a web based framework for teaching robotics.

2.- Robot Programming Tools	
* VisualCircuit (https://jderobot.github.io/VisualCircuit/) for robot programming with connected blocks, as in electronic circuits, in a visual way
* VisualStates for robot programming with Finite State Machines in a visual way
* WebSim2D robot simulator with web technologies

3.- MachineLearning in Robotics
* DeepLearningSuite: neural networks for robot control. It includes the BehaviorMetrics tool for assessment of neural networks for autonomous driving
* RL-Studio: Robotic library for the training of Reinforcement Learning algorithms
* DetectionMetrics tool for evaluation of visual detection neural networks and algorithms

4.- FPGAs in Robotics
* FPGA-robotics (https://github.com/JdeRobot/FPGA-robotics): programming robots with reconfigurable computing (FPGAs) using open tools as IceStudio and Symbiflow. Verilog-based reusable blocks for robotics applications.
* NeuralFPGA: running deeplearning networks on FPGAs

