<?php

$name = $_GET['name'];
$price = $_GET['price'];
$num = $_GET['num'];

$conn = mysqli_connect('localhost', 'root', 'root', '2006_h5');
mysqli_query($conn, "set charset 'utf8'");
mysqli_query($conn, "set character set 'utf8'");

$sql = "insert into shop (name,price,num) values ('$name',$price,$num)";
$res = mysqli_query($conn, $sql);

if ($res) {
  echo json_encode(array(
    "code" => 200,
    "body" => array(
      "msg" => "录入商品成功"
    )
  ));
} else {
  echo json_encode(array(
    "code" => 201,
    "body" => array(
      "msg" => "网络异常，录入失败"
    )
  ));
}

?>
