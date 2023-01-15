import React from "react";
function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="d-flex justify-content-center">
      Copyright &copy; {year}{" "}
    </footer>
  );
}

export default Footer;
