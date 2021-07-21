---
templateKey: 'user-manual'
title: 'Chapter 9: Export'
prev: 'Reconstructions'
next: 'NetRotation'
---

1 Introduction
============

The "Export" function allows users to save scientific data or images to files.

2 Export dialog
=============

The **Export** dialog can be accessed via the **Reconstruction** menu, by choosing the **Export…** item (shortcut **Ctrl+Shift+E**). It is used to configure what aspects of the data you want export, what time range you want to export over, and the file names and formats you want to use.

The Export process can work in two different modes: Exporting a **Time Sequence** of snapshots, or just exporting a **Single Snapshot** of data.

The controls are divided into three groups. **Range** (or **Time** for a single snapshot), **Options**, and **Export**.

2.1 Export Time Sequence of Snapshots
---------------------------------

Given a time range, export a series of files. Each file contains data at a particular time point. To activate the controls for exporting a time sequence, choose the **Export Time Sequences of Snapshots** option at the top of the dialog.

![](screenshots/Export-TimeSequence.png)

2.2 Export single Snapshot
----------------------

Export data or image at a single specific time. To activate the controls for a one-off snapshot, click the **Export Single Snapshot** option at the top of the dialog.

![](screenshots/Export-SingleSnapshot.png)

2.3 Time Range
-----

When using **Export Time Sequence of Snapshots**, the **Time Range** group of controls specifies the time range that the **Export** will cover. For convenience, these controls are linked to the **Animation** system, and affect the same time range that you see with the **Time Slider** and **Configure Animation** dialog - this way you can see a preview of what will be exported.

The **Use Main Window Time** buttons are a convenient way of quickly entering the time that the main window is currently viewing. The **Reverse the Export** button can swap the start and end time for the export.

2.4 Time Instant
----

The **Time Instant** group is used with **Export Single Snapshot** to specify a time point.

2.5 Export Data
-------

The **Export Data** group specifies the items which users want to export and the directory to store output files.

A table shows what files will be created at each time, along with the substitution pattern that will be used to create each unique file name. Users can use **Add…**, **Remove**, or **Edit** exports in the table.

The **Target directory** specifies which directory all the files will be created in. Users can use the button on the right to select directory.

<table class ="important">
   <tbody>
      <tr>
         <td class="icon">
            <img src="./images/icons/important.png" alt="Important">
         </td>
         <td class="content" >The <b>Finish exactly on end time</b> checkbox is important if you are creating an animation with a time increment that is not an exact multiple of the range of your animation. For example, creating an animation between 18 Ma and 0 Ma, in increments of 5 M. This range leaves a 3 million year gap at the end which does not fit neatly into the supplied 18-0 range. Checking the <b>Finish exactly on end time</b> option ensures that GPlates will still write this final, shorter, frame.</td>
      </tr>
   </tbody>
</table>

2.6 Export Options
------

The **Export Options** group is for Exporting Time Sequence of Snapshots, and allows you to check whether you wish for the Export to **finish exactly on end time**, or not.

2.7 Export Progress
------

The **Export Progress** group is used to start and stop the export, and provide progress information during the export process. Click **Begin Export** to commence the export and begin creating files. If you have specified a large range, this may take some time.

The **Abort Export** button is provided in the event that users wishes to terminate the export sequence early. In **Export single Snapshot** mode, users can not abort.

3 "Add Export" dialog
===================

When choosing the "Add" button to add a new export item to the table, the **Add Export** dialog is shown to allow the selection of export type, format, and filename.

![](screenshots/Export-AddExport.png)

3.1 Choose Data Type to Export
---------------------

Users can select an entry in this list, and then the available output format will be listed in **Format** list.

3.2 Choose Output File Format
------

Select output file format in this list.

3.3 Configure Export Options
---------------

Indicate the parameters of your export by considering and implementing options. 

3.4 File name template
------------------

Specify the file name template which will be used to generate output file names.

4 Export Items
============

Below is a table of available export items.

<table>
   <colgroup>
      <col style="width: 28%" />
      <col style="width: 35%" />
      <col style="width: 35%" />
   </colgroup>
   <thead>
      <tr class="header">
         <th>Item</th>
         <th>Format</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr class="odd">
         <td>
            <p>Reconstructed Geometries</p>
         </td>
         <td>
            <p>GMT, Shapefiles, OGR-GMT, GeoJSON</p>
         </td>
         <td>
            <p>Export the reconstructed geometries in their paleo-coordinates.</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p>Projected Geometries (and Rasters)</p>
         </td>
         <td>
            <p>SVG</p>
         </td>
         <td>
            <p>Export projected geometries (and projected raster) data according to the current View settings.</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p>Image (screenshot)</p>
         </td>
         <td>
            <p>bmp,jpg,jpeg,png,ppm,tiff,xbm,xpm</p>
         </td>
         <td>
            <p>Export image (screenshot) of current view (globe or map).</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p>Colour raster</p>
         </td>
         <td>
            <p>bmp,jpg,jpeg,png,tiff,img</p>
         </td>
         <td>
            <p>Export 8-bit (per channel) RGBA (or RGB) coloured raster data. Exports each visible raster layer to a single file (per time step). RGBA (and RGB) raster layers contain colour pixels. Numerical raster layers converted to colour using layer's palette. Geo-referenced region stored in raster formats that support it.</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p>Numerical raster</p>
         </td>
         <td>
            <p>nc,grd,tif,img</p>
         </td>
         <td>
            <p>Export 32-bit floating-point numerical (non-coloured) raster data. Exports each visible (numerical) raster to a single file (per time step). RGBA (and RGB) raster layers are not exported. Numerical raster layers contain floating-point pixels. NaN no-data value stored in pixels not covered by raster data. Geo-referenced region stored in raster</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p>Scalar Coverages</p>
         </td>
         <td>
            <p>GMT,GPML</p>
         </td>
         <td>
            <p>Export reconstructed scalar coverages geometries with per-point scalar values. Exports visible reconstructed scalar coverage layers. Each geometry point exports a position and a scalar value. Scalar values for the currently selected scalar type are exported.</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p>Deformation</p>
         </td>
         <td>
            <p>GMT, GPML</p>
         </td>
         <td>
            <p>Export Deformation information. Exports visible reconstructed geometry layers connected to topology layers. Each geometry point exports a position, strain and strain rate.</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p>Velocities</p>
         </td>
         <td>
            <p>xy,gpml,CitcomS,Terra</p>
         </td>
         <td>
            <p>Export Plate velocity data.</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p>Resolved Topologies</p>
         </td>
         <td>
            <p>GMT, Shapefiles, OGR-GMT, GeoJSON</p>
         </td>
         <td>
            <p>Export resolved topological lines and polygons (but not networks) for any feature type.</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p>Resolved Topologies (CitcomS specific)</p>
         </td>
         <td>
            <p>GMT, Shapefiles, OGR-GMT, GeoJSON</p>
         </td>
         <td>
            <p>Export resolved topologies for use by CitcomS software. Exports boundaries of resovled topological close plate polygons/networks. Optionally exports the subsegment geometries of polygon/network boundaries.</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p>Relative Total Rotation</p>
         </td>
         <td>
            <p>CSV (either comma, semicolon, or tab delimited)</p>
         </td>
         <td>
            <p>Export relative total rotation data (between a moving/fixed plate pair from the export reconstruction time to present day).</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p>Equivalent Total Rotation</p>
         </td>
         <td>
            <p>CSV (either comma, semicolon, or tab delimited)</p>
         </td>
         <td>
            <p>Export equivalent total rotation data (from an exported plate id to the anchor plate, from the export reconstruction time to present day).</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p>Relative Stage Rotation</p>
         </td>
         <td>
            <p>CSV (either comma, semicolon, or tab delimited)</p>
         </td>
         <td>
            <p>Export relative stage rotation data (between a moving/fixed plate pair, from <i>t+interval</i> Ma to <i>t</i> Ma where <i>t</i> is the export reconstruction time).</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p>Equivalent Stage Rotation</p>
         </td>
         <td>
            <p>CSV (either comma, semicolon, or tab delimited)</p>
         </td>
         <td>
            <p>Export equivalent stage rotation data (from an exported plate id to the anchor plate, from <i>t+interval</i> Ma to <i>t</i> Ma where <i>t</i> is the export reconstruction time).</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p>Flowlines</p>
         </td>
         <td>
            <p>GMT, Shapefiles, OGR-GMT, GeoJSON</p>
         </td>
         <td>
            <p>Export flowlines.</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p>Motion Paths</p>
         </td>
         <td>
            <p>GMT, Shapefiles, OGR-GMT, GeoJSON</p>
         </td>
         <td>
            <p>Export motion tracks.</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p>Co-registration data</p>
         </td>
         <td>
            <p>CSV (comma delimited)</p>
         </td>
         <td>
            <p>Co-registration data for data-mining.</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p>Net Rotations</p>
         </td>
         <td>
            <p>CSV (either comma, semicolon,  or tab delimited)</p>
         </td>
         <td>
            <p>Export net-rotation data based on a set of dynamic polygons.</p>
         </td>
      </tr>
   </tbody>
</table>

5 File name template
==================

The **Filename** field is used as a template value that GPlates will use to name your exported files, and ensure that each Export snapshot gets assigned a unique name. Special **Placeholder** tokens can be used in this text entry box that GPlates will substitute for different values according to what is being exported and at what time.

<table>
   <colgroup>
      <col style="width: 6%" />
      <col style="width: 93%" />
   </colgroup>
   <thead>
      <tr class="header">
         <th>Placeholder</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr class="odd">
         <td>
            <p>%n</p>
         </td>
         <td>
            <p>the &quot;number&quot; (index + 1) of the frame — will lie in the inclusive range [1, N], and will be padded to the width of the decimal integer representation of N.</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p>%u</p>
         </td>
         <td>
            <p>the index of the frame — will lie in the inclusive range [0, (N - 1)], and will be padded to the width of the decimal integer representation of (N - 1).</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p>%f</p>
         </td>
         <td>
            <p>the reconstruction-time instant of the frame, in printf-style %f format.</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p>%d</p>
         </td>
         <td>
            <p>the reconstruction-time instant of the frame, rounded to the closest integer, in printf-style %d format.</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p>%A</p>
         </td>
         <td>
            <p>anchor plate ID</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p>%R</p>
         </td>
         <td>
            <p> default reconstruction tree layer name.</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p>%D</p>
         </td>
         <td>
            <p> date format &quot;yyyy-MM-dd&quot;.</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p>%T</p>
         </td>
         <td>
            <p> time format &quot;hh-mm-ss&quot;.</p>
         </td>
      </tr>
   </tbody>
</table>

