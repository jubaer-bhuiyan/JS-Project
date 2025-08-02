const addUpTwoNumbers = (numberOne, numberTwo) => {
    console.log("I'm calling addUpTwoNumbers")
    console.log(`These are the numbers I recieived: ${numberOne} and ${numberTwo}`)
    const result = numberOne + numberTwo
    return result
}

console.log(`Result: ${addUpTwoNumbers(2, 1)}`);