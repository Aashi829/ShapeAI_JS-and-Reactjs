import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {curYear}</P>
    </footer>
  );
}

export default Footer;
