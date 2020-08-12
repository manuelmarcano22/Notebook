---
layout: page
title: "MESA"
---
## MESA

### MESA Docker


#### Setup

I found this repository [MESA-Docker](https://github.com/evbauer/MESA-Docker). The last time I tried to installed it (August 2020), I had some issues with permissions and X server inside the container. 

I had to run it a sudo and then enter as root the container. I added the line:

`--user "$(id -u):$(id -g)" \`

and also `--privileged`

Then as a root I changed the ownership that all belows to the user docker and that the user docker or group is part of sudo. Then all works


##### For the X-server

I had to do `xhost +x`  before the `sudo ./linux_dockerMESA.sh` in my machine. 
