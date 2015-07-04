'use strict';
angular.module('scheduler', ['firebase'])
.controller('MainCtrl', function($scope, $firebaseObject) {

  var myFirebaseRef = new Firebase('https://myschedule-app.firebaseio.com/days');

  // sync as object
  var syncObject = $firebaseObject(myFirebaseRef);

  // three way data binding
  syncObject.$bindTo($scope, 'days');
  // set defaults
  $scope.reset = function(){

    myFirebaseRef.set({
      monday: {
        name: 'Monday',
        slots: {
          900: {
            time: '9:00am',
            booked: false
          },
          110: {
            time: '11:00am',
            booked: false
          },
          100: {
            time: '1:00pm',
            booked: false
          },
          300: {
            time: '3:00pm',
            booked: false
          },
          500: {
            time: '5:00pm',
            booked: false
          },
          700: {
            time: '7:00pm',
            booked: false
          }
        }
      },
      tuesday: {
        name: 'Tuesday',
        slots: {
          700: {
            time: '7:00am',
            booked: false
          },
          800: {
            time: '8:00am',
            booked: false
          },
          900: {
            time: '9:00am',
            booked: false
          },

          110: {
            time: '11:00am',
            booked: false
          },
          100: {
            time: '1:00pm',
            booked: false
          },
          300: {
            time: '3:00pm',
            booked: false
          },
          500: {
            time: '5:00pm',
            booked: false
          },
          1700: {
            time: '7:00pm',
            booked: false
          }
        }
      },
      wednesday: {
        name: 'Wednesday',
        slots: {
          900: {
            time: '9:00am',
            booked: false
          },
          110: {
            time: '11:00am',
            booked: false
          },
          100: {
            time: '1:00pm',
            booked: false
          },
          300: {
            time: '3:00pm',
            booked: false
          },
          500: {
            time: '5:00pm',
            booked: false
          },
          700: {
            time: '7:00pm',
            booked: false
          },
          800: {
            time: '8:00pm',
            booked: false
          }
        }
      },
      thursday: {
        name: 'Thursday',
        slots: {
          900: {
            time: '9:00am',
            booked: false
          },
          110: {
            time: '11:00am',
            booked: false
          },
          100: {
            time: '1:00pm',
            booked: false
          },
          300: {
            time: '3:00pm',
            booked: false
          },
          500: {
            time: '5:00pm',
            booked: false
          },
          700: {
            time: '7:00pm',
            booked: false
          },
          800: {
            time: '8:00pm',
            booked: false
          }
        }
      },
      friday: {
        name: 'Friday',
        slots: {
          900: {
            time: '9:00am',
            booked: false
          },
          110: {
            time: '11:00am',
            booked: false
          },
          100: {
            time: '1:00pm',
            booked: false
          },
          300: {
            time: '3:00pm',
            booked: false
          },
          500: {
            time: '5:00pm',
            booked: false
          },
          700: {
            time: '7:00pm',
            booked: false
          },
          800: {
            time: '8:00pm',
            booked: false
          }
        }
      }

    });
  };
});
