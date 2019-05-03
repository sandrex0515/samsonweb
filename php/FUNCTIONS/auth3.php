<?php
require_once('connection.php');
require_once('../../php/CLASSES/CHILDCLASS.php');

$data = array();

foreach($_POST as $k => $v){
    $data[$k]=$v;
}

$class = new childclass($data);

// $datax = $class->login($data);
$datax1 = $class->adminlogin($data);
// $datax2 = $class->teacherlogin($data);


header('HTTP/1.1 404 error');
// if($datax['status']){

//     $pk = 'pk'; 
// 	setcookie($pk, $datax['result'][0]['name'], time()+7200000, '/');

//     header('HTTP/1.1 200 Ok');
// }


if($datax1['result']){
    $pk = 'pk'; 
	setcookie($pk, $datax1['result'][0]['name'], time()+7200000, '/');

    header('HTTP/1.1 200 Ok');
}
// }else if($datax2['result']){
//     $pk = 'pk'; 
// 	setcookie($pk, $datax2['result'][0]['name'], time()+7200000, '/');

//     header('HTTP/1.1 200 Ok');
// }

header('Content-Type: application/json');
print_r(json_encode($datax1));

?>