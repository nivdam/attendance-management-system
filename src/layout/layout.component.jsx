import React from "react";
import Header from "./header/header.component";
import Menu from "./mune/mune.component";

const Layout = ({ children }) => (
  <div className="wrapper">
    <Header></Header>

    <section
      style={{
        display: "flex",
        backgroundColor: "pink"
      }}
    >
      <Menu></Menu>
      <main>{children}</main>
    </section>
  </div>
);

export default Layout;
