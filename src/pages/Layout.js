import React from "react";
import Navbar from "../components/Navbar";
import AlertProvider from "../contexts/AlertProvider";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="relative">
        <AlertProvider>
          <>
            <Navbar />
            <main>{children}</main>
          </>
        </AlertProvider>
      </div>
    </React.Fragment>
  );
};

export default Layout;
