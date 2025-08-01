import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => setHoveredLink(link);
  const handleMouseLeave = () => setHoveredLink(null);

  const getNavButtonStyle = (link) => ({
    padding: '10px 18px',
    textDecoration: 'none',
    fontSize: '17px',
    fontWeight: '500',
    backgroundColor: hoveredLink === link ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
    color: '#F5F5DC',
    border: hoveredLink === link ? '1px solid #F5F5DC' : '1px solid transparent',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: hoveredLink === link ? 'translateY(-2px)' : 'none',
    outline: 'none',
  });

  return (
    <header style={headerStyles.header}>
      <Link to="/home" style={headerStyles.logoLink}>
        <img
          src="/images/Screenshot 2025-04-05 092842.jpg"
          alt="Brand logo"
          style={headerStyles.logo}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/60x60/8B4513/F5F5DC?text=LOGO';
          }}
        />
      </Link>
      <nav style={headerStyles.nav}>
        <Link
          to="/home"
          style={getNavButtonStyle('/home')}
          onMouseEnter={() => handleMouseEnter('/home')}
          onMouseLeave={handleMouseLeave}
        >
          Homepage
        </Link>
        <Link
          to="/contact"
          style={getNavButtonStyle('/contact')}
          onMouseEnter={() => handleMouseEnter('/contact')}
          onMouseLeave={handleMouseLeave}
        >
          Contact Us
        </Link>
        <Link
          to="/registration"
          style={getNavButtonStyle('/registration')}
          onMouseEnter={() => handleMouseEnter('/registration')}
          onMouseLeave={handleMouseLeave}
        >
          Registration
        </Link>
        <Link
          to="/about"
          style={getNavButtonStyle('/about')}
          onMouseEnter={() => handleMouseEnter('/about')}
          onMouseLeave={handleMouseLeave}
        >
          About Us
        </Link>
      </nav>
    </header>
  );
};

const headerStyles = {
  header: {
    backgroundColor: 'black',
    padding: '15px 30px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    flexWrap: 'wrap',
    width: '100%',
    boxSizing: 'border-box',
    borderBottom: '1px solid #A0522D',
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  logo: {
    width: '60px',
    height: '60px',
    borderRadius: '8px',
    objectFit: 'cover',
    border: '2px solid #D2B48C',
    overflow: 'hidden',
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default Header;
