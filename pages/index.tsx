import type { NextPage } from 'next';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import ProductSchema from '../components/ProductSchema';

import Header from '../components/Header';
import Landing from '../components/Landing';
import Features from '../components/Features';
import WhatsInside from '../components/WhatsInside';
import Pricing from '../components/Pricing';
import Testimonies from '../components/Testimonies';
import Action from '../components/Action';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Enlite - Prebiotic Soda for Gut Health"
        description="Experience the future of refreshment with Enlite's prebiotic sodas. Zero sugar, 8% fiber, and prebiotics for optimal gut health. Available in Cola, Mango Mint, Strawberry Vanilla, and more."
        canonical="https://enlite.co.in"
        openGraph={{
          url: 'https://enlite.co.in',
          title: 'Enlite - Just pure, refreshing, gut-happy fizz',
          description: 'Experience the future of refreshment with Enlite\'s prebiotic sodas. Zero sugar, 8% fiber, and prebiotics for optimal gut health.',
          images: [
            {
              url: '/images/product.png',
              width: 1200,
              height: 630,
              alt: 'Enlite Prebiotic Sodas Collection',
            },
          ],
        }}
      />
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#524790" />
      </Head>
      <ProductSchema />
      <div className="h-full leading-normal text-gray-600">
        <div
          className="absolute top-0 left-0 right-0 bg-no-repeat bg-cover shadow-lg -bottom-full brightness-90 filter md:bottom-0 md:bg-center md:brightness-100"
          style={{
            backgroundImage: "url('images/splash.jpeg')",
            zIndex: -1,
          }}
        />
        <Header />
        <Landing />
        <Features />
        <WhatsInside />
        {/* <Pricing /> */}
        <Testimonies />
        <Action />
        <Footer />
      </div>
    </>
  );
};

export default Home;
