#! /usr/bin/env node


import inquirer from "inquirer"

let resultArray : number[] =[]
let showResultArray : string[] = []

startCalculator()

async function startCalculator() {
const selectCal = await inquirer.prompt([
    {message:"Select calculations you want to make:",
        type:"list", name:"type",
        choices:["Arithematic", "Exponential", "Trignometric" ]
        // TODO - to add logerthemic functions:
    }
])

if(selectCal.type === "Arithematic") {
    console.log("You selected simple arithematic calculator:")

    const arith = await inquirer.prompt([
        {message:"Enter First Number", type:"number", name:"firstNumber"},
        {message:"Enter Second Number", type:"number", name:"secondNumber"},
        {message:"Select operation", type:"list", name:"operator",
            choices:["Add", "Subtract", "Multiply", "Divide", "Remainder" ]
        }
    ])
    
    if(arith.operator === "Add") {
        const result = Number((arith.firstNumber + arith.secondNumber).toFixed(3)) 
        const showResult = (`\t${arith.firstNumber} + ${arith.secondNumber} = \t${result}`)
        buildArray(result, showResult)
        showCalculation(showResult)
        endCalculator()
    }
    else if(arith.operator === "Subtract") {
        const result = Number((arith.firstNumber - arith.secondNumber).toFixed(3)) 
        const showResult = (`\t${arith.firstNumber} - ${arith.secondNumber} = \t${result}`)
        buildArray(result, showResult)
        showCalculation(showResult)
        endCalculator()
    }
    else if(arith.operator === "Multiply") {
        const result = Number((arith.firstNumber * arith.secondNumber).toFixed(3)) 
        const showResult = (`\t${arith.firstNumber} x ${arith.secondNumber} = \t${result}`)
        buildArray(result, showResult)
        showCalculation(showResult)
        endCalculator()
    }
    else if(arith.operator === "Divide") {
        const result = Number((arith.firstNumber / arith.secondNumber).toFixed(3)) 
        const showResult = (`\t${arith.firstNumber} / ${arith.secondNumber} = \t${result}`)
        buildArray(result, showResult)
        showCalculation(showResult)
        endCalculator()
    }
    else if(arith.operator === "Remainder") {
        const result = Number((arith.firstNumber % arith.secondNumber).toFixed(3)) 
        const showResult = (`\t${arith.firstNumber} / ${arith.secondNumber}, Remainder is: = \t${result}`)
        buildArray(result, showResult)
        showCalculation(showResult)
        endCalculator()
    } 
}

else if(selectCal.type === "Exponential") {
    console.log("You selected Exponential calculator, you can perform power functions:")

    const expo = await inquirer.prompt([
        {message:"Enter a number:", type:"number", name:"number"},
        {message:"Select exponent operation:", type:"list", name:"expoOper",
            choices:["Square", "Cube", "Power", "Factorial", "Sqaure Root"]
        }
    ])

    if (expo.expoOper === "Square") {
        const result = Number((expo.number **2).toFixed(3)) 
        const showResult = (`\tsqure of ${expo.number} = \t${result}`)
        buildArray(result, showResult)
        showCalculation(showResult)
        endCalculator()
    }
    else if (expo.expoOper === "Cube") {
        const result = Number((expo.number ** 3).toFixed(3)) 
        const showResult = (`cube of ${expo.number} = \t${result}`)
        buildArray(result, showResult)
        showCalculation(showResult)
        endCalculator()
    }
    else if (expo.expoOper === "Power") {
        const powerVal = await inquirer.prompt([
            {message:"Enter exponent value:", type:"number", name:"powerValue"}
        ])
        const result = Number((expo.number ** powerVal.powerValue).toFixed(3)) 
        const showResult = (`${expo.number} power ${powerVal.powerValue} = \t${result}`)
        buildArray(result, showResult)
        showCalculation(showResult)
        endCalculator()
    }
    else if (expo.expoOper === "Factorial") { 
        if(expo.number<0) {
            console.log(`Factorial of Negative integers are not possible here `)
        } else {
            function factorial(n:number):number {
                if(n<1) {
                    return 1
                } else {
                    return n*factorial(n-1)
                }
            }
            // NOTE! Math.trunc(x)	Returns the integer part of x
            const result = factorial(Math.trunc(expo.number))
            const showResult = (`${Math.trunc(expo.number)}! = \t${result}`)
            buildArray(result, showResult)
            showCalculation(showResult)
            endCalculator()
        }
    }
    else if(expo.expoOper === "Sqaure Root") {
        // NOTE! Math.sqrt(x) returns the square root of x:
        const result = Number((Math.sqrt((expo.number))).toFixed(3))
        const showResult = (`Sqaure root of ${expo.number} = \t${result}`)
        buildArray(result, showResult)
        showCalculation(showResult)
        endCalculator()
    }
}


else if(selectCal.type === "Trignometric") {
    console.log("You selected Trignometric calculator, you can perform trignometric function:")
    const trig = await inquirer.prompt([
        {message:"Enter the value of angle in degree:", type:"number",  name:"angleVal" },
        {message:"Select trignometric function:", type:"list", name:"trigFunc" , choices: ["convert into radian", "sin", "cos", "tan", "cosec", "sec", "cot" ]        }
    ])

    // Convert degree value into rad: all trig function in JS work in radian
    let angleRad = (trig.angleVal*Math.PI/180)
    if(trig.trigFunc === "convert into radian") {
        const result = Number((angleRad).toFixed(3))
        const showResult = (`${trig.angleVal} deg = \t${result} rad`)
        showCalculation(showResult)
        endCalculator()
    }

    else if(trig.trigFunc === "sin") {
        const result = Number((Math.sin(angleRad)).toFixed(3))
        const showResult = (`${trig.trigFunc}(${trig.angleVal}) = \t${result}`)
        showCalculation(showResult)
        endCalculator()
    }

    else if(trig.trigFunc === "cos") {
        const result = Number(Math.cos(angleRad).toFixed(3))
        const showResult = (`${trig.trigFunc}(${trig.angleVal}) = \t${result}`)
        showCalculation(showResult)
        endCalculator()
    }

    else if(trig.trigFunc === "tan") {
        const result = Number((Math.tan(angleRad)).toFixed(3))
        const showResult = (`${trig.trigFunc}(${trig.angleVal}) = \t${result}`)
        showCalculation(showResult)
        endCalculator()
    }
    
    else if(trig.trigFunc === "cosec") {
        const result = Number((1/Math.sin(angleRad)).toFixed(3))
        const showResult = (`${trig.trigFunc}(${trig.angleVal}) = \t${result}`)
        showCalculation(showResult)
        endCalculator()
    }
    
    else if(trig.trigFunc === "sec") {
        const result = Number((1/(Math.cos(angleRad))).toFixed(3))
        const showResult = (`${trig.trigFunc}(${trig.angleVal}) = \t${result}`)
        showCalculation(showResult)
        endCalculator()
    }
    
    else if(trig.trigFunc === "cot") {
        const result = Number((1/(Math.tan(angleRad))).toFixed(3))
        const showResult = (`${trig.trigFunc}(${trig.angleVal}) = \t${result}`)
        showCalculation(showResult)
        endCalculator()
    }
    // TO-DO: Add arc-sin(sin-inverse) and sunch other trignometric operations.
}
}

async function  buildArray(result:number, showResult:string) {
resultArray.push(result)
showResultArray.push(showResult)
}

async function showCalculation(showResult:string) {
console.log(`${showResult}`)  
}

async function endCalculator() {
const askToEnd = await inquirer.prompt([
    {message:"Do you want to make another calculation:",
        name:"askToEnd",    type:"list",    choices:["Yes", "No"]
    }
])
if(askToEnd.askToEnd === "Yes") {
    startCalculator()
}   else  {
        console.log(`-----------Thank you for using this calculator -----------`)
}

}
