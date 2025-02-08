
// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to nav items on scroll
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav ul li a').forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href').substring(1) === current) {
            li.classList.add('active');
        }
    });
});

// Add neon flicker effect to headings
const headings = document.querySelectorAll('h1, h2');
headings.forEach(heading => {
    heading.style.animation = `neonFlicker ${Math.random() * 5 + 5}s infinite`;
});

// Add hover effect to prize items
const prizeItems = document.querySelectorAll('.prize-item');
prizeItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05) translateY(-10px)';
        item.style.boxShadow = '0 10px 20px rgba(255, 0, 0, 0.4)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1) translateY(0)';
        item.style.boxShadow = '0 5px 15px rgba(255, 0, 0, 0.3)';
    });
});

// Parallax effect for background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.content');

    parallaxElements.forEach(el => {
        const speed = 0.05;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Animate content on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.content').forEach(content => {
    observer.observe(content);
});


particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#FF0000"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#FF0000",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 0,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 0
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

/* particlesJS("particles-js", {
  "particles": {
    "number": {
       "value": 80,
       "density": {
         "enable": true,
         "value_area": 800
       }
     },
     "color": {
      "value": "#FF0000" // Changed to red
    },
     "shape": {
       "type": "circle",
       "stroke": {
         "width": 0,
         "color": "#000000"
      },
       "polygon": {
         "nb_sides": 5
       }
     },
     "opacity": {
       "value": 0.7, // Increased opacity
      "random": false,
      "anim": {
        "enable": false,
         "speed": 1,
         "opacity_min": 0.1,
         "sync": false
      }
    },
    "size": {
       "value": 3,
       "random": true,
       "anim": {
         "enable": false,
         "speed": 40,
        "size_min": 0.1,
         "sync": false
       }
     },
     "line_linked": {
       "enable": false // Disabled line linking
     },
     "move": {
       "enable": true,
       "speed": 6,
       "direction": "bottom", // Changed to fall from top
       "random": false,
       "straight": false,
       "out_mode": "out",
       "bounce": false,
      "attract": {
         "enable": false,
         "rotateX": 600,
         "rotateY": 1200
       }
     }
   },
   "interactivity": {
     "detect_on": "canvas",
     "events": {
       "onhover": {
         "enable": true,
         "mode": "repulse"
       },
       "onclick": {
         "enable": true,
         "mode": "push"
       },
      "resize": true
     },
     "modes": {
       "grab": {
         "distance": 400,
         "line_linked": {
           "opacity": 1
         }
       },
       "bubble": {
         "distance": 400,
         "size": 40,
         "duration": 2,
         "opacity": 8,
         "speed": 3
       },
       "repulse": {
         "distance": 200,
         "duration": 0.4
       },
       "push": {
         "particles_nb": 4
       },
       "remove": {
         "particles_nb": 2
       }
     }
   },
   "retina_detect": true
 });

 */

const canvas = document.getElementById('n64-particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
let mouse = { x: null, y: null };

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1; // Reduced size
        this.speedY = Math.random() * -2 - 1; // Increased upward speed
        this.color = 'red'; // Changed color to red
    }

    update() {
        this.y += this.speedY;
        this.size -= 0.05; // Slower shrinking

        if (mouse.x && mouse.y) {
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                this.x += dx / distance * 2;
                this.y += dy / distance * 2;
            }
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function createParticles() {
    // Create particles only at the top of the canvas
    for (let i = 0; i < 2; i++) { // Reduced number of particles created per frame
        const x = Math.random() * canvas.width;
        const y = 0; // Start from the top
        particles.push(new Particle(x, y));
    }
}

function animateN64Particles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createParticles();

    particles = particles.filter(particle => {
        particle.update();
        particle.draw();
        return particle.size > 0.1 && particle.y > 0; // Remove particles when they're too small or go off-screen
    });

    requestAnimationFrame(animateN64Particles);
}

animateN64Particles();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

canvas.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

canvas.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
});

