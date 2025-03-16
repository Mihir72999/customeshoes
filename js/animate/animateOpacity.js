
let opacityQuarter = 1.0;
let opacityHeel = 1.0;

function animateOpacity(targetOpacityQuarter, targetOpacityHeel) {
    const speed = 0.05; 
    function step() {

        if (Math.abs(opacityQuarter - targetOpacityQuarter) >= speed) {
            opacityQuarter += opacityQuarter < targetOpacityQuarter ? speed : -speed;
             requestAnimationFrame(step);
            } else {
                opacityQuarter = targetOpacityQuarter;
                drawImage();
        }
  
        if (Math.abs(opacityHeel - targetOpacityHeel) >= speed) {
            opacityHeel += opacityHeel < targetOpacityHeel ? speed : -speed;
            requestAnimationFrame(step);
            
        }
        else {
            opacityHeel = targetOpacityHeel;
            drawImage();
        }
        
        drawImage();
    }
    if (opacityQuarter !== targetOpacityQuarter || opacityHeel !== targetOpacityHeel) {
        requestAnimationFrame(step);   
    }
}