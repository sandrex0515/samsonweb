app.controller('user', function(
    $scope,
    adminFactory,
    sessionFactory
    ){
        $scope.pk = '';

        $scope.info = {};
$scope.uploads = {};

upload();
init();





function destroy(){
  if($scope.pk == false){
    
  }
    if($scope.info.status == false){
    }
}
function init() {
    var promise = sessionFactory.session3();
    promise.then(function (data) {
            var _id = 'pk';
            $scope.pk = data.data[_id];  
            get_prof();
            destroy();

    })
        .then(null, function (data) {
          $scope.pk = false;
          destroy();

        });
}
function upload(){
      
    var promise = adminFactory.upload();
        promise.then(function (data){
            $scope.uploads = data.data.result;  
            
            $scope.uploads.status = true;
        })
        .then(null, function (data){
          $scope.uploads.status = false;            
        });
}
    function get_prof(){
        var filters = {
            'pk': $scope.pk
        };
        var promise = adminFactory.get_info9(filters);
            promise.then(function (data){
                $scope.info = data.data.result[0];
                $scope.info.status = true;
                
            })
            .then(null, function (data){
              $scope.info.status = false;
                // window.location.href = '../../index.html';
                
            })
    }


        
});