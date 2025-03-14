function heelCapOpacity(opacitys){
    //   ctx.globalAlpha = opacitys
      ctx.beginPath();
      ctx.moveTo(205, 251);
      ctx.lineTo(169, 233);
      ctx.lineTo(145, 179);
      ctx.lineTo(166, 91);
      ctx.lineTo(169, 97);
      ctx.quadraticCurveTo(169, 79, 194, 91);
      ctx.lineTo(195, 87);
      ctx.quadraticCurveTo(168, 77, 166, 93);
      ctx.lineTo(162, 131);
    ctx.bezierCurveTo(174, 130, 200, 195, 200, 250);
    ctx.closePath();

    ctx.fillStyle = `rgba(255, 255, 255,  ${ (0.55 - opacitys)} )`; // Transparent effect
    ctx.fill();
    
    ctx.globalAlpha = 1.0; // Reset opacity
   
}
