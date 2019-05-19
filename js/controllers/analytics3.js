app.controller('analytics', function(
    $scope,
    adminFactory,
    sessionFactory
    ){
        $scope.pk = '';
        $scope.setset = {};
        $scope.info = {};
        $scope.filter = {};
        $scope.studentgrade = {};


init();

function showmodal(){
    var filter = {
        pk : $scope.pk,
        sub : $scope.setset.subject,
        sec : $scope.setset.section,
        course : $scope.setset.course,
        name: $scope.info.name
    };
  
var promise = adminFactory.showmodal2(filter);
promise.then(function(data){


})
.then(null, function(data){
$('#showmodal').modal('show'); 
});
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
            showmodal();
            announcefetch();
            studgrade();
            // studlist();
  
    })
        .then(null, function (data) {
          $scope.pk = false;
          destroy();
  
        });
  }
  function get_prof(){
    var filters = {
        'pk': $scope.pk
    };
    var promise = adminFactory.get_info3(filters);
        promise.then(function (data){
            $scope.info = data.data.result[0];
            $scope.info.status = true;
            select();
        })
        .then(null, function (data){
          $scope.info.status = false;
            // window.location.href = '../../index.html';
            
        });
}
function studgrade(){
    var filters = {
        'pk': $scope.pk,
        'random' : '123'
    };
    var promise = adminFactory.studgrade(filters);
        promise.then(function (data){
            $scope.studentgrade = data.data.result[0];

            $scope.studentgrade.prelim = data.data.result[0].prelim * 100;
            $scope.studentgrade.midterm = data.data.result[0].midterm * 100;
            $scope.studentgrade.finals = data.data.result[0].finals * 100;
            $scope.studentgrade.character = data.data.result[0].character * 100;
            $scope.studentgrade.attendance = data.data.result[0].attendance * 100;
            $scope.studentgrade.activities = data.data.result[0].activities * 100;
            $scope.studentgrade.quiz = data.data.result[0].quiz * 100;
        })
        .then(null, function (data){
          $scope.info.status = false;
            // window.location.href = '../../index.html';
            
        });
}
function select(){
    var filters = {
      'pk': $scope.pk,
      'subject': $scope.info.subject
  };
  console.log($scope.info);
    var promise = adminFactory.select0(filters);
        promise.then(function(data){
            $scope.select = data.data.result;
            // console.log($scope.select);
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
  $scope.set = function(){
    if($scope.setset.section == 'Am'){
      $scope.setset.section = '11A1';
    }else{
      $scope.setset.section = '12A1';
    }
      var filter = {
          pk : $scope.pk,
          sub : $scope.setset.subject,
          sec : $scope.setset.section,
          name: $scope.info.name,
          course : $scope.setset.course
      };
      if(filter.course == null|| filter.sub == null || filter.sec == null){
        alert('All fields are required');
        return false;
    }
      var promise = adminFactory.setset(filter);
          promise.then(function(data){
              alert('Success! Print and pass the application form to NSTP coordination Mr. Eugune Abayon');
              $('#sub').modal('hide'); 
              window.open('http://localhost/sites/grading/php/FUNCTIONS/registerpdf.php?name='+ $scope.pk + '&random=' + $scope.setset.subject)

          })
          .then(null, function(data){
              alert('Error connection failed');
          });
  }
    

    });