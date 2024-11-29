import React from "react";
import Footer from "../Footer";
import Headers from "./Headers";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

// Use default parameters directly in the function signature
const Layout = ({
  children,
  title = "Shopzone",
  description = "mern stack project",
  keywords = "mongodb,react,node,express",
  author = "Patitapaban",
}) => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Headers />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
