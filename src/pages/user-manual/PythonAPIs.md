---
templateKey: 'user-manual'
title: 'Appendix A: Python API Reference'
prev: 'DataMining'
---

Global Functions
================

reconstruct(recon\_files, rotation\_files, time, anchor\_plate\_id, output\_file)
---------------------------------------------------------------------------------

        recon_files = ["input_1.gpml", "input_2.gpml"]

        rot_files = ["rotation.rot"]

        pygplates.reconstruct(recon_files, rot_files, 20, 0, "output.xy")
        pygplates.reconstruct(recon_files, rot_files, 20, 0, "output.shp")
        pygplates.reconstruct(recon_files, rot_files, 20, 0, "output.gmt")

Reconstruct reconstructable and rotaion files. Support three three output file formats ".xy(gmt)", ".shp(shapefile)" and ".gmt(OGRGMT)".

register(object)
----------------

    def register():
            pygplates.Application().register_draw_style(obj)

During GPlates' start-up, all the "register()" functions in Python script files are called. Use this function to register your Python script.

Application
===========

register\_draw\_style(object)
-----------------------------

        pygplates.Application().register_draw_style(obj)

Register a **Draw Style** plugin with GPlates. The **Draw Style** plugin should be an instance of a Python class in which a "get\_style(self, feature, style)" function has been defined.

feature\_collections()
----------------------

       pygplates.Application().feature_collections()

Return a list of feature collections, which currently have been loaded into GPlates.

get\_loaded\_files()
--------------------

        pygplates.Application().get_loaded_files()

Return a list of file names, which currently have been opened by GPlates.

current\_time()
---------------

         pygplates.Application().current_time()

Return current reconstruction time as float number.

Colour
======

Colour(red, green, blue, alpha)
-------------------------------

Construct a colour with the given red, green and blue components.

The parameters represent the percentage of red, green and blue in the resulting colour. They should be in the range \[0.0 - 1.0\] inclusive.

Values outside this range will not be clamped, since OpenGL does its own clamping.

    black = pygplates.Colour(0.0, 0.0, 0.0, 1.0)
    white = pygplates.Colour(1.0, 1.0, 1.0, 1.0)
    red   = pygplates.Colour(1.0, 0.0, 0.0, 1.0)
    green = pygplates.Colour(0.0, 0.5, 0.0, 1.0)

Static members:

-   blue

-   red

-   white

-   black

-   green

-   grey

-   silver

-   purple

-   yellow

-   navy

DrawStyle
=========

Currently, DrawStyle only contains a public member "colour". However it is essential in colouring geometries.

Users can set colour like this:

    style.colour = pygplates.Colour(1.0, 0.0, 0.0, 1.0)

Feature
=======

begin\_time()
-------------

Return "feature begin time" as float number.

end\_time()
-----------

Return "feature end time" as float number.

feature\_id()
-------------

Return "feature id" as a string.

feature\_type()
---------------

Return "feature type" as a string.

get\_all\_property\_names()
---------------------------

Return a list of names(strings) of all properties contained in this feature.

get\_properties()
-----------------

Return all properties in this feature as a list of strings.

get\_properties\_by\_name(name)
-------------------------------

Given a property name, return all properties as a list of strings in this feature which bear this name.

plate\_id()
-----------

Return "plate id" as a integer.

valid\_time()
-------------

Return "start time" and "end time" together as a tuple. The t\[0\] is the "start time", t\[1\] is "end time".

FeatureCollection
=================

size()
------

Return the number of features contained in this feature collection.

features()
----------

Return a list of Feature contained in this feature collection.

Palette
=======

get\_color(key)
---------------

Given a PaletteKey, return a Colour object.

PaletteKey
==========

PaletteKey(int)
---------------

Construct a PaletteKey object from a integer.

PaletteKey(float)
-----------------

Construct a PaletteKey object from a float number.

PaletteKey(str)
---------------

Construct a PaletteKey object from a string.

