//Recursividade 
function fatorial(n) {            //fatorial
    if (n ==1) {                  //5! = 5x4x3x2x1 Assim se calcula o fatorial
        return 1                  //5! = 5x4! = fatorial de 5   
    } else {                      //n! = n x (n-1)! = Formula para calcular o ft
        return n * fatorial(n-1)   //1! = 1
    }
}

console.log(fatorial(5))
