"use strict";

$('.register').on('click', function (e) {
  var $name = $('#nameInput').val(),
      $pwd = $('#pwdInput').val();
  $.ajax({
    url: '../api/user/register.php',
    method: 'post',
    data: {
      name: $name,
      pwd: $pwd
    },
    success: function success(resp) {
      if (resp.code === 200) {
        location.href = '../html/login.html';
      }
    },
    error: function error() {
      alert('网络错误,请重试');
    },
    dataType: 'json'
  });
  e.preventDefault();
});