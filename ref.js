function List (task) {
  this.task = task;
};

$(function () {
  $('form').submit(function () {

    $("#list").show();

      event.preventDefault();

      var newItem = $('input#task').val();
      var newTask = new List(newItem);

  $('#result').append('<li>' + newTask.task + '</li>');
  $('input#task').val('')

  $('li').click(function () {
    $(this).css('text-decoration', 'line-through')
  })

  $('li').dblclick(function () {
    $(this).remove();
  })

  })
})

/*$(document).ready(function() {
    $("form#accountInfo").submit(function(event) {
 -    var newName = $("input#name").val()
 -    var newDeposit = $("input#initialDeposit").val()
 -    var result = new Account(newName, newDeposit);
 -      var resultName = result.name;
 -      var resultDeposit = result.amount;
 +    var newName = $("input#name").val();
 +    var newDeposit = $("input#initialDeposit").val();
 +    var resultAccount = new Account(newName, newDeposit);
 +      var resultName = resultAccount.name;
 +      var resultDeposit = resultAccount.amount;

 -    $(".output").text(resultName + ", " + resultDeposit);
 +    $(".output").text(resultName + " " + "$" + resultDeposit);
      $("#result").show();
      event.preventDefault();
 +
 +    $("form#withdrawl").submit(function(event) {
 +      var newWithdrawl = $("input#withdrawl").val();
 +      var withdrawlResult = resultAccount.withdrawl(newWithdrawl);
 +
 +      $(".output").empty().text(resultName + " $" + withdrawlResult);
 +
 +      $("input").val("");
 +      event.preventDefault();
 +    });
 +
 +    $("form#deposit").submit(function(event) {
 +      var newDeposit = $("input#deposit").val();
 +      var depositResult = resultAccount.deposit(newDeposit);
 +
 +      $(".output").empty().text(resultName + " $" + depositResult);
 +
 +      $("input").val("");
 +      event.preventDefault();
 +    });
 +
    });
