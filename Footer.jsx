import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyles.footer}>
            <div style={footerStyles.container}>
                <div style={footerStyles.contactSection}>
                    <h3 style={footerStyles.contactHeading}>Contact us</h3>
                    <ul style={footerStyles.contactList}>
                        <li>PhoneNO: 03453433456</li>
                        <li>Email: info@mengarment.com</li>
                        <li>Address: Office 7, Pakistan</li>
                    </ul>
                </div>

                <div style={footerStyles.socialMediaSection}>
                    <h6 style={footerStyles.socialHeading}>Find us on social Media</h6>
                    <div style={footerStyles.socialLinks}>
                        <a href="#" style={footerStyles.socialIcon}>
                            <img src="/images/Screenshot 2025-04-06 023151.jpg" alt="Facebook" style={footerStyles.iconImage} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/30x30/CCCCCC/000000?text=FB'; }} />
                        </a>
                        <a href="#" style={footerStyles.socialIcon}>
                            <img src="/images/Screenshot 2025-04-06 023356.jpg" alt="Instagram" style={footerStyles.iconImage} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/30x30/CCCCCC/000000?text=IG'; }} />
                        </a>
                        <a href="#" style={footerStyles.socialIcon}>
                            <img src="/images/Screenshot 2025-04-06 023516.jpg" alt="Twitter" style={footerStyles.iconImage} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/30x30/CCCCCC/000000?text=TW'; }} />
                        </a>
                        <a href="#" style={footerStyles.socialIcon}>
                            <img src="/images/Screenshot 2025-04-06 023620.jpg" alt="LinkedIn" style={footerStyles.iconImage} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/30x30/CCCCCC/000000?text=LI'; }} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const footerStyles = {
    footer: {
        backgroundColor: 'black',
        color: 'white',
        padding: '1.5rem',

        position: 'relative',
        marginTop: 'auto',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    contactSection: {
        display: 'flex',
        flexDirection: 'column',
    },
    socialMediaSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    contactHeading: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        marginBottom: '1rem',
    },
    contactList: {
        marginBottom: '1rem',
        listStyleType: 'none',
        padding: 0,
    },
    socialHeading: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        marginBottom: '1rem',
    },
    socialLinks: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '1rem',

    },
    socialIcon: {
        display: 'block',
        borderRadius: '50%',
        overflow: 'hidden',
        width: '2rem',
        height: '2rem',
        transition: 'opacity 0.3s ease',
    },
    iconImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
};

export default Footer;