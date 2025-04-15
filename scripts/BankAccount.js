class BankAccount {
    constructor(ownerName, initialBalance) {
        this.ownerName = ownerName;          // O(1)
        this.balance = initialBalance;       // O(1)
        this.history = [];                   // O(1)
      }
    
    deposit(amount) {
        this.balance += amount;              // O(1)
        this.history.push(`Deposited $${amount}`); // O(1)
      }
    
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;            // O(1)
            this.history.push(`Withdrew $${amount}`); // O(1)
          } else {
            console.log("Insufficient funds"); // O(1)
          }
      }
    
    transferTo(anotherAccount, amount) {
       
      }
    
    getSummary() {
        
      }
    
    printHistory() {

      }
    }