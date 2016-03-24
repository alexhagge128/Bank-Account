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

//User Logic NEEDS EDIT
  $(document).ready(function() {
    $("form#accountInfo").submit(function(event) {
      var newName = $("input#name").val()
      var newDeposit = $("input#initialDeposit").val()
      var result = new bankAccount(newName, newDeposit);
      var resultName = resultAccount.name;
      var resultDeposit = resultAccount.amount;

      $(".output").text(resultName + ", " + resultDeposit);
      $(".output").text(resultName + " " + "$" + resultDeposit);
      $("#result").show();
      event.preventDefault();

      $("form#withdrawl").submit(function(event) {
        var newWithdrawl = $("input#withdrawl").val();
        var withdrawlResult = resultAccount.withdrawl(newWithdrawl);

        $(".output").empty().text(resultName + " $" + withdrawlResult);
        $("input").val("");
        event.preventDefault();
      });



    })
  })
