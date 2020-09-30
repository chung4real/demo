const tbody = document.querySelector('#tbody-shop')

getData()
function getData() {
    $.get('./php/select.php', resp => {
        if(resp.code === 200){
            const { list } = resp.body
            tbody.innerHTML = list.reduce(( str, shop, index) => {
                return str + `
                  <tr data-id="${shop.Id}">
                    <td>${index + 1}</td>
                    <td><span>${shop.name}</span><input class="input-name" type="text"></td>
                    <td><span>${shop.price}</span><input class="input-price" type="text"></td>
                    <td><span>${shop.num}</span><input class="input-num" type="text"></td>
                    <td>
                      <button class="btn btn-xs btn-info btn-edit">编辑</button>
                      <button class="btn btn-xs btn-danger btn-del">删除</button>
                      <button class="btn btn-xs btn-success btn-ok">确定</button>
                      <button class="btn btn-xs btn-warning btn-cancel">取消</button>
                    </td>
                  </tr>
                `
            }, '')
        }else{
            alert('网络连接失败')
        }
    },'json')
}