const robertoQuarter = document.getElementById('11')
const fabioQuarter = document.getElementById('12')
const robertoHeel = document.getElementById('1')
const fabioHeel = document.getElementById('2')

function robertoQuarterClick(){
    if(image.src.includes('images/shoes101.png')){
        image.src='images/shoes1001.png'
      }
       else if(image.src.includes('images/shoes1002.png')){
  
          image.src='images/shoes1101.png' 
       }
       
      else if(image.src.includes('images/shoes1202.png')){
          image.src='images/shoes1001.png'
      }else if(image.src.includes('images/shoes1001.png')){
          image.src='images/shoes1001.png'
      }else if(image.src.includes('images/shoes1101.png')){
          return
      }else if(image.src.includes('images/shoes102.png')){
          image.src='images/shoes1101.png'
  
      }
      else{
          image.src = 'images/shoes11.png'
      }
      
      fabioQuarter.style.outlineOffset='0px'
      fabioQuarter.style.outline = 'none'
      robertoQuarter.style.outline = '1px solid black'
      robertoQuarter.style.outlineOffset = '5px'      
}