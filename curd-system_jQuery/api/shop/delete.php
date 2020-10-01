<?php

$id = $_GET['id'];
$conn = mysqli_connect('localhost','root','root','chung');

mysqli_query($con, "set charset 'utf8'");
mysqli_query($con, "set character set 'utf8'");

$sql = "delete from shop where id=$id";

$res = mysqli_query($conn,$sql);

if($res){
  // 删除成功
  echo json_encode(array(
    "code" => 200,
    "body" => array(
      "msg" => "删除商品成功"
    )
  ));
}else {
  echo json_encode(array(
    "code" => 0,
    "body" => array(
      "msg" => "网络错误,请重试"
    )
  ));
}


?>