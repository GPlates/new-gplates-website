import { withPrefix } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import './gplates.sass'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" className='has-navbar-fixed-top' />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link rel="shortcut icon" href={`${withPrefix('/')}img/favicon.ico`} />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:description" content="GPlates is a plate tectonics program. Manipulate reconstructions of geological and paleogeographic features through geological time." />
        <meta
          property="og:image"
          content="https://www.gplates.org/img/og-image.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@EarthByteGroup" />
        <meta name="twitter:creator" content="@000911" />
        <meta name="twitter:title" content="GPlates" />
        <meta name="twitter:description" content="GPlates is a plate tectonics program. Manipulate reconstructions of geological and paleogeographic features through geological time." />
        <meta name="twitter:image" content="https://www.gplates.org/img/og-image.png" />

      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
