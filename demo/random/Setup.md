---
layout: page
title: "Computer Setup"
---
## My Setup

### The university Server

The server at the physics department I have access to is _krieger.ttu.edu_ and my username _mmarcano_. When connected to the university network can use ssh as:

`ssh mmarcano@krieger.ttu.edu`

For **remote access**

`ssh -L 2222:krieger.ttu.edu:22 mapichar@ssh.ttu.edu`

The instruction on how to do that can be found [here](https://askit.ttu.edu/portal/app/portlets/results/viewsolution.jsp?SToken=BE61C2DC4FE5B4CC9919A11B48D6056B&solutionid=160504120603124&hypermediatext=null).

After establishing the connection thought _ssh.ttu.edu_ in my localhost I can scp and ssh as:

`scp -P 2222 mmarcano@localhost:~/krieger.* .`

and

`ssh -p 2222 mmarcano@localhost`

### Jupyter notebooks

[Anaconda](https://anaconda.org/) is installed and I can run [Jupyter](http://jupyter.org/) notebooks. In the server I first do:

`jupyter notebook --no-browser --port=8890`

And then in my computer

`ssh -N -L localhost:8888:localhost:8888 mmarcano@krieger.ttu.edu`

The idea was taken from this [website](https://coderwall.com/p/ohk6cg/remote-access-to-ipython-notebooks-via-ssh).

To connect from out of campus can do like  above:

```bash
ssh -L 2222:krieger.ttu.edu:22 mapichar@ssh.ttu.edu
```
In archer/krieger then do: 

`jupyter notebook --no-browser --port=8890`

and in my local machine:

`ssh -N -L localhost:8890:localhost:8890 -p 2222 mmarcano@localhost`

Then I can just open in a browser localhost:8890

Regarding Jupyter notebooks it is recommended to started with a password since it is a share server and anybody that has access to the server will have access to your Jupyter notebooks.

Can put a password easily doing:

`jupyter notebook password`


For version control of jupyter notebooks:

[nbdime](https://github.com/jupyter/nbdime)

### Jupyter Hub and Kernels

Since version 4.1.0, anaconda includes a special package nb_conda_kernels that detects conda environments with notebook kernels and automatically registers them. This makes using a new python version as easy as creating new conda environments.


### wget with Jupyter

From this answer in stack overflow [Retrieving files from remote IPython notebook server?](https://stackoverflow.com/questions/24437661/retrieving-files-from-remote-ipython-notebook-server):

```python
from IPython.display import FileLink, FileLinks
FileLinks('.') #lists all downloadable files on server
```
The code generates links to download files

# VNC

I can use a VNC server in krieger just do:


`vncserver`

and then in my computer I installed [http://tigervnc.org/](http://tigervnc.org/) and can simple do `vncviewer`. This will pop-up a GUI and I I put:

`krieger.ttu.edu:6` 


or the number I got when I put the vnc in Krieger and the password I selected. 

To kill it do:

`vncserver -kill :6`

or number


To see memory used by process can do:

## Memory


ps aux | awk '{print $6/1024 " MB\t\t" $11     " " $1  }'  | sort -n





