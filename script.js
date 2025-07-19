const wishBtn = document.getElementById('wish-btn');
const birthdayCard = document.getElementById('birthday-card');
const cardInner = birthdayCard.querySelector('.card-inner');
let cardOpen = false;

wishBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (cardOpen) return; // Prevent multiple triggers

    birthdayCard.classList.remove('hidden');
    cardOpen = true;

    // Confetti animation
    const dotsContainer = wishBtn.querySelector('.wish-btn__dots');
    dotsContainer.innerHTML = '';

    for (let i = 0; i < 30; i++) {
        const dot = document.createElement('div');
        dot.className = 'confetti';
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        dot.style.width = dot.style.height = `${Math.random() * 10 + 5}px`;
        dot.style.opacity = Math.random();
        dot.style.backgroundColor = getRandomColor();

        dotsContainer.appendChild(dot);

        dot.animate([
            { transform: 'translate(0, 0)', opacity: 1 },
            {
                transform: `translate(${Math.random() * 200 - 100}px, -200px)`,
                opacity: 0
            }
        ], {
            duration: 1000,
            delay: Math.random() * 500,
            easing: 'ease-out',
        });
    }

    // Flip card
    setTimeout(() => {
        cardInner.style.transform = 'rotateY(180deg)';
    }, 500);
});

// Close the card when clicking outside
document.addEventListener('click', (e) => {
    const isClickInside = birthdayCard.contains(e.target) || wishBtn.contains(e.target);
    if (!isClickInside && cardOpen) {
        birthdayCard.classList.add('hidden');
        cardInner.style.transform = 'rotateY(0deg)';
        cardOpen = false;
    }
});

// Optional: add touch support for mobile users
wishBtn.addEventListener('touchstart', (e) => {
    e.stopPropagation();
    wishBtn.click(); // Simulate the same effect
});

function getRandomColor() {
    const colors = ['#ff6b6b', '#ffd93d', '#6bc9ff', '#a0ff6b', '#ff8cc6'];
    return colors[Math.floor(Math.random() * colors.length)];
}
// Create and animate floating hearts continuously
function createHeart() {
  const heartsContainer = document.getElementById('hearts-background');
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // Random horizontal start position (vw)
  heart.style.left = Math.random() * 100 + 'vw';
  
  // Random size between 10-25px
  const size = 10 + Math.random() * 15;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';
  
  // Random animation duration between 6-12 seconds
  heart.style.animationDuration = 6 + Math.random() * 6 + 's';
  
  heartsContainer.appendChild(heart);
  
  // Remove heart after animation completes to keep DOM clean
  setTimeout(() => {
    heart.remove();
  }, (parseFloat(heart.style.animationDuration) * 1000));
}

// Make a new heart every 300 milliseconds
setInterval(createHeart, 300);
