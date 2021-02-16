---
templateKey: 'simple-page'
path: /download
title: Download GPlates and Data
---

### Download GPlates
---

The current stable release of GPlates is [GPlates 2.2](/news/2019-08-30-GPlates-2-2-released/), released in August 2019...

<div class="download-box">
    <table>
    <tbody>
        <tr>
            <td class="icon">
                <a href="http://sourceforge.net/projects/gplates/files/gplates/2.2/">
                    <img src="./img/GPlates-tango-actions-go-down-48.png" alt="Download GPlates">
                </a>
            </td>
            <td class="content" >
                <a href="http://sourceforge.net/projects/gplates/files/gplates/2.2/" title="GPlates 2.2 packages on SourceForge">
                <strong>Download GPlates 2.2</strong>
                </a>
                <p>(the latest “stable” release)</p>
            </td>
        </tr>
    </tbody>
    </table>
</div><br>

The current beta release of pyGPlates is [PyGPlates beta revision 28](/news/2020-08-18-PyGPlates-beta-revision-28-released/), released in August 2020...

<div class="download-box">
    <table>
    <tbody>
        <tr>
            <td class="icon">
                <a href="https://sourceforge.net/projects/gplates/files/pygplates/beta-revision-28/">
                    <img src="./img/GPlates-tango-actions-go-down-48.png" alt="Download pyGPlates">
                </a>
            </td>
            <td class="content" >
                <a href="https://sourceforge.net/projects/gplates/files/pygplates/beta-revision-28/" title="pyGPlates beta revision 28 packages on SourceForge">
                <strong>Download pyGPlates beta revision 28</strong>
                </a>
                <p>(the latest “beta” release)</p>
            </td>
        </tr>
    </tbody>
    </table>
</div><br>

GPlates runs on __Windows__, __Linux__ and __macOS__. We provide ready-to-use binary executables for both Windows and macOS, enabling a GPlates user to download, install and use the latest version of GPlates immediately. The binaries also include the GPlates-compatible data described below.

* For __Windows__, we provide 32-bit and 64-bit .msi __binary installers__. Running the 32-bit installer program will install a 32-bit version of GPlates on a 32-bit or 64-bit version of Windows 7/8/8.1/10. Running the 64-bit installer program will install a 64-bit version of GPlates on a 64-bit version of Windows 7/8/8.1/10. We also provide 32-bit and 64-bit .zip files, containing the GPlates executable and its dependency files, for users who wish to use GPlates without installing it.
* For __macOS__, we provide a __64-bit bundle__ for __Snow Leopard__ (10.6) or above in a single .dmg file. To install GPlates, simply:
    * double-click on a .dmg file to open the disk image in Finder
    * drag the GPlates binary into your Applications folder.
* For __Ubuntu__, we provide .deb __packages__ for 64 and 32-bit architectures. To install GPlates, simply download the appropriate package for your system and double-click to install.
    * If you are using a different Linux distribution please use the source code package.
    * The Ubuntu packages currently contain the sample data (in /usr/share/gplates/) along with the application - future releases may use separate packages for this.

We provide source-code packages for Windows (the winsrc zip-files) and Linux and macOS (the unixsrc tarballs). The source-code packages contain simple sample data, but the larger data files (described below) will need to be downloaded separately. To compile GPlates from source, you will require:

* [__Qt__](https://www.qt.io/) 4.4.0 or above (preferably 4.8)
* [__Qwt__](https://qwt.sourceforge.io/) 6.0.1 or above
* OpenGL
* [__GLEW__](http://glew.sourceforge.net/)
* [__GDAL__](https://gdal.org/) 1.3.2 or above (preferably 2.x)
* [__CGAL__](https://www.cgal.org/) 3.5 or above
* [__PROJ.4__](https://proj.org/) 4.6 or above
* [__Boost__](https://www.boost.org/) 1.35 or above
* [__CMake__](https://cmake.org/) 2.8.8 or above

Instructions on how to compile GPlates from source may be found in the GPlates source-code releases, in the files:

* __DEPS.Linux__ and __BUILD.Linux__ (on Linux)
* __DEPS.OSX__ and __BUILD.OSX__ (on macOS)
* __DEPS.Windows__ and __BUILD.Windows__ (on Windows)

GPlates is [free software](https://www.gnu.org/philosophy/free-sw.html) (also known as [open-source](https://opensource.org/docs/definition.php) software), licensed for distribution under the GNU [General Public License](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html) (GPL) version 2.

### Download GPlates-compatible data

---

Researchers in the [EarthByte Project](https://www.earthbyte.org/) have made [GPlates-compatible data](http://www.earthbyte.org/gplates-2-2-software-and-data-sets/) available for use with GPlates.

A [sample set](http://www.earthbyte.org/gplates-2-2-software-and-data-sets/) of these data-files are also contained within the GPlates installation packages, and will be automatically installed with GPlates. This data has been updated for the GPlates 2.2 release. Thanks to the EarthByte Project for making these data-files available!

Go to [EarthByte website](https://www.earthbyte.org/category/resources/data-models/) for more data and models.

### GPlates Download Statistics

---

Click [here](https://sourceforge.net/projects/gplates/files/gplates/stats/map?dates=2003-02-20+to+2118-05-24) to see the detailed GPlates download statistics on sourceforge.net.
