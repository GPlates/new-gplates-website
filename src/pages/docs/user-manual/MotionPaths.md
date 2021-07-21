---
templateKey: 'user-manual'
title: 'Chapter 17: Motion Paths'
prev: 'Flowlines'
next: 'SmallCircles'
---

1 Introduction
============

Motion Paths illustrate the movement of plates over time, either with respect to the anchor plate, or with respect to some other specified plate.

2 Creating Motion Paths
=====================

To use motion paths in GPlates, you need to create or load a motion path feature. Motion path features can be created, like other features, with the digitisation tool. See **Creating New Features** for more information on using the digitisation tool. To create a motion path, begin by selecting the **Multi-point Geometries** icon from the **Tool Palette**:

<span style="display:inline-block; width:30px; vertical-align:middle;"><img src="icons/digitise_multipoint_35.png" /> </span> Multi-point Geometries

After choosing the Multi-point Geometries tool, select points on the globe which you wish to track. Once you are satisfied with the locations, click the **Create Feature** button and select **MotionPath** as the desired feature type.

<table class ="note">
   <tbody>
      <tr>
         <td class="icon">
            <img src="./images/icons/note.png" alt="Note">
         </td>
         <td class="content" >Motion Paths can be created at any reconstruction time.</td>
      </tr>
   </tbody>
</table>

![](screenshots/CreateFeatureMotionPath1.win32.png)

Next allocate a plate id, relative plate id, the times of appearance and disappearance, as well as a Name if you desire.

<table class ="note">
   <tbody>
      <tr>
         <td class="icon">
            <img src="./images/icons/note.png" alt="Note">
         </td>
         <td class="content" >Motion paths will only be generated between the feature’s time of appearance and time of disappearance.</td>
      </tr>
   </tbody>
</table>

![](screenshots/CreateFeatureMotionPath2.win32.png)

Next, you can adjust the existing properties, including the relative plate in which the motion in calculated in reference to, or you can add new properties such as quality, name, reconstruction method etc.

<table class ="note">
   <tbody>
      <tr>
         <td class="icon">
            <img src="./images/icons/note.png" alt="Note">
         </td>
         <td class="content" >To display the absolute motion (with respect to the mantle), set the relative plate id to zero.</td>
      </tr>
   </tbody>
</table>

![](screenshots/CreateFeatureMotionPath3.win32.png)

Finally assign your new motion path feature to a feature collection.

![](screenshots/CreateFeatureMotionPath4.win32.png)

After creating your motion path feature you should see the reconstructed motion path(s) on the globe or map. Motion paths will automatically update appropriately for the current reconstruction time.

![](screenshots/MotionPathScreenshot.win32.png)

3 Saving motion paths
===================

Motion path feature collections can be saved in **gpml** format and loaded like other feature collections.

4 Editing motion paths
====================

Motion path features can be edited like other features by selecting **Choose Feature** from the **Tool Palette** and clicking on the end point of the motion path.

5 Exporting motion paths
======================

Reconstructed motion path geometries can be exported to GMT, Shapefiles, OGR-GMT, and GeoJSON formats. To export motion paths, select **Export…** from the **Reconstruction** menu. After selecting **Add Export...**, you can select Motion Paths as the export data type.

![](screenshots/MotionPathExport.win32.png)

When exporting to GMT format, each reconstructed motion path point is output in the form (lon, lat, time).

**Example of an exported motion path GMT file:.**

```
> anchorPlateId 0 
> reconstructionTime 0 
>
> MotionPath <identity>GPlates-a3c24577-4137-4226-aba4-bde5427cba32</identity> <revision>GPlates-f11fa5f9-bf1d-4000-b6af-eaa465ceea0d</revision> 
> Recostruction plate id: 102 
> Relative plate id: 301 
> 0,10,20,30,40,50,60,70,80,90,100
> Seed point: Lat: 62.9712, Lon: -40.1395 
> Motion path 
-16.213502 58.361165 100.000000 
-16.625527 58.450034 90.000000 
-16.934371 58.691767 80.000000 
-17.076489 58.742035 70.000000 
-17.763448 59.146028 60.000000 
-21.656092 60.522007 50.000000 
-25.174028 61.902590 40.000000 
-28.717604 62.347711 30.000000 
-31.941397 62.609357 20.000000 
-36.158642 62.825853 10.000000 
-40.139488 62.971198 0.000000
```

