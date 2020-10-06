<?php

$name = $_POST['name'];
$pwd = $_POST['pwd'];

$conn = mysqli_connect('localhost', 'root', 'root', 'chung');
mysqli_query($conn, "set charset 'utf8'");
mysqli_query($conn, "set character set 'utf8'");

$sql = "insert into users (name,pwd) values ('$name',$pwd)";

$res = mysqli_query($conn,$sql);

if ($res) {
  // 注册成功
  echo json_encode(array(
    "code" => 200,
    "body" => array(
      "msg" => "注册用户成功,是否跳转到登录页面？"
    )
  ));
} else {
  echo json_encode(array(
    "code" => 201,
    "body" => array(
      "msg" => "用户注册失败,请重试"
    )
  ));
}

?>