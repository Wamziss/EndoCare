import React from "react";

import Hero from "../Hero";
import Services from '../Services'
import Doctors from "../Doctors/Doctors";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Doctors />
      <Blogs />
      <Contact />
    </>
  );
};

export default Home;
