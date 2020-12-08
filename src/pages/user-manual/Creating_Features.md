---
templateKey: 'user-manual'
title: 'Chapter 15: Creating New Features'
prev: 'EditGeometries'
next: 'Flowlines'
---

This chapter aims to provide the reader with information and instructions for digitising new features in GPlates.

Digitisation
============

GPlates allows the user to create features on the globe: from aseismic ridges to volcanoes. To create a new feature, a user first "digitises" a new geometry, then specifies the additional properties for that feature. The geometries which GPlates handles are point, polyline (a series of lines drawn end-to-end, forming an open polygon) and polygon. Certain types of features require certain geometries, for example: a volcano uses a point to represent its position; an isochron uses a polyline to represent its center-line; and a basin uses a polygon to represent its outline.

Digitisation Tools
------------------

GPlates offers three digitisation tools in the **Tool Palette**:

![](icons/digitise_polyline_35.png) Polyline Geometry

![](icons/digitise_multipoint_35.png) Point Geometries

![](icons/digitise_polygon_35.png) Polygon Geometry

Each tool can be used to create any of the GPlates GPML features, however it is the user’s responsibility to ensure that the correct geometry is digitised for the intended feature type.

After choosing a geometry tool, you can begin adding control points to the globe by clicking on an area; these points define the geometry (feature) you want to create. (You can still rotate the globe by holding down the `Ctrl` key.) After you have plotted the feature, the latitude and longitude can be verified in the digitisation panel.

![](screenshots/TaskPanel-NewGeometry.png)

Once you are satisfied with the new feature location, click **Create Feature** button to select the type of feature you would like to create. E.g Isochron, Fault, Mid Ocean Ridge etc.

![](screenshots/CreateFeature-1.png)

The next step is to assign a geometry to the feature as well as:

-   Plate ID

-   A begin time for the feature

-   An end time

-   A name (To help you distinguish/classify your feature)

![](screenshots/CreateFeature-2.png)

In the final step of feature creation, the feature is assigned to a feature collection. All data files that are currently loaded in GPlates will be listed here, as well as the **&lt; New Feature Collection &gt;** option. Choosing any one of the existing feature collections and clicking **Create** will add the newly digitised feature to that collection and return the user to the GPlates main window.

![](screenshots/CreateFeature-3.png)

If the **&lt; New Feature Collection &gt;** option is selected, a new feature collection will be created to hold the new feature. This feature collection will not yet have a name, and is not associated with a file on disk. Like all other feature collections, the new one will be found in the **Manage Feature Collections** dialog.

