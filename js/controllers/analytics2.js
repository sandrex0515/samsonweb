app.controller('analytics', function(
  $scope,
  adminFactory,
  sessionFactory
  ){
      $scope.pk = '';
$scope.fetch = {};
$scope.pending = {};
$scope.prodcateg = {};
$scope.dataresult = {};
$scope.sum = {};
$scope.value = {};
$scope.getlastyear = {};
$scope.year = {};
$scope.todaysales = {};
$scope.info = {};
$scope.batch = {};
$scope.batch2 = {};
$scope.grade = {};
$scope.grade1 = {};
$scope.grade2 = {};
$scope.section = {};
$scope.select = {};
$scope.transfer = {};
$scope.filter = {};
$scope.mensahe = {};
$scope.gradelist = {};
$scope.grade3 = {};
$scope.announcement = {};
$scope.fetchannounce = {};
$scope.fetchannounce2 = {};
$scope.dropbatch = {};
$scope.uploads = {};
upload();
init();



  // function total(){
  //   $scope.grade.total = $scope.grade.prelim + $scope.grade.midterm + $scope.grade.finals + $scope.grade.activities +
  //   $scope.grade.attendace + $scope.grade.character +  $scope.grade.quiz;
  // }
$scope.setgrade = function(){

    $scope.grade.prelim = Number($scope.grade.subpro) / 4;
    $scope.grade.midterm = Number($scope.grade.subpro) / 4;
    $scope.grade.finals = Number($scope.grade.subpro) / 4;
    $scope.grade.px = Number($scope.grade.subpro) / 4;
    
    $scope.grade.total = Number($scope.grade.subpro) + Number($scope.grade.activities) +
    Number($scope.grade.attendance) + Number($scope.grade.character);
        if($scope.grade.subpro == null ||  
        $scope.grade.activities == null ||  
        $scope.grade.attendance == null ||  
        $scope.grade.character == null
        ){
        $scope.grade.message1 = false;
        $scope.grade.message2 = false;
        $scope.grade.message = true;
    }
    else if(Number($scope.grade.total) <= 99){
      $scope.grade.message1 = true;
      $scope.grade.message2 = false;
            $scope.grade.message = false;
    }else if(Number($scope.grade.total) >= 101){
      $scope.grade.message2 = true;
      $scope.grade.message1 = false;
    }else{
      $scope.grade1.teacher = $scope.pk;
      $scope.grade1.prelim = $scope.grade.prelim / 100;
      $scope.grade1.midterm = $scope.grade.midterm / 100;
      $scope.grade1.finals = $scope.grade.finals / 100;
      $scope.grade1.px = $scope.grade.px / 100;
      $scope.grade1.attendance = $scope.grade.attendance / 100;
      $scope.grade1.activities = $scope.grade.activities / 100;
      $scope.grade1.character = $scope.grade.character / 100;
      // $scope.grade1.quiz = $scope.grade.quiz / 100;
      $scope.grade1.department = "NSTP";
      var promise = adminFactory.setgrade($scope.grade1);
          promise.then(function(data){
                alert('You have successfully set the grade');
          })
          .then(null, function(data){
                alert('Server Error');
          })



    }
    
    
}
$scope.setgrade2 = function(){


  
  $scope.grade3.prelim = Number($scope.grade3.subpro) / 4;
  $scope.grade3.midterm = Number($scope.grade3.subpro) / 4;
  $scope.grade3.finals = Number($scope.grade3.subpro) / 4;
  $scope.grade3.px = Number($scope.grade3.subpro) / 4;
  
  $scope.grade3.total = Number($scope.grade3.subpro) +
  Number($scope.grade3.attendance) + Number($scope.grade3.character);
      if($scope.grade3.subpro == null ||  
      $scope.grade3.activities == null ||  
      $scope.grade3.attendance == null ||  
      $scope.grade3.character == null
      ){
      $scope.grade3.message1 = false;
      $scope.grade3.message2 = false;
      $scope.grade3.message = true;
  }
  else if(Number($scope.grade3.total) <= 99){
    $scope.grade3.message1 = true;
    $scope.grade3.message2 = false;
          $scope.grade3.message = false;
  }else if(Number($scope.grade3.total) >= 101){
    $scope.grade3.message2 = true;
    $scope.grade3.message1 = false;
  }else{
    $scope.grade3.teacher = $scope.pk;
    $scope.grade3.prelim = $scope.grade3.prelim / 100;
    $scope.grade3.midterm = $scope.grade3.midterm / 100;
    $scope.grade3.finals = $scope.grade3.finals / 100;
    $scope.grade3.px = $scope.grade3.px / 100;
    $scope.grade3.attendance = $scope.grade3.attendance / 100;
    $scope.grade3.activities = $scope.grade3.activities / 100;
    $scope.grade3.character = $scope.grade3.character / 100;
    // $scope.grade3.quiz = $scope.grade3.quiz / 100;
    $scope.grade3.department = "ROTC";
    var promise = adminFactory.setgrade($scope.grade3);
        promise.then(function(data){
              alert('You have successfully set the grade');
              getgrade2();
        })
        .then(null, function(data){
              alert('Server Error');
        })



  }
  
  
}
// analytics();
// analytics2();
// analytics3();
// todaysales();
// pending();
// showmodal();
// init();

// function showmodal(){
// var promise = adminFactory.showmodal();
// promise.then(function(data){


// })
// .then(null, function(data){
// $('#showmodal').modal('show'); 
// });
// }
// function analytics2(){

// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";

// var d = new Date();
// var n = month[d.getMonth()];
// var nn = month[d.getMonth() - 1];
// $scope.value.n = n;
// $scope.value.nn = nn;
// var dd = new Date();
// $scope.value.d = dd.getFullYear();
// $scope.value.dd = dd.getFullYear() - 1;
// var promise = adminFactory.analytics2($scope.value);
// promise.then(function(data){
// $scope.getlastyear = data.data.result;

// var lastyear = [parseInt($scope.getlastyear[0].january) + 
// parseInt($scope.getlastyear[0].february) + 
// parseInt($scope.getlastyear[0].march) + 
// parseInt($scope.getlastyear[0].april) + 
// parseInt($scope.getlastyear[0].may) + 
// parseInt($scope.getlastyear[0].june) +  
// parseInt($scope.getlastyear[0].july) + 
// parseInt($scope.getlastyear[0].august) + 
// parseInt($scope.getlastyear[0].september) + 
// parseInt($scope.getlastyear[0].october) + 
// parseInt($scope.getlastyear[0].november) + 
// parseInt($scope.getlastyear[0].december) 
// ];
// $scope.getlastyear.get = lastyear;
// })
// .then(null, function(data){

// });
// }
// function analytics3(){
// var promise = adminFactory.analytics3();
// promise.then(function(data){
// $scope.analytics3 = data.data.result;
// })
// .then(null, function(data){

// });
// }

// function analytics(){
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";

// var d = new Date();
// var n = month[d.getMonth()];
// var nn = month[d.getMonth() - 1];
// $scope.value.n = n;
// $scope.value.nn = nn;
// var dd = new Date();
// $scope.value.d = dd.getFullYear();
// $scope.value.dd = dd.getFullYear() - 1;
// var promise = adminFactory.analytics($scope.value);
// promise.then(function(data){
// $scope.dataresult = data.data.result;

// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";

// var d = new Date();
// var n = month[d.getMonth()];
// $scope.dataresult.month = $scope.dataresult[0].n;
// var sum = [
// parseInt($scope.dataresult[0].january) + 
// parseInt($scope.dataresult[0].february) + 
// parseInt($scope.dataresult[0].march) + 
// parseInt($scope.dataresult[0].april) + 
// parseInt($scope.dataresult[0].may) + 
// parseInt($scope.dataresult[0].june) + 
// parseInt($scope.dataresult[0].july) +
// parseInt($scope.dataresult[0].august) + 
// parseInt($scope.dataresult[0].september) +
// parseInt($scope.dataresult[0].october) +
// parseInt($scope.dataresult[0].november) +
// parseInt($scope.dataresult[0].december)
// ];
// var lastmonth = [
// parseInt($scope.dataresult[0].getmonth)  - parseInt($scope.dataresult[0].getlastmonth)

// ];

// $scope.dataresult.compare =  parseFloat(lastmonth) / parseFloat($scope.dataresult[0].getlastmonth) * 100; 

// $scope.dataresult.compareyear =  Number(sum) - Number($scope.getlastyear.get);
// $scope.dataresult.yearget = Number($scope.dataresult.compareyear) / Number($scope.getlastyear.get) * 100;
// $scope.dataresult.sum = sum[0];
// $scope.dataresult.getmonth = data.data.result[0].getmonth;
// if($scope.dataresult.compare >= 1){
// $scope.dataresult.compare.status = true;
// }else{
// $scope.dataresult.compare.status = false;
// }
// var ctx = document.getElementById("myChart").getContext('2d');
// var myChart = new Chart(ctx, {
// type: 'line',
// data: {
// labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
// datasets: [{
// label: 'Statistics',
// data: [$scope.dataresult[0].january,
//       $scope.dataresult[0].february,
//       $scope.dataresult[0].march,
//       $scope.dataresult[0].april,
//       $scope.dataresult[0].may,
//       $scope.dataresult[0].june,
//       $scope.dataresult[0].july,
//       $scope.dataresult[0].august,
//       $scope.dataresult[0].september,
//       $scope.dataresult[0].october,
//       $scope.dataresult[0].november,
//       $scope.dataresult[0].december],
// borderWidth: 2,
// backgroundColor: 'rgb(87,75,144)',
// borderColor: 'rgb(87,75,144)',
// borderWidth: 2.5,
// pointBackgroundColor: '#ffffff',
// pointRadius: 4
//                          }]
//                        },
//                        options: {
//                          legend: {
//                            display: false
//                          },
//                          scales: {
//                            yAxes: [{
//                              ticks: {
//                                beginAtZero: true,
//                                stepSize: 200000
//                              }
//                            }],
//                            xAxes: [{
//                              gridLines: {
//                                display: false
//                              }
//                            }]
//                          },
//                        }
//                      });
// })
// .then(null, function(data){

// })

//       }

//       function pending(){

//           var promise = adminFactory.pending($scope.filter);
//               promise.then(function(data){
//                       var t = data.data.result[0].created_at;
//                       var d = new Date(t.toLocaleString());
      
//               $scope.pending = data.data.result;
//               $scope.pending.status = true;
//               $scope.pending.count = data.data.result.length;
//               })
//               .then(null, function(data){
//                   $scope.pending.status = false;
      
//               });
//       }

// function todaysales(){
// var promise = adminFactory.todaysales();
// promise.then(function(data){
// $scope.todaysales = data.data.result[0];

// })
// .then(null, function(data){

// })
// }

// $scope.prod = function(){

// }
// $scope.settoday = function(){
// var dd = new Date();
// $scope.year.yd = dd.getFullYear();
// $scope.year.sales = 0;
// var promise = adminFactory.settoday($scope.year);
// promise.then(function(data){
// $('#showmodal').modal('hide'); 
// alert('Success');
// showmodal();
// })
// .then(null, function(data){

// });
// }

  $scope.grademodal = function(){
      if($scope.filter.quarter == null){
          alert('Kindly select on quarter');
      }else if($scope.filter.subject == null){
          alert('Kindly select on class');
      } else if($scope.filter.section == null){
            alert('Kindly select on section');
    }else{
      $('#showmodal').modal('show');

    }
  }
function destroy(){
if($scope.pk == false){
  window.location.href = '../../index.html';
}
  if($scope.info.status == false){
      window.location.href = '../../index.html';
  }
}
function init() {
  var promise = sessionFactory.session2();
  promise.then(function (data) {
          var _id = 'pk';
          $scope.pk = data.data[_id];  
          get_prof();
          destroy();
          select();
          getgrade();
          getgrade2();
          studlist();
          announcefetch();
          batch2();
  })
      .then(null, function (data) {
        $scope.pk = false;
        destroy();

      });
}
  function batch2(){
    var promise = adminFactory.batch2();
        promise.then(function(data){
          $scope.batch2 = data.data.result;
          console.log($scope.batch2);
        })
        .then(null, function(data){

        })
    
}
function announcefetch(){
  var filters = {
    'pk': $scope.pk,
    'searchString' : $scope.filter.searchString
};
  var promise = adminFactory.fetchannounce($scope.filter);
      promise.then(function (data){
        $scope.fetchannounce = data.data.result;
        $scope.fetchannounce.status = true;
        
    

      })
      .then(null, function(data){
        // alert('Connection Error');
        $scope.fetchannounce.status = false;

      });
      
}
  function get_prof(){
      var filters = {
          'pk': $scope.pk
      };
      var promise = adminFactory.get_info2(filters);
          promise.then(function (data){
              $scope.info = data.data.result[0];
              $scope.info.status = true;
              
          })
          .then(null, function (data){
            $scope.info.status = false;
              window.location.href = '../../index.html';
              
          })
  }

      $scope.sections = function(){
        if($scope.section.section == null || $scope.section.subject == null){
         $scope.section.message = true;
        }else{
          $scope.section.teacher = $scope.pk;
          var promise = adminFactory.section($scope.section);
              promise.then(function(data){
                alert('You have succesfully added subject/section');
                select();
              })
              .then(null, function(data){
                alert('Server error');
              })
        }
      }

      function select(){
        var filters = {
          'pk': $scope.pk
      };
        var promise = adminFactory.select(filters)
            promise.then(function(data){
                $scope.select = data.data.result;
            })
            .then(null, function(data){

            })

      }

      function getgrade(){
        var filters = {
          'pk': $scope.pk,
          'department' : 'NSTP'
      };
        var promise = adminFactory.getgrade(filters)
            promise.then(function(data){
              $scope.ggrade  = data.data.result[0];
                $scope.grade.prelim = data.data.result[0].prelim * 100;
                $scope.grade.midterm = data.data.result[0].midterm * 100;
                $scope.grade.finals = data.data.result[0].finals * 100;
                $scope.grade.px = data.data.result[0].px * 100;
                $scope.grade.subpro =  Number($scope.grade.prelim + $scope.grade.midterm + $scope.grade.finals + $scope.grade.px);
                $scope.grade.character = data.data.result[0].character * 100;
                $scope.grade.attendance = data.data.result[0].attendance * 100;
                $scope.grade.activities = data.data.result[0].activities * 100;
                // $scope.grade.quiz = data.data.result[0].quiz * 100;



            })
            .then(null, function(data){

            })

      }

      function getgrade2(){
        var filters = {
          'pk': $scope.pk,
          'department' : 'ROTC'
      };
        var promise = adminFactory.getgrade2(filters)
            promise.then(function(data){
              $scope.ggrade3  = data.data.result[0];
                $scope.grade3.prelim = data.data.result[0].prelim * 100;
                $scope.grade3.midterm = data.data.result[0].midterm * 100;
                $scope.grade3.finals = data.data.result[0].finals * 100;
                $scope.grade3.character = data.data.result[0].character * 100;
                $scope.grade3.px = data.data.result[0].px * 100;
                $scope.grade3.subpro =  Number($scope.grade3.prelim + $scope.grade3.midterm + $scope.grade3.finals + $scope.grade3.px);
                $scope.grade3.attendance = data.data.result[0].attendance * 100;
                $scope.grade3.activities = data.data.result[0].activities * 100;
                // $scope.grade3.quiz = data.data.result[0].quiz * 100;



            })
            .then(null, function(data){

            })

      }

      $scope.subedit = function(v){
          $scope.modal = v;
      }

      $scope.secedit = function(modal){
        $scope.transfer = modal;
        var promise = adminFactory.sucedit(modal);
            promise.then(function(data){
              alert('Success');
              select();
              $('#edit').modal('hide'); 

            })
            .then(null, function(data){
              alert('Server Error');
            })
        
      }
      $scope.subdel = function(v){
        var promise = adminFactory.subdel(v);
            promise.then(function(data){
                alert('Success');
                select();
            })
            .then(null, function(data){
              alert('Server Error');
            })
      }
      $scope.select0 = function(){
        studlist();
        gradelist();
        batchlist()
      }
      $scope.select1 = function(){
        studlist();
        gradelist();
        batchlist()
      }
      $scope.select2 = function(){
        studlist();
        gradelist();
        batchlist()
        announcefetch();
      }
      $scope.select3 = function(){
       
        announcefetch();
      }
      $scope.clear = function(){
        $scope.filter = {};
        $scope.studlist.status = true;
        studlist();

      }

      function batchlist(){
        if($scope.filter.batch > 0){
          $scope.filter.batch = $scope.filter.batch;
        }if($scope.filter.subject > 0){
          $scope.filter.subject = $scope.filter.subject
        }if($scope.filter.semester > 0){
          $scope.filter.semester = $scope.filter.semester;
        }
        var promise = adminFactory.batchlist($scope.filter);
            promise.then(function(data){
              $scope.batch3 = data.data.result;
            })
            .then(null, function(data){

            })
      }
      function upload() {
        var promise = adminFactory.uploads();
        promise.then(function (data) {
                $scope.uploads = data.data.result;  
                $scope.uploads.status = true;
        })
            .then(null, function (data) {
              $scope.uploads.status = false;
      
            });
      }
      $scope.searchbatch = function(){
        if($scope.filter.batch < 1 || $scope.filter.batch == null){
          alert('Kindly Select Batch');
        }else if($scope.filter.subject < 1 || $scope.filter.subject == null){
          alert('Kindly Select Subject');
        }else if($scope.filter.semester < 1 || $scope.filter.semester == null){
          alert('Kindly Select Semester')
        }else{

          var filter = {
            
          };
          console.log($scope.filter);
          // $('#searchbatch').modal('show'); 
          window.open('../../php/FUNCTIONS/batchcsv.php?subject='+ $scope.filter.subject + '&batch='+ $scope.filter.batch + '&semester=' + $scope.filter.semester, '_blank');

          // var promise = adminFactory.searchbatch($scope.filter);
          //     promise.then(function(data){
          // window.open('../../php/FUNCTIONS/batchcsv.php','_blank');

          //     })
          //     .then(null, function(data){

          //     })
        }
      }
      $scope.searchdrop = function(){
        if($scope.filter.subject < 1 || $scope.filter.subject == null){
          alert('Please Select Subject!');
        }else if($scope.filter.batch < 1 || $scope.filter.batch == null){
          alert('Batch is empty');
        }else if($scope.filter.semester < 1 || $scope.filter.semester == null){
          alert('Kindly Select Semester')
        }else{

          var filter = {
            
          };
          
          // $('#searchbatch').modal('show'); 
          window.open('../../php/FUNCTIONS/dropcsv.php?subject='+ $scope.filter.subject + '&batch='+ $scope.filter.batch + '&semester=' + $scope.filter.semester, '_blank');

          var promise = adminFactory.searchbatch($scope.filter);
              promise.then(function(data){
                $scope.dropbatch = data.data.result;
                $scope.dropbatch.status = true;
              })
              .then(null, function(data){
                $scope.dropbatch.status = false;

              });
        }
      }
      $scope.undrop = function(v){
        var promise = adminFactory.undrop(v);
        promise.then(function(data){
        alert('Success');
        })
        .then(null, function(data){

        });
      }
      $scope.searchgrad = function(){
        if($scope.filter.subject < 1 || $scope.filter.subject == null){
          alert('Please Select Subject!');
        }else if($scope.filter.batch < 1 || $scope.filter.batch == null){
          alert('Batch is empty');
        }else{

          var filter = {
            
          };
          
          window.open('../../php/FUNCTIONS/searchgrad.php?subject='+ $scope.filter.subject + '&batch='+ $scope.filter.batch + '&semester=' + $scope.filter.semester, '_blank');

      
        }
      }

      function studlist(){
        $scope.filter.pk = $scope.pk
        if($scope.filter.section > 0){
          $scope.filter.section = $scope.filter.section;
        }
        if($scope.filter.subject > 0){
          $scope.filter.subject = $scope.filter.subject;
        }
        var promise = adminFactory.studlist($scope.filter);
            promise.then(function(data){
              $scope.studlist = data.data.result;
              $scope.studlist.status = true;          
            })
            .then(null, function(data){
              $scope.studlist.status = false;
            })
      }

      function gradelist(){
        $scope.filter.pk = $scope.pk
        if($scope.filter.section > 0){
          $scope.filter.section = $scope.filter.section;
        }
        if($scope.filter.subject > 0){
          $scope.filter.subject = $scope.filter.subject;
        }
        if($scope.filter.quarter > 0){
          $scope.filter.quarter = $scope.filter.quarter;
        }
        var promise = adminFactory.studlist2($scope.filter);
            promise.then(function(data){
              $scope.gradelist = data.data.result;
              $scope.gradelist.status = true;
              console.log($scope.gradelist);
                
              
              var total = 0;
              for(var i = 0; i < $scope.gradelist.length; i++){
                  total +=   parseInt($scope.gradelist.pexam) + parseInt($scope.gradelist.pattend) + parseInt($scope.gradelist.active + $scope.gradelist.pchar) ;
              }
              

              $scope.gradelist.prelimgrade = parseInt($scope.gradelist.pexam) + parseInt($scope.gradelist.pattend) + parseInt($scope.gradelist.active + $scope.gradelist.pchar) / 4;
              

              
              
            })
            .then(null, function(data){
              $scope.gradelist.status = false;
            })
      }


      $scope.attendance = function(v){

        if(v.ptarget == null){
          v.ptarget = NaN;
        }
        if(v.pactual == null){
          v.pactual = NaN;
        }
        if(v.mtarget == null){
          v.mtarget = NaN;
        }
        if(v.mactual == null){
          v.mactual = NaN;
        }
        if(v.ftarget == null){
          v.ftarget = NaN;
        }
        if(v.factual == null){
          v.factual = NaN;
        }
        if(v.pquiz == null){
          v.pquiz = NaN;
        }
        if(v.mquiz == null){
          v.mquiz = NaN;
        }
        if(v.fquiz == null){
          v.fquiz = NaN;
        }
        if(v.pactive == null){
          v.pactive = NaN;
        }
        if(v.mactive == null){
          v.mactive = NaN;
        }
        if(v.factive == null){
          v.factive = NaN;
        }
        
        if(v.pgrade == null){
          v.pgrade = NaN;
        }
        if(v.mgrade == null){
          v.mgrade = NaN;
        }
        if(v.fgrade == null){
          v.fgrade = NaN;
        }
        
        if(v.pchar == null){
          v.pchar =NaN;
        }
        if(v.mchar == null){
          v.mchar =NaN;
        }
        if(v.fchar == null){
          v.fchar =NaN;
        }
        if(v.fpx == null){
          v.fpx =NaN;
        }
     
        $scope.mensahe.char = NaN;
        $scope.mensahe.char2 = NaN;
        $scope.mensahe.char3 = NaN;
        $scope.mensahe.active = NaN;
        $scope.mensahe.active2 = NaN;
        $scope.mensahe.active3 = NaN;
        $scope.mensahe.pgrade = NaN;
        $scope.mensahe.quiz = NaN;
        $scope.mensahe.quiz2 = NaN;
        $scope.mensahe.quiz3 = NaN;
        $scope.mensahe.name = v.name;
        $scope.mensahe.px = v.fpx * ($scope.grade.px / 100);
        $scope.mensahe.mgrade =  NaN;
        $scope.mensahe.fgrade =  NaN;
        $scope.mensahe.total = parseFloat(v.pactual / v.ptarget * ($scope.grade.attendance / 100) * 100);
        $scope.mensahe.total2 = parseFloat(v.mactual / v.mtarget * ($scope.grade.attendance / 100) * 100);
        $scope.mensahe.total3 = parseFloat(v.factual / v.ftarget * ($scope.grade.attendance / 100) * 100);

  
        if($scope.mensahe.total2 > ($scope.grade.attendance)){
          alert('Actual Attendance Exceeded Target Attendance');    
        }
        if($scope.mensahe.total3 > ($scope.grade.attendance)){
          alert('Actual Attendance Exceeded Target Attendance');    
        }
        if($scope.mensahe.total > ($scope.grade.attendance)){
              alert('Actual Attendance Exceeded Target Attendance');    
          }else{
               var promise = adminFactory.attendance($scope.mensahe);
            promise.then(function(data){
              $scope.mensahe.status = true;
              alert('Success');
              // init();
            })
            .then(null, function(data){
              alert('Server Error');
            });
          }
        
     
      }

      $scope.exam = function(v){
        if(v.ptarget == null){
          v.ptarget = NaN;
        }
        if(v.pactual == null){
          v.pactual = NaN;
        }
        if(v.mtarget == null){
          v.mtarget = NaN;
        }
        if(v.mactual == null){
          v.mactual = NaN;
        }
        if(v.ftarget == null){
          v.ftarget = NaN;
        }
        if(v.factual == null){
          v.factual = NaN;
        }
        if(v.pquiz == null){
          v.pquiz = NaN;
        }
        if(v.mquiz == null){
          v.mquiz = NaN;
        }
        if(v.fquiz == null){
          v.fquiz = NaN;
        }
        if(v.pactive == null){
          v.pactive = NaN;
        }
        if(v.mactive == null){
          v.mactive = NaN;
        }
        if(v.factive == null){
          v.factive = NaN;
        }
        
        if(v.pgrade == null){
          v.pgrade = NaN;
        }
        if(v.mgrade == null){
          v.mgrade = NaN;
        }
        if(v.fgrade == null){
          v.fgrade = NaN;
        }   if(v.pchar == null){
          v.pchar =NaN;
        }
        if(v.mchar == null){
          v.mchar =NaN;
        }
        if(v.fchar == null){
          v.fchar =NaN;
        }
        if(v.fpx == null){
          v.fpx =NaN;
        }
     
        $scope.mensahe.char = NaN;
        $scope.mensahe.char2 = NaN;
        $scope.mensahe.char3 = NaN;
        $scope.mensahe.active = NaN;
        $scope.mensahe.active2 = NaN;
        $scope.mensahe.active3 = NaN;
        $scope.mensahe.pgrade = v.pgrade * ($scope.grade.prelim / 100);
        $scope.mensahe.quiz =NaN;
        $scope.mensahe.quiz2 =NaN;
        $scope.mensahe.quiz3 = NaN;
        $scope.mensahe.name = v.name;
        $scope.mensahe.mgrade =  v.mgrade * ($scope.grade.midterm / 100);
        $scope.mensahe.fgrade =  v.fgrade * ($scope.grade.finals / 100);
        $scope.mensahe.px = v.fpx * ($scope.grade.px / 100);
        $scope.mensahe.total = NaN;
        $scope.mensahe.total2 = NaN;
        $scope.mensahe.total3 = NaN;

       if(v.pgrade > 100){
        alert('Grade Exceeded 100'); 
       }
       if(v.mgrade > 100){
        alert('Grade Exceeded 100'); 
       }
       if(v.fgrade > 100){
        alert('Grade Exceeded 100'); 
       }
       if(v.fpx > 100){
         alert('Grade Exceeded 100');
       }
        else{
               var promise = adminFactory.attendance($scope.mensahe);
            promise.then(function(data){
              $scope.mensahe.status = true;
              alert('Success');
              // init();
            })
            .then(null, function(data){
              alert('Server Error');
            });
          }
        
     
      }
      $scope.quiz = function(v){
        if(v.ptarget == null){
          v.ptarget = NaN;
        }
        if(v.pactual == null){
          v.pactual = NaN;
        }
        if(v.mtarget == null){
          v.mtarget = NaN;
        }
        if(v.mactual == null){
          v.mactual = NaN;
        }
        if(v.ftarget == null){
          v.ftarget = NaN;
        }
        if(v.factual == null){
          v.factual = NaN;
        }
        if(v.pquiz == null){
          v.pquiz = NaN;
        }
        if(v.mquiz == null){
          v.mquiz = NaN;
        }
        if(v.fquiz == null){
          v.fquiz = NaN;
        }
        if(v.pactive == null){
          v.pactive = NaN;
        }
        if(v.mactive == null){
          v.mactive = NaN;
        }
        if(v.factive == null){
          v.factive = NaN;
        }
        
        if(v.pgrade == null){
          v.pgrade = NaN;
        }
        if(v.mgrade == null){
          v.mgrade = NaN;
        }
        if(v.fgrade == null){
          v.fgrade = NaN;
        }
        if(v.pchar == null){
          v.pchar =NaN;
        }
        if(v.mchar == null){
          v.mchar =NaN;
        }
        if(v.fchar == null){
          v.fchar =NaN;
        }
        if(v.fpx == null){
          v.fpx =NaN;
        }
     
        $scope.mensahe.char = NaN;
        $scope.mensahe.char2 = NaN;
        $scope.mensahe.char3 = NaN;
        $scope.mensahe.active = NaN;
        $scope.mensahe.active2 = NaN;
        $scope.mensahe.active3 = NaN;
        $scope.mensahe.pgrade = NaN;
        $scope.mensahe.quiz = v.pquiz * ($scope.grade.quiz / 100);
        $scope.mensahe.quiz2 = v.mquiz * ($scope.grade.quiz / 100);
        $scope.mensahe.quiz3 = v.fquiz * ($scope.grade.quiz / 100);
        $scope.mensahe.px = v.fpx * ($scope.grade.px / 100);
        $scope.mensahe.name = v.name;
        $scope.mensahe.mgrade = NaN;
        $scope.mensahe.fgrade = NaN;
        $scope.mensahe.total = NaN;
        $scope.mensahe.total2 = NaN;
        $scope.mensahe.total3 = NaN;

       if(v.pquiz > 100){
        alert('Grade Exceeded 100'); 
       }
       if(v.mquiz > 100){
        alert('Grade Exceeded 100'); 
       }
       if(v.fquiz > 100){
        alert('Grade Exceeded 100'); 
       }
        else{
               var promise = adminFactory.attendance($scope.mensahe);
            promise.then(function(data){
              $scope.mensahe.status = true;
              alert('Success');
              // init();
            })
            .then(null, function(data){
              alert('Server Error');
            });
          }
        
     
      }

      $scope.active = function(v){

        if(v.ptarget == null){
          v.ptarget = NaN;
        }
        if(v.pactual == null){
          v.pactual = NaN;
        }
        if(v.mtarget == null){
          v.mtarget = NaN;
        }
        if(v.mactual == null){
          v.mactual = NaN;
        }
        if(v.ftarget == null){
          v.ftarget = NaN;
        }
        if(v.factual == null){
          v.factual = NaN;
        }
        if(v.pquiz == null){
          v.pquiz = NaN;
        }
        if(v.mquiz == null){
          v.mquiz = NaN;
        }
        if(v.fquiz == null){
          v.fquiz = NaN;
        }
        if(v.pactive == null){
          v.pactive = NaN;
        }
        if(v.mactive == null){
          v.mactive = NaN;
        }
        if(v.factive == null){
          v.factive = NaN;
        }
        
        if(v.pgrade == null){
          v.pgrade = NaN;
        }
        if(v.mgrade == null){
          v.mgrade = NaN;
        }
        if(v.fgrade == null){
          v.fgrade = NaN;
        }
        if(v.pchar == null){
          v.pchar =NaN;
        }
        if(v.mchar == null){
          v.mchar =NaN;
        }
        if(v.fchar == null){
          v.fchar =NaN;
        }
        if(v.px == null){
          v.px =NaN;
        }
     
        $scope.mensahe.char = NaN;
        $scope.mensahe.char2 = NaN;
        $scope.mensahe.char3 = NaN;
        
        $scope.mensahe.active = v.pactive * ($scope.grade.activities / 100);
        $scope.mensahe.active2 = v.mactive * ($scope.grade.activities / 100);
        $scope.mensahe.active3 = v.factive * ($scope.grade.activities / 100);
        $scope.mensahe.pgrade = NaN;
        $scope.mensahe.quiz = NaN;
        $scope.mensahe.quiz2 = NaN;
        $scope.mensahe.quiz3 = NaN;
        $scope.mensahe.px = v.fpx * ($scope.grade.px / 100);
        $scope.mensahe.name = v.name;
        $scope.mensahe.mgrade =  NaN;
        $scope.mensahe.fgrade =  NaN;
        $scope.mensahe.total = NaN;
        $scope.mensahe.total2 = NaN;
        $scope.mensahe.total3 = NaN;

       
       if(v.pgrade > 100){
        alert('Grade Exceeded 100'); 
       }
       if(v.mgrade > 100){
        alert('Grade Exceeded 100'); 
       }
       if(v.fgrade > 100){
        alert('Grade Exceeded 100'); 
       }
        else{
               var promise = adminFactory.attendance($scope.mensahe);
            promise.then(function(data){
              $scope.mensahe.status = true;
              alert('Success');
              // init();
            })
            .then(null, function(data){
              alert('Server Error');
            });
          }
        
      
     
      }
     
      $scope.charac = function(v){

        if(v.ptarget == null){
          v.ptarget = NaN;
        }
        if(v.pactual == null){
          v.pactual = NaN;
        }
        if(v.mtarget == null){
          v.mtarget = NaN;
        }
        if(v.mactual == null){
          v.mactual = NaN;
        }
        if(v.ftarget == null){
          v.ftarget = NaN;
        }
        if(v.factual == null){
          v.factual = NaN;
        }
        if(v.pquiz == null){
          v.pquiz = NaN;
        }
        if(v.mquiz == null){
          v.mquiz = NaN;
        }
        if(v.fquiz == null){
          v.fquiz = NaN;
        }
        if(v.pactive == null){
          v.pactive = NaN;
        }
        if(v.mactive == null){
          v.mactive = NaN;
        }
        if(v.factive == null){
          v.factive = NaN;
        }
        
        if(v.pgrade == null){
          v.pgrade = NaN;
        }
        if(v.mgrade == null){
          v.mgrade = NaN;
        }
        if(v.fgrade == null){
          v.fgrade = NaN;
        }
        if(v.pchar == null){
          v.pchar =NaN;
        }
        if(v.mchar == null){
          v.mchar =NaN;
        }
        if(v.fchar == null){
          v.fchar =NaN;
        }
        if(v.px == null){
          v.px =NaN;
        }
     
        $scope.mensahe.char = v.pchar * ($scope.grade.character / 100);
        $scope.mensahe.char2 = v.mchar * ($scope.grade.character / 100);
        $scope.mensahe.char3 = v.fchar * ($scope.grade.character / 100);
        $scope.mensahe.px = v.fpx * ($scope.grade.px / 100);
        $scope.mensahe.active = NaN;
        $scope.mensahe.active2 = NaN;
        $scope.mensahe.active3 = NaN;
        $scope.mensahe.pgrade = NaN;
        $scope.mensahe.quiz = NaN;
        $scope.mensahe.quiz2 = NaN;
        $scope.mensahe.quiz3 = NaN;
        $scope.mensahe.name = v.name;
        $scope.mensahe.mgrade =  NaN;
        $scope.mensahe.fgrade =  NaN;
        $scope.mensahe.total = NaN;
        $scope.mensahe.total2 = NaN;
        $scope.mensahe.total3 = NaN;

      
       if(v.pgrade > 100){
        alert('Grade Exceeded 100'); 
       }
       if(v.mgrade > 100){
        alert('Grade Exceeded 100'); 
       }
       if(v.fgrade > 100){
        alert('Grade Exceeded 100'); 
       }
        else{
               var promise = adminFactory.attendance($scope.mensahe);
            promise.then(function(data){
              $scope.mensahe.status = true;
              alert('Success');
              // init();
            })
            .then(null, function(data){
              alert('Server Error');
            });
          }
        
      
     
      }
      $scope.drop = function(v){

        $scope.dropbatch = v;
       
      }
      $scope.dropbatch2 = function(dropbatch){
          
        var filter = {
          name: dropbatch.name,
          batch : $scope.filter.batch,
          semester : $scope.filter.semester,
          reason : $scope.filter.reason
        };

        var promise = adminFactory.drop(filter);
            promise.then(function(data){
         
              alert('You have successfully dropped the student');
              init();
            })
            .then(null, function(data){
              alert('Error connection failed!');
            });
    }
      $scope.announce = function(){
        
        var promise = adminFactory.announce($scope.announcement);
            promise.then(function(data){
              alert('Success the announcement was sent');
              $('#announce').modal('hide'); 

              announcefetch();
            })
            .then(null, function(data){
              alert('Error connection failed');
            });
      }
      $scope.deactive = function(gradelist){
        
       for(var i = 0; i < gradelist.length; i ++){
         var filter = {
           name : gradelist[i].name,
           batch : $scope.batch.year,
           semester : $scope.batch.semester
         }
        
        var promise = adminFactory.deactive(filter);
      }
                promise.then(function(data){
                  alert('Success Added to the archive!');
                  adminFactory.batch(filter);
                  studlist();
                  gradelist();
                  
                  $('#showmodal').modal('hide');

                  
                  
                })
                .then(null, function(data){
                  studlist();
                  gradelist();
                  
                  $('#showmodal').modal('hide');
                });
      }
      

      $scope.editan2 = function(v){
        $scope.fetchannounce2 = v;

      }
      
      $scope.editan = function(fetchannounce2){
        var promise = adminFactory.announce(fetchannounce2);
            promise.then(function(data){
              alert('Success!');
              announcefetch();
            })
            .then(null, function(data){
              alert('Connection error');
            });
      }
      $scope.deletean = function(v){

        var promise = adminFactory.deletean(v);
            promise.then(function(data){
              alert('Success');
              announcefetch();
            })
            .then(null, function(data){
              alert('Connection error');
            });
      }
      $scope.deletephoto = function(v){
        var promise = adminFactory.deletephoto(v);
        promise.then(function(data){
          alert('Success');
          upload();
        })
        .then(null, function(data){
          alert('Connection error');
        });
      }
      $scope.worksheet = function(){
        if($scope.filter.subject == 'NSTP 1'){
          $scope.filter.subject = "NSTP";
          var subject = {
            subject : $scope.filter.subject,
            random : 'dsadas'
             }
           
             window.open('../../php/FUNCTIONS/gradecsv.php?subject='+ $scope.filter.subject + '&filter='+ 123, '_blank');
        }else if($scope.filter.subject =='NSTP 2'){
          $scope.filter.subject = "NSTP";
          var subject = {
            subject : $scope.filter.subject,
            random : 'dsadas'
             }
           
             window.open('../../php/FUNCTIONS/gradecsv.php?subject='+ $scope.filter.subject + '&filter='+ 123, '_blank');
 
        }else{
          $scope.filter.subject = 'ROTC';
          var subject = {
            subject : $scope.filter.subject,
            random : 'dsadas'
             }
           
             window.open('../../php/FUNCTIONS/gradecsv2.php?subject='+ $scope.filter.subject + '&filter='+ 123, '_blank');
 
        }

     
        }
});