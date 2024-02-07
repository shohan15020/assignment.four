function calculateMoney(ticketSale) {
    if(ticketSale < 0){
        return 'please provide positive number';
    }

    const ticketSell = (120 * ticketSale);
    const spend = (500+(8*50));

    const result = ticketSell - spend;
    return result;
}
let money = calculateMoney(-130);
console.log(money);