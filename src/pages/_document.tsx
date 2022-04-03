/* eslint-disable @next/next/no-document-import-in-page */
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='application-name' content='Isaac Porfolio' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta name='apple-mobile-web-app-title' content='Isaac Porfolio' />
          <meta
            name='description'
            content='The leading freelance full-stack web developer in Kenya'
          />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta
            name='msapplication-config'
            content='/favicon/browserconfig.xml'
          />
          <meta name='msapplication-TileColor' content='#2B5797' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#000000' />

          <link rel='apple-touch-icon' href='/favicon/apple-icon.png' />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href='/favicon/apple-icon-152x152.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicon/apple-icon-180x180.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href='/favicon/apple-icon-144x144.png'
          />

          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon/favicon-16x16.png'
          />
          <link rel='manifest' href='/manifest.json' />
          {/* <link
            rel='mask-icon'
            href='/icons/safari-pinned-tab.svg'
            color='#5bbad5'
          /> */}
          <link rel='shortcut icon' href='/favicon/favicon.ico' />

          <meta name='twitter:card' content='summary' />
          <meta
            name='twitter:url'
            content='https://isaac-waweru-freelance-portfolio.vercel.app'
          />
          <meta name='twitter:title' content='Isaac Portfolio' />
          <meta
            name='twitter:description'
            content='The leading freelance full-stack web developer in Kenya'
          />
          <meta
            name='twitter:image'
            content='https://isaac-waweru-freelance-portfolio.vercel.app/favicon/android-icon-192x192.png'
          />
          <meta name='twitter:creator' content='@Trisonweru' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Isaac Portfolio' />
          <meta
            property='og:description'
            content='The leading freelance full-stack web developer in Kenya'
          />
          <meta property='og:site_name' content='Isaac Portfolio' />
          <meta
            property='og:url'
            content='https://isaac-waweru-freelance-portfolio.vercel.app'
          />
          <meta
            property='og:image'
            content='https://isaac-waweru-freelance-portfolio.vercel.app/favicon/apple-icon.png'
          />

          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
