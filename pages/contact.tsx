import type { NextPage } from 'next';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Contact Us - Enlite"
        description="Get in touch with Enlite. We'd love to hear from you about our prebiotic sodas, collaborations, or any questions you might have."
        canonical="https://enlite.co.in/contact"
        openGraph={{
          url: 'https://enlite.co.in/contact',
          title: 'Contact Enlite - Let\'s Connect!',
          description: 'Get in touch with Enlite. We\'d love to hear from you!',
        }}
      />
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen">
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('/images/splash.jpeg')",
            zIndex: -1,
          }}
        />
        <Header />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default ContactPage; 