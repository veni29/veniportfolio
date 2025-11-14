const bubbleContainer = document.querySelector('.bubbles');

// generate 20 subtle floating bubbles
for (let i = 0; i < 20; i++) {
  const bubble = document.createElement('span');
  const size = Math.random() * 40;
  bubble.style.width = `${10 + size}px`;
  bubble.style.height = `${10 + size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${5 + Math.random() * 10}s`;
  bubble.style.animationDelay = `${Math.random() * 5}s`;
  bubbleContainer.appendChild(bubble);
}

// Bubble animation styles
const style = document.createElement('style');
style.innerHTML = `
  .bubbles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
  }

  .bubbles span {
    position: absolute;
    bottom: -50px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    animation: rise linear infinite;
  }

  @keyframes rise {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-110vh);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);




/* Fade-in on scroll */
const faders = document.querySelectorAll('.fade-in');

const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver(function(entries){
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('appear');
    }
  });
}, appearOptions);

faders.forEach(fader=>{
  appearOnScroll.observe(fader);
});

/* Back to top */
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", ()=> {
  topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});
topBtn.onclick = ()=> window.scrollTo({top:0, behavior:"smooth"});

/* Cursor Glow */
const cursor = document.createElement("div");
cursor.classList.add("cursor-dot");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

