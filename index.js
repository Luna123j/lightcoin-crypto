let balance = 500.00;

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    // Keep track of the time of the transaction
    this.time = new Date();
    // Add the transaction to the account
    this.account.addTransaction(this);

  }
}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];

  }

  get balance() {

    let balance = 0;
    for (let t of this.transactions) {
      balance += t.value;
    }

    return balance;
    // Calculate the balance using the transaction objects.
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

// DRIVER CODE BELOW
const myAccount = new Account('billybob');

console.log('Starting Balance:', myAccount.balance);
// console.log(myAccount);

const t1 = new Deposit(120.00, myAccount);
console.log(myAccount);
t1.commit();
console.log(myAccount);
// const t2 = new Withdrawal(50.00, myAccount);
// t2.commit();
// console.log(myAccount);

console.log('Ending Balance:', myAccount.balance);
