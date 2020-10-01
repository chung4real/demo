// 添加数据并且渲染到页面上
const $btnAdd = $('#btn-add'),
      $addFail = $('#addFail'),
      $inputNum = $('#inputNum'),
      $inputName = $('#inputName'),
      inputPrice = $('#inputPrice')
// 给添加按钮写点击事件
utils.on($btnAdd, 'click', function () {
  const name = inputName.val(),
        num = inputNum.val(),
        price = inputPrice.val()
  // 向后端发送接口请求
  utils.fetch('./api/shop/add.php', { name, price, num }).then(resp => {
    if (resp.code === 200) {
      setTimeout(() => {
        // 让模态框隐藏并且重新渲染
        $('#addModal').modal('hide')
        getData()
      }, 200)
    } else {
      addFail.classList.remove('edit')
      setTimeout(() => {
        addFail.classList.add('edit')
      }, 2000)
    }
  })
})
// 添加之后清除添加框的输入值
$('#addModal').on('hidden.bs.modal', function () {
  inputName.value = inputPrice.value = inputNum.value = ''
})