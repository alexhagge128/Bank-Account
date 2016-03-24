//Business Logic
function bankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
}

bankAccount.prototype.withdrawl = function(withdrawl) {
  this.amount = this.amount - parseInt(withdrawl);
  return this.amount;
}

bankAccount.prototype.deposit = function(deposit) {
  this.amount = this.amount + parseInt(deposit);
  return this.amount;
}

//User Logic
  $(document).ready(function() {
    $("form#accountInfo").submit(function(event) {
      var newName = $("input#name").val()
      var newDeposit = $("input#initialDeposit").val()
      var result = new bankAccount(newName, newDeposit);
      
    })
  })
