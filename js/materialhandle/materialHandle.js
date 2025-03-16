function materialHandle(e){
    const { x, y } = getRectClient(e);
    const insideHeel = isMouseInside(x, y, "polygon");
    const insideQuarter = isMouseInside(x, y, "quarter");  
    if (insideQuarter !== isHoverQuarter || insideHeel !== isHoverHeel) {
        isHoverQuarter = insideQuarter;
        isHoverHeel = insideHeel;

        if (insideHeel) {
            canvas.onclick = () => heelcapDisplay();
        } else if (insideQuarter) {
            canvas.onclick = () => quarterDisplay();
        } else {
            canvas.onclick = () => console.log('none')
        }
      isHover = insideQuarter || insideHeel;
   
     animateOpacity(insideQuarter ? 0.3 : 1.0 , insideHeel ? 0.3 : 1.0)  
   
    canvas.style.cursor = isHover ? 'pointer' : 'default';
    
    
}
isHover = false
}