"use strict";

$('.login').on('click', function (e) {
  var $name = $('#nameInput').val(),
      $pwd = $('#pwdInput').val();
  var $check = $('#check');
  $.ajax({
    url: '../api/user/login.php',
    method: 'post',
    data: {
      name: $name,
      pwd: $pwd
    },
    success: function success(resp) {
      if (resp.code === 200) {
        if ($check.prop('checked')) {
          utils.setCookie('username', $name, {
            expires: 7,
            path: '/'
          });
        } else {
          utils.setCookie('username', $name, {
            path: '/'
          });
        }
      }

      location.href = '../index.html';
    },
    error: function error() {
      alert('用户名密码输入错误,请重新登录');
    },
    dataType: 'json'
  });
  e.preventDefault();
});