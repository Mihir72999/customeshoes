// Smooth opacity transition

let opacityQuarter = 1.0;
let opacityHeel = 1.0;

function animateOpacity(targetOpacityQuarter, targetOpacityHeel) {
    const speed = 0.05; // Transition speed
    function step() {

        // Animate quarter opacity
        if (Math.abs(opacityQuarter - targetOpacityQuarter) >= speed) {
            opacityQuarter += opacityQuarter < targetOpacityQuarter ? speed : -speed;
             requestAnimationFrame(step);
            } else {
                opacityQuarter = targetOpacityQuarter;
                drawImage();
        }
  
        // Animate heel opacity
        if (Math.abs(opacityHeel - targetOpacityHeel) >= speed) {
            opacityHeel += opacityHeel < targetOpacityHeel ? speed : -speed;
            requestAnimationFrame(step);
            
        }
        else {
            opacityHeel = targetOpacityHeel;
            drawImage();
        }
        

        // Only continue animating if there were changes
        drawImage();
    }
    if (opacityQuarter !== targetOpacityQuarter || opacityHeel !== targetOpacityHeel) {
        requestAnimationFrame(step);   
    }
}