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
        if (this.balance >= amount) {
            this.withdraw(amount);             // O(1)
            anotherAccount.deposit(amount);    // O(1)
            this.history.push(`Transferred $${amount} to ${anotherAccount.ownerName}`); // O(1)
          } else {
            console.log("Insufficient balance for transfer."); // O(1)
          }
      }
    
    getSummary() {
        console.log(`${this.ownerName}'s balance is $${this.balance}`); // O(1)
      }
    
    printHistory() {
        console.log(`${this.ownerName}'s Transaction History:`); // O(1)
        this.history.forEach((entry) => console.log(entry));     // O(n)
      }
}

const acc1 = new BankAccount("John", 500);  // O(1)
const acc2 = new BankAccount("Sara", 300);  // O(1)

acc1.deposit(100);        // O(1)
acc1.withdraw(50);        // O(1)
acc1.transferTo(acc2, 200); // O(1)

acc1.getSummary();        // O(1)
acc2.getSummary();        // O(1)

acc1.printHistory();      // O(n)