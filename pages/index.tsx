/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import { useSupabase } from '../app/hooks';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import SidebarItem from '../components/Sidebar/SidebarItem';

const Home: NextPage = ({ children }) => {
  const [label, setLabel] = useState([]);

  useEffect(() => {
    const data = useSupabase();
    data.then((data) => {
      setLabel(data);
    });
  }, []);
  return <div>Home Page {JSON.stringify(label)}</div>;
};

export default Home;
