const nav = document.getElementById('myNav');

const highlightbox = document.querySelector('.highlight-box');


nav.addEventListener('mouseover' , (e) => {
    if (e.target.tagName === 'A') {
        const {left, width } = e.target.getBoundingClientRect();
        highlightbox.style.left = `${left}px`;
        highlightbox.style.width = `${width}px`;
    }
});


nav.addEventListener('mouseout' , () => {
    highlightbox.style.width = '20';
});



// var kk = document.getElementById('kk');

// function openw() {
//     kk.style.display = 'flex';

//     if (kk.style.display = 'none') {
//         kk.style.display = 'flex';
        

//     }
//     else{
//         kk.style.display = 'none';

//     }
   
// }




const container = document.querySelector('.scroll-box-container');
  const button = document.querySelector('.navigate-button');
  let currentBoxIndex = 1; // Start from the index of the second box
  const boxWidth = document.querySelector('.scroll-box').offsetWidth;

  // Set the initial scroll position to the second box
  container.scrollTo({
    left: currentBoxIndex * boxWidth,
    behavior: 'smooth'
  });

  function navigateToNextBox() {
    currentBoxIndex = (currentBoxIndex + 1) % container.children.length;
    const targetScrollLeft = currentBoxIndex * boxWidth;
    
    container.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth'
    });
  }


  var audioPlayer = document.getElementById('audioPlayer');

  var bb = document.getElementById('bb');

  function playOrPauseMusic() {
      if (audioPlayer.paused) {
          audioPlayer.play();
          bb.style.display = 'none';
          
      } else {
          audioPlayer.pause();
          bb.style.display = 'block';
      }
  }

  function goBack() {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
  }



  

  var audioPlayer1 = document.getElementById('audioPlayer1');

  var bb1 = document.getElementById('bb1');

  function playOrPauseMusic1() {
      if (audioPlayer1.paused) {
          audioPlayer1.play();
          bb1.style.display = 'none';
          
      } else {
          audioPlayer1.pause();
          bb1.style.display = 'block';
      }
  }

  function goBack() {
      audioPlayer1.pause();
      audioPlayer1.currentTime = 0;
  }