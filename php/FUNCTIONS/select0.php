<?php
require_once('connection.php');
require_once('../../php/CLASSES/CHILDCLASS.php');
$data = array();

foreach($_POST as $k=>$v){
    $data[$k] = $v;
}
$pk = $data['pk'];
$class = new childclass ($data);

$datas = $class->selectsub0($data);
$datas2 = $class->getgrade0($data);
header("HTTP/1.1 404 Error");
if($datas['status']){
    header("HTTP/1.1 200 Ok");
}
if($datas2['status']){
    header("HHTP/1.1 200 Ok");
}



header("Content-Type:application/json");
print_r(json_encode($datas));
?>