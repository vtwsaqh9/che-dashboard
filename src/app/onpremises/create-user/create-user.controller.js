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
 * This class is handling the controller for the create user widget
 * @author Oleksii Orel
 */
class OnPremisesAdminCreateUserCtrl {

  /**
   * Default constructor.
   * @ngInject for Dependency injection
   */
  constructor(codenvyAPI, codenvyNotification) {
    this.codenvyAPI = codenvyAPI;
    this.codenvyNotification = codenvyNotification;

    this.newUserName = null;
    this.newUserEmail = null;
    this.newUserPassword = null;
  }

  /**
   * Create new user callback
   */
    createUser (){
        let promise = this.codenvyAPI.getUser().createUser(this.newUserName, this.newUserEmail, this.newUserPassword);

        promise.then(() => {
          this.newUserName = null;
          this.newUserEmail = null;
          this.newUserPassword = null;
          this.codenvyNotification.showInfo('User successfully created.');
        }, (error) => {
          this.codenvyNotification.showError(error.data.message ? error.data.message : '.');
        });
    }

}

export default OnPremisesAdminCreateUserCtrl;
