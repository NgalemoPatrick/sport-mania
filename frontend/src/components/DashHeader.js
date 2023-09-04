import { NavLink } from "react-router-dom";

import React from "react";

const DashHeader = () => {
  const content = (<header className="dash-header">
    <section className="header-live_score">Live Score comes Here</section>
    <section className="header-search_bar">Search bar Here</section>
    <section className="header-navbar">Nav bar Here</section>
  </header>
  )
  return content;
};

export default DashHeader;
