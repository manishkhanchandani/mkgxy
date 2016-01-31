(function() {
  
  'use strict';

  var app = angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'firebase'
  ]);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);

  app.controller('mainCtrl', ['$scope', function($scope) {
    $scope.ref = new Firebase('https://victore07.firebaseio.com/examples');
    $scope.userData = null;
    $scope.googleLogin = function() {
      $scope.ref.authWithOAuthPopup("google", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
          return;
        }
        var uid = authData.uid;
        $scope.ref.child('users').child(uid).once("value", function(snapshot) {
          var a = snapshot.exists();
            if (!a) {
              var id = authData.google.id || '';
              var email = authData.google.cachedUserProfile.email || '';
              var displayName = authData.google.displayName || '';
              var profileImageURL = authData.google.profileImageURL || '';
              var provider = authData.provider || '';
              var gender = authData.google.cachedUserProfile.gender || '';
              var slink = authData.google.cachedUserProfile.link || '';
              var family_name = authData.google.cachedUserProfile.family_name || '';
              var given_name = authData.google.cachedUserProfile.given_name || '';
              var createdAt = Firebase.ServerValue.TIMESTAMP;
              var lastLoginDt = Firebase.ServerValue.TIMESTAMP;
              $scope.userData = {'uid': uid, 'id': id, 'email': email, 'name': displayName, 'img': profileImageURL, 'provider': provider, 'gender': gender, 'link': slink, 'lastName': family_name, 'firstName': given_name, 'createdAt': createdAt, 'lastLoginDt': lastLoginDt};
              $scope.ref.child('users').child(uid).update($scope.userData);
              console.log('created');
           } else {
              var lastLoginDt = Firebase.ServerValue.TIMESTAMP;
              $scope.ref.child('users').child(uid).child('lastLoginDt').set(lastLoginDt);
              console.log('updated');
           }
        });

      }, {scope:"email", remember:"sessionOnly"});// end authwithpopup
    };// end googleLogin

    $scope.googleLogout = function() {
      $scope.ref.unauth();
      $scope.userData = null;	
    };// end googleLogout
    
    function authDataCallback(authData) {
      if (!authData) {
         console.log('user is logged out');
         $scope.userData = null;
         return;
      }
      $scope.ref.child('users').child(authData.uid).once("value", function(snapshot) {
        $scope.userData = snapshot.val();
        if(!$scope.$$phase)
          $scope.$apply();
        console.log('user data found',$scope.userData);
      });
      
    };
    
    $scope.ref.onAuth(authDataCallback);

  }]);

})();