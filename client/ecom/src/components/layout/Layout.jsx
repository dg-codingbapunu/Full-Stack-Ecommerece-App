import React from 'react';
import Footer from '../Footer';
import Headers from './Headers';
import {Helmet} from "react-helmet";
import  { Toaster } from 'react-hot-toast';


const Layout = ({children,title,description,keywords,author}) => {
  return (
    <>

  <Helmet>
  <div>
  <meta charSet="UTF-8" />

<meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />
</div>

    <title>{title}</title>
              
    </Helmet>
    <Headers/>
    <main style={{minHeight:'70vh'}}>
    <Toaster/>
    {children}  
    </main>
    <Footer/>
     

        </>
  )
}

  Layout.defaultProps = {

    title: 'Shopzone',
    description: 'mern stack project',
    keywords: 'mongodb,react,node,express',
    author: 'Patitapaban'

  }

export default Layout
