import React from "react";
function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <div>Copyright &copy; {year}</div>
    </footer>
  );
}

export default Footer;
