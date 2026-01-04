import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary pt-10 pb-6 text-center text-white/40 text-sm border-t border-white/5">
            <div className="container mx-auto px-6">
                <p>&copy; {new Date().getFullYear()} Subhashree. All rights reserved.</p>
                <p className="mt-2 text-xs">Designed & Built with creativity.</p>
            </div>
        </footer>
    );
};

export default Footer;
