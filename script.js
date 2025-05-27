 const boldWords = document.querySelectorAll('strong');
    const hoverLink = document.getElementById('hoverlink');
   
   hoverLink.addEventListener('mouseover', () => {
        boldWords.forEach(word => {
            word.style.color = 'rgb(0,128,0)';
        });
    });

    hoverLink.addEventListener('mouseout', () => {
        boldWords.forEach(word => {
            word.style.color = '';
        });
    });
