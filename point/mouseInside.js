function isMouseInside(x, y , polygontype='quarter') {
    // Define the shoe cap shape as a polygon
    const polygon = [
        { x: 205, y: 251 },
        { x: 169, y: 233 },
        { x: 145, y: 179 },
        { x: 166, y: 91 },
        { x: 169, y: 97 },
        { x: 194, y: 91 },
        { x: 195, y: 87 },
        { x: 166, y: 93 },
        { x: 162, y: 131 },
        { x: 175,  y:140 },
        { x: 200, y: 250 }
    ];
    const quaterPolygone = [
        {x:167 ,y:99.45},
        {x:165 ,y:129.45},
        {x:185 ,y:167},
        {x:204 ,y:251},
        {x:212 ,y:254.45},
        {x:230 ,y:180},
        {x:354 ,y:212},
        {x:303 ,y:117},
        {x:250 , y:150},
        {x:169 ,y:97.45},
        
      ]
    
    
    return isPointInPolygon(x, y, polygontype === 'quarter' ? quaterPolygone : polygon);
}