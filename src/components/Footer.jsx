import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="page-footer brown darken-1">
                <div className="footer-copyright">
                    <div className="container">
                        © {new Date().getFullYear()} Copyright Text
                        <a className="grey-text text-lighten-4 right" href="https://github.com/dobrovolskyv/react-shop" target="_blank" rel="noreferrer">More Links</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;