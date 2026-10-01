
(function() {
  const starChars = ['·', '•', '∙', '⋅', '◦', '∘', '○', '●', '⚫',':D', 'RUN!!!!'];
  const starCount = 150; // number of stars

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.textContent = starChars[Math.floor(Math.random() * starChars.length)];
    
    // Random position
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    
    // Random size
    star.style.fontSize = (Math.random() * 0.8 + 0.4) + 'rem';
    
    // Random opacity for twinkling effect
    star.style.opacity = Math.random() * 0.7 + 0.3;
    
    // Random animation delay for staggered twinkling
    star.style.animationDelay = Math.random() * 0.1 + 's';
    
    if (star.textContent === "RUN!!!!") {
        star.style.transform = "scale(2)";
        star.style.color = "red";
    }

    document.body.appendChild(star);
  }
})();