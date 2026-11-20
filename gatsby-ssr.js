const React = require('react')
const pygplatesDocIndex = require('./src/data/pygplates-doc-index.json')

// The pygplates docs were served here, below /docs/pygplates/, until
// pyGPlates 1.1. They are now published from the GPlates/GPlates repository
// with GitHub Pages, one directory per release series (1.0/, 1.1/, ...) below
// https://gplates.github.io/GPlates/pygplates/, with stable/ for the latest
// release and dev/ for the development version. The old URLs are in papers
// and other projects' pages, so each is sent to the same path below stable/,
// keeping its query and fragment.
//
// GitHub Pages can't rewrite or redirect server-side. Each page of the old
// docs is a static stub (static/docs/pygplates/), which redirects itself the
// same way and, without JavaScript, by a meta refresh. It answers 200, so
// search engines treat it as a permanent redirect. The old objects.inv is kept
// too, so that a Sphinx intersphinx mapping to the old URL still works: its
// links are relative, so they land on the stubs. Every other old URL (names
// in the wrong case, the docs' images and other files) is missing here, and
// for a missing path GitHub Pages serves 404.html with the original URL still
// in the address bar, where this script redirects it if it is opened in a
// browser (not an image embedded in a page, or a tool such as a link checker).
// Redirecting from a React useEffect in the 404 page component was too late:
// the 404 page painted first. This inline, synchronous script runs before the
// body is parsed, so the redirect starts before the 404 page is laid out (it
// may still show briefly while the other site responds). Injected on every
// page since it's a no-op unless the current URL is below /docs/pygplates.
//
// Old (pre-migration) search-engine-indexed URLs of the reference pages
// (generated/) were lowercase and had no .html extension, e.g.
// pygplates.rotationmodel instead of pygplates.RotationModel.html, and GitHub
// Pages is case-sensitive. pygplates-doc-index.json maps each lowercase name,
// with and without .html, to the page's actual name. Those old URLs only ever
// existed for pages up to pyGPlates 1.0, all of which still exist under the
// same names, so the map needs no updating. A name not in it is passed on as
// it is (GitHub Pages finds foo.html for foo itself).
exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement('script', {
      key: 'pygplates-legacy-doc-redirect',
      dangerouslySetInnerHTML: {
        __html: `(function(){
var m=/^\\/docs\\/pygplates(\\/.*)?$/i.exec(location.pathname);
if(!m)return;
var path=m[1]||'/';
var g=/^\\/generated\\/([^/]+?)\\/?$/i.exec(path);
if(g){
var map=${JSON.stringify(pygplatesDocIndex)};
var k=g[1].toLowerCase();
path='/generated/'+(Object.prototype.hasOwnProperty.call(map,k)?map[k]:g[1]);
}
location.replace('https://gplates.github.io/GPlates/pygplates/stable'+path+location.search+location.hash);
})();`,
      },
    }),
  ])
}

// Gatsby puts the head components added by onRenderBody (above) after the
// site's inlined CSS (about 255 KB), so on a slow connection a browser would
// download most of the 404 page before the redirect could start. Move the
// redirect to the front of <head>, ahead of the CSS.
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const head = getHeadComponents()
  const redirect = head.filter(
    (component) => component && component.key === 'pygplates-legacy-doc-redirect'
  )
  replaceHeadComponents([
    ...redirect,
    ...head.filter((component) => !redirect.includes(component)),
  ])
}
