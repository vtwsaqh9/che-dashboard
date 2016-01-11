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
 * Test of the CodenvyUser
 */
describe('CodenvyUser', function () {

  /**
   * User Factory for the test
   */
  var factory;

  /**
   * API builder.
   */
  var apiBuilder;

  /**
   * Backend for handling http operations
   */
  var httpBackend;

  /**
   * Codenvy backend
   */
  var codenvyBackend;

  /**
   *  setup module
   */
  beforeEach(module('userDashboard'));

  /**
   * Inject factory and http backend
   */
  beforeEach(inject(function (codenvyUser, codenvyAPIBuilder, codenvyHttpBackend) {
    factory = codenvyUser;
    apiBuilder = codenvyAPIBuilder;
    codenvyBackend = codenvyHttpBackend;
    httpBackend = codenvyHttpBackend.getHttpBackend();
  }));

  /**
   * Check assertion after the test
   */
  afterEach(function () {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  /**
   * Check that we're able to fetch user data
   */
  it('Fetch user', function () {
      // setup tests objects
      var userId = 'idTestUser';
      var email = 'testuser@codenvy.com';

      var testUser = apiBuilder.getUserBuilder().withId(userId).withEmail(email).build();

      // providing request
      // add test user on Http backend
      codenvyBackend.setDefaultUser(testUser);

      // setup backend
      codenvyBackend.setup();

      // fetch user
      factory.fetchUser(true);

      // expecting GETs
      httpBackend.expectGET('/api/user');

      // flush command
      httpBackend.flush();

      // now, check user
      var user = factory.getUser();

      // check id and email
      expect(user.id).toEqual(userId);
      expect(user.email).toEqual(email);
    }
  );

  /**
   * Check that we're able to fetch user data by id
   */
  it('Fetch user by id', function () {
      // setup tests objects
      var userId = 'newIdTestUser';
      var email = 'testuser@codenvy.com';

      var testUser = apiBuilder.getUserBuilder().withId(userId).withEmail(email).build();

      // providing request
      // add test user on Http backend
      codenvyBackend.addUserId(testUser);

      // setup backend
      codenvyBackend.setup();

      // fetch user
      factory.fetchUserId(userId);

      // expecting GETs
      httpBackend.expectGET('/api/user/' + userId);

      // flush command
      httpBackend.flush();

      // now, check user
      var user = factory.getUserFromId(userId);

      // check id and email
      expect(user.id).toEqual(userId);
      expect(user.email).toEqual(email);
    }
  );

  /**
   * Check that we're able to fetch user data by email
   */
  it('Fetch user by alias', function () {
      // setup tests objects
      var userId = 'testUser';
      var email = 'newuseremail@codenvy.com';

      var testUser = apiBuilder.getUserBuilder().withId(userId).withEmail(email).build();

      // providing request
      // add test user on Http backend
      codenvyBackend.addUserEmail(testUser);

      // setup backend
      codenvyBackend.setup();

      // fetch user
      factory.fetchUserByAlias(email);

      // expecting GETs
      httpBackend.expectGET('/api/user/find?alias=' + email);

      // flush command
      httpBackend.flush();

      // now, check user
      var user = factory.getUserByAlias(email);

      // check id and email
      expect(user.id).toEqual(userId);
      expect(user.email).toEqual(email);
    }
  );

  /**
   * Check that we're able to set attributes into profile
   */
  it('Set password', function () {
      // setup
      var testPassword = 'newTestPassword';

      // setup backend
      codenvyBackend.setup();
      codenvyBackend.setPassword(testPassword);

      // fetch profile
      factory.setPassword(testPassword);

      // expecting a POST
      httpBackend.expectPOST('/api/user/password');

      // flush command
      httpBackend.flush();
    }
  );

});
