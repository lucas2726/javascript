function fatorial(n) {
    let fat = 1
    for(let c = n;c > 1;c--) {
    fat *= c
}
    return fat
}

console.log(fatorial(5))

/*
fatorial
5x4x3x2x1

n! = n x (n-1)
1! = 1

*/