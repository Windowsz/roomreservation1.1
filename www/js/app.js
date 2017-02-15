angular.module('starter', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('regchoose', {
    url: '/regchoose',
    templateUrl: 'templates/regchoose.html',
    controller: 'RegchooseCtrl'
  })

  .state('reg1', {
    url: '/reg1',
    templateUrl: 'templates/reg1.html',
    controller: 'Reg1Ctrl'
  })

    .state('reg2', {
    url: '/reg2',
    templateUrl: 'templates/reg2.html',
    controller: 'Reg2Ctrl'
  })


    .state('detailroom', {
    url: '/detailroom',
    templateUrl: 'templates/detailroom.html',
    controller: 'DetailroomCtrl'
  })

     .state('regconfirm', {
     url: '/regconfirm',
     templateUrl: 'templates/regconfirm.html',
     controller: 'RegconfirmCtrl'
   })

  .state('forgotpass', {
    url: '/forgotpass',
    templateUrl: 'templates/forgotpass.html',
    controller: 'ForgotpassCtrl'
  })

  .state('app.alarm', {
      url: "/alarm",
      views: {
        'menuContent': {
          templateUrl: "templates/alarm.html"
        }
      }
    })

  .state('app.profile', {
      url: "/profile",
      views: {
        'menuContent': {
          templateUrl: "templates/profile.html"
        }
      }
    })

  .state('app.cancel', {
    url: "/cancel",
    views: {
      'menuContent': {
        templateUrl: "templates/cancel.html"
      }
    }
  })

  .state('app.qrcode', {
      url: "/qrcode",
      views: {
        'menuContent': {
          templateUrl: "templates/qrcode.html"
        }
      }
    })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.login-into-menucontent', {
    url: "/login-into-menucontent",
    views: {
      'menuContent': {
        templateUrl: "templates/login.html",
        controller: 'LoginCtrl'
      }
    }
  })

  .state('login', {
    url: "/login",
    templateUrl: "templates/login.html",
    controller: 'LoginCtrl'
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

})


.controller('AppCtrl', function($scope) {})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [{
    title: 'item 1',
    id: 1
  }, {
    title: 'Chill',
    id: 2
  }, {
    title: 'Dubstep',
    id: 3
  }, {
    title: 'Indie',
    id: 4
  }, {
    title: 'Rap',
    id: 5
  }, {
    title: 'Cowbell',
    id: 6
  }];
})

.controller('ForgotpassCtrl', function($scope, $stateParams) {})

.controller('RegchooseCtrl', function($scope, $stateParams) {})

.controller('Reg1Ctrl', function($scope, $state,  $ionicPopup) {
   $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: '',
     template: 'สมัครสมาชิกเสร็จเรียบร้อย'
   });

   alertPopup.then(function(res) {
     $state.go('login');
   });
 };
  $scope.cancel = function() {
    $state.go('login');
  };
})

.controller('Reg2Ctrl', function($scope, $state, $ionicPopup) {
  $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: '',
     template: 'สมัครสมาชิกเสร็จเรียบร้อย'
   });

   alertPopup.then(function(res) {
     $state.go('login');
   });
 };
 $scope.canCel = function() {
    $state.go('login');
  };
})

.controller('ProfileCtrl', function($scope, $state, $ionicPopup) {
   $scope.goHome = function(res) {
    $state.go('app.playlists');
  };
  $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: '',
     template: 'ยืนยันการแก้ไข'
   });

   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {})

.controller('SplashController', function($scope, $stateParams) {})

.controller('LoginCtrl', function($scope, $state) {

  $scope.LogIn = function(user) {
    $state.go('app.playlists');
  };

});

