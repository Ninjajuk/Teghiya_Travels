import React, { useState, useEffect } from 'react';

const TypingEffect = ({ texts, typeSpeed, backSpeed, backDelay, loop }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [cursor, setCursor] = useState('|');

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      } else {
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          if (loop) {
            setTimeout(() => setIsDeleting(true), backDelay);
          }
        }
      }
    };

    const typingSpeed = isDeleting ? backSpeed : typeSpeed;
    const timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typeSpeed, backSpeed, backDelay, loop]);

  useEffect(() => {
    const blinkCursor = setInterval(() => {
      setCursor((prevCursor) => (prevCursor === '|' ? ' ' : '|'));
    }, 700);

    return () => clearInterval(blinkCursor);
  }, []);

  return (
    <div className="type-wrap">
      <span>{displayedText}</span>
      <span className="typed-cursor">{cursor}</span>
    </div>
  );
};

export default TypingEffect;
