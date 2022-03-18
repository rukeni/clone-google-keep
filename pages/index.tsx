/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import SidebarItem from '../components/Sidebar/SidebarItem';

const Home: NextPage = ({ children }) => {
  return (
    <div className='flex flex-col flex-no-wrap'>
      <Head>
        <title>Cloning Google Keep</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=East+Sea+Dokdo&family=Gugi&family=Nanum+Pen+Script&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <div className='flex flex-no-wrap'>
        <Sidebar />
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Home;
