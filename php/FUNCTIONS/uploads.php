<?php
require_once('connection.php');
require_once('../../php/CLASSES/CHILDCLASS.php');


$class = new childclass(NULL,NULL,NULL,NULL);

$datax = $class->uploads();

header('HTTP/1.1 404 error');
if($datax['status']){
    header('HTTP/1.1 200 Ok');
}
header('Content-Type: application/json');
print_r(json_encode($datax));


?>