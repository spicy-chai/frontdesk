const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      © {currentYear} FrontDesk. All rights reserved.
    </footer>
  );
};

export default Footer;
