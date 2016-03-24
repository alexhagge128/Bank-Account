//source code

function bankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
}

bankAccount.prototype.deposit = function(deposit) {
  this.amount = this.amount + parseInt(deposit);
  return this.amount;
}

bankAccount.prototype.withdrawl = function(withdrawl) {
  this.amount = this.amount - parseInt(withdrawl);
  return this.amount;
}
