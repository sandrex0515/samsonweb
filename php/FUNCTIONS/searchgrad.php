<?php

require_once('connection.php');
require_once('../../php/CLASSES/CHILDCLASS.php');

$data = array();
foreach($_GET as $k=>$v){
	$data[$k]= $v;
}
$class = new childclass(
$data
);
$datas = $class->searchgrad($data);



$titlehead = 'SAMSON COLLEGE OF SCIENCE AND TECHNOLOGY';
$titlehead2 = 'NATIONAL SERVICE TRAINING SERVICE';
$titlehead3 = "";
if($_GET['subject'] == 'NSTP'){
$titlehead3 = 'NATIONAL SERVICE TRAINING SERVICE';
}else{
    $titlehead3 = 'Reserve Officers Training Corps';

}
$titlehead4 = '587 EDSA Cubao Quezon City';
$titlehead5 = '';
$titlehead7 = "";
if($_GET['subject'] == 'NSTP'){
    $titlehead7 = 'COMPLETED THE COURSE OF NSTP / CWTS - 1 AND CWTS - 2';
}else{
    $titlehead7 = 'COMPLETED THE COURSE OF NSTP / ROTC - 1 AND ROTC - 2';

}
$titlehead8 = 'FINAL LIST OF GRADUATES (TECHNICAL)';
$titlehead9 = 'SY '.$_GET['batch'];
$titlehead10 = '';

$head = ', , , , , FINAL GRADES , REMARKS';
$header = 'NO, SERIAL NO. , NAME, COURSE, ADDRESS, 1st Sem, 2nd Sem, Remarks';
$count = 1;
$d16 = 18;
$d17 = '=d'.$d16;
$body = '';
$total = '';
$none = "";
foreach($datas['result'] as $k => $v) {
	   
	

	
     $body .= $count.','
             .$none. ','
	        .$v['name'].','
            .$v['course'].','
            .$v['address'].','."\n";
		
			

            $count++;
      
}





$filename = "Graduate".date('Ymd_His').".csv";
header ("Content-type: application/octet-stream");
header ("Content-Disposition: attachment; filename=".$filename);
echo $titlehead."\n".$titlehead2."\n".$titlehead3."\n".$titlehead4."\n".$titlehead5.
"\n".$titlehead7."\n".$titlehead8."\n".$titlehead9."\n".$titlehead10."\n".$titlehead11."\n".$titlehead12.
"\n".$titlehead13."\n".$titlehead14.
", , , , , , , , ,".$sa.",".$sal."\n".$head."\n".$header."\n".$body;

?>