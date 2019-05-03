<?php
require_once('connection.php');
require_once('../../php/CLASSES/CHILDCLASS.php');
$data = array();

foreach($_POST as $k=>$v){
    $data[$k] = $v;
}
$pk = $data['pk'];
$class = new childclass ($data);


$datax = $class->getgrade2($data);
header("HTTP/1.1 200 Ok");


if($datax['status']){
    header("HTTP/1.1 200 Ok");
}



header("Content-Type:application/json");
print_r(json_encode($datax));
?>