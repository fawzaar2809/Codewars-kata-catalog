function dbSort(a){  
    const num = a.filter(a => typeof a === "number").sort((a, b) => a - b);
    const str = a.filter(a => typeof a === "string").sort();
    return [...num, ...str];
     
   }