<?php
require_once('connection.php');
require_once('../../php/CLASSES/CHILDCLASS.php');
require_once('../../fpdf/fpdf.php');
$data = array();

foreach($_GET as $k => $v){
    $data[$k]=$v;
}

$class = new childclass($data);


$datax = $class->dropcsv($data);
$count = 1;
if($datax['status']){
 
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
     
        $this->Cell(190,10,'             Prepared by:                                                                                                   Noted by:','',0,'L');
        $this->Ln(17);
        $this->Cell(190,10,"             EUGENE D. ABAYON                                                                                    DANTE E. QUEVEDO",'',0,'L');
    
        $this->SetY(-15);
        $this->SetFont('Arial','I',8);
        $this->Cell(0,10,'Page '.$this->PageNo().'/{nb}',0,0,'C');
 
    }
    }
    $pdf = new PDF('P','mm',array(330.2,215.9));
    
    $pdf->AliasNbPages();
    $pdf->AddPage();
    $pdf->SetFont('Arial','',11);
    $pdf->Cell(30,30,'' ,0,true);

    $pdf->Ln(-30);
    
    
    $pdf->SetFont('Arial','',11);
        
        $pdf->Cell(80);
        $pdf->Cell(40,10,'SAMSON COLLEGE OF SCIENCE AND TECHNOLOGY',0,0,'C');
        $pdf->Cell(-40,20,'NATIONAL SERVICE TRAINING PROGRAM',0,0,'C');
        $pdf->Cell(40,30,'CIVIC WELFARE TRAINING SERVICE',0,0,'C');
        $pdf->Cell(-40,40,'Legarda-Cubao',0,0,'C');
        
         
    $pdf->Ln(10);
    

    $pdf->Cell(0,50,'Final List of Student Dropped(Technical)',0,0,'C');
    $pdf->Ln(1);
    $her = "";
    if($_GET['subject'] == 'NSTP'){
        $her = 'CWTS';
    }else{
        $her = 'ROTC';
    }
    $pdf->Cell(0,60,$her.' - '.$_GET['semester'].'',0,0,'C');
    $pdf->Ln(1);

    $where ="";
    if($_GET['semester'] == 1){
        $where = '1st Semester School Year '.$_GET['batch'].'';
    }else{
        $where = '2nd Semester School Year '.$_GET['batch'].'';
    }
    $pdf->Cell(0,70,$where,0,0,'C');
    $pdf->Ln(20);
    // $pdf->Cell(0,60,'Name                               | Course     ',0,0,'C');
    $pdf->Ln(20);
    $pdf->Cell(10,7,'No',1,0,'L',0);   // empty cell with left,top, and right borders
    $pdf->Cell(50,7,'                  Name          ',1,0,'L',0);
    $pdf->Cell(50,7,'                Course         ',1,0,'L',0);
    $pdf->Cell(80,7,'                             Reason',1,0,'L',0);

    
                  
    foreach($datax['result'] as $kk=>$vv){
        
        $pdf->Ln(3);
        
        $pdf->Cell(10,15,$count,'LR',0,'C',0);  // cell with left and right borders
        $pdf->Cell(50,15,$vv['name'],'LR',0,'C',0);
        $pdf->Cell(50,15,$vv['course'],'LR',0,'C',0);
        $pdf->Cell(80,15,$vv['reason'],'LR',0,'C',0);
       $count++;
       $pdf->Ln(3);
    }
        
                   
        
        $pdf->Cell(10,15,'','LBR',0,'L',0);   // empty cell with left,bottom, and right borders
        $pdf->Cell(50,15,'','LRB',0,'L',0);
        $pdf->Cell(50,15,'','LRB',0,'L',0);
        $pdf->Cell(80,15,'','LRB',0,'L',0);

        
                        $pdf->Ln();
                        $pdf->Ln();
                        
    
  

 
  
    
    
    
    
    $pdf->Output();
    header('HTTP/1.1 200 Ok');


}
header('Content-Type: application/json');
print_r(json_encode($datax));

?>