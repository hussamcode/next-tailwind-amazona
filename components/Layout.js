import React from 'react';

import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Store } from '../utils/Store';
const Layout = ({ children, title }) => {
  const { state, dispatch } = useContext(Store);

  const { cart } = state;

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
              <Link href="/cart">
                <a className="p-2">
                  Cart{' '}
                  {cart.items.length > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cart.items.reduce((totule, n) => {
                        return totule + n.quantity;
                      }, 0)}
                    </span>
                  )}
                </a>
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
