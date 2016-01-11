/*
 * Copyright (c) 2012-2016 Codenvy, S.A.
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
 * Defines a directive for displaying project recipe widget.
 * @author Oleksii Orel
 */
class WorkspaceRecipe {

  /**
   * Default constructor that is using resource
   * @ngInject for Dependency injection
   */
  constructor() {
    this.restrict = 'E';
    this.templateUrl = 'app/workspaces/recipe/workspace-recipe.html';
    this.replace = false;

    this.controller = 'WorkspaceRecipeCtrl';
    this.controllerAs = 'workspaceRecipeCtrl';

    this.bindToController = true;

    // scope values
    this.scope = {
      recipeUrl:'=cdvyRecipeUrl',
      workspaceName:'=cdvyWorkspaceName',
      workspaceRam:'=cdvyWorkspaceRam',
      recipeScript:'=cdvyRecipeScript'
    };

  }

}

export default WorkspaceRecipe;
