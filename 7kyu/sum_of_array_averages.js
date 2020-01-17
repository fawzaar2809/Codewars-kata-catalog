const sumAverage = (arr) => {
    const temp = arr.reduce((a, b) => a += b.reduce((c, d) => c += d ,0)/b.length ,0)
    
    return Math.floor(temp)
}