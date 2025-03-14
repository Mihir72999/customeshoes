// Point-in-Polygon function (Ray-Casting Algorithm)
function isPointInPolygon(x, y, polygon) {
    let inside = false;
    let j = polygon.length - 1;

    for (let i = 0; i < polygon.length; i++) {
        let xi = polygon[i].x, yi = polygon[i].y;
        let xj = polygon[j].x, yj = polygon[j].y;

        let intersect = ((yi > y) !== (yj > y)) &&
                        (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
        j = i;
    }
    
    return inside;
}
