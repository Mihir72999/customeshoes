function fabioQuarterClick(){
    if(image.src.includes('images/shoes101.png')){      //ok
        image.src='images/shoes1202.png'
    }else if(image.src.includes('images/shoes1002.png')){   //ok
        image.src = 'images/shoes102.png'
    }else if(image.src.includes('images/shoes1001.png')){
        image.src='images/shoes1202.png'
    }else if(image.src.includes('images/shoes1101.png')){
        image.src = 'images/shoes102.png'
    }else if(image.src.includes('images/shoes102.png')){
        return
    }else if(image.src.includes('images/shoes1202.png')){
        return
    } 
    else{
        image.src = 'images/shoes12.png'
    }
    
    robertoQuarter.style.outlineOffset='0px'
    robertoQuarter.style.outline = 'none'
    fabioQuarter.style.outline = '1px solid black'
    fabioQuarter.style.outlineOffset = '5px'
}