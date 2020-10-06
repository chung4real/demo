// 把数据库里的数据渲染到页面

const tbody = document.querySelector('#tbody-shop')

// getData()
function getData() {
  // 向后端发送请求
  $.get('./api/shop/select.php', resp => {
    if (resp.code === 200) {
      const { list } = resp.body
      tbody.innerHTML = list.reduce((html, shop, index) => {
        return html +
          `
        <tr data-id=${shop.id}>
            <td>${index + 1}</td>
            <td><span>${shop.name}</span><input type="text" class="input-name"></td>
            <td><span>${shop.price}</span><input type="text" class="input-price"></td>
            <td><span>${shop.num}</span><input type="text" class="input-num"></td>
            <td>
              <button class="btn btn-xs btn-info btn-edit">编辑</button>
              <button class="btn btn-xs btn-danger btn-del">删除</button>
              <button class="btn btn-xs btn-success btn-ok">确定</button>
              <button class="btn btn-xs btn-warning btn-cancel">取消</button>
            </td>
        </tr>
        `
      }, '')
    } else {
      alert('网络连接失败')
    }
  },'json')
}
