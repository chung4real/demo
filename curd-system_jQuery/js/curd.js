// 增、删、改、查

$('#tbody-shop').on('click', 'button', function () {
  const $tr = $(this).parents('tr')
  if ($(this).hasClass('btn-edit')) {
    // 编辑按钮
    $tr.addClass('edit').find('span').each(function () {
      $(this).next().val($(this).html())
    })
    // 确定按钮
  } else if ($(this).hasClass('btn-ok')) {
    const id = $tr.data('id'),
          name = $tr.find('.input-name').val(),
          price = $tr.find('.input-price').val(),
          num = $tr.find('.input-num').val()
    // 向后端发送请求
    $.get('./api/shop/edit.php', { id, name, price, num }, function (resp) {
      if (resp.code === 200) {
        $tr.removeClass('edit').find('span').each(function () {
          $(this).html($(this).next().val())
        })
      } else {
        alert('网络错误,数据修改失败')
      }
    }, 'json')
    // 删除按钮
  } else if ($(this).hasClass('btn-del')) {
    const id = $tr.data('id')
    if (confirm('确定要删除🐴')) {
      $.get('./api/shop/delete.php', { id }, function (resp) {
        if (resp.code === 200) {
          getData()
        }
      }, 'json')
    }
    // 取消按钮
  } else if ($(this).hasClass('btn-cancel')) {
    $tr.removeClass('edit')
  }
})

