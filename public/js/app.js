angular.module('healing', ['ui.router','ui.bootstrap', 'ngTouch', 'ngAnimate'])
.config(function($urlRouterProvider, $stateProvider, $qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
  $stateProvider.state('home', {
    templateUrl:'./views/home.html',
    url:'/',
    controller: 'homeCtrl'
  }).state('contact', {
    templateUrl:'./views/contact.html',
    url:'/contact',
    controller: 'contactCtrl'
  }).state('about', {
    templateUrl:'./views/about.html',
    url:'/aboutLisa',
    controller: 'aboutCtrl'
  }).state('testimonials', {
    templateUrl:'./views/testimonials.html',
    url:'/testimonials',
    controller: 'testimonialsCtrl'
  }).state('store', {
    templateUrl:'./views/store.html',
    url:'/store',
    controller: 'storeCtrl'
  }).state('login', {
    templateUrl:'./views/login.html',
    url:'/login',
    controller: 'loginCtrl'
  }).state('pay', {
    templateUrl:'/views/pay.html',
    url:'/pay',
    controller: 'payCtrl'
  }).state('statements', {
    templateUrl:'./views/statements.html',
    url:'/statements',
    controller: 'statementsCtrl',
    resolve: {
      security: (statementsService, $state) => {
        return statementsService.getAuth()
          .catch((err) => {
            console.log("Unauthorized: ", err);
            if( err.status === 401) {
              $state.go('login')
            } else if (err.status === 403) {
              $state.go('home')
            }
          });
      }
    }
  })
  $urlRouterProvider.otherwise('/');
})


// angular.module('riskMatch', ['ui.bootstrap', 'ui.router'])
//     .config(function($stateProvider, $urlRouterProvider) {
//         $stateProvider
//             .state('home', {
//                 url: '/',
//                 templateUrl: "views/home.html",
//                 controller: 'homeCtrl'
//             })
//             .state('careers', {
//                 url: '/careers',
//                 templateUrl: "views/careers.html",
//                 controller: 'careerCtrl'
//             })
//             .state('job', {
//                 url: '/job/:id',
//                 templateUrl: "views/job.html",
//                 controller: 'jobCtrl'
//             })
//             .state('about-us', {
//                 url: '/about-us',
//                 templateUrl: "views/about-us.html",
//                 // controller: 'aboutCtrl'
//             })
//             .state('news', {
//                 url: '/news',
//                 templateUrl: "views/news.html",
//                 controller: 'newsCtrl'
//             })
//         $urlRouterProvider
//             .otherwise('/');
//     });
