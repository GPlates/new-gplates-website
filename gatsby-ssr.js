const React = require('react')
const pygplatesDocIndex = require('./src/data/pygplates-doc-index.json')

// Old (pre-migration) search-engine-indexed URLs for the pygplates docs were
// lowercase and had no .html extension, e.g. pygplates.rotationmodel instead
// of pygplates.RotationModel.html. GitHub Pages serves 404.html (with the
// original URL still in the address bar) for those requests since it can't
// rewrite or redirect server-side. Redirecting from a React useEffect in the
// 404 page component was too late: the 404 page painted first. This inline,
// synchronous script runs before the body is parsed, so the redirect happens
// before anything is shown. Injected on every page since it's a no-op unless
// the current URL matches the legacy pattern.
exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement('script', {
      key: 'pygplates-legacy-doc-redirect',
      dangerouslySetInnerHTML: {
        __html: `(function(){
var m=/^\\/docs\\/pygplates\\/generated\\/([^/]+)\\/?$/i.exec(location.pathname);
if(!m)return;
var map=${JSON.stringify(pygplatesDocIndex)};
var actual=map[m[1].toLowerCase()];
if(!actual)return;
location.replace('/docs/pygplates/generated/'+actual+location.search+location.hash);
})();`,
      },
    }),
  ])
}
