"use strict";

// 把数据库里的数据渲染到页面
var tbody = document.querySelector('#tbody-shop'); // getData()

function getData() {
  // 向后端发送请求
  $.get('./api/shop/select.php', function (resp) {
    if (resp.code === 200) {
      var list = resp.body.list;
      tbody.innerHTML = list.reduce(function (html, shop, index) {
        return html + "\n        <tr data-id=".concat(shop.id, ">\n            <td>").concat(index + 1, "</td>\n            <td><span>").concat(shop.name, "</span><input type=\"text\" class=\"input-name\"></td>\n            <td><span>").concat(shop.price, "</span><input type=\"text\" class=\"input-price\"></td>\n            <td><span>").concat(shop.num, "</span><input type=\"text\" class=\"input-num\"></td>\n            <td>\n              <button class=\"btn btn-xs btn-info btn-edit\">\u7F16\u8F91</button>\n              <button class=\"btn btn-xs btn-danger btn-del\">\u5220\u9664</button>\n              <button class=\"btn btn-xs btn-success btn-ok\">\u786E\u5B9A</button>\n              <button class=\"btn btn-xs btn-warning btn-cancel\">\u53D6\u6D88</button>\n            </td>\n        </tr>\n        ");
      }, '');
    } else {
      alert('网络连接失败');
    }
  }, 'json');
}