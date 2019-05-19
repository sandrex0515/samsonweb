<?php
require_once('connection.php');
require_once('../../php/CLASSES/CHILDCLASS.php');
require_once('../../fpdf/fpdf.php');
$data = array();

foreach($_GET as $k => $v){
    $data[$k]=$v;
}

$class = new childclass($data);


$datax = $class->getget($data);

if($datax['status']){
    foreach($datax['result'] as $kk=>$vv){
    class PDF extends FPDF
    {
        function Header()
        {
            // Logo
            $this->Image('../../media/samson.png',15,10,20);

    
            // Line break
        
        }
    
    function Footer()
    {
        $this->SetY(-15);
        $this->SetFont('Arial','I',8);
        $this->Cell(0,10,'Page '.$this->PageNo().'/{nb}',0,0,'C');
    }
    }
    $pdf = new PDF('P','mm',array(335,215.9));
    
    $pdf->AliasNbPages();
    $pdf->AddPage();
    $pdf->SetFont('Arial','',11);
    $pdf->Cell(30,30,'' ,0,true);
    if($vv['section']=='12A1' || $vv['section']=='22A1' || $vv['section']=='32A1' || $vv['section']=='42A1'
    || $vv['section']=='12a1' || $vv['section']=='22a1' || $vv['section']=='32a1' || $vv['section']=='42a1'
    || $vv['section']=='12B1' || $vv['section']=='22B1' || $vv['section']=='32B1' || $vv['section']=='42B1'
    || $vv['section']=='12b1' || $vv['section']=='22b1' || $vv['section']=='32b1' || $vv['section']=='42b1'
    || $vv['section']=='12C1' || $vv['section']=='22C1' || $vv['section']=='32C1' || $vv['section']=='42C1'
    || $vv['section']=='12c1' || $vv['section']=='22c1' || $vv['section']=='32c1' || $vv['section']=='42c1'
    || $vv['section']=='12D1' || $vv['section']=='22D1' || $vv['section']=='32D1' || $vv['section']=='42D1'
    || $vv['section']=='12d1' || $vv['section']=='22d1' || $vv['section']=='32d1' || $vv['section']=='42d1'
    || $vv['section']=='12E1' || $vv['section']=='22E1' || $vv['section']=='32E1' || $vv['section']=='42E1'
    || $vv['section']=='12e1' || $vv['section']=='22e1' || $vv['section']=='32e1' || $vv['section']=='42e1'
    || $vv['section']=='12F1' || $vv['section']=='22F1' || $vv['section']=='32F1' || $vv['section']=='42F1'
    || $vv['section']=='12f1' || $vv['section']=='22f1' || $vv['section']=='32f1' || $vv['section']=='42f1'
    || $vv['section']=='12G1' || $vv['section']=='22G1' || $vv['section']=='32G1' || $vv['section']=='42G1'
    || $vv['section']=='12g1' || $vv['section']=='22g1' || $vv['section']=='32g1' || $vv['section']=='42g1'
    ){
            $section = '2nd';
    }else{
        $section = '1st';

    }
    $section1 = "";
    if($_GET['random'] == 'NSTP 1'){
        $section1 = '1st';
    }else if($_GET['random'] == 'NSTP 2'){
        $section1 = '2nd';
    }else if ($_GET['random'] == 'ROTC'){
        $section1 = '1st';
    }else{
        $section1 = '2nd';
    }
    $pdf->Ln(-30);
    
    
    $pdf->SetFont('Arial','',11);
        
        $pdf->Cell(80);
        $pdf->Cell(30,10,'SAMSON COLLEGE OF SCIENCE AND TECHNOLOGY',0,0,'C');
        $pdf->Cell(-30,20,'NSTP - CWTS/ROTC ENROLLMENT SLIP',0,0,'C');
        $pdf->Cell(30,30,'Legarda-Cubao',0,0,'C');
        
        $pdf->Cell(130,30,'2x2 PHOTO HERE',0,0,'C'); 
    $pdf->Ln(20);
    $pdf->Cell(30,30,'STUDENT NO: '.$vv['studid'].'                                                                       '.$section1.' Sem/Summer, SY ',0,true);
    $pdf->Cell(190,-10,'Fullname:          '.$vv['name'].'                 |    Heigth: '.$vv['h'].'                     |    Weigth: '.$vv['w'].'   ','LRTB',0,'L');
    $pdf->Ln(0);
    $brtih1 = strtotime($vv['birthday']);
    $birth = date('F j, Y', $brtih1);
    $pdf->Cell(190,10,'Date of birth:     '.$birth.'      |     School/Branch:   Cubao         |      Course & Section:  '.$vv['course'].'    ',"LRB",0,"L");
    $pdf->Ln(10);
    $pdf->Cell(190,10,'Gender:             '.$vv['gender'].'                   |     Religion:   '.$vv['religion'].'                 |      Special Skills: '.$vv['skills'].'    ','LRB',0,'L');
    $pdf->Ln(10);
    $pdf->Cell(190,10,'Address:  '.$vv['address'].'   | City/Province:   '.$vv['provice'].'    | Contact No:  '.$vv['contact'].'   ','LRB',0,'L');
    $pdf->Ln(10);
    $pdf->Cell(190,10,'Parent/Guardian:   '.$vv['parentname'].'                                     |  Relationship:         ','LRB',0,'L');
    $pdf->Ln(10);
    $pdf->Cell(190,10,'Address: '.$vv['peraddress'].'       | Contact No:   '.$vv['parentcon'].'      ','LRB',0,'L');
    $pdf->Ln(15);
    
    
    $pdf->Cell(190,10,'________________                                                                         ______________________________','',0,'L');
    $pdf->Ln(5);
    $pdf->Cell(190,10,"Student's Signature                                                                               Registering Officer's Signature",'',0,'L');
    $pdf->Ln(5);
    $pdf->Cell(190,10,'                                                                                                                       Over Printed Name','',0,'L');
    $pdf->Ln(10);
    $pdf->Cell(190,10,"                                                                                                        Nstp's Copy",'',0,'L');
    $pdf->Ln(5);
    $pdf->Cell(190,10,"--------------------------------------------------------------------- cut here -----------------------------------------------------------------",'',0,'L');
    $pdf->Ln(5);
    
    
    $pdf->Ln(10);
    $pdf->Image('../../media/samson.png',15,155,20);
    
    $pdf->SetFont('Arial','',11);
        
        $pdf->Cell(80);
        $pdf->Cell(30,10,'SAMSON COLLEGE OF SCIENCE AND TECHNOLOGY',0,0,'C');
        $pdf->Cell(-30,20,'NSTP - CWTS/ROTC ENROLLMENT SLIP',0,0,'C');
        $pdf->Cell(30,30,'Legarda-Cubao',0,0,'C');
        
        $pdf->Cell(130,30,'2x2 PHOTO HERE',0,0,'C');
    
        $pdf->Ln(20);
        $pdf->Cell(30,30,'STUDENT NO: '.$vv['studid'].'                                                                       '.$section1.' Sem/Summer, SY ',0,true);        $pdf->Cell(190,-10,'Fullname:          '.$vv['name'].'                 |    Heigth: '.$vv['h'].'                     |    Weigth: '.$vv['w'].'   ','LRTB',0,'L');
        $pdf->Ln(0);
        $birth = date('F j, Y', $vv['birthday']);
        $pdf->Cell(190,10,'Date of birth:     '.$birth.'      |     School/Branch:   Cubao         |      Course & Section:  '.$vv['course'].' '.$vv['section'].'    ',"LRB",0,"L");
        $pdf->Ln(10);
        $pdf->Cell(190,10,'Gender:             '.$vv['gender'].'                        |     Religion:   '.$vv['religion'].'                 |      Special Skills: '.$vv['skills'].'    ','LRB',0,'L');
        $pdf->Ln(10);
        $pdf->Cell(190,10,'Address:  '.$vv['address'].'   | City/Province:   '.$vv['provice'].'    | Contact No:  '.$vv['contact'].'   ','LRB',0,'L');
        $pdf->Ln(10);
        $pdf->Cell(190,10,'Parent/Guardian:   '.$vv['parentname'].'                                     |  Relationship:         ','LRB',0,'L');
        $pdf->Ln(10);
        $pdf->Cell(190,10,'Address: '.$vv['peraddress'].'       | Contact No:   '.$vv['parentcon'].'      ','LRB',0,'L');
        $pdf->Ln(15);
        
        
        $pdf->Cell(190,10,'________________                                                                         ______________________________','',0,'L');
        $pdf->Ln(5);
        $pdf->Cell(190,10,"Student's Signature                                                                               Registering Officer's Signature",'',0,'L');
        $pdf->Ln(5);
        $pdf->Cell(190,10,'                                                                                                                       Over Printed Name','',0,'L');
        $pdf->Ln(10);
        $pdf->Cell(190,10,"                                                                                                        Registrar's Copy",'',0,'L');
        $pdf->Ln(5);
        $pdf->Cell(190,10,"--------------------------------------------------------------------- cut here -----------------------------------------------------------------",'',0,'L');
        $pdf->Ln(5);

        
        
        
        $pdf->Ln(20);
        
        $pdf->SetFont('Arial','',11);
            
            $pdf->Cell(80);
            

            $pdf->Cell(30,10,'SAMSON COLLEGE OF SCIENCE AND TECHNOLOGY',0,0,'C');
            $pdf->Cell(-30,20,'NSTP - CWTS/ROTC ENROLLMENT SLIP',0,0,'C');
            $pdf->Cell(30,30,'Legarda-Cubao',0,0,'C');
            
            $pdf->Cell(130,30,'2x2 PHOTO HERE',0,0,'C'); 
        $pdf->Ln(20);
        $pdf->Cell(30,30,'STUDENT NO: '.$vv['studid'].'                                                                       '.$section1.' Sem/Summer, SY ',0,true);
        $pdf->Cell(190,-10,'Fullname:          '.$vv['name'].'                 |    Heigth: '.$vv['h'].'                     |    Weigth: '.$vv['w'].'   ','LRTB',0,'L');
        $pdf->Ln(0);
        $birth = date('F j, Y', $vv['birthday']);
        $pdf->Cell(190,10,'Date of birth:     '.$birth.'      |     School/Branch:   Cubao         |      Course & Section:  '.$vv['course'].' '.$vv['section'].'    ',"LRB",0,"L");
        $pdf->Ln(10);
        $pdf->Cell(190,10,'Gender:             '.$vv['gender'].'                        |     Religion:   '.$vv['religion'].'                 |      Special Skills: '.$vv['skills'].'    ','LRB',0,'L');
        $pdf->Ln(10);
        $pdf->Cell(190,10,'Address:  '.$vv['address'].'   | City/Province:   '.$vv['provice'].'    | Contact No:  '.$vv['contact'].'   ','LRB',0,'L');
        $pdf->Ln(10);
        $pdf->Cell(190,10,'Parent/Guardian:   '.$vv['parentname'].'                                     |  Relationship:         ','LRB',0,'L');
        $pdf->Ln(10);
        $pdf->Cell(190,10,'Address: '.$vv['peraddress'].'       | Contact No:   '.$vv['parentcon'].'      ','LRB',0,'L');
        $pdf->Ln(15);
        
        
        $pdf->Cell(190,10,'________________                                                                         ______________________________','',0,'L');
        $pdf->Ln(5);
        $pdf->Cell(190,10,"Student's Signature                                                                               Registering Officer's Signature",'',0,'L');
        $pdf->Ln(5);
        $pdf->Cell(190,10,'                                                                                                                       Over Printed Name','',0,'L');
        $pdf->Ln(10);
        $pdf->Cell(190,10,"                                                                                                        Student's Copy",'',0,'L');
        $pdf->Ln(5);
        $pdf->Cell(190,10,"--------------------------------------------------------------------- cut here -----------------------------------------------------------------",'',0,'L');
        $pdf->Ln(5);
        
        
        $pdf->Ln(10);
    
    
    
    $pdf->Output();
    header('HTTP/1.1 200 Ok');

}
}
header('Content-Type: application/json');
print_r(json_encode($datax));

?>