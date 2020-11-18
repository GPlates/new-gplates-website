Introduction
============

GPlates can calculate and export net lithosphere rotations over time. The net lithosophere rotation is a useful concept in geodynamics and can be used to check global rotation models. Models where plate motions are driven by mantle convection should have zero net lithosphere rotation.

For a given time reconstruction time, GPlates calculates the net lithosphere rotation based on the method described in Torsvik et al. 2010 *Plate tectonics and net lithosphere rotation over the last 150 My*. Earth and Planetary Science Letters 291, pp 106-112.

Datasets
========

In addition to a rotation model, GPlates needs a closed plate polygon dataset, such as the dynamic polygon dataset provided in the sample data folder. Such a dataset, if constructed correctly, provides dynamic closed polygons covering the whole of the lithosphere for all reconstruction times of interest.

Exporting net rotations
=======================

Net rotations are calculated and exported as part of the Export tools found under the Reconstruction→Export menu. (See also the **Export** chapter for more general instructions on using Export functionality).

-   load the desired rotation model and dynamic polygon dataset

-   select Reconstruction→Export

-   in the Export dialog:

    -   select the desired reconstruction time, or range of reconstruction times

    -   select the directory for file output

    -   press "Add Export"

    -   in the "Add data to export" dialog:

        -   choose "Net Rotations"

        -   choose the desired output file format, velocity time step, and other settings as required.

        -   press "OK"

    -   press "Begin Export".

For each specified time step GPlates will create an csv-formatted output file containing the reconstruction time, a breakdown of the contribution from each plate (in the form of stage-pole, angular velocity, and plate area), and the net lithosphere rotation for that time.

**Example of net rotation output file.**

190 PlateId,Lat (°),Lon (°),Angular velocity (°/Ma),Area (km2) 101,-5.66643,194.502,0.859129,3.47035e+07 280,6.16577,195.403,0.517291,2.17859e+06 301,-5.47275,193.582,0.862577,3.77175e+07 380,12.7946,173.121,0.844439,2.82862e+07 449,6.16577,195.403,0.517291,6.19785e+07 497,6.16577,195.403,0.517291,5.55872e+07 498,43.6454,185.782,0.299004,5.34413e+06 530,53.9416,174.266,0.409926,3.07373e+07 607,6.16577,195.403,0.517291,1.81432e+07 707,5.84829,195.276,0.515454,604999 902,44.8427,162.369,0.69957,5.36242e+07 919,4.76113,-26.252,0.599968,8.71006e+07 926,-41.7798,143.754,0.649741,9.53976e+07

    "Net rotation: (lat,lon,degrees/Ma): ",-1.00128,-166.95,0.349531

In addition the net rotations for each time step are collated in one file with name "total-net-rotations.csv":

**Example of total net rotation output file.**

Time (Ma),Lat (°),Lon (°),Angular velocity (°/Ma) 170,-32.6324,82.837,0.142964 160,-0.303429,75.4867,0.126344 150,20.3478,130.5,0.197437 140,-25.1647,-31.618,0.444411 130,-43.0921,-30.1352,0.397041 120,-19.9593,120.71,0.35672 110,-66.0726,-100.477,0.318935 100,-38.8836,165.001,0.216189 90,-43.4639,129.239,0.438149 80,-38.843,125.599,0.494966 70,-43.4446,100.371,0.289385

Note that GPlates uses dynamic closed polygons from any active layers in its net lithosphere calculations. If several such layers are loaded which have overlapping polygons, the user should ensure that only one such layer is activated.

![](images/icons/prev.png) ![](images/icons/home.png) ![](images/icons/next.png)
