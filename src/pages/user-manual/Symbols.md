Introduction
============

The Symbols functionality of GPlates allows users to customise the appearance of point features (i.e. features - such as **HotSpots** or **Volcanoes** - which are represented by point geometries). Such point features are by default rendered in GPlates as filled circles, but the Symbols functionality lets the user override this behaviour and represent features on the globe and map with one of several symbols (circle, triangle, square, or cross). The user can control the size and fill-state of these symbols, and can map different symbol types to different features.

Preparing a symbol (\*.sym) file
================================

To use symbols in GPlates, the user should prepare a symbol (**`*.sym`**) file. An example symbol file (**symbol\_file.sym**) is contained in the sample data package, under **SampleData\\SymbolFiles\\**.

Comment lines in the file begin with a \# and are ignored by GPlates. Each (non-comment) line should be of the form:

     feature-type symbol-type symbol-size fill-state

for example:

    MagneticAnomalyIdentification CROSS 2
    Volcano TRIANGLE 4 FILLED
    HotSpot SQUARE 3 FILLED
    Seamount CIRCLE 2 UNFILLED

**feature-type** should be the name of a gpml feature type, such as Volcano, HotSpot etc., but without any gpml: prefix.

**symbol-type** must be one of:

     CIRCLE
     CROSS
     SQUARE
     TRIANGLE

**symbol-size** should be a positive integer.

**fill-state** is optional and should be one of:

     FILLED
     UNFILLED

The default fill-state is FILLED. Not all symbol-types will respect the fill-state (e.g. CROSS).

Using a symbol file
===================

To use a symbol file in GPlates, load it into GPlates through **Features→Load Symbol file…** Loading a new file will overwrite any previously loaded file. The loaded symbol file can be unloaded through **Features→Unload Symbol file**

Restrictions
============

Some restrictions on current symbol file usage:

-   Only one file at a time can be loaded.

-   Symbol rules in the file will apply to all loaded collections.

-   Only point features will be drawn with symbols.

-   Symbol mapping is only by feature type.
