// // Play sound on click
// document.querySelectorAll(".key").forEach(key => {
//     key.addEventListener("click", () => playSound(key.dataset.key));
// });

// // Play sound on keyboard press
// document.addEventListener("keydown", (e) => {
//     const key = e.key.toUpperCase();
//     playSound(key);
// });

// function playSound(note) {
//     const audio = new Audio(`sounds/${note}.mp3`);
//     audio.play();

//     const keyElement = document.querySelector(`.key[data-key="${note}"]`);
//     if (keyElement) {
//         keyElement.classList.add("active");
//         setTimeout(() => keyElement.classList.remove("active"), 150);
//     }
// }
// ------------------------------
// 1) MAP EVERY KEY (A–Z) TO NOTES
// ------------------------------

const keySounds = {
    A: "C.mp3",
    B: "D.mp3",
    C: "E.mp3",
    D: "F.mp3",
    E: "G.mp3",
    F: "A.mp3",
    G: "B.mp3",

    H: "C_high.mp3",
    I: "D_high.mp3",
    J: "E_high.mp3",
    K: "F_high.mp3",
    L: "G_high.mp3",
    M: "A_high.mp3",
    N: "B_high.mp3",

    O: "C2.mp3",
    P: "D2.mp3",
    Q: "E2.mp3",
    R: "F2.mp3",
    S: "G2.mp3",
    T: "A2.mp3",
    U: "B2.mp3",

    V: "C3.mp3",
    W: "D3.mp3",
    X: "E3.mp3",
    Y: "F3.mp3",
    Z: "G3.mp3"
};

// ------------------------------
// 2) PLAY SOUND FOR KEY PRESS
// ------------------------------

document.addEventListener("keydown", (e) => {
    const key = e.key.toUpperCase();

    if (keySounds[key]) {
        playNote(key);
    }
});

function playNote(key) {
    const soundFile = keySounds[key];
    const audio = new Audio("sounds/" + soundFile);
    audio.play();

    console.log("Key pressed:", key, "-> sound:", soundFile);
}

// ------------------------------
// 3) PLAY A SONG (Example: Twinkle Twinkle)
// ------------------------------
// NOTES pattern for "Twinkle Twinkle Little Star"
// C C G G A A G | F F E E D D C

const twinkleNotes = [
    "A", "A", "G", "G", "F", "F", "G",
    "D", "D", "C", "C", "B", "B", "A"
];

function playSong(notes, speed = 500) {
    let index = 0;

    const interval = setInterval(() => {
        if (index >= notes.length) {
            clearInterval(interval);
            return;
        }

        playNote(notes[index]);
        index++;
    }, speed);
}

// ------------------------------
// 4) AUTO-PLAY SONG ON BUTTON CLICK
// ------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("playSongBtn");
    if (btn) {
        btn.addEventListener("click", () => playSong(twinkleNotes));
    }
});