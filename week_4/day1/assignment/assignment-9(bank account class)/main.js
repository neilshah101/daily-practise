class Bankaccount {
    constructor(firstname, middlename, lastname, accounttype, balance, status) {
        this.firstname = firstname
        this.middlename = middlename
        this.lastname = lastname
        this.accounttype = accounttype
        this.balance = balance
        this.status = status
    }

    deposit(amount) {
        this.balance += amount
    }

    withdraw(amount) {
        this.balance -= amount
    }
    transfer(amount, destination) {
        this.balance -= amount
        destination.balance += amount
    }
    fees() {
        if (this.balance <= 0) {
            this.balance -= 35
        }
    }

}

let account1 = new Bankaccount("fray", "morgan", "mccoy", "savings", "100", "opened")

let account2 = new Bankaccount("fray", "morgan", "mccoy", "checkin", "100", "opened")


console.log(account1)

account1.withdraw(50)
console.log(account1.balance)

console.log(account2.balance)

account1.deposit(200)
console.log(account1.balance)

account2.transfer(100, account1)
console.log(account1.balance)
console.log(account2.balance)


account2.fees()
console.log(account2.balance)