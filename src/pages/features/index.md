---
templateKey: 'simple-page'
path: /features
title: Features of GPlates
---
### What is GPlates?
___

GPlates is desktop software for the interactive visualisation of plate-tectonics.

GPlates offers a novel combination of __interactive plate-tectonic reconstructions__, geographic information system (GIS) functionality and __raster data visualisation__. GPlates enables both the visualisation and the manipulation of plate-tectonic reconstructions and associated data through geological time. GPlates runs on __Windows__, __Linux__ and __MacOS X__.

The goals of GPlates are:

* to handle and visualise data in a variety of geometries and formats, including raster data
* to link plate kinematics to geodynamic models
* to serve as an interactive client in a grid-computing network
* to facilitate the production of high-quality paleo-geographic maps.

<div style="margin-left:20px; background: #f5f5f5;
    border: 1px dashed black; margin-bottom:10px;
    padding: 1rem;">
<h4>What is a plate-tectonic reconstruction?</h4>

<p>The motions of tectonic plates through geological time may be described and simulated using plate-tectonic reconstructions. Plate-tectonic reconstructions are the calculations of the probable positions, orientations and motions of tectonic plates through time, based upon the relative (plate-to-plate) positions of plates at various times in the past which may be inferred from other data. Geological, geophysical and paleo-geographic data may be attached to the simulated plates, enabling a researcher to trace the motions and interactions of these data through time.</p>
</div>

The GPlates program is accompanied by royalty-free [data](/download) and a comprehensive [user manual](/docs).

### What can GPlates do?
___

As of [GPlates 2.2](https://sourceforge.net/projects/gplates/files/gplates/2.2/), GPlates functionality includes:

* loading and saving geological, geographic and tectonic feature data:
    * __loading feature data__ from the following formats:
        * [GPML](/gpml) / compressed GPML
        * Plates4 line-format
        * ESRI Shapefile (including the ability to map shape attributes in a Shapefile to feature properties in GPlates on a user-specified, per-Shapefile basis)
        * GMAP VGP (Virtual Geomagnetic Pole) data files.
    * __saving feature data__ in the following formats:
        * [GPML](/gpml) / compressed GPML
        * Plates4 line-format
        * ESRI Shapefile
        * GMT “xy” format, with a variety of options for headers
    * recording and restoring previous __sessions__ of files opened by the user
    * __cookie-cutting__ and __assigning plate IDs__ to loaded data using plate polygons
* loading and saving reconstruction poles (finite rotations which enable geological, geographic and tectonic features to be reconstructed through geological time):
    * __loading reconstruction poles__ from the following formats:
        * [GPML](/gpml) / compressed GPML
        * Plates4 rotation-format
    * __saving reconstruction poles__ in the following formats:
        * [GPML](/gpml) / compressed GPML
        * Plates4 rotation-format
* displaying raster images:
    * __loading multiple raster images__ in JPEG and NetCDF format, including __time-sequences__ of raster images, to enable visualisation of “gridded” geophysical data such as mantle density anomalies, mantle convection-driven dynamic surface topography and the [crustal age or spreading rate of the ocean floor](/download) — both:
        * global raster images, which are assumed to cover the whole globe, from -180 to +180 degrees longitude and -90 to +90 latitude, and
        * smaller rasters with regional georeferencing and potentially projected spatial reference system
    * __cookie-cutting__ raster images using static plate polygons.
    * __reconstructing__ raster images along with vector data.
* viewing feature data and raster images in a graphical display:
    * displaying geological, geographic and tectonic features, as well as raster images, on the globe, in any of the following map-projections:
        * 3-D Orthographic Globe
        * Rectangular
        * Mercator
        * Mollweide
        * Robinson
    * moving and re-orienting the camera (the viewpoint of the user), by “dragging” the mouse on the globe, using the keyboard arrow keys, or specifying the desired viewpoint in a dialog box
    * activating a __full-screen presentation mode__, by pressing F11 to switch to a minimalist interface ideal for demonstrating data and animations on digital projectors
    * zooming the camera, using the scroll-wheel of the mouse, the Zoom In tool, or the slider on the right-hand-side of the reconstruction view
    * choosing different colouring schemes for vector features and for NetCDF gridded data
    * __exporting a 2-D geometry snapshot__ of the current projected contents of the reconstruction view in Scalable Vector Graphics (SVG) format, for later viewing in a web-browser or vector-graphics editor such as Adobe Illustrator
    * annotating the view with text including the current reconstruction time
    * managing loaded data as a series of layers allowing fine control over feature visibility
* calculating and displaying plate-tectonic reconstructions:
    * __reconstructing features__ to a desired geological time-instant, or animating over a period of geological time
    * __exporting “reconstructed geometries”__ (feature geometries at a particular reconstruction time in the past) in the following formats:
        * ESRI Shapefile
        * GMT “xy” format, with a variety of options for headers
    * calculating __velocity fields__ according to plate motions
    * displaying __flowlines__ and __motion paths__ visualising plate motion
    * exporting __“data animations”__ — each frame of a reconstruction animation saved automatically to disk in a sequence of files:
        * all reconstructed feature geometries (as GMT .xy files or Shapefiles)
        * a 2-D vector graphics snapshot of the view (as SVG files)
        * a 2-D bitmap image snapshot of the view (as PNG, etc. files)
        * numerical raster data (as NetCDF, GeoTIFF, etc. files) in rectangular projection
        * colour raster data (as PNG, etc. files) in rectangular projection
        * all velocity fields (as GPML files)
        * resolved topologies as a sequence of static polygons (as GMT .xy files)
        * equivalent total and stage rotation data
        * flowlines and motion paths
* interacting with features graphically:
    * __choosing a feature__, to __query__ or __edit__ its properties, by clicking upon its displayed geometry
    * __digitisation__ of new geometries for the creation of __new features__
    * modifying the geometry of a feature interactively by __dragging vertices, inserting vertices, deleting vertices__, or __splitting__ a feature into two at a given point.
    * __measuring distances__, along the geometry of existing features, during digitisation, or between arbitrary user-chosen points on the globe.
    * __cloning__ features to modify copies of a feature
* tabular display of data:
    * listing __tables of reconstruction poles__ (finite rotations) for the current reconstruction time:
        * relative and equivalent rotations for each plate
        * a tree-like representation of the rotation hierarchy
        * the circuit between any plate and the stationary reference frame
    * listing __total reconstruction sequences__ for loaded rotation files:
        * displaying metadata associated with GPlates Rotation (GROT) files
        * editing total reconstruction poles and inserting new ones
    * __exporting__ tables of __reconstruction poles__ in CSV (comma-separated value) format, for later viewing in a spreadsheet such as Microsoft Excel.
    * listing __tables of Shapefile attributes__ on a per-file basis, with one attribute per column
* modifying reconstructions graphically:
    * __manipulation of reconstruction poles__ by dragging the mouse cursor to move plates, including the ability to constrain the latitude, or constrain to a stage pole, during the interactive adjustment.
* interactive __plate-boundary closure__, enabling GPlates to generate plate-tectonic boundary conditions for geodynamic models in software such as:
    * the widely-used, open-source, spherical mantle-convection package [CitComS](https://geodynamics.org/cig/software/citcoms/)
    * the next-generation AuScope-funded mantle-convection package [Underworld](https://www.underworldcode.org/)
* a suite of __virtual geomagnetic pole__ tools:
    * create new VGPs
    * calculate reconstruction poles based on VGPs
    * configure the visualisation of VGP data

### What's next in GPlates?

---

Future functionality will include:

* Improved symbology (line symbols, polygon fill patterns, map symbols to feature properties)
* Another Python library for GPlates
