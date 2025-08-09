// src/components/ScrollToTopButton.jsx
import React, { useState, useEffect } from 'react';

// A simple SVG icon for the up arrow
const ArrowUpIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m5 12 7-7 7 7" />
        <path d="M12 19V5" />
    </svg>
);

function ScrollToTopButton() {
    // State to track whether the button should be visible
    const [isVisible, setIsVisible] = useState(false);

    // This function checks the scroll position and updates the state.
    // The button will appear after the user has scrolled 400px down.
    const toggleVisibility = () => {
        if (window.scrollY > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // This function will be called when the button is clicked.
    // It scrolls the page back to the top smoothly.
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // This enables the smooth scrolling animation
        });
    };

    // Set up an event listener when the component mounts.
    // This listener will call toggleVisibility whenever the user scrolls.
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Clean up the event listener when the component unmounts
        // to prevent memory leaks.
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* The button is only rendered if isVisible is true */}
            <button
                type="button"
                onClick={scrollToTop}
                className={`
          ${isVisible ? 'opacity-100' : 'opacity-0'}
          bg-primary text-primary-foreground 
          hover:bg-primary/90 
          focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
          rounded-full p-3 shadow-lg 
          transition-opacity duration-300 ease-in-out
        `}
                aria-label="Scroll to top"
            >
                <ArrowUpIcon className="h-6 w-6" />
            </button>
        </div>
    );
}

export default ScrollToTopButton;
