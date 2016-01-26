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

/*exported CodenvyProjectTypeAttributeDescriptorBuilder */

/**
 * This class is providing a builder for AttributeDescriptor
 * @author Florent Benoit
 */
export class CodenvyProjectTypeAttributeDescriptorBuilder {

  constructor() {
    this.attribute = {};
    this.attribute.values = [];
  }

  withName(name) {
  this.attribute.name = name;
    return this;
  }

  withRequired(required) {
    this.attribute.required = required;
    return this;
  }

  withVariable(variable) {
    this.attribute.variable = variable;
    return this;
  }

  withDescription(description) {
    this.attribute.description = description;
    return this;
  }

  withValues(values) {
    this.attribute.values = values;
    return this;
  }

  build() {
    return this.attribute;
  }


}
