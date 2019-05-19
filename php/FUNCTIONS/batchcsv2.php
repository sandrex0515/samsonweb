<?php
require_once('connection.php');
require_once('../../php/CLASSES/CHILDCLASS.php');
$data = array();

foreach($_POST as $k=>$v){
    $data[$k] = $v;
}

$class = new childclass ($data);

$datas = $class->dropcsv($data);

header("HTTP/1.1 404 Error");
if($datas['status']){
    header("HTTP/1.1 200 Ok");
}



header("Content-Type:application/json");
print_r(json_encode($datas));
?>