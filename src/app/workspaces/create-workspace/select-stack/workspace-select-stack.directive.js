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
 * Defines a directive for displaying select stack widget.
 * @author Oleksii Orel
 */
class WorkspaceSelectStack {

  /**
   * Default constructor that is using resource
   * @ngInject for Dependency injection
   */
  constructor() {
    this.restrict = 'E';
    this.templateUrl = 'app/workspaces/create-workspace/select-stack/workspace-select-stack.html';
    this.replace = false;

    this.controller = 'WorkspaceSelectStackCtrl';
    this.controllerAs = 'workspaceSelectStackCtrl';

    this.bindToController = true;

    // scope values
    this.scope = {
      isWorkspaces: '@cdvyIsWorkspaces',
      tabName: '=cdvyTabName',
      onTabChange: '&cdvyOnTabChange',
      stack: '=cdvyStack',
      onStackChange: '&cdvyStackChange',
      workspace: '=cdvyWorkspace',
      onWorkspaceChange: '&cdvyWorkspaceChange',
      recipeScript: '=cdvyRecipeScript',
      recipeUrl: '=cdvyRecipeUrl'
    };

  }

}

export default WorkspaceSelectStack;
