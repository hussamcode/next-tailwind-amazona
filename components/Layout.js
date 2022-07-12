import React from 'react';

import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Ecommerce Website"></meta>
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex flex-row h-12 justify-between px-3 shadow-sm items-center">
            <h1 className="text-lg font-bold">amazon</h1>
            <nav className="">
              <Link href="/">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/">
                <a className="p-2">Login</a>
              </Link>
            </nav>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright 2022 Amazon</p>
        </footer>
      </div>
    </>
  );
};
Layout.prototype = {
  title: PropTypes.string.isRequired,
};

export default Layout;
