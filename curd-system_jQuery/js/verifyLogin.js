const $unLogin = $('#un-login'),
      $isLogin = $('#is-login'),
      $text = $isLogin.find('b')
// 验证cookie是否存在根目录
const username = utils.getCookie('username')
if (username) {
  // 用户存在登录正常渲染页面
  getData()
  $unLogin.addClass('hide')
  $isLogin.removeClass('hide')
  $text.html(username)
}
// 退出登录
$('#logout').on('click', function () {
  if (confirm('确定要退出登录🐴')) {
    utils.setCookie('username', '', { expires: -1, path: '/' })
    $unLogin.removeClass('hide')
    $isLogin.addClass('hide')
    // 退出登录需要重新登录才能浏览页面信息
    $('#tbody-shop').html('')
  }
})

// login跳转
$('.loginBtn').on('click', function () {
  location.href = '../html/login.html'
})
//register跳转
$('.registerBtn').on('click', function () {
  location.href = '../html/register.html'
})