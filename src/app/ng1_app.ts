import * as angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiGrid from 'angular-ui-grid';

import GridComponent from './grid/grid.component';

export const Ng1AppModule =
  angular.module('Ng1AppModule', [uiRouter, uiGrid])
    .run(function ($rootScope) {
      $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams, options) {
          console.log(event);
        });
    })
    .config(function ($stateProvider) {
      var helloState = {
        name: 'hello',
        url: '/hello',
        template: '<grid></grid>'
      };

      $stateProvider.state(helloState);
    })
    .component(GridComponent.selector, GridComponent.options);
