import React from 'react';

const Homepage = () => {
    return (
        <div style={homepageStyles.pageContainer}>
            <img
                src="/images/homeee.png"
                alt="mens-fashion"
                style={homepageStyles.bannerImage}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1900x500/CCCCCC/000000?text=Banner+Not+Found'; }}
            />
            <div style={homepageStyles.contentContainer}>
                <h1 style={homepageStyles.heading1}>Men's Garments</h1>
                <hr style={homepageStyles.horizontalRule} />

                <section style={homepageStyles.section}>
                    <h2 style={homepageStyles.heading2}>Overview</h2>
                    <p style={homepageStyles.paragraph}>
                        Men's fashion is constantly evolving, offering a wide selection of clothing styles ranging from traditional
                        outfits to contemporary attire. Whether you favor sophisticated formal wear, relaxed casual fashion, or cultural
                        ensembles, the men's clothing industry caters to all tastes. With high-quality fabrics and trendy designs, the
                        right wardrobe choices can enhance both style and confidence.
                    </p>
                </section>

                <section style={homepageStyles.section}>
                    <h2 style={homepageStyles.heading2}>Background of Men's Fashion</h2>
                    <p style={homepageStyles.paragraph}>
                        The <a href="https://www.fashionbeans.com/article/mens-fashion-guide/" target="_blank" rel="noopener noreferrer" style={homepageStyles.link}>men's fashion industry</a>
                        spans a broad spectrum of styles and accessories. From timeless suits and dress shirts to comfortable everyday
                        wear, men's fashion continues to transform with modern influences. Whether following seasonal trends or classic
                        styles, men's apparel offers something for every occasion.
                    </p>
                </section>

                <section style={homepageStyles.section}>
                    <h2 style={homepageStyles.heading2}>Men's Clothing</h2>
                    <p style={homepageStyles.paragraph}>
                        Men’s apparel includes a variety of categories such as formal attire, casual outfits, sportswear, and traditional
                        clothing. Modern fashion focuses on merging style with comfort, ensuring a perfect balance of aesthetics and
                        functionality.
                    </p>
                </section>

                <div style={homepageStyles.imageGallery}>
                     <img src="/images/Screenshot 2025-03-25 172303.png" alt="Men's formal shirt" style={homepageStyles.galleryImage} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x300/CCCCCC/000000?text=Image+Not+Found'; }} />
                    <img src="/images/Screenshot 2025-03-25 215307.png" alt="Stylish men's suit" style={homepageStyles.galleryImage} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x300/CCCCCC/000000?text=Image+Not+Found'; }} />
                    <img src="/images/Screenshot 2025-03-25 215404.png" alt="Casual men's wear" style={homepageStyles.galleryImage} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x300/CCCCCC/000000?text=Image+Not+Found'; }} />
                    <img src="/images/Screenshot 2025-04-06 022634.jpg" alt="Another Casual" style={homepageStyles.galleryImage} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x300/CCCCCC/000000?text=Image+Not+Found'; }} />
                </div>

                <section style={homepageStyles.section}>
                    <h2 style={homepageStyles.heading2}>Popular Men's Clothing Categories</h2>
                    <p style={homepageStyles.paragraph}>Below are some of the most sought-after categories in men's fashion:</p>
                    <ol style={homepageStyles.orderedList}>
                        <li>Formal Wear</li>
                        <li>Casual Wear</li>
                        <li>Sportswear</li>
                        <li>Traditional Wear</li>
                    </ol>
                </section>

                <section style={homepageStyles.section}>
                    <h2 style={homepageStyles.heading2}>Men's Fashion Categories</h2>
                    <hr style={homepageStyles.horizontalRule} />
                    <p style={homepageStyles.paragraph}>Men’s fashion encompasses a variety of clothing styles suited for different occasions and personal preferences.</p>
                    <ul style={homepageStyles.unorderedList}>
                        <li>
                            <span style={homepageStyles.categoryTitle}>Formal Wear</span>
                            <ul style={homepageStyles.subList}>
                                <li>Suits</li>
                                <li>Dress Shirts</li>
                                <li>Blazers</li>
                                <li>Trousers</li>
                            </ul>
                        </li>
                        <li>
                            <span style={homepageStyles.categoryTitle}>Casual Wear</span>
                            <ul style={homepageStyles.subList}>
                                <li>T-Shirts</li>
                                <li>Jeans</li>
                                <li>Jackets</li>
                                <li>Sneakers</li>
                            </ul>
                        </li>
                        <li>
                            <span style={homepageStyles.categoryTitle}>Ethnic Wear</span>
                            <ul style={homepageStyles.subList}>
                                <li>Shalwar Kameez</li>
                                <li>Kurtas</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section style={homepageStyles.section}>
                    <h2 style={homepageStyles.heading2}>Men's Fashion Trends Video</h2>
                    <p style={homepageStyles.paragraph}>Watch this video for the latest men's fashion trends:</p>
                    <div style={homepageStyles.videoContainer}>
                        <iframe
                            style={homepageStyles.videoFrame}
                            src="https://www.youtube.com/embed/BF-fI28KHIM?si=nVCXwzqMxdKs5vi2"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
            </div>
        </div>
    );
};

 const homepageStyles = {
    pageContainer: {
        backgroundColor: '#f5f5dc',  
        minHeight: '100vh',
        width:'98vw',
        overflowX: 'hidden',  
    },
    bannerImage: {
        width: '100%',  
        height: '600px',
        maxHeight: '500px',
        objectFit: 'cover',  
        marginBottom: '1rem',
        display: 'block',  
    },
    contentContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1rem',
    },
    heading1: {
        fontSize: '2.25rem',
        fontWeight: '800',
        color: '#1a202c',  
        marginBottom: '1.5rem',
    },
    horizontalRule: {
        borderTop: '2px solid #cbd5e0',  
        marginBottom: '1.5rem',
    },
    section: {
        marginBottom: '2.5rem',
    },
    heading2: {
        fontSize: '1.875rem',
        fontWeight: 'bold',
        color: '#1a202c',  
        marginBottom: '1rem',
    },
    paragraph: {
        fontSize: '1.125rem',
        color: '#4a5568',  
        lineHeight: '1.75',
        marginBottom: '1rem',
    },
    link: {
        color: '#2563eb',  
        textDecoration: 'underline',
    },
    imageGallery: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
        marginBottom: '2.5rem',
    },
    galleryImage: {
        width: '100%',
        maxWidth: '300px',
        height: 'auto',
        borderRadius: '0.75rem',  
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
    },
    orderedList: {
        listStyleType: 'decimal',
        listStylePosition: 'inside',
        fontSize: '1.125rem',
        color: '#4a5568',
        lineHeight: '1.75',
        marginBottom: '1rem',
    },
    unorderedList: {
        listStyleType: 'none',
        paddingLeft: '0',
        lineHeight: '1.75',
    },
    categoryTitle: {
        fontWeight: 'bold',
        fontSize: '1.25rem',
        color: '#1a202c',  
    },
    subList: {
        listStyleType: 'disc',
        listStylePosition: 'inside',
        marginLeft: '1rem',
        fontSize: '1.125rem',
        color: '#4a5568',
        marginTop: '0.25rem',
    },
    videoContainer: {
        position: 'relative',
        width: '100%',
        paddingBottom: '56.25%',  
        height: 0,
    },
    videoFrame: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '0.5rem', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
};

export default Homepage;
