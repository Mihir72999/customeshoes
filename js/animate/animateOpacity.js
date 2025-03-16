
let opacityQuarter = 1.0;
let opacityHeel = 1.0;

function animateOpacity(targetOpacityQuarter, targetOpacityHeel) {
    const speed = 0.09; 
    function step() {

        if (Math.abs(opacityQuarter - targetOpacityQuarter) >= speed) {
             opacityQuarter += opacityQuarter < targetOpacityQuarter ? speed : -speed;
             requestAnimationFrame(step);
        }
                
        if (Math.abs(opacityHeel - targetOpacityHeel) >= speed) {
                    opacityHeel += opacityHeel < targetOpacityHeel ? speed : -speed;
                    requestAnimationFrame(step);
            
        }
            
        drawImage();
    }
        if (opacityQuarter !== targetOpacityQuarter || opacityHeel !== targetOpacityHeel) {
           requestAnimationFrame(step);   
        }
}