// 增、删、改、查

utils.on(tbody, 'click', function (e) {
  const target = e.target,
        tr = target.parentNode.parentNode,
    curdBtn = Array.from(target.classList)
  if (curdBtn.includes('btn-edit')) {
    // 编辑按钮
    tr.classList.add('edit')
    const spans = tr.querySelectorAll('span')
    spans.forEach(span => {
      span.nextElementSibling.value = span.innerHTML
    })
    // 确定按钮
  } else if (curdBtn.includes('btn-ok')) {
    const id = tr.getAttribute('data-id'),
          name = tr.querySelector('.input-name').value,
          price = tr.querySelector('.input-price').value,
          num = tr.querySelector('.input-num').value
    // 向后端发送请求
    utils.fetch('./api/shop/edit.php', { id, name, price, num }).then(resp => {
      if (resp.code === 200) {
        tr.classList.remove('edit')
        const spans = tr.querySelectorAll('span')
        spans.forEach(span => {
          span.innerHTML = span.nextElementSibling.value
        })
      }
    })
    // 删除按钮
  } else if (curdBtn.includes('btn-del')) {
    const id = tr.getAttribute('data-id')
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
    tr.classList.remove('edit')
  }
})

