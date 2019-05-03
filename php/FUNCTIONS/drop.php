<?php
require_once('connection.php');
require_once('../../php/CLASSES/CHILDCLASS.php');
$data = array();

foreach($_POST as $k=>$v){
    $data[$k] = $v;
}

$class = new childclass ($data);


$datax = $class->drop($data);

header("HTTP/1.1 404 Error");
if($datax['status']){
    header("HTTP/1.1 200 Ok");
}




header("Content-Type:application/json");
print_r(json_encode($datax));
?>