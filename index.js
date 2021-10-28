

//solution 1 
for (let number = 1; number <=100; number++) {
	if (number % 3 === 0) {
        console.log("Fizz")
    } else if (number % 5 == 0 ) {
        console.log("Buzz")
    } else {
        console.log(number)
    } 
}

// solution 2 
for (let number = 1; number <=100; number++) {
    let output = ""

	if (number % 3 === 0) {
        output = output + "Fizz"
    } 
    
    if (number % 5 === 0 ) {
        output = output + "Buzz"
    }
    
    if (output === "") {
        output = number
    }

    console.log(output)
}