const cursor = document.getElementById("cursor");
let timeout;

document.addEventListener("mousemove", (e) => {
    // Set the cursor position
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;

    // Add "moving" class when the mouse is moving
    cursor.classList.add("moving");

    // Clear timeout if mouse is moving
    clearTimeout(timeout);

    // Remove "moving" class and add "stopped" class after a delay
    timeout = setTimeout(() => {
        cursor.classList.remove("moving");
        cursor.classList.add("stopped");
    }, 100); // Adjust delay as needed
});

document.addEventListener("mouseout", () => {
    // Hide cursor on mouseout
    cursor.classList.add("mouseout");
});

document.addEventListener("mouseover", () => {
    // Show cursor again on mouseover
    cursor.classList.remove("mouseout");
    cursor.classList.remove("stopped");
});
