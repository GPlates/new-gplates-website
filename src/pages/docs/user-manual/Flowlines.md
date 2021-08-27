---
templateKey: 'user-manual'
title: 'Chapter 16: Flowlines'
chapterNo: 16
prev: 'Creating_Features'
next: 'MotionPaths'
---

1 Introduction
============

Flowlines represent the movement of material away from a spreading centre, and are calculated based on half stage-poles between two plates at specified time-intervals. GPlates can generate and export flowlines.

2 Creating flowlines
==================

To use flowlines in GPlates, you need to create or load a flowline feature. Flowline features can be created, like other features, with the digitisation tool. See [Creating New Features](/docs/user-manual/Creating_Features/) for more information on using the digitisation tool. To create a flowline, begin by selecting the **Point Geometries** icon from the **Tool Palette**:

<span style="display:inline-block; width:30px; vertical-align:middle;"><img src="icons/digitise_multipoint_35.png" /> </span> Point Geometries

After choosing the Point Geometries tool, select points on the globe which represent the flowline spreading centre, or either of the flowline end points. Later in the creation process you can instruct GPlates which sort of point you have chosen. Once you are satisfied with the locations, click the **Create Feature** button and select **Flowline** as the desired feature type.

<table class ="note">
   <tbody>
      <tr>
         <td class="icon">
            <img src="./images/icons/note.png" alt="Note">
         </td>
         <td class="content" >Flowlines can be created at any reconstruction time.</td>
      </tr>
   </tbody>
</table>

![](screenshots/CreateFeatureFlowline1.win32.png)

Next, select how GPlates should interpret your chosen point geometries - as spreading centres, as Left-plate end-point(s), or as Right-plate end-point(s) of flowlines. Then you must allocate left and right plate ids - representing the plates on either side of the flowline - and times of appearance and disappearance. You finish with naming the new flowline feature. - See the description of [Plate IDs](/docs/user-manual/Reconstructions/#plate-ids) in the Reconstructions chapter for more information as to what they are.

<table class ="note">
   <tbody>
      <tr>
         <td class="icon">
            <img src="./images/icons/note.png" alt="Note">
         </td>
         <td class="content" >Flowlines will only be generated between the feature’s time of appearance and time of disappearance.</td>
      </tr>
   </tbody>
</table>

![](screenshots/CreateFeatureFlowline2.win32.png)

Next you can add new properties from the **Available properties** section, in addition to editing or removing **Existing properties**.

![](screenshots/CreateFeatureFlowline3.win32.png)

By clicking "**+ Add**" under **Available properties**, you are diverted to the next dialog, in which you can add any feature from the available properties list. Here you specify the Property Name, Type, and Time frame by either inserting a single time, or multiple times in particular increments. 

![](screenshots/CreateFeatureFlowline4.win32.png)

Finally assign your new flowline feature to a feature collection.

![](screenshots/CreateFeatureFlowline5.win32.png)

After creating your flowline feature you should see the reconstructed flowline(s) on the globe or map. Flowlines will automatically reconstruct appropriately for the current reconstruction time.

![](screenshots/FlowlineScreenshot.win32.png)

3 Saving flowlines
================

Flowline feature collections can be saved in **gpml** format and loaded like other feature collections.

4 Editing flowlines
=================

Flowline features can be edited like other features by selecting **Choose Feature** from the **Tool Palette** and clicking on the central seed point of the flowline.

5 Exporting flowlines
===================

Reconstructed flowline geometries can be exported to GMT, Shapefiles, OGR-GMT, or GeoJSON format. To export flowlines, select **Export…** from the **Reconstruction** menu. After selecting **Add Export...**, you can select Flowlines as the export data type.

![](screenshots/FlowlineExport.win32.png)

When exporting to GMT format, each reconstructed flowline point is output in the form (lon, lat, time). You are given the Export File Options to Export to a single file or to multiple files, in addition to create a separate output directory per input file/layer. 

When exporting Shapefiles, OGR-GMT, or GeoJSON, you are given the option to **wrap the polyline and polygon geometries to the dateline**. By checking this option, you are enabling the polyline or polygon geometries to be clipped to the dateline (if they intersect it) and wrapped to the other side as needed. 

<table class ="note">
   <tbody>
      <tr>
         <td class="icon">
            <img src="./images/icons/note.png" alt="Note">
         </td>
         <td class="content" >Keeping in mind however, that this can break a polyline into multiple polylines or a polygon into multiple polygons - and once saved this process is irresversible - in other words reloading the saved file with not undo the wrapping. </td>
      </tr>
   </tbody>
</table>

<table class ="note">
   <tbody>
      <tr>
         <td class="icon">
            <img src="./images/icons/note.png" alt="Note">
         </td>
         <td class="content" >This option is provided to support <b>ArcGIS</b> users as it prevents horizontal lines across the display when viewing geometries. The option is checked by default when you choose to export the flowline data as Shapefiles.</td>
      </tr>
   </tbody>
</table>


**Example of an exported flowline GMT file:.**

```
>reconstructionTime 0 
>test-flow-points.gpml 
>Flowline <identity>GPlates-a5e5b41c-089a-4d3f-a877-b5cc0088f43f</identity> <revision>GPlates-550e75b5-5d27-4146-b83d-93ccfa3be165</revision> 
>Left plate: 802 
>Right plate: 801 
>Times: 0,5,10,15,20,25,30,35,40,45,50 
>Seed point: Lat: -50.3407, Lon: 139.229 
>Left-plate flowline 
139.229000 -50.340700 0.000000 
139.197261 -51.887165 5.000000 
139.325022 -53.317310 10.000000 
139.565701 -54.653181 15.000000 
139.856508 -55.970876 20.000000 
140.163463 -57.330579 25.000000 
140.449153 -58.889273 30.000000 
140.746852 -60.278992 35.000000 
141.049859 -61.184592 40.000000 
141.374462 -61.686198 45.000000 
141.655807 -62.007476 50.000000
```


