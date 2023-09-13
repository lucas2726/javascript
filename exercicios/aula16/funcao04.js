function fatorial(n) {          //fatorial
  let fat = 1                   //5! = 5x4x3x2x1 Assim se calcula o fatorial
  for(let c = n;c > 1;c--) {    //5! = 5x4! = fatorial de 5   
  fat *= c                      //n! = n x (n-1)! = Formula para calcular o ft
}                               //1! = 1
    return fat
}

console.log(fatorial(5))
