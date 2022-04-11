/**
 * Creating a list of all keys
 */
const keys = document.querySelectorAll(".key");

/**
 * Setting click listener to detect a click activation and firing
 * playNote function
 */
keys.forEach(key => {
    key.addEventListener("click", () => playNote(key));   
});

/**
* Setting a event listener to detect a keyboard key activation
* and firing playNote fuction
*/
document.addEventListener("keydown", e => {
    const activeKey = e.code;
    const key = document.getElementById(activeKey);
        playNote(key);
});

/**
 * Play audio and change the color html elements
 * 
 */
function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add("playing");
    noteAudio.addEventListener("ended", () => {
        key.classList.remove("playing");
    });
}