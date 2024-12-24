console.log('Happy developing ✨')

let snowflakes = [];
let isSnowing = false;
let lightsOn = true;
let isMusicPlaying = false;

// Initialize decoration colors
const decorationColors = [
    '#ff0000', // Red
    '#ffd700', // Gold
    '#0000ff', // Blue
    '#ff69b4', // Pink
    '#9400d3'  // Purple
];

// Set initial decoration colors and positions
document.addEventListener('DOMContentLoaded', () => {
    const decorations = document.querySelectorAll('.decoration');
    decorations.forEach((decoration, index) => {
        decoration.style.backgroundColor = decorationColors[index % decorationColors.length];
        decoration.style.top = `${50 + Math.random() * 200}px`;
        decoration.style.left = `${20 + Math.random() * 160}px`;
        decoration.style.animation = 'twinkle 1.5s infinite';
    });
});

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snow';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.width = snowflake.style.height = Math.random() * 5 + 5 + 'px';
    document.body.appendChild(snowflake);
    
    // Add sparkle effect
    snowflake.style.boxShadow = '0 0 5px white';
    
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
        if (isSnowing) {
            createSnowflake();
        }
    });
    
    snowflakes.push(snowflake);
}

function toggleSnow() {
    isSnowing = !isSnowing;
    if (isSnowing) {
        for (let i = 0; i < 50; i++) {
            setTimeout(createSnowflake, 50 * i);
        }
    } else {
        snowflakes.forEach(snowflake => {
            snowflake.remove();
        });
        snowflakes = [];
    }
}

function toggleLights() {
    lightsOn = !lightsOn;
    const decorations = document.querySelectorAll('.decoration');
    decorations.forEach(decoration => {
        decoration.style.animation = lightsOn ? 'twinkle 1.5s infinite' : 'none';
        decoration.style.opacity = lightsOn ? '1' : '0.3';
    });
}

function toggleMusic() {
    const bgMusic = document.getElementById('bgMusic');
    if (isMusicPlaying) {
        bgMusic.pause();
    } else {
        bgMusic.play();
    }
    isMusicPlaying = !isMusicPlaying;
}

// Add hover effects to presents
const presents = document.querySelectorAll('.present');
presents.forEach(present => {
    present.addEventListener('mouseover', () => {
        present.style.transform = 'scale(1.1)';
        present.style.transition = 'transform 0.3s ease';
    });
    
    present.addEventListener('mouseout', () => {
        present.style.transform = 'scale(1)';
    });
});

// Add initial twinkle effect to star
const star = document.querySelector('.star');
star.style.animation = 'twinkle 2s infinite';
