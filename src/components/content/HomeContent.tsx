import React from 'react';

const HomeContent: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-8 px-5">
      <div className="flex flex-col justify-between gap-2">
        <div className="prose max-w-none text-sm dark:prose-dark md:text-lg xl:col-span-2">
          <div className="section-animate content-fadeup">
            <div>
              <h1 className="text-3xl font-extrabold text-primary leading-9 pb-4">
                <span className="text-primary">Terminal-Inspired Header Component</span>
                <span role="img" aria-label="waving hand" className="wave ml-2">👋</span>
              </h1>
            </div>
          </div>
          
          <div className="section-animate" style={{ transitionDelay: '0.2s' }}>
            <div>
              <p className="text-primary">
                Welcome to this demo of the terminal-inspired header component. This component features OS detection, a typing animation for the terminal path display, and a dark/light mode toggle.
              </p>
            </div>
          </div>
          
          <div className="section-animate" style={{ transitionDelay: '0.4s' }}>
            <div>
              <p className="text-primary">
                Try clicking on the navigation links to see the terminal path update with smooth typing animations. The header also includes a mobile-responsive menu for smaller screens.
              </p>
            </div>
          </div>
          
          <div className="section-animate" style={{ transitionDelay: '0.6s' }}>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => alert('Thanks for checking out this component!')}
                className="px-4 py-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors"
              >
                Get Started
              </button>
              <button
                onClick={() => window.open('https://github.com', '_blank')}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                View on GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;