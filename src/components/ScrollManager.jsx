import { useEffect } from 'react';

const ScrollManager = () => {
    useEffect(() => {
        // Prevent browser's default scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Force scroll to top on mount (refresh/load)
        window.scrollTo(0, 0);

        return () => {
            // Optional: Reset to auto if component unmounts (unlikely for App-level component)
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'auto';
            }
        };
    }, []);

    return null;
};

export default ScrollManager;
