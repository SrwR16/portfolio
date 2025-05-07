import React, { useState, useEffect, useRef } from 'react';

interface TerminalPathProps {
  path: string;
}

const TerminalPath: React.FC<TerminalPathProps> = ({ path }) => {
  const [displayPath, setDisplayPath] = useState('');
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    currentIndexRef.current = 0;
    setDisplayPath('');
    
    if (typingTimerRef.current) {
      clearTimeout(typingTimerRef.current);
    }
    
    const typeNextChar = () => {
      if (currentIndexRef.current < path.length) {
        setDisplayPath(path.substring(0, currentIndexRef.current + 1));
        currentIndexRef.current += 1;
        typingTimerRef.current = setTimeout(typeNextChar, 100);
      }
    };
    
    typeNextChar();
    
    return () => {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
      }
    };
  }, [path]);

  return (
    <div className="font-mono inline-flex items-center">
      <span style={{ paddingLeft: '6px', marginLeft: '4px' }}>{displayPath}</span>
      <span 
        className="ml-2 w-[0.2ch] h-[1.1em] animate-blink" 
        style={{ backgroundColor: 'currentColor' }}
      ></span>
    </div>
  );
};

export default TerminalPath;