// 给添加按钮写点击事件
$('#btn-add').on('click', function () {
  const name = $('#inputNum').val(),
        price = $('#inputName').val(),
        num = $('#inputPrice').val()
  $.get('./api/shop/add.php', { name, price, num }, function (resp) {
    if (resp.code === 200) {
      $('#addModal').modal('hide')
      getData()
    } else {
      $('#addFail').removeClass('hide')
      setTimeout(() => {
        $('#addFail').addClass('hide')
      }, 2000)
    }
  }, 'json')
})
// 添加之后清除添加框的输入值
$('#addModal').on('hidden.bs.modal', function () {
  $('#inputName').val('')
  $('#inputPrice').val('')
  $('#inputNum').val('')
})