import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'

function Layout({children}) {
  return (
    <div>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <title> moz template </title>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout