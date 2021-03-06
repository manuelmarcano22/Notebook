---
layout: page
title: "Bokeh Plots"
---

## Bokeh

One idea is that instead of having to take screenshots of the iraf spectra, I can use a plotting library like [Bokeh](http://bokeh.pydata.org/en/latest/) to display interactive plots in here. Bokeh can be installed with conda. One way of getting the plot is:

* Create a javascript file and put in in the **{{site.baseurl}}/pathtopost/assets** folder
* Then in here call the script. For example:

{% highlight html %}
<script
    src="{{site.baseurl}}/images/bokehgraphs/bokeh1.js"
    id="deab7ab7-b894-4eb4-81be-488c6d136d17"
    data-bokeh-model-id="5dcc4051-f29b-439a-8c65-43090c7bab7c"
    data-bokeh-doc-id="d572a467-6563-4a98-859c-4e5242fa207f"
></script>
{% endhighlight %}


The minimal python script is:

```python
from bokeh.resources import CDN
from bokeh.plotting import figure
from bokeh.embed import autoload_static

name= 'bokeh1.js'

#Plot commands
plot = figure()
plot.circle([1,2], [3,4])

#Js is a js file that provides data for the plot and the tag is the tag to include in the html document.
js, tag = autoload_static(plot, CDN, "{{site.baseurl}}/images/bokehgraphs/"+name+".js")

##To save it in files
with open(name+'.js','w') as jsfile:
	jsfile.write(js)
with open(name+'.html','w') as htmlfile:
	htmlfile.write(tag)
```


For the jupyter notebooks and to include them in the Jekyll notebook:

`js, tag = autoload_static(p, CDN, "{{site.baseurl}}/css/cx25.js")`

Then download the .js file. To get the links


```python
from IPython.display import FileLink, FileLinks
FileLinks('.') #lists all downloadable files on server
```

Example Bokeh Plot

<script src="{{site.baseurl}}/random/assets/bokeh1.js" id="45145e88-9174-40ef-b648-1152dc264898"></script>



### Bokeh and Docker

In the docker container can create an html as output and if the docker container was created exposing a port with the `-p 8888:8888` for example can create a simple HTTP server with python (`python -m SimpleHTTPServer 8888`)and preview the Bokeh plot in localhost at the specified port.  


To plot the spectra from the header information this page was very useful:

* [The IRAF/NOAO Spectral World Coordinate Systems](http://stsdas.stsci.edu/cgi-bin/gethelp.cgi?specwcs)

> The FITS image header keywords describing the spectral world coordinates are CTYPEi, CRPIXi, CRVALi, and CDi_j where i and j are axis numbers. As with the physical coordinate transformation the nondiagonal or rotation terms are not expected in the spectral WCS and may cause problems if they are not zero. The CTYPEi keywords will have the value LINEAR to identify the type of of coordinate system. The transformation between dispersion coordinate, wi, and logical pixel coordinate, li, along axis i is given by  wi = CRVALi + CDi_i * (li - CRPIXi)

Regarding the defaults

> If the keywords are missing then the values are assumed to be zero except for the diagonal elements of the scale/rotation matrix, the CDi_i, which are assumed to be 1. If only some of the keywords are present then any missing CDi_i keywords will take the value 0 which will cause IRAF tasks to fail with arithmetic or matrix inversion errors. If the CTYPEi keyword is missing it is assumed to be "LINEAR".



### Boxcar Smooth

IRAF very useful smooth function applies a boxcar smooth. A nice short reference is in [here](http://joseph-long.com/writing/AstroPy-boxcar/). This is using the astropy functions:

`from astropy.convolution import convolve, Box1DKernel`

Following the example [here](https://demo.bokehplots.com/apps/sliders) and [here](https://github.com/bokeh/bokeh/blob/master/examples/app/sliders.py) I can try to have it in bokeh. The only ploblem is that to generate the static html and js the widget I think needs to be written in JS and you have to pass a ColumnDataSource. One easy, but not efficient way is to create several Data sets. It does the work but could be more efficient. Also to get back to the unsmooth one needs to refresh the whole page.  

{% highlight python %}
source3 = ColumnDataSource(data=dict(x=x,y=ysmooth3))
source5 = ColumnDataSource(data=dict(x=x,y=ysmooth5))

plot = figure(x_axis_label='Angstrom', y_axis_label='Y')
plot.add_tools(hover)
plot.add_tools(tools.ResizeTool())
#Eraaseplot.line(xlist,secondstar)
plot.line('x','y',source=source)

##Callback in JS
callback = CustomJS(args=dict(source=source,source3=source3,source5=source5), code="""
        var data = source.data;
        var data3 = source3.data;
        var data5 = source5.data;
        var f = cb_obj.value
        y = data['y']
        y3 = data3['y']
        y5 = data5['y']
        
        if (f == 3.0){
        for (i = 0; i < y.length; i++) {
            y[i] = y3[i]
        }
        }
        
        if (f == 5.0){
        for (i = 0; i < y.length; i++) {
            y[i] = y5[i]
        }
        }
        source.trigger('change');
    """)


# Set up slider
slider = Slider(title="Smooth Curve", value=1.0, start=1.0, end=5.0, step=2.0,callback=callback)

layout = column(slider, plot)
output_file(name+'try.html')
{% endhighlight %}



# Javascript 

For javascript there are some interesting libraries like [JS9](http://js9.si.edu/) to display astronomical image in your browser and [Numeric Javascript](http://www.numericjs.com/) for 


