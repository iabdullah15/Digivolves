// window.addEventListener('scroll', function() {
//     const scrollPos = window.scrollY;
//     const purpleFolder = document.querySelector('.purple img');
//     const yellowFolder = document.querySelector('.yellow img');

//     // For purple folder - rotates right, scales more, and moves apart first (faster down movement)
//     const purpleMoveX = Math.min(scrollPos / 1.5, 250); // Slightly larger movement to ensure it exits
//     const purpleMoveY = Math.min(scrollPos / 1.2, 300); // Faster downward movement
//     purpleFolder.style.transform = `translateX(${-purpleMoveX}px) translateY(${purpleMoveY}px) rotate(${scrollPos / 15}deg) scale(${Math.max(1 - scrollPos / 1500, 0.3)})`;

//     // For yellow folder - rotates left, scales more, and moves apart first (faster down movement)
//     const yellowMoveX = Math.min(scrollPos / 1.5, 250); // Slightly larger movement to ensure it exits
//     const yellowMoveY = Math.min(scrollPos / 1.2, 300); // Faster downward movement
//     yellowFolder.style.transform = `translateX(${yellowMoveX}px) translateY(${yellowMoveY}px) rotate(${-scrollPos / 15}deg) scale(${Math.max(1 - scrollPos / 1500, 0.3)})`;

//     // Bring them closer once they reach a certain scroll point
//     if (scrollPos > 300) {
//         const closeMove = (scrollPos - 300) / 1.5;
//         purpleFolder.style.transform = `translateX(${closeMove - purpleMoveX}px) translateY(${purpleMoveY}px) rotate(${scrollPos / 15}deg) scale(${Math.max(1 - scrollPos / 1500, 0.3)})`;
//         yellowFolder.style.transform = `translateX(${-closeMove + yellowMoveX}px) translateY(${yellowMoveY}px) rotate(${-scrollPos / 15}deg) scale(${Math.max(1 - scrollPos / 1500, 0.3)})`;
//     }
// });

window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;
    const purpleFolder = document.querySelector('.purple img');
    const yellowFolder = document.querySelector('.yellow img');

    // For purple folder - rotates right, scales more, and moves apart first (faster down movement)
    const purpleMoveX = Math.min(scrollPos / 1.5, 250); // Slightly larger movement to ensure it exits
    const purpleMoveY = Math.min(scrollPos / 1.2, 300); // Faster downward movement
    purpleFolder.style.transform = `translateX(${-purpleMoveX}px) translateY(${purpleMoveY}px) rotate(${scrollPos / 8}deg) scale(${Math.max(1 - scrollPos / 1500, 0.3)})`;

    // For yellow folder - rotates left, scales more, and moves apart first (faster down movement)
    const yellowMoveX = Math.min(scrollPos / 1.5, 250); // Slightly larger movement to ensure it exits
    const yellowMoveY = Math.min(scrollPos / 1.2, 300); // Faster downward movement
    yellowFolder.style.transform = `translateX(${yellowMoveX}px) translateY(${yellowMoveY}px) rotate(${-scrollPos / 8}deg) scale(${Math.max(1 - scrollPos / 1500, 0.3)})`;

    // Bring them closer once they reach a certain scroll point
    if (scrollPos > 300) {
        const closeMove = (scrollPos - 300) / 1.5;
        purpleFolder.style.transform = `translateX(${closeMove - purpleMoveX}px) translateY(${purpleMoveY}px) rotate(${scrollPos / 8}deg) scale(${Math.max(1 - scrollPos / 1500, 0.3)})`;
        yellowFolder.style.transform = `translateX(${-closeMove + yellowMoveX}px) translateY(${yellowMoveY}px) rotate(${-scrollPos / 8}deg) scale(${Math.max(1 - scrollPos / 1500, 0.3)})`;
    }
});
