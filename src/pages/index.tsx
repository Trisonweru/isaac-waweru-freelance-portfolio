/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import * as React from 'react';

import ArrowDown from '@/components/ArrowDown';
import ContactButton from '@/components/ContactButton';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import MapComponent from '@/components/Map';
import Projects from '@/components/Projects';
import Seo from '@/components/Seo';
import Skills from '@/components/Skills';
import Social from '@/components/Social';

import { useAppCtx } from '@/context/context';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const { theme } = useAppCtx();
  const [dark, setDark] = React.useState(theme);
  if (theme !== dark) {
    setDark(theme);
  }

  return (
    <>
      <Head>
        <script
          type='text/javascript'
          async
          src='https://play.vidyard.com/embed/v4.js'
        ></script>
        <link
          rel='preload'
          href='/fonts/inter-var-latin.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css'
          rel='stylesheet'
        />
        <link
          href='https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'
        ></link>
        <link
          rel='stylesheet'
          href='https://unicons.iconscout.com/release/v4.0.0/css/line.css'
        ></link>
      </Head>
      <Layout>
        <Seo templateTitle='Freelance Web Developer' />
        <Header param='/' />
        <main>
          <section className={dark ? 'bg-[#02142E] relative' : 'bg-white  '}>
            <div className='flex flex-col items-center justify-start layout min-h-screen pt-4 relative text-left'>
              <Hero dark={dark} />
              <ArrowDown dark={dark} />
              <Projects dark={dark} />
              <ContactButton />
              <Skills />
              <div className='h-4'></div>
              {/* <Experience dark={dark} /> */}
            </div>
            <Social dark={dark} />
          </section>
          <MapComponent />
          <Footer />
        </main>
      </Layout>
    </>
  );
}
