//CLOSURE
function Account() {
    let balance = 1000; // Corrected casing and variable name
    
    function Deposit(amount) {
        balance = balance + amount; // References the closure variable correctly
        console.log("BalanceAmount: " + balance);
    }
    
    return Deposit;
}

const MyAccount = Account();
MyAccount(500); // Output: BalanceAmount: 1500
MyAccount(700); // Output: BalanceAmount: 2200