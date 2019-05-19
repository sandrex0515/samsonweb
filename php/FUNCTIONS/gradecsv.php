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
$datas = $class->csv($data);
$datax = $class->csv2($data);


$titlehead = 'SAMSON COLLEGE OF SCIENCE AND TECHNOLOGY';
$titlehead2 = 'NATIONAL SERVICE TRAINING SERVICE';
$titlehead3 = 'CIVIC WELFARE TRAINING SERVICE';
$titlehead4 = '587 EDSA Cubao Quezon City';
$titlehead5 = '';
$titlehead7 = 'WORKSHEET - Technical';
$titlehead8 = 'Civic Welfare Training Service - 2';
$titlehead9 = 'Semester, School Year';
$titlehead10 = '';
$titlehead11 = '';
$titlehead12 = 'Legend:, APT - Aptitude , , , , ATD - Attendance, , , , SP - Subject Proficiency ';
$titlehead13 = ', PRJ - Project, , , , TWA - Total Weigthed Average';
$titlehead14 = '';
$head = ', , , , Subject Profiency, ,  , , , , Grade Computation ';
$header = '#, Name, Course, Attendance, Prelim, Midterm, Finals, PX, Aptitude, Project, ATD, SP, APT, PRJ, TWA, Rating, Remarks';

$grade = ', , , , , , , , , , 30%, 30%, 30%, 10%';
$subheader = ', , , , , , , , ,';
$count = 1;
$d16 = 18;
$d17 = '=d'.$d16;
$body = '';
$total = '';
foreach($datas['result'] as $k => $v) {
	foreach($datax['result'] as $kk => $vv){
       

	    $empdate = date("M j, Y", strtotime($v['delivery_date']));
		$empdate1 = strtotime($empdate);
		if($v['status'] ==  'pending' && $v['remarks'] == 'pending'){
			$a1 = $vv['attendance'] * 10;
			$a2 = $vv['prelim'] * 10;
			$a3 = $vv['midterm'] * 10;
			$a4 = $vv['finals'] * 10;
			$a5 = $vv['character'] * 10;
			$a6 = $vv['activities'] * 10;
			$a66 = $vv['px'] * 10;
			$a7 = ($a2 + $a3 + $a4 + $a66) / 10;

			$attend = ($v['pattend'] + $v['mattend'] + $v['fattend']) / 3 / $a1 * 10;
			$prelim = $v['pexam'] / $a2 * 10 ;
			$midterm = $v['mexam'] / $a3 * 10;
			$finals = $v['fexam'] / $a3 * 10;
			$px = $v['px'] / $a66 * 10;
			$sp = ($prelim + $midterm + $finals + $px) / 4;
			$char = ($v['pchar'] + $v['mchar'] + $v['fchar']) / 3 / $a5 * 10;
			$proj = ($v['pactive'] + $v['mactive'] + $v['factive']) / 3 / $a6 * 10;
				$j = ';';	
				// $j = '~(?:\'[^\']*\'|"[^"]*"|)\K(,|$pattern)~';
	

	
 	$body .= $count.','
	        .$v['name'].','
	        .$v['course'].','
			.round($attend, 2). ','
            .round($prelim, 2). ','
			.round($midterm, 2). ','
			.round($finals, 2). ','
			.round($px,2).','
			.round($char, 2). ','
			.round($proj, 2). ','
			.'=d'.$d16. ','
			.'=(e'.$d16.'+f'.$d16.'+g'.$d16.'+h'.$d16.')/4'. ','
			.'=i'.$d16. ','
			.'=j'.$d16. ','
			.'=(k'.$d16.'*'.$a1.'/10) + (l'.$d16.'*'.$a7.') + (m'.$d16.'*'.$a5.'/10)+(n'.$d16.'*'.$a6.'/10)'. ','
			.'=if(o'.$d16.'>=95'. $j .'"1.0"'. $j .'if(o'.$d16.'>=91'. $j .' "1.25"'.$j.
			  'if(o'.$d16.'>=88'.$j.'"1.50"'.$j.'if(o'.$d16.'>=86'.$j.'"1.75"'.$j.'if(o'.$d16.'>=84'.$j.'"2.0"'.$j.
			  'if(o'.$d16.'>=82'.$j.'"2.25"'.$j.'if(o'.$d16.'>=79'.$j.'"2.50"'.$j.
			  'if(o'.$d16.'>=77'.$j.'"2.75"'.$j.'if(o'.$d16.'>=75'.$j.'"3.0"'.$j.
			  'if(o'.$d16.'>=70'.$j.'"6.0"'.$j.'if(o'.$d16.'<70'.$j.'"5.0"))))))))))),'
			.'=if(o'.$d16.'<=69'. $j .'"Failed"'. $j. 
			   'if(o'.$d16.'<=74'. $j .' "Incomplete" '. $j .' "Passed" '.'))'.','."\n";
		}
            $count++;
            $d16++;
            $sales = $salary++; 
}
}
	// $body1 .= $count1.',' 
	// 		.$count3.','
	// 		.$count1.','
	// 		.$data['emp'].','
	// 		.$data['empno'].','
	// 		.$data['empadd'].','
	// 		.$data['empadd']."\n";




$filename = "Grade".date('Ymd_His').".csv";
header ("Content-type: application/octet-stream");
header ("Content-Disposition: attachment; filename=".$filename);
echo $titlehead."\n".$titlehead2."\n".$titlehead3."\n".$titlehead4."\n".$titlehead5.
"\n".$titlehead7."\n".$titlehead8."\n".$titlehead9."\n".$titlehead10."\n".$titlehead11."\n".$titlehead12.
"\n".$titlehead13."\n".$titlehead14.
", , , , , , , , ,".$sa.",".$sal."\n".$head."\n".$header."\n".$grade."\n".$subheader."\n".$body;

?>