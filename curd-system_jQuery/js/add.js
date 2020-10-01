// 添加数据并且渲染到页面上
const $inputNum = $('#inputNum'),
  $inputName = $('#inputName'),
  $inputPrice = $('#inputPrice'),
  $addFail = $('#addFail')
// 给添加按钮写点击事件
// $('#btn-add').on('click', function () {
//   const name = $inputName.val(),
//     num = $inputNum.val(),
//     price = $inputPrice.val()
//   // 向后端发送接口请求
//   $.get('./api/shop/add.php', { name, price, num }),
//     function (resp) {
//       if (resp.code === 200) {

//       }
//     }
// })
$('#btn-add').on('click', function () {
  const name = $inputName.val(),
    price = $inputPrice.val(),
    num = $inputNum.val()
  $.get('./api/shop/add.php', { name, price, num }, function (resp) {
    if (resp.code === 200) {
      $('#addModal').modal('hide')
      getData()
    } else {
      $addFail.removeClass('hide')
      setTimeout(() => {
        $addFail.addClass('hide')
      }, 2000)
    }
  }, 'json')
})
// 添加之后清除添加框的输入值
$('#addModal').on('hidden.bs.modal', function () {
  inputName.value = inputPrice.value = inputNum.value = ''
})