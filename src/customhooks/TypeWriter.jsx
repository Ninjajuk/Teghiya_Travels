import React, { useEffect, useState } from 'react';

const Typewriter = () => {
  const [displayedText, setDisplayedText] = useState('');
  const txt = 'Lorem ipsum dummy text blabla.';
  const speed = 50;

  useEffect(() => {
    let i = 0;

    const typeWriter = () => {
      if (i < txt.length) {
        setDisplayedText(prev => prev + txt.charAt(i));
        i++;
        setTimeout(typeWriter, speed);
      }
    };

    typeWriter();

    // Clean up the timeout if the component unmounts
    return () => clearTimeout(typeWriter);
  }, [txt]);

  return (
    <div id="demo">
      {displayedText}
    </div>
  );
};

export default Typewriter;
