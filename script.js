let prevNumber = ''
let CalculationOperator =''
let currentNumber ='0'

const inputNumber = (number)=>{
    if (currentNumber=== '0'){
        currentNumber = number
 } else {
            currentNumber += number
        }
}

const calculatorScreen = document.querySelector('.kalkulator-layar')
const updateScreen =(number)=>{
    calculatorScreen.value=number
}

const numbers=document.querySelectorAll(".angka")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})
const operators = document.querySelectorAll(".operasi-hitung")
operators.forEach((operators)=> {
    operators.addEventListener("click", (event)=>{
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator)=>{
    if (CalculationOperator=== ''){
        prevNumber=currentNumber
    }
    CalculationOperator =operator
    currentNumber='0'
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', ()=>{
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result =""
    switch (CalculationOperator){
        case "+":
            result = parseFloat (prevNumber) + parseFloat (currentNumber)
            break;
        case "*":
            result = parseFloat (prevNumber) * parseFloat (currentNumber)
            break;
        case "/":
            result = parseFloat (prevNumber) / parseFloat (currentNumber)
            break;
        case "-":
            result = parseFloat (prevNumber) - parseFloat (currentNumber)
            break;
        default:
            return
    }
    currentNumber = result
    CalculationOperator=''
}

inputPercentage = (percentage) =>{
    if (currentNumber.includes ('%')){
        return
    }
    currentNumber = currentNumber/100
}

const percentage = document.querySelector ('.persen')
percentage.addEventListener('click', (event)=>{
    inputPercentage(event.target.listener)
    updateScreen(currentNumber)
})

const clearAll =()=> {
    prevNumber=''
    CalculationOperator =''
    currentNumber='0'
}

const clearBtn = document.querySelector('.reset-all')
clearBtn.addEventListener ('click', () => {
    clearAll()
    updateScreen(currentNumber)
})


inputDecimal = (dot) =>{
    if (currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector('.desimal')
decimal.addEventListener('click', (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})