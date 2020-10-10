"use strict";

// 给添加按钮写点击事件
$('#btn-add').on('click', function () {
  var name = $('#inputName').val(),
      price = $('#inputPrice').val(),
      num = $('#inputNum').val();
  $.get('./api/shop/add.php', {
    name: name,
    price: price,
    num: num
  }, function (resp) {
    if (resp.code === 200) {
      $('#addModal').modal('hide');
      getData();
    } else {
      $('#addFail').removeClass('hide');
      setTimeout(function () {
        $('#addFail').addClass('hide');
      }, 2000);
    }
  }, 'json');
}); // 添加之后清除添加框的输入值

$('#addModal').on('hidden.bs.modal', function () {
  $('#inputName').val('');
  $('#inputPrice').val('');
  $('#inputNum').val('');
});