function robertoHeelClick(){
    if(image.src.includes('images/shoes12.png')){
        image.src='images/shoes1202.png'
  }else if(image.src.includes('images/shoes11.png')){
      image.src='images/shoes1001.png'
  }else if(image.src.includes('images/shoes1101.png')){
      image.src='images/shoes1001.png'
     
  }else if(image.src.includes('images/shoes102.png')){
     image.src ='images/shoes1202.png'
  }else if(image.src.includes('images/shoes1001.png')){
      return
  }else if(image.src.includes('images/shoes1.png')){
      return
   }else if(image.src.includes('images/shoes1202.png')){
      return
   }

  else{
      image.src='images/shoes101.png'
  }
  fabioHeel.style.outline='none'
  fabioHeel.style.outlineOffset='0px'
  robertoHeel.style.outline='1px solid black'
  robertoHeel.style.outlineOffset='5px'  
}