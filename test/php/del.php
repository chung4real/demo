<?php

$id = $_GET['id'];
$con = mysqli_connect('localhost', 'root', 'root', '2006_h5');
mysqli_query($con, "set charset 'utf8'");
mysqli_query($con, "set character set 'utf8'");

$sql = "delete from shop where id=$id";

$res = mysqli_query($con, $sql);

if ($res) {
    echo json_encode(array(
        "code" => 200,
        "body" => array(
        "msg" => "删除商品成功"
        )
    ));
    } else {
    echo json_encode(array(
        "code" => 0,
        "body" => array(
        "msg" => "网络错误，请重试"
        )
    ));
}

?>