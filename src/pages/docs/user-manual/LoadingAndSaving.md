---
templateKey: 'user-manual'
title: 'Chapter 3: Loading and Saving'
chapterNo: 3
prev: 'Introducing_The_Main_Window'
next: 'Import'
---

Before you load any data into GPlates the globe will appear as a blank sphere; in order to start with GPlates you will need to know how to load, save and unload data.

<table class ="tip">
   <tbody>
      <tr>
         <td class="icon">
            <img src="./images/icons/tip.png" alt="Tip">
         </td>
         <td class="content">You can still manipulate the view of the globe even though it’s blank. See the chapter <b>Controlling the View</b> for more details.</td>
      </tr>
   </tbody>
</table>

1 Introducing Feature Collections
===============================

When a data file is loaded in GPlates, it is loaded in a **Feature Collection**. All data in GPlates are represented as features (e.g. MOR, volcano, etc) — whether geological data or reconstruction data. Regardless of the file format, all features will be contained internally as GPlates features. However GPlates *will* remember the name and format of the file for saving.

All data loaded in GPlates are represented as **features**; all data-manipulation functions are operations upon features. GPlates offers a rich variety of feature types, enabling GPlates to handle geographic, paleo-geographic, geological and tectonic data. Basin, Coastline, Craton, Fault, Hotspot, Isochron, Mid-Ocean Ridge, Seamount, Subduction Zone, Suture and Volcano are just some of the many feature types handled by GPlates. The meta-data attributes of data are contained within named **properties** of the features.

GPlates is able to load and save a number of data-file formats (e.g. PLATES4). When a data file is loaded in GPlates, the data will be converted to the appropriate types of features and placed into a **Feature Collection**. One **Feature Collection** in GPlates corresponds to one data file on the disk. Even though the data have been converted to GPlates features, GPlates will remember the name and original format of the file for saving.

When the features are saved, they will be converted back to their original data format. It is also possible to save features into different data formats using the "Save As" or "Save a Copy" buttons in the Manage Feature Collections dialog. To specify a different file format, change the file-name extension (e.g ".gpml", ".dat", etc) to the extension for the desired format.

2 How to Load a File
==================

There are several ways to load a data file or collection of files into GPlates.

2.1 The Open Feature Collection menu item
-------------------------------------

1.  Go to the **File Menu** in the menu bar.

2.  Scroll down to **Open Feature Collection** (shortcut: `Ctrl+O`).

3.  A classic File Open dialog window will appear; select the file to be loaded.

![](screenshots/Open-SingleFile.png)

<table class ="tip">
   <tbody>
      <tr>
         <td class="icon">
            <img src="./images/icons/tip.png" alt="Tip">
         </td>
         <td class="content">You can open multiple files at once via this dialog. Hold down <b>Ctrl</b> to select additional files, then click <strong>Open</strong>.</td>
      </tr>
   </tbody>
</table>


2.2 Drag and Drop
-------------

1.  Open your file browser to the directory containing the files you want to load.

2.  Select the files you are interested in; Multiple selection is usually possible by dragging a rectangle around files or holding `Ctrl` while clicking.

3.  Drag these files into the GPlates **Main Window**.

<table class ="tip">
   <tbody>
      <tr>
         <td class="icon">
            <img src="./images/icons/tip.png" alt="Tip">
         </td>
         <td class="content" >It is also possible to add <strong>CPT</strong> files to the <strong>Manage Colouring</strong> dialog in this way.</td>
      </tr>
   </tbody>
</table>


2.3 The Open Recent Session and Open Project menu items
----------------------------

Whenever you close GPlates, it automatically remembers which set of files you were working on last time. You can resume your previous session by using the menu.

You can also open a project file containing a previous session that you explicitly saved to a project file.

See the [Projects and Recent Sessions](/docs/user-manual/Projects_and_Recent_Sessions/) chapter for more information.

2.4 How do I load a raster image in GPlates?
----------------------------------------

To load a raster image into GPlates it must first have a GPML file associated with it. This is done by *importing* the raster into GPlates. This only needs to be done once for each raster. After that you can simply load the GPML file (created during the import process) into GPlates like you would a regular feature collection.

For information on how to *import* a raster please see the [Importing Rasters and 3D Scalar Fields](/docs/user-manual/Import) chapter.

2.5 How do I load a 3D scalar field in GPlates?
----------------------------------------

Like a raster, to load 3D scalar field data into GPlates the data must first be imported and have a GPML file associated with it. This only needs to be done once for each scalar field. After that you can simply load the GPML file (created during the import process) into GPlates like you would a regular feature collection.

For information on how to *import* a 3D scalar field please see the [Importing Rasters and 3D Scalar Fields](/docs/user-manual/Import) chapter.

3 The Manage Feature Collections Dialog
=====================================

This dialog window enables you to load new files, and save, reconfigure and unload currently-loaded files. This is where you will find any file-specific operations. To control how GPlates uses the data from those files, please see the [Layers](/docs/user-manual/Layers/) chapter and related functionality.

1.  Go to the **File Menu** in the menu bar.

2.  Click on **Manage Feature Collections** menu item (shortcut: `Ctrl+M`).

![](screenshots/ManageFeatureCollections.png)

<table class ="important">
   <tbody>
      <tr>
         <td class="icon">
            <img src="./images/icons/important.png" alt="Important">
         </td>
         <td class="content" >A single row in the table corresponds to one file.</td>
      </tr>
   </tbody>
</table>


<table>
   <colgroup>
      <col style="width: 20%" />
      <col style="width: 80%" />
   </colgroup>
   <thead>
      <tr class="header">
         <th style="text-align: left; padding-left: 0.75em;">Column Name</th>
         <th style="text-align: left; padding-left: 0.75em;">Function</th>
      </tr>
   </thead>
   <tbody>
      <tr class="odd">
         <td style="text-align: left;">File Name</td>
         <td style="text-align: left;">The name of the file on disk</td>
      </tr>
      <tr class="even">
         <td style="text-align: left;">File Format</td>
         <td style="text-align: left;">The file format type</td>
      </tr>
      <tr class="odd">
         <td style="text-align: left;">Actions</td>
         <td style="text-align: left;">A collection of operations relevant to this file (see below)</td>
      </tr>
   </tbody>
</table>

<table class ="tip">
   <tbody>
      <tr>
         <td class="icon">
            <img src="./images/icons/tip.png" alt="Tip">
         </td>
         <td class="content" >If you place your mouse over the file name a tool tip appears indicating the directory the file is located in.</td>
      </tr>
   </tbody>
</table>

3.1 Saving a file
-------------

There are three different ways to save a file in GPlates.

The **Manage Feature Collections** dialog contains a table of controls and status information about the feature collections that are loaded in GPlates; each row corresponds to a single feature collection, and lists the filename, format and available actions.

![](screenshots/ManageFeatureCollections-Row.png)


<table>
   <colgroup>
      <col style="width: 12%" />
      <col style="width: 25%" />
      <col style="width: 62%" />
   </colgroup>
   <tbody>
      <tr class="odd">
         <td>
            <p>Item</p>
         </td>
         <td>
            <p>Name</p>
         </td>
         <td>
            <p>Function</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p><img src="./images/spanner.png" alt="spanner.png" /></p>
         </td>
         <td>
            <p>File Properties</p>
         </td>
         <td>
            <p>Edit the file’s configuration</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p><img src="./images/save.png" alt="save.png" /></p>
         </td>
         <td>
            <p>Save</p>
         </td>
         <td>
            <p>Save the file using the current name</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p><img src="./icons/save_as.png" alt="icons/save_as.png" /></p>
         </td>
         <td>
            <p>Save As</p>
         </td>
         <td>
            <p>Save the file using a new name and/or format</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p><img src="./icons/save_copy.png" alt="icons/save_copy.png" /></p>
         </td>
         <td>
            <p>Save a Copy</p>
         </td>
         <td>
            <p>Save a copy of the file with a different name</p>
         </td>
      </tr>
      <tr class="even">
         <td>
            <p><img src="./images/refresh.png" alt="refresh.png" /></p>
         </td>
         <td>
            <p>Refresh</p>
         </td>
         <td>
            <p>Reload the file from disk</p>
         </td>
      </tr>
      <tr class="odd">
         <td>
            <p>
                <img src="./icons/eject.png" alt="icons/eject.png" />
            </p>
         </td>
         <td>
            <p>Eject</p>
         </td>
         <td>
            <p>Unload the file from GPlates</p>
         </td>
      </tr>
   </tbody>
</table>


![](screenshots/ManageFeatureCollections-HighlightedRow.png)

### 3.1.1 <span style="display:inline-block; width:30px; vertical-align:middle;"><img src='./icons/save.png' /> </span> Save…

-   Saves the current file with its **current** name.

-   Will overwrite previous contents of the file.

<table class ="tip">
   <tbody>
      <tr>
         <td class="icon">
            <img src="./images/icons/tip.png" alt="Tip">
         </td>
         <td class="content" >This is useful when you have modified your file and are happy to save these changes.</td>
      </tr>
   </tbody>
</table>

<table class ="important">
   <tbody>
      <tr>
         <td class="icon">
            <img src="./images/icons/important.png" alt="Important">
         </td>
         <td class="content"> Do not edit the file in two separate programs simultaneously (e.g. GPlates and a text-editor)</td>
      </tr>
   </tbody>
</table>

### 3.1.2 <span style="display:inline-block; width:30px; vertical-align:middle;"><img src='./icons/save_as.png' /> </span> Save As…

-   Saves the current file with a **new** name.

-   Will leave the previous file intact.

-   Will load the new file in place of the old file.

-   Gives you the opportunity to change the file format.

<table class ="tip">
   <tbody>
      <tr>
         <td class="icon">
            <img src="./images/icons/tip.png" alt="Tip">
         </td>
         <td class="content" >This is useful when you want to edit a copy of a file without changing the original.</td>
      </tr>
   </tbody>
</table>

### 3.1.3 <span style="display:inline-block; width:30px; vertical-align:middle;"><img src='./icons/save_copy.png' /> </span> Save a Copy…

-   Saves a copy of the current file with a **new** name.

-   Will leave the previous file intact.

-   Will not replace or unload the current file.

-   Gives you the opportunity to change the file format.

<table class ="tip">
   <tbody>
      <tr>
         <td class="icon">
            <img src="./images/icons/tip.png" alt="Tip">
         </td>
         <td class="content" >This is useful for making backups of your work as you go.</td>
      </tr>
   </tbody>
</table>


3.2 Saving all modified files
-------------------------

If a file has been modified in GPlates, it will appear with a red background colour to highlight it. As a convenient shortcut for saving all your changes in one go, the **Manage Feature Collections** dialog has a **Save All** button. This saves all files that:

1.  Have been modified in GPlates since they were last loaded/saved.

2.  Have a file name.

<table class ="note">
   <tbody>
      <tr>
         <td class="icon">
            <img src="./images/icons/note.png" alt="Tip">
         </td>
         <td class="content" >The "Save All" button does not save newly created feature collections (highlighted in orange) which have not been saved with a file name yet. This is to avoid ambiguity in case you have created many new feature collections, some possibly for temporary work, which have not yet been named.</td>
      </tr>
   </tbody>
</table>


4 File Errors
===========

4.1 Introduction
------------

File read errors may occur when attempting to load data from file (or some other data source, such as a database). GPlates developers have done their best to notify the user of the specifics of the error so corrections can be made.

4.2 Error Categories
----------------

It is anticipated that file input errors may fall into four categories:

1.  [Warning](#421-warning)

2.  [Recoverable error](#422-recoverable-error)

3.  [Terminating error](#423-terminating-error)

4.  [Failure to begin](#424-failure-to-begin)

When you load a file which causes warnings, GPlates will display a warning icon <span style="display:inline-block; width:30px; vertical-align:middle;"><img src='icons/gnome_dialog_warning_22.png' /> </span> in the status bar. You can click it to open the File Errors dialog for more information, or click the **View Read Errors** entry on the **File** menu. For more serious errors, GPlates will open the dialog immediately on loading.

### 4.2.1 Warning

-   A warning is a notification of a problem (generally a problem in the data) which required GPlates to modify the data in order to rectify the situation.

-   Examples of problems which might result in warnings include:

    -   Data which are being imported into GPlates, which do not possess quite enough information for the needs of GPlates *(such as total reconstruction poles in PLATES4 rotation-format files which have been commented-out by changing their moving plate ID to 999)*.

    -   An attribute field whose value is obviously incorrect, but which is easy for GPlates to repair *(for instance, when the *Number Of Points* field in a PLATES4 line-format polyline header does not match the actual number of points in the polyline)*.

-   A warning will not have resulted in any data loss, but you may wish to investigate the problem, in order to verify that GPlates has *corrected* the errors in the data in the way you would expect; and to be aware of incorrect data which other programs may handle differently.

### 4.2.2 Recoverable error

-   A recoverable error is an error *(generally an error in the data)* from which GPlates is able to recover, although some amount of data had to be discarded because it was invalid or malformed in such a way that GPlates was unable to repair it.

-   Examples of recoverable errors might include:

    -   When the wrong type of data encountered in a fixed-width attribute field *(for instance, text encountered where an integer was expected)*.

-   **When a recoverable error occurs, GPlates will do the following:**

    -   Retain the data it has already successfully read.

    -   Discard the invalid or malformed data *(which will result in some data loss)*.

    -   Continue reading from the data source. GPlates will discard the smallest possible amount of data, and will inform you exactly what was discarded.

### 4.2.3 Terminating error

-   A terminating error halts the reading of data in such a way that GPlates is unable to read any more data from the data source.

-   Examples of terminating errors might include:

    -   A file-system error.

    -   A broken network connection.

-   When a terminating error occurs, GPlates will retain the data it has already read, but will not be able to read any more data from the data source.

### 4.2.4 Failure to begin

-   A failure to begin has occurred when GPlates is not even able to start reading data from the data source.

-   Examples of failures to begin might include:

    -   The file cannot be located on disk or opened for reading.

    -   The database cannot be accessed; no network connection could be established.

-   In the event of a failure to begin, GPlates will not be able to load any data from the data source.

![](screenshots/FileErrors.png)

5 Unsaved Changes
===============

5.1 Introduction
------------

GPlates keeps track of any changes you make to files while they are loaded. To remind you that some feature collections have unsaved changes, GPlates will display the <span style="display:inline-block; width:30px; vertical-align:middle;"><img src='icons/unsaved_changes_red_disk_bang_22.png' /> </span> icon in the status area (bottom of GPlates). Hover over the icon to see a list of modified files, or click it to open the **Manage Feature Collections** dialog.

5.2 Closing GPlates with unsaved changes
------------------------------------

If you close GPlates while there are still unsaved changes, GPlates will ask you to confirm this action, indicating which files have been modified and allowing you to select one of two actions to resolve the situation.

![](screenshots/UnsavedChangesWarning.png)

#### Discard changes

1.  No files will be saved. Any changes made since you last saved the file will not be kept.

2.  GPlates will close.

<!-- -->

#### Don't close

1.  GPlates will not close.

2.  This gives you an opportunity to go back and manually save the files you wish to keep, and discard the rest.

The topic of unsaved changes is covered in more detail in [Projects and Recent Sessions](/docs/user-manual/Projects_and_Recent_Sessions/) where opening a new project, loading a recent session and clearing a session also interact with unsaved changes and trigger similar **Unsaved Changes** dialogs.

