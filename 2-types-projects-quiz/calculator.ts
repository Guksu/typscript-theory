/**
 * Let's make a calculator 🧮
 */


type Option = "add" | "substract" | "multiply" | "divide" | "remainder" ;

const calculate = (option: Option, x:number, y:number) : number | undefined =>{
    if(option === "add"){
        return x+y;
    }
    if(option === "substract"){
        return x-y;
    }
    if(option === "multiply"){
        return x*y;
    }
    if(option === "divide"){
        return x/y;
    }
    if(option === "remainder"){
        return x%y;
    }
}


console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
