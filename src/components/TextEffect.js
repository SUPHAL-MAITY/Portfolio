import React, { useState, useEffect } from 'react';
import '../styles/ConsoleText.css'; 

const ConsoleText = ({ words, targetId, colors }) => {
  const [visible, setVisible] = useState(true);
  const [letterCount, setLetterCount] = useState(1);
  const [x, setX] = useState(1);
  const [waiting, setWaiting] = useState(false);
  const [currentWords, setCurrentWords] = useState([...words]);
  const [currentColors, setCurrentColors] = useState(colors || ['#fff']);
  
  useEffect(() => {
    const target = document.getElementById(targetId);
    target.setAttribute('style', 'color:' + currentColors[0]);
    
    const interval = setInterval(() => {
      if (letterCount === 0 && !waiting) {
        setWaiting(true);
        target.innerHTML = currentWords[0].substring(0, letterCount);
        setTimeout(() => {
          const usedColor = currentColors.shift();
          const usedWord = currentWords.shift();
          currentColors.push(usedColor);
          currentWords.push(usedWord);
          setX(1);
          target.setAttribute('style', 'color:' + currentColors[0]);
          setLetterCount(letterCount + x);
          setWaiting(false);
        }, 500);
      } else if (letterCount === currentWords[0].length + 1 && !waiting) {
        setWaiting(true);
        setTimeout(() => {
          setX(-1);
          setLetterCount(letterCount + x);
          setWaiting(false);
        }, 500);
      } else if (!waiting) {
        target.innerHTML = currentWords[0].substring(0, letterCount);
        setLetterCount(letterCount + x);
      }
    }, 120);
    
    const underscoreInterval = setInterval(() => {
      setVisible((v) => !v);
    }, 400);

    return () => {
      clearInterval(interval);
      clearInterval(underscoreInterval);
    };
  }, [letterCount, waiting, x, currentWords, currentColors, targetId]);

  return (
    <div>
      <span id={targetId}></span>
      <span id="console" className={`console-underscore ${visible ? '' : 'hidden'}`}>_</span>
    </div>
  );
};

export default ConsoleText;
