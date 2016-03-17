function list (task) {
  this.item = task ;
};

$(function () {
  $('form').submit(function () {

    $("#list").show();

      event.preventDefault();

      newItem = $('input#task').val();
      newTask = new list(newItem);

  $('#result').append('<li>' + newTask.item + '</li>');
  $('input#task').val('')

  $('li').click(function () {
    $(this).css('text-decoration', 'line-through')
  })

  $('li').dblclick(function () {
    $(this).remove();
  })

  })
})
