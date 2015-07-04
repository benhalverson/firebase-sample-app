angular.module('scheduler', ['firebase'])
.controller('MainCtrl', function($scope, $firebase) {

  // connect to firebase
  var ref = new Firebase('https://myschedule-app.firebaseio.com/days');
  var fb = $firebase(ref);

  defaults
  $scope.reset = function() {
    console.log('clicked');
    fb.$set({
   monday: {
     name: 'Monday',
     slots: {
       0900: {
         time: '9:00am',
         booked: false
       },
       0110: {
         time: '11:00am',
         booked: false
       }
     }
   },
   tuesday: {
     name: 'Tuesday',
     slots: {
       0900: {
         time: '9:00am',
         booked: false
       },
       0110: {
         time: '11:00am',
         booked: false
       }
     }
   }
 });
  };
var syncObject = fb.$asOjbect
});
