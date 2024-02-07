function monthlySavings(arr, livingCost) {
    // Calculate total income
    let totalIncome = 0;
    for (let item of arr) {
        totalIncome = totalIncome + item;
    }
    console.log(7,totalIncome);

    // Calculate tax on income
    let tax = 0;
    for(let payment of arr){
        if (payment >= 3000) {
            tax = tax + (0.2 * payment);
        }
    }
    console.log(16,tax);

    // Calculate remaining savings after tax and living cost deduction
    let savings = totalIncome - (tax + livingCost);
    console.log(20,savings);
    
}

// Test the function with sample input
const result = monthlySavings([ 1000 , 2000 , 3000 , 3069] , 2000);
console.log(result);
