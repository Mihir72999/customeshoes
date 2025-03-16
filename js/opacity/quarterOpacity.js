function quarterOpacity(opacitys){
    ctx.beginPath()
    ctx.moveTo(167 , 99.45)
    ctx.lineTo(165 , 129.45)
    ctx.bezierCurveTo(175, 131, 201, 196, 202, 245);
    ctx.lineTo(212 , 250)
    ctx.bezierCurveTo(230, 175, 215.45, 180, 354, 212);
    ctx.quadraticCurveTo(354, 190, 303, 117);
    ctx.quadraticCurveTo(250, 180, 169, 97.45);
    ctx.closePath();
    // ctx.stroke()
    // ctx.strokeStyle = 'red'
    ctx.fillStyle = `rgba(255, 255, 255,  ${ (0.55  - opacitys)} )`;
    ctx.fill()
    ctx.globalAlpha = 1.0; 
}
  