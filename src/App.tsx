import React from 'react';
import { ThemeProvider } from './components/theme/ThemeContext';
import Header from './components/header/Header';
import HomeContent from './components/content/HomeContent';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Header />
        <main className="flex-1 flex flex-col space-y-10 pt-24 mt-4">
          <HomeContent />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;