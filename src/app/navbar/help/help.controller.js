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
 * @ngdoc controller
 * @name help.controller:HelpCtrl
 * @description This class is handling the controller of the help
 * @author Florent Benoit
 */

export class HelpCtrl {

  /**
   * Default constructor
   * @ngInject for Dependency injection
   */
  constructor(cheBranding) {
    'ngInject';
    this.cheBranding = cheBranding;
    this.help = function () {
      return this.cheBranding.getProductHelpPath();
    };
  }
}

