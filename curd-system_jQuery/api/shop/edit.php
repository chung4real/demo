<?php

$id = $_GET['id'];
$name = $_GET['name'];
$price = $_GET['price'];
$num = $_GET['num'];

$conn=mysqli_connect('localhost','root','root','chung');

mysqli_query($conn, "set charset 'utf8'");
mysqli_query($conn, "set character set 'utf8'");

$sql = "update shop set name='$name',price='$price',num=$num where id=$id";

$res = mysqli_query($conn,$sql);

if($res){
  echo json_encode(array(
    "code" => 200,
    "body" => array(
      "msg" => "修改车辆信息成功"
    )
  ));
}else{
  echo json_decode(array(
    "code" => 201,
    "body"=> array(
      "msg" => "网络异常,请重试"
    )
  ));
}

?>