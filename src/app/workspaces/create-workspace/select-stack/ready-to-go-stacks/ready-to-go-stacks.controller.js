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
 * This class is handling the controller for the ready-to-go stacks
 * @author Florent Benoit
 */
export class ReadyToGoStacksCtrl {

  /**
   * Default constructor that is using resource
   * @ngInject for Dependency injection
   */
  constructor(codenvyStack, $rootScope) {
    this.codenvyStack = codenvyStack;
    this.$rootScope = $rootScope;

    this.stacks = [];
    this.stack = null;

    let promiseStack = codenvyStack.fetchStacks();
    promiseStack.then(() => {
        this.updateData();
      },
      (error) => {
        // etag handling so also retrieve last data that were fetched before
        if (error.status === 304) {
          // ok
          this.updateData();
        }
      });

  }

  //TODO should change cdvy-simple-selecter widget
  cdvySimpleSelecterDefault(stack) {
    this.stack = stack;
    this.onChange();
  }

  //TODO should change cdvy-simple-selecter widget
  cdvySimpleSelecter(projectName, stack) {
    this.stack = stack;
    this.onChange();
  }

  /**
   * Update stacks' data
   */
  updateData() {
    this.stacks.length = 0;
    var remoteStacks = this.codenvyStack.getStacks();
    // remote stacks are
    remoteStacks.forEach((stack) => {
      stack.iconName = stack.name.toLowerCase();
      if (/\./.test(stack.iconName)) {
        stack.iconName = stack.iconName.replace(new RegExp('\\.', 'g'), '');
      }
      this.stacks.push(stack);
    });
    // broadcast event
    this.$rootScope.$broadcast('create-project-stacks:initialized');
  }

  /**
   * Joins the tags into a string
   */
  tagsToString(tags) {
    return tags.join(', ');
  }

}
