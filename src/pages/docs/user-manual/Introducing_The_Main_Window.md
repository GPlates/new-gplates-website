---

templateKey: 'user-manual'
title: 'Chapter 2: Introducing The Main Window'
prev: 'Introduction_Gplates'
next: 'DataFileTypes'

---

This section describes the **Main Window**, the heart of the GPlates user interface. Below we present annotated screenshots of GPlates, label the key areas of the window, and provide a brief overview of each.

The Main Window
===============

When you start GPlates, the first window you will encounter is the **Main Window**. This contains your view of the globe, and is the starting-point of all tasks within GPlates. It is here that you can control your view of the globe, choose your reconstruction time, load and unload data, and interact with geological features.

![](./screenshots/MainWindow-Callouts.png)

<table>
   <colgroup>
      <col style="width: 13%" />
      <col style="width: 28%" />
      <col style="width: 57%" />
   </colgroup>
   <thead>
      <tr class="header">
         <th style="text-align: left;">Item</th>
         <th style="text-align: left;">Name</th>
         <th style="text-align: left;">Description</th>
      </tr>
   </thead>
   <tbody>
      <tr class="odd">
         <td style="text-align: left;">1</td>
         <td style="text-align: left;">Menu Bar</td>
         <td style="text-align: left;">This region of the Main Window contains the titles of the menus.</td>
      </tr>
      <tr class="even">
         <td style="text-align: left;">2</td>
         <td style="text-align: left;">Tool Palette</td>
         <td style="text-align: left;">A collection of tools which are used to interact with the globe and geological features via the mouse pointer.</td>
      </tr>
      <tr class="odd">
         <td style="text-align: left;">3</td>
         <td style="text-align: left;">Time Controls</td>
         <td style="text-align: left;">A collection of user-interface controls for precise control of the reconstruction time.</td>
      </tr>
      <tr class="even">
         <td style="text-align: left;">4</td>
         <td style="text-align: left;">Animation Controls</td>
         <td style="text-align: left;">A collection of tools to manipulate the animation of reconstructions.</td>
      </tr>
      <tr class="odd">
         <td style="text-align: left;">5</td>
         <td style="text-align: left;">Zoom Slider</td>
         <td style="text-align: left;">A mouse-controlled slider which controls the zoom level of the Globe View camera.</td>
      </tr>
      <tr class="even">
         <td style="text-align: left;">6</td>
         <td style="text-align: left;">Task Panel</td>
         <td style="text-align: left;">Task-specific information and controls which correspond to the currently-activated tool.</td>
      </tr>
      <tr class="odd">
         <td style="text-align: left;">7</td>
         <td style="text-align: left;">View Control</td>
         <td style="text-align: left;">Controls which projection is used to display data and the exact zoom level as a percentage.</td>
      </tr>
      <tr class="even">
         <td style="text-align: left;">8</td>
         <td style="text-align: left;">Camera Coordinate</td>
         <td style="text-align: left;">An information field which indicates the current globe position of the Globe View camera.</td>
      </tr>
      <tr class="odd">
         <td style="text-align: left;">9</td>
         <td style="text-align: left;">Mouse Coordinate</td>
         <td style="text-align: left;">An information field which indicates the current globe position of the mouse pointer.</td>
      </tr>
      <tr class="even">
         <td style="text-align: left;">10</td>
         <td style="text-align: left;">Clicked Geometry Table</td>
         <td style="text-align: left;">Displays a summary of each geometry or feature touched by the last mouse click.</td>
      </tr>
   </tbody>
</table>

<table>
   <tbody>
      <tr>
         <td class="icon" style="width:5rem; display:inline-table;">
            <img src="./images/icons/important.png" alt="Important" style="width:3rem;">
         </td>
         <td class="content">The appearance of the <strong>Main Window</strong> - particularly the layout of the different window components - will change as GPlates continues to evolve.</td>
      </tr>
   </tbody>
</table>

Reconstruction View
===================

The reconstruction view provides the user with a display of their data on the GPlates globe or map reconstructed to a moment in time. Control of the current reconstruction time, is located under the menu bar on the left, (see image below). The time can be controlled by both a text field, forwards and backwards time buttons, and the animation slider. In addition the shortcut `Ctrl+T` to enter a time value in the text field.

![](./screenshots/ReconstructionView-DynTopo.png)

Camera Control
--------------

When <span style="display:inline-block;width:30px;"><img src='./icons/globe_rotation_35.png' /> </span>Drag Globe tool is activated the GPlates globe can be re-oriented freely using the mouse with a simple click and drag motion. If another tool is selected the globe can still be dragged by holding down `Ctrl`.

If the user wishes to adjust the camera position to a particular latitude and longitude, pressing `Ctrl+Shift+L` will pop up a window allowing manual entry of coordinates.

![](screenshots/SetCameraViewpoint.png)

The amount of camera zoom can be controlled by the following:

-   Zoom In via mouse-wheel up.

-   Zoom Out via mouse-wheel down.

-   Zoom Control field allowing direct entry of percentage value (between 100% and 10000%). Click the text field, type in a new value and press Enter to change the zoom.

-   Zoom Slider, which works on a power scale.

-   Keyboard shortcuts: use the *+* and *-* keys to zoom in and out, and the *1* key to reset the zoom level to 1:1 (100%) scale.

The position of the camera and mouse pointer are provided along the bottom of the reconstruction view.

The Menu Bar
============

Each item in a menu is an operation. Related operations are grouped into menus, with the menu title indicating the common theme. For example, the **View Menu** in the image below contains operations which manipulate the user’s view of the globe. Within a menu, similar operations are grouped visually by horizontal lines or within sub-menus. In the **View Menu** below, the **Camera Location**, **Camera Rotation**, and **Camera Zoom** controls are grouped into their own sub-menus.

![](screenshots/Menu-View-Camera.png)

Some menu items use check boxes or tick marks to *switch* or *choose* operations. For example; **Show Bottom Panel** in the **Window** menu is activated by a small cross or tick that will be displayed next to the menu item when selected.

Tool Palette
============

The **Tool Palette** is used to control your view and interaction with the GPlates globe and maps. You may recognise the concept of tools from graphics editing software (e.g. drawing tools in Photoshop ) or GIS software (e.g. ArcGIS mapping tools).

The **Tool Palette** includes camera positioning tools, feature selection tools and drawing tools. A tool is activated by clicking on it; only one tool can be active at any time. The task panel will reflect the current tool that is activated.

<table>
   <colgroup>
      <col style="width: 11%" />
      <col style="width: 22%" />
      <col style="width: 11%" />
      <col style="width: 55%" />
   </colgroup>
   <tbody>
      <tr class="odd">
         <td>
            <p>Icon</p>
         </td>
         <td>
            <p>Tool</p>
         </td>
         <td>
            <p>Shortcut</p>
         </td>
         <td>
            <p>Operation</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p><img src="icons/globe_rotation_35.png" alt="icons/globe_rotation_35.png" /></p>
         </td>
         <td>
            <p>Drag Globe</p>
         </td>
         <td>
            <p>D</p>
         </td>
         <td>
            <p>Drag to re-orient the globe. <code>Shift+drag</code> to rotate the globe</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p><img src="icons/globe_zoom_35.png" alt="icons/globe_zoom_35.png" /></p>
         </td>
         <td>
            <p>Zoom In</p>
         </td>
         <td>
            <p>Z</p>
         </td>
         <td>
            <p>Click to zoom in. <code>Shift+click</code> to zoom out. <code>Ctrl+drag</code> to re-orient the globe</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p><img src="icons/calipers.png" alt="icons/calipers.png" /></p>
         </td>
         <td>
            <p>Measure</p>
         </td>
         <td>
            <p>S</p>
         </td>
         <td>
            <p>Click to measure distance between points, or measure the selected feature’s geometry</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p><img src="icons/africa_highlight_clicked_35.png" alt="icons/africa_highlight_clicked_35.png" /></p>
         </td>
         <td>
            <p>Choose Feature</p>
         </td>
         <td>
            <p>F</p>
         </td>
         <td>
            <p>Click a geometry to choose a feature. <code>Shift+click</code> to query immediately. Ctrl+drag to re-orient globe</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p><img src="icons/digitise_polyline_35.png" alt="icons/digitise_polyline_35.png" /></p>
         </td>
         <td>
            <p>Digitise Polyline Geometry</p>
         </td>
         <td>
            <p>L</p>
         </td>
         <td>
            <p>Click to draw a new vertex. <code>Ctrl+drag</code> to re-orient the globe</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p><img src="icons/digitise_multipoint_35.png" alt="icons/digitise_multipoint_35.png" /></p>
         </td>
         <td>
            <p>Digitise Multi-point Geometry</p>
         </td>
         <td>
            <p>M</p>
         </td>
         <td>
            <p>Click to draw a new point. <code>Ctrl+drag</code> to re-orient the globe</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p><img src="icons/digitise_polygon_35.png" alt="icons/digitise_polygon_35.png" /></p>
         </td>
         <td>
            <p>Digitise Polygon Geometry</p>
         </td>
         <td>
            <p>G</p>
         </td>
         <td>
            <p>Click to draw a new vertex. <code>Ctrl+drag</code> to re-orient the globe</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p><img src="icons/move_vertex_35.png" alt="icons/move_vertex_35.png" /></p>
         </td>
         <td>
            <p>Move Vertex</p>
         </td>
         <td>
            <p>V</p>
         </td>
         <td>
            <p>Drag to move a vertex of the current feature. You can still drag the globe around</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p><img src="icons/insert_vertex_35.png" alt="icons/insert_vertex_35.png" /></p>
         </td>
         <td>
            <p>Insert Vertex</p>
         </td>
         <td>
            <p>I</p>
         </td>
         <td>
            <p>Insert a new vertex into the feature geometry</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p><img src="icons/delete_vertex_35.png" alt="icons/delete_vertex_35.png" /></p>
         </td>
         <td>
            <p>Delete Vertex</p>
         </td>
         <td>
            <p>X</p>
         </td>
         <td>
            <p>Remove a vertex from a multi-point, polyline or polygon geometry</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p><img src="icons/split_geometry_35.png" alt="icons/split_geometry_35.png" /></p>
         </td>
         <td>
            <p>Split Feature</p>
         </td>
         <td>
            <p>T</p>
         </td>
         <td>
            <p>Click to split the geometry of the selected feature at a point to create two features</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p><img src="icons/plate_move_pole_35.png" alt="icons/plate_move_pole_35.png" /></p>
         </td>
         <td>
            <p>Move Pole</p>
         </td>
         <td>
            <p>O</p>
         </td>
         <td>
            <p>Change the pole location used by the Modify Reconstruction Pole tool</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p><img src="icons/africa_pole_rotation_35.png" alt="icons/africa_pole_rotation_35.png" /></p>
         </td>
         <td>
            <p>Modify Reconstruction Pole</p>
         </td>
         <td>
            <p>P</p>
         </td>
         <td>
            <p>Drag or <code>Shift+drag</code> the current geometry to modify its reconstruction pole. <code>Ctrl+drag</code> to re-orient the globe by holding down <code>Ctrl</code></p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p><img src="icons/topology_build_line_35.png" alt="icons/topology_build_line_35.png" /></p>
         </td>
         <td>
            <p>Build New Line Topology</p>
         </td>
         <td>
            <p>H</p>
         </td>
         <td>
            <p>Create a new dynamic polyline (for use as a section in a dynamically closing plate polygon) by adding sections of other features that define a line</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p><img src="icons/africa_topology_final_build2.png" alt="icons/africa_topology_final_build2.png" /></p>
         </td>
         <td>
            <p>Build New Boundary Topology</p>
         </td>
         <td>
            <p>B</p>
         </td>
         <td>
            <p>Create a new dynamically closing plate polygon by adding sections of other features (and dynamic polylines) that define a boundary</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p><img src="icons/africa_topology_final_edit2.png" alt="icons/africa_topology_final_edit2.png" /></p>
         </td>
         <td>
            <p>Edit Topology Sections</p>
         </td>
         <td>
            <p>E</p>
         </td>
         <td>
            <p>Edit the selected topological feature’s sections</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p><img src="icons/small_circle_35.png" alt="icons/small_circle_35.png" /></p>
         </td>
         <td>
            <p>Create Small Circle</p>
         </td>
         <td>
            <p>C</p>
         </td>
         <td>
            <p>Create small circles using mouse to define centre and radii, or enter manually, or generate centre from a stage pole</p>
         </td>
      </tr>
   </tbody>
</table>

The tools are arranged into groups (tabs in the **Tool Palette**). For example the **Digitisation** group is used when digitising new geometries and the **Feature Inspection** group is used when querying existing features. Some tools appear in more than one group. For example the **Move Vertex** tool appears in both the **Digitisation** and **Feature Inspection** groups since it is used in the **Digitisation** group to modify newly digitised geometries and it is used in the **Feature Inspection** group to modify geometries of existing features.

![](screenshots/ToolPaletteDigitisationMoveVertex.png) ![](screenshots/ToolPaletteFeatureInspectionMoveVertex.png)

The availability of certain tools within a group can change depending on what you currently have selected. For instance, the **Modify Reconstruction Pole** tool can only be used once a feature to be modified has been selected with the **Choose Feature** tool.

The tools are also accessible via the **Tools** menu which also shows the shortcut key for each tool. The **Tools** menu also contains a check box **Use Small Icons** that reduces the size of the tool icons in the **Tool Palette**. This is useful if your screen resolution is low enough to force the bottom tools off the screen - this can happen if you are using a low-resolution screen projector.

List of Menu Operations
=======================

-   A description of the operations within each menu will be explained in further detail in their respective chapters.

-   Shortcut keys are listed beside some menu items. On Mac OS, please substitute the `Command` (⌘) key in place of `Ctrl`.

<table>
   <tbody>
      <tr>
         <td class="icon" style="width:5rem; display:inline-table;">
            <img src="./images/icons/note.png" alt="Note" style="width:3rem;">
         </td>
         <td class="content">Clicking on a menu item from the list below will take you to the appropriate chapter for further information</td>
      </tr>
   </tbody>
</table>


File
----

-   [Open Feature Collection](/user-manual/LoadingAndSaving) `[Ctrl+O]`

-   [Open Recent Session](/user-manual/LoadingAndSaving)

-   [Import Raster](/user-manual/DataFileTypes)

-   [Import Time-Dependent Raster](/user-manual/DataFileTypes)

-   Connect WFS

-   [Manage Feature Collections](/user-manual/LoadingAndSaving) `[Ctrl+M]`

-   [View Read Errors](/user-manual/LoadingAndSaving)

-   Quit `[Ctrl+Q]`

Edit
----

-   Undo `[Ctrl+Z]`

-   Redo `[Ctrl+Y]`

-   [Query Feature](/user-manual/Interacting_Features/) `[Ctrl+R]`

-   [Edit Feature](/user-manual/Creating_Features) `[Ctrl+E]`

-   [Copy Geometry to Digitise Tool](/user-manual/Creating_Features)

-   [Clone Feature](/user-manual/Creating_Features)

-   Delete Feature `[Delete]`

    Deletes the currently chosen feature and removes it from the feature collection that contained it. Note that the feature collection is marked as modified but is not automatically saved to file (see the **Loading And Saving** chapter).

-   Preferences `[Ctrl+Comma]`

View
----

-   [Set Projection](/user-manual/Controlling_View)

-   [Camera Location](/user-manual/Controlling_View)

    -   Set Location `[Ctrl+Shift+L]`

    -   Move Up

    -   Move Down

    -   Move Left

    -   Move Right

-   [Camera Rotation](/user-manual/Controlling_View)

    -   Rotate Clockwise `[]]`

    -   Rotate Anti-clockwise `[[]`

    -   Reset Orientation `[^]`

-   [Camera Zoom](/user-manual/Controlling_View)

    -   Set Zoom

    -   Zoom In

    -   Zoom Out

    -   Reset Zoom

-   Configure Text Overlay

-   Configure Graticules

-   Choose Background Colour

-   Show Stars

-   Geometry Visibility

    -   Show Point Geometries

    -   Show Line Geometries

    -   Show Polygon Geometries

    -   Show Multipoint Geometries

    -   Show Arrow Decorations

Features
--------

-   [Manage Colouring](/user-manual/Controlling_View)

-   [View Total Reconstruction Sequences](/user-manual/Reconstructions)

-   [View Shapfile Attributes](/user-manual/DataFileTypes)

-   Create VGP

-   [Assign Plate IDs](/user-manual/Reconstructions)

-   [Generate Mesh Caps](/user-manual/Reconstructions)

Reconstruction
--------------

-   [Reconstruct to Time](/user-manual/Reconstructions) `[Ctrl+T]`

-   [Step Backward One Frame](/user-manual/Reconstructions) `[Ctrl+Shift+I]`

-   [Step Forward One Frame](/user-manual/Reconstructions) `[Ctrl+I]`

-   [Reset Animation](/user-manual/Reconstructions)

-   [Play Animation](/user-manual/Reconstructions)

-   [Configure Animation](/user-manual/Reconstructions)

-   [Specify Anchored Plate ID](/user-manual/Reconstructions) `[Ctrl+D]`

-   [View Total Reconstruction Poles](/user-manual/Reconstructions) `[Ctrl+P]`

-   [Export](/user-manual/Export)

Utilities
---------

-   Calculate Reconstruction Pole

-   [Open Python Console](/user-manual/Python) `[F12]`

Tools
-----

-   Use Small Icons

-   [Drag Globe](/user-manual/Controlling_View) `[D]`

-   [Zoom In](/user-manual/Controlling_View) `[Z]`

-   Measure `[S]`

-   [Choose Feature](/user-manual/Interacting_Features) `[F]`

-   [Digitise New Polyline Geometry](/user-manual/Creating_Features) `[L]`

-   [Digitise New Multi-point Geometry](/user-manual/Creating_Features) `[M]`

-   [Digitise New Polygon Geometry](/user-manual/Creating_Features) `[G]`

-   [Move Geometry](/user-manual/Interacting_Features) `[Y]`

-   [Move Vertex](/user-manual/Interacting_Features) `[V]`

-   [Insert Vertex](/user-manual/Interacting_Features) `[I]`

-   [Delete Vertex](/user-manual/Interacting_Features) `[X]`

-   [Split Feature](/user-manual/Interacting_Features) `[T]`

-   [Modify Reconstruction Pole](/user-manual/Pole_Manipulation) `[P]`

-   [Build New Topology](/user-manual/Topology_Tools) `[B]`

-   [Edit Topology Sections](/user-manual/Topology_Tools) `[E]`

-   [Create Small Circle](/user-manual/SmallCircles) `[C]`

Window
------

-   Open New Window `[Ctrl+N]`

    Creates a new instance of GPlates. Currently each instance created this way is completely separate with its own main window and dialogs. Any program state such as files loaded prior to selecting **New Window** is not transferred across to the new instance. This feature is useful mainly for Mac OS X where it is not possible to run multiple instances of the same application from the *Finder*.

-   [Show Layers](/user-manual/Layers) `[Ctrl+L]`

-   Log

-   [Show Bottom Panel](/user-manual/Controlling_View)

-   [Full Screen](/user-manual/Controlling_View) `[F11]`

Help
----

-   View Online Documentation

-   About
