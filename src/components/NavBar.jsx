import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { path: '/', text: 'Home' },
    { path: 'quotes', text: 'Quotes' },
    { path: 'calculator', text: 'Calculator' },
  ];

  const footerStyles = {
    position: 'fixed',
    bottom: '0px',
    right: '10px',
  };

  return (
    <>
      <nav className="navbar">
        <h1>Math Magicians</h1>
        <ul>
          {links.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <footer style={footerStyles}>
        Crafted with code and creativity by
        {' '}
        <b>Obi Anthony</b>
        .
      </footer>
    </>
  );
};

export default Navbar;
