// -----------------------------
// ELEMENTS
// -----------------------------

const envelope = document.getElementById("envelope");
const music = document.getElementById("bgMusic");

const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");
const scene5 = document.getElementById("scene5");
const scene6 = document.getElementById("scene6");

const flowersBtn = document.getElementById("flowersBtn");
const bearBtn = document.getElementById("bearBtn");
const photoBtn = document.getElementById("photoBtn");
const finalBtn = document.getElementById("finalBtn");

const typedText = document.getElementById("typedText");

// -----------------------------
// STARFIELD
// -----------------------------

const particles = document.getElementById("particles");

for (let i = 0; i < 150; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.opacity = Math.random();

    star.style.animationDelay =
        Math.random() * 5 + "s";

    particles.appendChild(star);
}

// -----------------------------
// LETTER CONTENT
// -----------------------------

const message = `

Hi Inimai ❤️

I know you've been saying you're okay.

And I believe you.

But I also know that sometimes being okay doesn't mean everything feels easy.

Sometimes we carry a lot more than people realise.

I just wanted to make something small for you tonight.

Not because I think I can magically fix everything.

But because I wanted to remind you of a few things.

You are stronger than you think.

You are kinder than you give yourself credit for.

You are capable of amazing things.

And no matter how Friday goes, I'm already proud of you for getting this far.

I know this week has felt a little heavy.

And I know you like to handle things on your own sometimes.

But you don't have to carry everything by yourself.

You've got people who care about you.

You've got people rooting for you.

And you've got me ❤️

Now click the button below.

I have something else to show you ✨

`;

// -----------------------------
// TYPEWRITER
// -----------------------------

function typeWriter(text, element) {

    element.innerHTML = "";

    let i = 0;

    function type() {

        if (i < text.length) {

            element.innerHTML += text.charAt(i);

            i++;

            setTimeout(type, 35);
        }
    }

    type();
}

// -----------------------------
// SCENE SWITCHING
// -----------------------------

function showScene(current, next) {

    current.classList.remove("active");

    setTimeout(() => {

        next.classList.add("active");

    }, 300);
}

// -----------------------------
// FLOATING HEARTS
// -----------------------------

function createHearts() {

    for (let i = 0; i < 20; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top = "100vh";

        heart.style.fontSize =
            (20 + Math.random() * 20) + "px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        const duration =
            3000 + Math.random() * 3000;

        heart.animate(
            [
                {
                    transform: "translateY(0px)",
                    opacity: 1
                },
                {
                    transform: "translateY(-120vh)",
                    opacity: 0
                }
            ],
            {
                duration,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, duration);
    }
}

// -----------------------------
// ENVELOPE
// -----------------------------

envelope.addEventListener("click", () => {

    // start music
    if (music) {

        music.play().catch(() => {
            console.log("Music blocked by browser.");
        });
    }

    envelope.classList.add("open");

    createHearts();

    setTimeout(() => {

        showScene(scene1, scene2);

        typeWriter(
            message,
            typedText
        );

    }, 1200);
});

// -----------------------------
// FLOWERS
// -----------------------------

flowersBtn.addEventListener("click", () => {

    createHearts();

    showScene(
        scene2,
        scene3
    );
});

// -----------------------------
// BEARS
// -----------------------------

bearBtn.addEventListener("click", () => {

    createHearts();

    showScene(
        scene3,
        scene4
    );
});

// -----------------------------
// PHOTO
// -----------------------------

photoBtn.addEventListener("click", () => {

    createHearts();

    showScene(
        scene4,
        scene5
    );
});

// -----------------------------
// FINAL
// -----------------------------

finalBtn.addEventListener("click", () => {

    createHearts();

    showScene(
        scene5,
        scene6
    );
});

// -----------------------------
// SECRET MESSAGE
// -----------------------------

const secretBtn =
    document.getElementById("secretBtn");

if (secretBtn) {

    secretBtn.addEventListener("click", () => {

        const secretMessage =
            document.getElementById("secretMessage");

        const signature =
            document.getElementById("signature");

        if (secretMessage) {

            secretMessage.style.display = "block";
        }

        if (signature) {

            signature.style.display = "block";
        }

        createHearts();
    });
}

// -----------------------------
// EASTER EGG
// -----------------------------

document.addEventListener("keydown", e => {

    if (e.key.toLowerCase() === "h") {

        alert(
            "🏆 Achievement Unlocked\n\nCutest Girl Ever ❤️"
        );
    }
});

// -----------------------------
// DEBUG
// -----------------------------

console.log(
    "❤️ Website loaded successfully"
);