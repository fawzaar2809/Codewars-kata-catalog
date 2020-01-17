function getSize(width, height, depth) {
    const area = 2 * (width * height) + 2 * (width * depth) + 2 * (height * depth);
    
    const vol = width * height * depth;
    
    var res = [area, vol];
    
    return res;
}