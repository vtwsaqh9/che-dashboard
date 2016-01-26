/*
 * Copyright (c) 2015-2016 Codenvy, S.A.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   Codenvy, S.A. - initial API and implementation
 */
'use strict';

/**
 * Provides custom notifications
 * @author Oleksii Orel
 */
export class CodenvyNotification {

  /**
   * Default constructor that is using resource injection
   * @ngInject for Dependency injection
   */
  constructor($mdToast) {
    this.$mdToast = $mdToast;
  }

  showInfo(text) {
    this.$mdToast.hide();
    this.$mdToast.show({
      template: '<md-toast class="cdvy-notification-info" layout="row" flex layout-align="start start">' +
      '<i class="cdvy-notification-info-icon fa fa-check fa-2x"></i>' +
      '<div flex="90" layout="column" layout-align="start start">' +
      '<span flex class="cdvy-notification-info-title"><b>Success</b></span>' +
      '<span flex class="cdvy-notification-message">' + text + '</span>' +
      '</div>' +
      '<i class="cdvy-notification-close-icon fa fa-times" ng-click="hideNotification()"/>' +
      '</md-toast>',
      autoWrap: false,
      controller: ['$scope', ($scope) => {
        $scope.hideNotification = this.$mdToast.hide;
      }],
      hideDelay: 3000
    });
  }

  showError(text) {
    this.$mdToast.hide();
    this.$mdToast.show({
      template: '<md-toast class="cdvy-notification-error" layout="row" layout-align="start start">' +
      '<i class="cdvy-notification-error-icon fa fa-exclamation-triangle fa-2x"></i>' +
      '<div flex="90" layout="column" layout-align="start start">' +
      '<span flex class="cdvy-notification-error-title"><b>Failed</b></span>' +
      '<span flex class="cdvy-notification-message">' + text + '</span>' +
      '</div>' +
      '<i class="cdvy-notification-close-icon fa fa-times" ng-click="hideNotification()"/>' +
      '</md-toast>',
      autoWrap: false,
      controller: ['$scope', ($scope) => {
        $scope.hideNotification = this.$mdToast.hide;
      }],
      hideDelay: 20000
    });
  }
}
