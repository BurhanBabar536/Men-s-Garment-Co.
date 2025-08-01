import React from 'react';

const AboutUsPage = () => {
    return (
        <div style={aboutUsStyles.pageContainer}>
            <img
                src="/images/abt2.png"
                alt="Group"
                style={aboutUsStyles.bannerImage}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1900x500/CCCCCC/000000?text=Banner+Not+Found'; }}
            />
            <div style={aboutUsStyles.contentContainer}>
                <h1 style={aboutUsStyles.heading1}>About Us</h1>
                <p style={aboutUsStyles.paragraph}>
                    At Mens Garment, we believe that style is a reflection of confidence. Our brand was born out of a passion for high-quality, well-crafted menswear that speaks to both tradition and modernity. From sharp formal pieces to comfortable casual wear, every garment we offer is designed with precision, purpose, and personality. Behind the scenes, our dedicated team of designers, stylists, and customer care experts work together to ensure every detail meets our high standards.
                </p>

                <h1 style={aboutUsStyles.heading1}>Our Team</h1>
                <div style={aboutUsStyles.tableWrapper}>
                    <table style={aboutUsStyles.table}>
                        <thead style={aboutUsStyles.tableHeader}>
                            <tr>
                                <th style={aboutUsStyles.tableTh}>Role</th>
                                <th style={aboutUsStyles.tableTh}>Description</th>
                                <th style={aboutUsStyles.tableTh}>Image</th>
                            </tr>
                        </thead>
                        <tbody style={aboutUsStyles.tableBody}>
                            <tr>
                                <td style={aboutUsStyles.tableTd}>Chief Executive Officer</td>
                                <td style={aboutUsStyles.tableTd}>Burhan Babar (CEO) is the highest-ranking executive in an organization, responsible for setting strategic direction, overseeing operations, and ensuring the company's success, ultimately accountable to the board of directors or company owners.</td>
                                <td style={aboutUsStyles.tableTd}>
                                    <img src="/images/Screenshot 2025-04-06 161955.jpg" alt="Manager" style={aboutUsStyles.teamImage} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/CCCCCC/000000?text=Image+Not+Found'; }} />
                                </td>
                            </tr>
                            <tr>
                                <td style={aboutUsStyles.tableTd}>Manager</td>
                                <td style={aboutUsStyles.tableTd}>A manager plays a critical role in overseeing daily operations and ensuring that business goals are met efficiently and effectively.</td>
                                <td style={aboutUsStyles.tableTd}>
                                    <img src="/images/Screenshot 2025-04-06 012844.jpg" alt="Manager" style={aboutUsStyles.teamImage} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/CCCCCC/000000?text=Image+Not+Found'; }} />
                                </td>
                            </tr>
                            <tr>
                                <td style={aboutUsStyles.tableTd}>Salesperson</td>
                                <td style={aboutUsStyles.tableTd}>The job of a salesperson is to engage with customers, understand their needs, and help them find the right products or services.</td>
                                <td style={aboutUsStyles.tableTd}>
                                    <img src="/images/Screenshot 2025-04-06 021540.jpg" alt="Salesperson" style={aboutUsStyles.teamImage} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/CCCCCC/000000?text=Image+Not+Found'; }} />
                                </td>
                            </tr>
                            <tr>
                                <td style={aboutUsStyles.tableTd}>Marketing Officer</td>
                                <td style={aboutUsStyles.tableTd}>A Marketing Officer is responsible for developing and executing strategies to promote a company’s products or services and increase brand awareness.</td>
                                <td style={aboutUsStyles.tableTd}>
                                    <img src="/images/Screenshot 2025-04-06 022634.jpg" alt="Marketing Officer" style={aboutUsStyles.teamImage} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/CCCCCC/000000?text=Image+Not+Found'; }} />
                                </td>
                            </tr>
                            <tr>
                                <td style={aboutUsStyles.tableTd}>Guide</td>
                                <td style={aboutUsStyles.tableTd}>A guide person could refer to various roles, including a quality control inspector, a production planner, or a factory manager, depending on the specific context and task at hand.</td>
                                <td style={aboutUsStyles.tableTd}>
                                    <img src="/images/Screenshot 2025-04-06 163035.jpg" alt="Guide" style={aboutUsStyles.teamImage} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/CCCCCC/000000?text=Image+Not+Found'; }} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const aboutUsStyles = {
    pageContainer: {
        backgroundColor: '#F5F5DC',  
        minHeight: '100vh',
        width: '98vw',
        color: '#333333', 
        fontFamily: 'Arial, sans-serif', 
    },
    bannerImage: {
        width: '100%',
        height: 'auto',
        maxHeight: '500px',
        objectFit: 'cover',
        marginBottom: '2rem',  
    },
    contentContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1rem',
    },
    heading1: {
        fontSize: '2.5rem', 
        fontWeight: '700',  
        marginBottom: '1.5rem',
        color: '#8B4513',  
        textAlign: 'center', 
    },
    paragraph: {
        fontSize: '1.1rem', 
        lineHeight: '1.8',  
        marginBottom: '2.5rem',
        color: '#555555', 
    },
    tableWrapper: {
        overflowX: 'auto',
        marginBottom: '2.5rem',
        borderRadius: '0.5rem', 
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    table: {
        minWidth: '100%',
        backgroundColor: '#D2B48C', 
        borderRadius: '0.5rem',
        
    },
    tableHeader: {
        backgroundColor: '#A0522D',
        color: '#FFFFFF',
    },
    tableTh: {
        padding: '1rem 1.5rem', 
        textAlign: 'left',
        fontSize: '0.85rem',  
        fontWeight: '600',  
        textTransform: 'uppercase',
        letterSpacing: '0.08em',  
    },
    tableBody: {
     },
    tableTd: {
        padding: '1rem 1.5rem',
        whiteSpace: 'normal',  
        fontSize: '1rem',  
        borderBottom: '1px solid #C8AE7D',  
        color: '#333333',  
    },
    teamImage: {
        width: '100px',  
        height: '100px',
        objectFit: 'cover',
        borderRadius: '50%',  
        border: '2px solid #8B4513',  
    },
};

export default AboutUsPage;