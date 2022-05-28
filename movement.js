"use strict";

document.addEventListener("DOMContentLoaded", (_) => {
    const face = document.getElementById("face");
    const offset = 5;
    document.addEventListener("keydown", (e) => {
        switch (e.code) {
            case "ArrowUp":
                move(face, 0, -offset);
                break;
            case "ArrowRight":
                move(face, offset, 0);
                break;
            case "ArrowDown":
                move(face, 0, offset);
                break;
            case "ArrowLeft":
                move(face, -offset, 0);
                break;
        }
    });
});

function move(node, x, y) {
    console.log(`move ${node.getAttribute("id")} by (${x},${y})`);
    const xOffset = extractNumPart(node.style.left);
    const yOffset = extractNumPart(node.style.top);
    const newXOffset = xOffset + x;
    const newYOffset = yOffset + y;
    // 700 = container width - face width
    if (newXOffset >= 0 && newXOffset <= 700) {
        node.style.left = `${newXOffset}px`;
    }
    // 300 = container height - face height
    if (newYOffset >= 0 && newYOffset <= 300) {
        node.style.top = `${newYOffset}px`;
    }
}

function extractNumPart(pxIndication) {
    return Number.parseInt(pxIndication.match(/^[0-9]+/)[0]);
}