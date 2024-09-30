import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Track scroll position
    const toggleVisibility = () => {
        if (window.scrollY > 100) { // Show button after scrolling down 100px
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll to top
        });
    };

    useEffect(() => {
        // Listen to scroll events
        window.addEventListener('scroll', toggleVisibility);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div>
            <div
                className={`fixed bottom-28 right-7 w-[70px] h-[70px] z-50 cursor-pointer hover:scale-125 scale-100 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                onClick={handleScrollTop}
            >
                <img src="top.png" alt="Scroll to top" className='w-full h-full dark:filter dark:invert' />
            </div>
        </div>
    );
};

export default ScrollToTop;
