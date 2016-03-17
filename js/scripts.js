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
