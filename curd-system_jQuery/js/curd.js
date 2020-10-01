// 增、删、改、查

$('#tbody-shop').on('click', 'button', function () {
  const $tr = $(this).parents('$tr')
  if ($(this).includes('btn-edit')) {
    // 编辑按钮
    $tr.addClass('edit').find('span').each(function () {
      $(this).next().val($(this).html())
    })
    // 确定按钮
  } else if ($(this).includes('btn-ok')) {
    const id = $tr.data('id'),
      name = $tr('.input-name').val(),
      price = $tr('.input-price').val(),
      num = $tr('.input-num').val()
    // 向后端发送请求
    $.get('./api/shop/edit.php', { id, name, price, num }).then(resp => {
      if (resp.code === 200) {
        $tr.removeClass('edit').find('span').each(function () {
          $(this).html($(this).next().val())
        })
      } else {
        alert('网络错误,数据修改失败')
      }
    })
    // 删除按钮
  } else if (curdBtn.includes('btn-del')) {
    const id = $tr.getAt$tribute('data-id')
    if (confirm('确定要删除🐴')) {
      utils.fetch('./api/shop/delete.php', { id }).then(resp => {
        if (resp.code === 200) {
          getData()
        } else {
          alert(resp.body.msg)
        }
      })
    }
    // 取消按钮
  } else if (curdBtn.includes('btn-cancel')) {
    $tr.classList.remove('edit')
  }
})

