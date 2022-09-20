class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    get interest() {
        return this._interest;
    }

    set interest(interest) {
        this._interest = interest;
    }

    addInterest(interest) {
        let amount = super.getBalance() + interest / 100;
        super.deposit(amount);
    }

    toString() {
        return "Account " + this._number + ": interest " + this._interest + ": balance " + this._balance;
    }
}