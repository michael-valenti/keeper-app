import React from "react";

//REACT jsx naming convention is first letter capitalized
//for functions

const currentYear = new Date().getFullYear();


function Footer() {
  return <footer><p>Copyright © {currentYear} </p></footer>;
}

export default Footer;