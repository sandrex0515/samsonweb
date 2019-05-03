<?php
require_once('ClassParent.php');


class childclass extends ClassParent{


    public function __construct(
    ){
           
    }
    public function register($data){
        foreach($data as $k=>$v){
            $this->$k = pg_escape_string(strip_tags(trim($v)));
        }
        $pass = $data['password'];
        $password = hash('sha256', $pass);
        $sql = <<<EOT
        with a as(
            insert into grade(
                name,
                pexam,
                pactive,
                pattend,
                pchar,
                mexam,
                mactive,
                mattend,
                mchar,
                
                fexam,
                factive,
                fattend,
                fchar,
                
                department
                
            )
            values(
                '$this->name',
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                
                
                
                0,
                0,
                0,
                'none'
                
            )
        )
            insert into tbluser(
        
                studid,
                password,
                name,
                birthday,
                peraddress,
                address,
                contact,
                provice,
                parentname,
                parentocu,
                parentcon,
                emername,
                emercon,
                h,
                w
                )
                values(
                    '$this->email',
                    '$password',
                    '$this->name',
                    '$this->birth',
                    '$this->peradd',
                    '$this->address',
                    '$this->contact',
                    '$this->province',
                    '$this->parentname',
                    '$this->parentocu',
                    '$this->parentcon',
                    '$this->emername',
                    '$this->emercon',
                    '$this->h',
                    '$this->w'
                    )
EOT;
        return ClassParent::insert($sql);    
    }

    public function login($data){
        foreach($data as $k=>$v){
            $this->$k = pg_escape_string(strip_tags(trim($v)));
        }
        $pass = hash('sha256', $data['password']);
        $sql = <<<EOT
            select 
            id,
            studid,
            address,
            birthday,
            contact,
            emercon,
            emername,
            name,
            parentcon,
            parentname,
            parentocu,
            peraddress,
            provice
            from tbluser where studid = '$this->email' AND password = '$this->password'
EOT;
        return ClassParent::get($sql);
    }
        public function get_info($pk){
            $sql = <<<EOT
            select name from tbladmin where name='$pk'
EOT;
            return ClassParent::get($sql);
        }
        public function get_info3($pk){
            $sql = <<<EOT
            select * from tbluser
            inner join tblsubject
            on tbluser.name = tblsubject.name
            inner join grade 
            on tbluser.name = grade.name
            where tbluser.name='$pk'
EOT;
            return ClassParent::get($sql);
        }

        public function get_info2($pk){
            $sql = <<<EOT
            select name from tblteacher where name='$pk'
EOT;
            return ClassParent::get($sql);
        }
        public function adminlogin($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
            $sql = <<<EOT
            select name from tbladmin where adminid ='$this->email' AND password = '$this->password'
EOT;
            return ClassParent::get($sql);
        }
        public function teacherlogin($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
            $sql = <<<EOT
            select name from tblteacher where adminid ='$this->email' AND password = '$this->password'
EOT;
            return ClassParent::get($sql);
        }
        public function setgrade($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
            $sql = <<<EOT
            insert into setgrade
            (
       
            prelim, 
            midterm, 
            finals, 
            activities, 
            attendance, 
            character, 
            teacher,
            department
        )
        values
        (
            $this->prelim,
            $this->midterm,
            $this->finals,
            $this->activities,
            $this->attendance,
            $this->character,
            '$this->teacher',
            '$this->department'
        )
EOT;
            return ClassParent::insert($sql);
        }

        public function section($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
            $sql = <<<EOT
                insert into section 
                (
                    teacher,
                    subject,
                    section
                )
                values
                (
                    '$this->teacher',
                    '$this->subject',
                    '$this->section'
                )
EOT;
            return ClassParent::insert($sql);
        }
        public function selectsub($pk){
            $sql = <<<EOT
            select * from section where teacher = '$pk' order by date DESC
                
EOT;
            return ClassParent::get($sql);
        }
        public function selectsub0($data){
            $sql = <<<EOT
            select * from section order by date DESC
                
EOT;
            return ClassParent::get($sql);
        }

        public function sucedit($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
            $sql = <<<EOT
                update section set subject = '$this->subject', section = '$this->section', date = now() 
                where id = '$this->id'
EOT;
            return ClassParent::insert($sql);

        }
        public function subdel($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
            $sql = <<<EOT
            delete from section where id = '$this->id'
EOT;
            return ClassParent::insert($sql);
        }

        public function getgrade($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
            $sql = <<<EOT
            select * from setgrade where department = '$this->department' order by date DESC
EOT;
            return ClassParent::get($sql);
        }
        public function getgrade0($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
            $sql = <<<EOT
            select * from setgrade where department = '$this->subject' order by date DESC
EOT;
            return ClassParent::get($sql);
        }
        public function getgrade2($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
            $sql = <<<EOT
            select * from setgrade where teacher = '$this->pk' and department = '$this->department' order by date DESC
EOT;
            return ClassParent::get($sql);
        }
        public function studlist($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
            $where = "";
            $where1 = "";
            $where2 = "";
            if($this->searchstring){
                $where .= "AND tblsubject.name ILIKE '%".$this->searchstring."%'"; 
            }
            if($this->subject){
                $where1 .="AND tblsubject.subject = '$this->subject'";
            }
            if($this->section){
                $where2 .="AND tblsubject.section = '$this->section'";
            }

            
            
            $sql = <<<EOT
            select * from tblsubject 
            inner join tbluser
            on tblsubject.name = tbluser.name
            inner join grade
            on tblsubject.name = grade.name
            where archived = false
            $where
            $where1
            $where2
            AND tbluser.status = 'pending'
            order by tblsubject.name ASC;
            
EOT;
            return ClassParent::get($sql);
        }
        public function attendance($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
            if($this->total == 'NaN'){
                $this->total = pattend;

            }
            if($this->total2 == 'NaN'){
                $this->total2 = mattend;

            }
            if($this->total3 == 'NaN'){
                $this->total3 = fattend;

            }
            if($this->pgrade == 'NaN'){
                $this->pgrade = pexam;
            }
            if($this->mgrade == 'NaN'){
                $this->mgrade = mexam;
            }
            if($this->fgrade == 'NaN'){
                $this->fgrade = fexam;
            }
            if($this->quiz == 'NaN'){
                $this->quiz = pquiz;
            }
            if($this->quiz2 == 'NaN'){
                $this->quiz2 = mquiz;
            }
            if($this->quiz3 == 'NaN'){
                $this->quiz3 = fquiz;
            }
            if($this->active == 'NaN'){
                $this->active = pactive;
            }
            if($this->active2 == 'NaN'){
                $this->active2 = mactive;
            }
            if($this->active3 == 'NaN'){
                $this->active3 = factive;
            }
            if($this->char == 'NaN'){
                $this->char = pchar;
            }
            if($this->char2 == 'NaN'){
                $this->char2 = pchar;
            }
            if($this->char3 == 'NaN'){
                $this->char3 = pchar;
            }
            $sql =<<<EOT
                update grade set pattend = $this->total, mattend = $this->total2, 
                fattend = $this->total3, pexam = $this->pgrade, mexam = $this->mgrade, fexam =$this->fgrade, 
                pactive = $this->active, mactive = $this->active2, factive = $this->active3,
                pchar = $this->char, mchar = $this->char2, fchar = $this->char3,
                date = now() where name = '$this->name'
EOT;
            return ClassParent::insert($sql);
        }

        public function pgrade($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }

            $where = "";
            $where1 = "";
            $where2 = "";
           
            if($this->subject){
                $where1 .="AND subject = '$this->subject'";
            }
            if($this->section){
                $where2 .="AND section = '$this->section'";
            }
            if($this->quarter == 'Prelim'){
                $pexam = pexam;
                $pactive = pactive;
                $pattend = pattend;
                $pchar = pchar;
                $pquiz = pquiz;
                
            }
            else if($this->quarter == 'Midterm'){
                $pexam = mexam;
                $pactive = mactive;
                $pattend = mattend;
                $pchar = mchar;
                $pquiz = mquiz;
                
            }
            else if($this->quarter == 'Finals'){
                $pexam = fexam;
                $pactive = factive;
                $pattend = fattend;
                $pchar = fchar;
                $pquiz = fquiz;
            }else{
                $pexam = pexam .','. mexam .','. fexam;
                $pactive = pactive.','.mactive.','.factive;
                $pattend = pattend.','.mattend.','.fattend;
                $pchar = pchar.','.mchar.','.fchar;
                $pquiz = pquiz.','.mquiz.','.fquiz;
            }
            
            $sql = <<<EOT
                select name,$pexam,$pactive,$pattend,$pchar from grade where status = 'pending'
                $where1
                $where2
EOT;
            return ClassParent::get($sql);
        }
        public function drop($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
            $sql = <<<EOT
                update tbluser set status = 'Dropped', remarks = 'Dropped' where name = '$this->name'
EOT;
            return ClassParent::insert($sql);
        }
        public function setget(){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
                $sql = <<<EOT
                select * from tbluser
                inner join grade
                on grade.name = tbluser.name
                where tbluser.name = 'heneral luna'
EOT;
            return ClassParent::get($sql);
        }
        public function setset($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
            $where = "";
            if($this->sub == 'NSTP 1'){
                    $where = 'NSTP';
            }else if($this->sub == 'NSTP 2'){
                    $where = 'NSTP';
            }else{
                $where = 'ROTC';
            }
            $sql = <<<EOT
            with a as (
                update grade set subject = '$this->sub', section = '$this->sec', course ='$this->course', department = '$where' where name = '$this->pk'


            )
                insert into tblsubject (
                    name,
                    subject,
                    section
                    )
                    values(
                        '$this->pk',
                        '$this->sub',
                        '$this->sec'
                        )
EOT;
            return ClassParent::insert($sql);
        }
        public function showmodal($pk){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
            $sql = <<<EOT
              select * from tblsubject where name = '$pk'
EOT;
            return ClassParent::get($sql);
        }
        public function announcement($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
            $sql = <<<EOT
              insert into announcement(
                what,
                who,
                whin,
                whiri
              )
              values(
                  '$this->what',
                  '$this->who',
                  '$this->when',
                  '$this->where'
              )
EOT;
            return ClassParent::insert($sql);
        }
        public function fetchannounce($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
            $where = "";
            if($this->searchString){
                    $where .="WHERE what ILIKE '%".$this->searchString."%'";
            }
            $sql = <<<EOT
              select 
              what,
              who,
              whin,
              whiri,
              date::timestamp(0)
              from announcement 
              $where
              order by date DESC;
EOT;
            return ClassParent::get($sql);
        }
        public function studgrade($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
            $sql = <<<EOT
            select * from tbluser
            inner join grade
            on tbluser.name = grade.name
            inner join setgrade
            on grade.department = setgrade.department
            where tbluser.status = 'pending'
            AND tbluser.name = '$this->pk'
EOT;
            return ClassParent::get($sql);
        }

        public function studsetgrade($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
            $sql = <<<EOT
            select * setgrade order by DESC limit 1
EOT;
            return ClassParent::get($sql);
        }
        public function getget(){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
            $sql = <<<EOT
            select * from tbluser
            inner join grade
            on tbluser.name = grade.name
            where tbluser.name = 'sandrex cabrales'
            
EOT;
            return ClassParent::get($sql);
        }

        public function csv($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
         
            $sql = <<<EOT
           with a as(
            select * from setgrade where department = '$this->subject' order by date desc limit 1
            )
            select * from grade
            inner join tbluser
            on grade.name = tbluser.name
            where grade.department = '$this->subject'
            AND grade.status = 'pending'
            
            
            
EOT;
            return ClassParent::get($sql);
        }
        public function csv2($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
          
            $sql = <<<EOT
           
               select * from setgrade where department = '$this->subject' order by date desc limit 1

            
            
            
EOT;
            return ClassParent::get($sql);
        }
        public function deactive($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
            $sql = <<<EOT
           with a as (
               update tbluser set status = 'Completed', remarks = 'Completed' where name ='$this->name'
           )
               update grade set status = 'Completed' where name = '$this->name'

            
            
            
EOT;
            return ClassParent::insert($sql);
        }

        public function editan($data){
            foreach($data as $k=>$v){
                $this->$k = pg_escape_string(strip_tags(trim($v)));
            }
            $where = "";
            $where1 = "";
            $where2 = "";
            $where3 = "";
            if($this->what){
                $where .= "what = '$this->what'";
            }
            if($this->whiri){
                $where1 .="whiri ='$this->whiri'";
            }
            if($this->whin){
                $where2 .="whin";
            }

            $sql = <<<EOT
      
               update announcement set what = '$this-what', whiri = '$this->whiri',   

            
            
            
EOT;
            return ClassParent::insert($sql);
        }

        



       
        

}


?>
