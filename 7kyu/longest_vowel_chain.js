function solve(s){
    const res = Math.max(...(s.match(/[aeiou]+/g) || []).map(match => match.length));

    return res;
}   