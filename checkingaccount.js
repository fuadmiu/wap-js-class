class CheckingAccount extends Account {
    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }

    get overdraft() {
        return this._overdraft;
    }

    set overdraft(overdraft) {
        this._overdraft = overdraft;
    }

    withdraw(amount) {
        // to be implemented         
    }

    toString() {
        return "Account " + this._number + ": overdraft limit " + this._overdraft + ": balance " + this._balance;
    }
}