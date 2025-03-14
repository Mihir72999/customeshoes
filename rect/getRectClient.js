function getRectClient(e) {
    const clientRect = canvas.getBoundingClientRect();
    const x = e.clientX - clientRect.left;
    const y = e.clientY - clientRect.top;
    return { x, y };
}