function fabioHeelClick(){
    if(image.src.includes('images/shoes12.png')){
        image.src ='images/shoes102.png'
     }else if(image.src.includes('images/shoes11.png')){
         image.src='images/shoes1202.png'
     }else if(image.src.includes('images/shoes1001.png')){
         image.src='images/shoes1101.png'
     }else if(image.src.includes('images/shoes102.png')){
         return 
     }else if(image.src.includes('images/shoes1202.png')){
        image.src ='images/shoes102.png'
     }
     else if(image.src.includes('images/shoes1101.png')){
        return
     }
     else{
         image.src = 'images/shoes1002.png'
     }
     robertoHeel.style.outline='none'
     robertoHeel.style.outlineOffset='0px'
     fabioHeel.style.outline='1px solid black'
     fabioHeel.style.outlineOffset='5px'
}