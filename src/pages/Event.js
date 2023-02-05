import React from "react";
import Layout from "./Layout";
import ListEvent from "../components/ListEvent";
import Footer from "../components/Footer";

const Event = () => {
  return (
    <React.Fragment>
      <Layout>
        <ListEvent />
      </Layout>
    </React.Fragment>
  );
};

export default Event;
