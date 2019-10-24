$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature_01_LogIn.feature");
formatter.feature({
  "line": 2,
  "name": "Payment feature",
  "description": "  As an automation tester\nI want a payment function \nSo that I want to make sure payment correctly",
  "id": "payment-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LogInGuruBank"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Create account, login and verify login successfully",
  "description": "",
  "id": "payment-feature;create-account,-login-and-verify-login-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@CreateAccountAndLogin"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I navigate to Guru bank and click Here link",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I input email \"randomEmail\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click to submit account",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I get email and password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I navigate to Log In page \"http://demo.guru99.com/v4/\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I log in system",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify successfully with message Home Page \"Welcome To Manager\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_Guru_bank_and_click_Here_link()"
});
formatter.result({
  "duration": 9801734497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "randomEmail",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.i_input_email(String)"
});
formatter.result({
  "duration": 244146233,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.i_click_to_submit_account()"
});
formatter.result({
  "duration": 2227368587,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.i_get_email_and_password()"
});
formatter.result({
  "duration": 102270903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.guru99.com/v4/",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.i_navigate_to_Log_In_page(String)"
});
formatter.result({
  "duration": 1762336907,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_log_in_system()"
});
formatter.result({
  "duration": 2893654024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome To Manager",
      "offset": 44
    }
  ],
  "location": "HomePageSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 56925846,
  "status": "passed"
});
formatter.uri("Feature_02_CreateNewCustomer.feature");
formatter.feature({
  "line": 3,
  "name": "Create customer",
  "description": "  As an automation tester\nI want to create new customer\nSo that I want to verify all fields is correct message",
  "id": "create-customer",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1499627148,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Create customer with empty customer name",
  "description": "",
  "id": "create-customer;create-customer-with-empty-customer-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@TC_01_Create_NameCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I input key tab to customer name",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Verify successfully with message \"Customer name must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCustomerSteps.i_input_key_tab_to_customer_name()"
});
formatter.result({
  "duration": 108024621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer name must not be blank",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 30546444,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@TC_02_03_Create_NameCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I input data \"\u003cCustomer Name\u003e\" to customer name",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Verify successfully with message \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "Customer Name",
        "Message"
      ],
      "line": 24,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "123456",
        "Numbers are not allowed"
      ],
      "line": 25,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2"
    },
    {
      "cells": [
        "name!@#",
        "Special characters are not allowed"
      ],
      "line": 26,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1678778396,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@CreateCustomer"
    },
    {
      "line": 17,
      "name": "@TC_02_03_Create_NameCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I input data \"123456\" to customer name",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Verify successfully with message \"Numbers are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 14
    }
  ],
  "location": "NewCustomerSteps.i_input_data_to_customer_name(String)"
});
formatter.result({
  "duration": 141443868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Numbers are not allowed",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 31510571,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1025472021,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@CreateCustomer"
    },
    {
      "line": 17,
      "name": "@TC_02_03_Create_NameCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I input data \"name!@#\" to customer name",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Verify successfully with message \"Special characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "name!@#",
      "offset": 14
    }
  ],
  "location": "NewCustomerSteps.i_input_data_to_customer_name(String)"
});
formatter.result({
  "duration": 140206931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Special characters are not allowed",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 34943140,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1194135115,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Create customer with input first character blank space name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-first-character-blank-space-name-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@TC_04_Create_NameCannotFirstCharacterBlankSpace"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I input key space to customer name",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Verify successfully with message \"First character can not have space\"",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCustomerSteps.i_input_key_space_to_customer_name()"
});
formatter.result({
  "duration": 100744808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First character can not have space",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 28328090,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 519644324,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Create customer with empty address field",
  "description": "",
  "id": "create-customer;create-customer-with-empty-address-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@TC_05_Create_AddressCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I input key tab to address",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Verify successfully with message \"Address Field must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCustomerSteps.i_input_key_tab_to_address()"
});
formatter.result({
  "duration": 102397434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address Field must not be blank",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 31913987,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1388412906,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Create customer with input first character blank space address field",
  "description": "",
  "id": "create-customer;create-customer-with-input-first-character-blank-space-address-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@TC_06_Create_AddressCannotFirstCharacterBlankSpace"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "I input key space to address",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Verify successfully with message \"First character can not have space\"",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCustomerSteps.i_input_key_space_to_address()"
});
formatter.result({
  "duration": 98941155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First character can not have space",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 26075609,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 607425788,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Create customer with empty address field",
  "description": "",
  "id": "create-customer;create-customer-with-empty-address-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@TC_07_Create_CityCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I input key tab to city",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "Verify successfully with message \"City Field must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCustomerSteps.i_input_key_tab_to_city()"
});
formatter.result({
  "duration": 103181145,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City Field must not be blank",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 34016973,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 53,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 52,
      "name": "@TC_08_09_Create_CityCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "I input data \"\u003cCity\u003e\" to city",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "Verify successfully with message \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 58,
  "name": "",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "City",
        "Message"
      ],
      "line": 59,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "123456",
        "Numbers are not allowed"
      ],
      "line": 60,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2"
    },
    {
      "cells": [
        "name!@#",
        "Special characters are not allowed"
      ],
      "line": 61,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1527688787,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@CreateCustomer"
    },
    {
      "line": 52,
      "name": "@TC_08_09_Create_CityCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "I input data \"123456\" to city",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "Verify successfully with message \"Numbers are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 14
    }
  ],
  "location": "NewCustomerSteps.i_input_data_to_city(String)"
});
formatter.result({
  "duration": 126199398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Numbers are not allowed",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 33599010,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 521943255,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@CreateCustomer"
    },
    {
      "line": 52,
      "name": "@TC_08_09_Create_CityCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "I input data \"name!@#\" to city",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "Verify successfully with message \"Special characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "name!@#",
      "offset": 14
    }
  ],
  "location": "NewCustomerSteps.i_input_data_to_city(String)"
});
formatter.result({
  "duration": 133935090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Special characters are not allowed",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 30314653,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1539919764,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Create customer with input first character blank space city field",
  "description": "",
  "id": "create-customer;create-customer-with-input-first-character-blank-space-city-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 63,
      "name": "@TC_10_Create_CityCannotFirstCharacterBlankSpace"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "I input key space to city",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "Verify successfully with message \"First character can not have space\"",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCustomerSteps.i_input_key_space_to_city()"
});
formatter.result({
  "duration": 100327956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First character can not have space",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 28393591,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1042466196,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Create customer with empty state field",
  "description": "",
  "id": "create-customer;create-customer-with-empty-state-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 69,
      "name": "@TC_11_Create_StateCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "I input key tab to state",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "Verify successfully with message \"State must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCustomerSteps.i_input_key_tab_to_state()"
});
formatter.result({
  "duration": 100955385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "State must not be blank",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 32226798,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 76,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 75,
      "name": "@TC_12_13_Create_StateCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "I input data \"\u003cState\u003e\" to state",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "Verify successfully with message \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 81,
  "name": "",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "State",
        "Message"
      ],
      "line": 82,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "123456",
        "Numbers are not allowed"
      ],
      "line": 83,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2"
    },
    {
      "cells": [
        "name!@#",
        "Special characters are not allowed"
      ],
      "line": 84,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1244338447,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 75,
      "name": "@TC_12_13_Create_StateCannotBeNumberic"
    },
    {
      "line": 2,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "I input data \"123456\" to state",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "Verify successfully with message \"Numbers are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 14
    }
  ],
  "location": "NewCustomerSteps.i_input_data_to_state(String)"
});
formatter.result({
  "duration": 129774785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Numbers are not allowed",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 27137355,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 539109730,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 75,
      "name": "@TC_12_13_Create_StateCannotBeNumberic"
    },
    {
      "line": 2,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "I input data \"name!@#\" to state",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "Verify successfully with message \"Special characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "name!@#",
      "offset": 14
    }
  ],
  "location": "NewCustomerSteps.i_input_data_to_state(String)"
});
formatter.result({
  "duration": 134020063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Special characters are not allowed",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 24984616,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1786433949,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "",
  "description": "Create customer with input first character blank space state field",
  "id": "create-customer;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 87,
      "name": "@TC_14_Create_StateCannotFirstCharacterBlankSpace"
    }
  ]
});
formatter.step({
  "line": 91,
  "name": "I input key space to state",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "Verify successfully with message \"First character can not have space\"",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCustomerSteps.i_input_key_space_to_state()"
});
formatter.result({
  "duration": 115507030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First character can not have space",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 28040056,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 96,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 95,
      "name": "@TC_15_17_18_20_Create_StateCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 98,
  "name": "I input data \"\u003cPIN\u003e\" to pin",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "Verify successfully with message \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 101,
  "name": "",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "PIN",
        "Message"
      ],
      "line": 102,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "ABC",
        "Characters are not allowed"
      ],
      "line": 103,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2"
    },
    {
      "cells": [
        "123",
        "PIN Code must have 6 Digits"
      ],
      "line": 104,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;3"
    },
    {
      "cells": [
        "name!@",
        "Special characters are not allowed"
      ],
      "line": 105,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;4"
    },
    {
      "cells": [
        "12 345",
        "Characters are not allowed"
      ],
      "line": 106,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 2043948716,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 95,
      "name": "@TC_15_17_18_20_Create_StateCannotBeNumberic"
    },
    {
      "line": 2,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "line": 98,
  "name": "I input data \"ABC\" to pin",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "Verify successfully with message \"Characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ABC",
      "offset": 14
    }
  ],
  "location": "NewCustomerSteps.i_input_data_to_pin(String)"
});
formatter.result({
  "duration": 123130436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Characters are not allowed",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 28304920,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1206277401,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 95,
      "name": "@TC_15_17_18_20_Create_StateCannotBeNumberic"
    },
    {
      "line": 2,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "line": 98,
  "name": "I input data \"123\" to pin",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "Verify successfully with message \"PIN Code must have 6 Digits\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 14
    }
  ],
  "location": "NewCustomerSteps.i_input_data_to_pin(String)"
});
formatter.result({
  "duration": 109087002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PIN Code must have 6 Digits",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 30166234,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1672144128,
  "status": "passed"
});
formatter.scenario({
  "line": 105,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 95,
      "name": "@TC_15_17_18_20_Create_StateCannotBeNumberic"
    },
    {
      "line": 2,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "line": 98,
  "name": "I input data \"name!@\" to pin",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "Verify successfully with message \"Special characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "name!@",
      "offset": 14
    }
  ],
  "location": "NewCustomerSteps.i_input_data_to_pin(String)"
});
formatter.result({
  "duration": 127778333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Special characters are not allowed",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 28192570,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 2078334833,
  "status": "passed"
});
formatter.scenario({
  "line": 106,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 95,
      "name": "@TC_15_17_18_20_Create_StateCannotBeNumberic"
    },
    {
      "line": 2,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "line": 98,
  "name": "I input data \"12 345\" to pin",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "Verify successfully with message \"Characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12 345",
      "offset": 14
    }
  ],
  "location": "NewCustomerSteps.i_input_data_to_pin(String)"
});
formatter.result({
  "duration": 128056838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Characters are not allowed",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 25589479,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 791779549,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "Create customer with empty PIN field",
  "description": "",
  "id": "create-customer;create-customer-with-empty-pin-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 109,
      "name": "@TC_16_Create_PinCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 112,
  "name": "I input key tab to pin",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "Verify successfully with message \"PIN Code must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCustomerSteps.i_input_key_tab_to_pin()"
});
formatter.result({
  "duration": 98542770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PIN Code must not be blank",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 28935458,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1108967238,
  "status": "passed"
});
formatter.scenario({
  "line": 117,
  "name": "",
  "description": "Create customer with input first character blank space PIN field",
  "id": "create-customer;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 116,
      "name": "@TC_19_Create_PinCannotFirstCharacterBlankSpace"
    }
  ]
});
formatter.step({
  "line": 120,
  "name": "I input key space to pin",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "Verify successfully with message \"First character can not have space\"",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCustomerSteps.i_input_key_space_to_pin()"
});
formatter.result({
  "duration": 96574844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First character can not have space",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 24844577,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1527267177,
  "status": "passed"
});
formatter.scenario({
  "line": 125,
  "name": "Create customer with empty telephone field",
  "description": "",
  "id": "create-customer;create-customer-with-empty-telephone-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 124,
      "name": "@TC_21_Create_TelephoneCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 127,
  "name": "I input key tab to phone",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "Verify successfully with message \"Mobile no must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCustomerSteps.i_input_key_tab_to_phone()"
});
formatter.result({
  "duration": 110286126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile no must not be blank",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 39207865,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 513537769,
  "status": "passed"
});
formatter.scenario({
  "line": 131,
  "name": "",
  "description": "Create customer with input first character blank space telephone field",
  "id": "create-customer;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 130,
      "name": "@TC_22_Create_TelephoneCannotFirstCharacterBlankSpace"
    }
  ]
});
formatter.step({
  "line": 134,
  "name": "I input key space to phone",
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "Verify successfully with message \"First character can not have space\"",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCustomerSteps.i_input_key_space_to_phone()"
});
formatter.result({
  "duration": 101533015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First character can not have space",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 27901622,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 139,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 138,
      "name": "@TC_23_24_Create_StateCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "I input data \"\u003cPhone\u003e\" to phone",
  "keyword": "When "
});
formatter.step({
  "line": 142,
  "name": "Verify successfully with message \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 144,
  "name": "",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "Phone",
        "Message"
      ],
      "line": 145,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "012 11122",
        "Characters are not allowed"
      ],
      "line": 146,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2"
    },
    {
      "cells": [
        "@#98",
        "Special characters are not allowed"
      ],
      "line": 147,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1127816029,
  "status": "passed"
});
formatter.scenario({
  "line": 146,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 138,
      "name": "@TC_23_24_Create_StateCannotBeNumberic"
    },
    {
      "line": 2,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "I input data \"012 11122\" to phone",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 142,
  "name": "Verify successfully with message \"Characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "012 11122",
      "offset": 14
    }
  ],
  "location": "NewCustomerSteps.i_input_data_to_phone(String)"
});
formatter.result({
  "duration": 148483445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Characters are not allowed",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 31872106,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 515882893,
  "status": "passed"
});
formatter.scenario({
  "line": 147,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 138,
      "name": "@TC_23_24_Create_StateCannotBeNumberic"
    },
    {
      "line": 2,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "I input data \"@#98\" to phone",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 142,
  "name": "Verify successfully with message \"Special characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "@#98",
      "offset": 14
    }
  ],
  "location": "NewCustomerSteps.i_input_data_to_phone(String)"
});
formatter.result({
  "duration": 120654148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Special characters are not allowed",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 29255108,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1561988104,
  "status": "passed"
});
formatter.scenario({
  "line": 151,
  "name": "",
  "description": "Create customer with input first character blank space telephone field",
  "id": "create-customer;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 150,
      "name": "@TC_25_Create_EmailCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 154,
  "name": "I input key tab to email",
  "keyword": "When "
});
formatter.step({
  "line": 155,
  "name": "Verify successfully with message \"Email-ID must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCustomerSteps.i_input_key_tab_to_email()"
});
formatter.result({
  "duration": 122041426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email-ID must not be blank",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 30219704,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 158,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 157,
      "name": "@TC_26_Create_StateCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 160,
  "name": "I input data \"\u003cEmail\u003e\" to email",
  "keyword": "When "
});
formatter.step({
  "line": 161,
  "name": "Verify successfully with message \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 163,
  "name": "",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "Email",
        "Message"
      ],
      "line": 164,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "Guru99@",
        "Email-ID is not valid"
      ],
      "line": 165,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1701619231,
  "status": "passed"
});
formatter.scenario({
  "line": 165,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 157,
      "name": "@TC_26_Create_StateCannotBeNumberic"
    },
    {
      "line": 2,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "line": 160,
  "name": "I input data \"Guru99@\" to email",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 161,
  "name": "Verify successfully with message \"Email-ID is not valid\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Guru99@",
      "offset": 14
    }
  ],
  "location": "NewCustomerSteps.i_input_data_to_email(String)"
});
formatter.result({
  "duration": 133826032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email-ID is not valid",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 29514518,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1314030463,
  "status": "passed"
});
formatter.scenario({
  "line": 168,
  "name": "",
  "description": "Create customer with input first character blank space PIN field",
  "id": "create-customer;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 167,
      "name": "@TC_27_Create_EmailCannotHaveBlankSpace"
    }
  ]
});
formatter.step({
  "line": 171,
  "name": "I input key space to email",
  "keyword": "When "
});
formatter.step({
  "line": 172,
  "name": "Verify successfully with message \"First character can not have space\"",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCustomerSteps.i_input_key_space_to_email()"
});
formatter.result({
  "duration": 100059215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First character can not have space",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 22801837,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 175,
  "name": "Create new Customer and get NewCustomerID",
  "description": "",
  "id": "create-customer;create-new-customer-and-get-newcustomerid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 174,
      "name": "@TC_28_CreateCustomerSuccessfully"
    }
  ]
});
formatter.step({
  "line": 177,
  "name": "I input with data \"\u003cCustomerName\u003e\" to customer name",
  "keyword": "When "
});
formatter.step({
  "line": 178,
  "name": "I input with data \"\u003cDateOfBirth\u003e\" to date of birth",
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "I input with data \"\u003cAddress\u003e\" to address",
  "keyword": "When "
});
formatter.step({
  "line": 180,
  "name": "I input with data \"\u003cCity\u003e\" to city",
  "keyword": "When "
});
formatter.step({
  "line": 181,
  "name": "I input with data \"\u003cState\u003e\" to state",
  "keyword": "When "
});
formatter.step({
  "line": 182,
  "name": "I input with data \"\u003cPIN\u003e\" to pin",
  "keyword": "When "
});
formatter.step({
  "line": 183,
  "name": "I input with data \"\u003cPhone\u003e\" to phone",
  "keyword": "When "
});
formatter.step({
  "line": 184,
  "name": "I input with data \"\u003cEmail\u003e\" to email",
  "keyword": "When "
});
formatter.step({
  "line": 185,
  "name": "I input with data \"\u003cPassword\u003e\" to password",
  "keyword": "When "
});
formatter.step({
  "line": 186,
  "name": "I click submit button",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "Verify successfully with message \"Customer Registered Successfully!!!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 188,
  "name": "I get text UserID",
  "keyword": "And "
});
formatter.examples({
  "line": 191,
  "name": "",
  "description": "",
  "id": "create-customer;create-new-customer-and-get-newcustomerid;",
  "rows": [
    {
      "cells": [
        "CustomerName",
        "DateOfBirth",
        "Address",
        "City",
        "State",
        "PIN",
        "Phone",
        "Email",
        "Password"
      ],
      "line": 192,
      "id": "create-customer;create-new-customer-and-get-newcustomerid;;1"
    },
    {
      "cells": [
        "Neymar Jr",
        "10/10/1993",
        "Da nang",
        "Da nang",
        "Da nang",
        "466250",
        "4555442476",
        "randomEmail",
        "1234567890"
      ],
      "line": 193,
      "id": "create-customer;create-new-customer-and-get-newcustomerid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 8,
  "name": "User to navigate to Create customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 490830626,
  "status": "passed"
});
formatter.scenario({
  "line": 193,
  "name": "Create new Customer and get NewCustomerID",
  "description": "",
  "id": "create-customer;create-new-customer-and-get-newcustomerid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 174,
      "name": "@TC_28_CreateCustomerSuccessfully"
    },
    {
      "line": 2,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "line": 177,
  "name": "I input with data \"Neymar Jr\" to customer name",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 178,
  "name": "I input with data \"10/10/1993\" to date of birth",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "I input with data \"Da nang\" to address",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 180,
  "name": "I input with data \"Da nang\" to city",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 181,
  "name": "I input with data \"Da nang\" to state",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 182,
  "name": "I input with data \"466250\" to pin",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 183,
  "name": "I input with data \"4555442476\" to phone",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 184,
  "name": "I input with data \"randomEmail\" to email",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 185,
  "name": "I input with data \"1234567890\" to password",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 186,
  "name": "I click submit button",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "Verify successfully with message \"Customer Registered Successfully!!!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 188,
  "name": "I get text UserID",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Neymar Jr",
      "offset": 19
    }
  ],
  "location": "NewCustomerSteps.i_input_with_data_to_customer_name(String)"
});
formatter.result({
  "duration": 146466430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10/10/1993",
      "offset": 19
    }
  ],
  "location": "NewCustomerSteps.i_input_with_data_to_date_of_birth(String)"
});
formatter.result({
  "duration": 138855925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Da nang",
      "offset": 19
    }
  ],
  "location": "NewCustomerSteps.i_input_with_data_to_address(String)"
});
formatter.result({
  "duration": 101661775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Da nang",
      "offset": 19
    }
  ],
  "location": "NewCustomerSteps.i_input_with_data_to_city(String)"
});
formatter.result({
  "duration": 111895183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Da nang",
      "offset": 19
    }
  ],
  "location": "NewCustomerSteps.i_input_with_data_to_state(String)"
});
formatter.result({
  "duration": 94092687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "466250",
      "offset": 19
    }
  ],
  "location": "NewCustomerSteps.i_input_with_data_to_pin(String)"
});
formatter.result({
  "duration": 90145900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4555442476",
      "offset": 19
    }
  ],
  "location": "NewCustomerSteps.i_input_with_data_to_phone(String)"
});
formatter.result({
  "duration": 95806303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "randomEmail",
      "offset": 19
    }
  ],
  "location": "NewCustomerSteps.i_input_with_data_to_email(String)"
});
formatter.result({
  "duration": 180913055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 19
    }
  ],
  "location": "NewCustomerSteps.i_input_with_data_to_password(String)"
});
formatter.result({
  "duration": 109356068,
  "status": "passed"
});
formatter.match({
  "location": "NewCustomerSteps.i_click_submit_button()"
});
formatter.result({
  "duration": 1874476153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Registered Successfully!!!",
      "offset": 34
    }
  ],
  "location": "NewCustomerSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 30554836,
  "status": "passed"
});
formatter.match({
  "location": "NewCustomerSteps.i_get_text_UserID()"
});
formatter.result({
  "duration": 51330664,
  "status": "passed"
});
formatter.uri("Feature_03_EditCustomer.feature");
formatter.feature({
  "line": 2,
  "name": "Edit customer",
  "description": "  As an automation tester\nI want to edit customer\nSo that I want to verify all fields is correct message",
  "id": "edit-customer",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 875907562,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Edit customer with empty customer id",
  "description": "",
  "id": "edit-customer;edit-customer-with-empty-customer-id",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@TC_01_Edit_NameCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I input key tab to customer id",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Verify successfully with message Edit Page \"Customer ID is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_key_tab_to_customer_id()"
});
formatter.result({
  "duration": 97528739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer ID is required",
      "offset": 44
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_message_Edit_Page(String)"
});
formatter.result({
  "duration": 24904922,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@TC_02_03_Edit_CustomerIdCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I input data \"\u003cCustomer ID\u003e\" to customer id",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Verify successfully with message Edit Page \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "Customer ID",
        "Message"
      ],
      "line": 22,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "1236Acc",
        "Characters are not allowed"
      ],
      "line": 23,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;2"
    },
    {
      "cells": [
        "name!@#",
        "Special characters are not allowed"
      ],
      "line": 24,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 2351351132,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@TC_02_03_Edit_CustomerIdCannotBeNumberic"
    },
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I input data \"1236Acc\" to customer id",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Verify successfully with message Edit Page \"Characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1236Acc",
      "offset": 14
    }
  ],
  "location": "EditCustomerSteps.i_input_data_to_customer_id(String)"
});
formatter.result({
  "duration": 118721998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Characters are not allowed",
      "offset": 44
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_message_Edit_Page(String)"
});
formatter.result({
  "duration": 29031110,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1700996056,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@TC_02_03_Edit_CustomerIdCannotBeNumberic"
    },
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I input data \"name!@#\" to customer id",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Verify successfully with message Edit Page \"Special characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "name!@#",
      "offset": 14
    }
  ],
  "location": "EditCustomerSteps.i_input_data_to_customer_id(String)"
});
formatter.result({
  "duration": 129419970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Special characters are not allowed",
      "offset": 44
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_message_Edit_Page(String)"
});
formatter.result({
  "duration": 28520037,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1618386562,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Edit customer with input special value customer ID field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-special-value-customer-id-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@TC_04_Edit_ValidCustomerId"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 105968826,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1207891233,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1160423065,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Edit customer with input special value customer ID field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-special-value-customer-id-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@TC_08_Edit_AddressCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I update key tab to address",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Verify successfully with message Edit Page \"Address Field must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 105653970,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 859426530,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_update_key_tab_to_address()"
});
formatter.result({
  "duration": 154667023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address Field must not be blank",
      "offset": 44
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_message_Edit_Page(String)"
});
formatter.result({
  "duration": 26062846,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1359471999,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Edit customer with input special value customer ID field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-special-value-customer-id-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@TC_09_Edit_CityCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I update key tab to city",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Verify successfully with message Edit Page \"City Field must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 111090572,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1041664765,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_update_key_tab_to_city()"
});
formatter.result({
  "duration": 141500456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City Field must not be blank",
      "offset": 44
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_message_Edit_Page(String)"
});
formatter.result({
  "duration": 27135731,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@TC_10_11_Edit_CityCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I update data \"\u003cCity\u003e\" to city",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "Verify successfully with message Edit Page \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 53,
  "name": "",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "City",
        "Message"
      ],
      "line": 54,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "123456",
        "Numbers are not allowed"
      ],
      "line": 55,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;2"
    },
    {
      "cells": [
        "name!@",
        "Special characters are not allowed"
      ],
      "line": 56,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 2163878440,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@TC_10_11_Edit_CityCannotBeNumberic"
    },
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I update data \"123456\" to city",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "Verify successfully with message Edit Page \"Numbers are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 118547376,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1362268389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 15
    }
  ],
  "location": "EditCustomerSteps.i_update_data_to_city(String)"
});
formatter.result({
  "duration": 172601770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Numbers are not allowed",
      "offset": 44
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_message_Edit_Page(String)"
});
formatter.result({
  "duration": 26477185,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1151082579,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@TC_10_11_Edit_CityCannotBeNumberic"
    },
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I update data \"name!@\" to city",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "Verify successfully with message Edit Page \"Special characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 102912162,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1602319027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name!@",
      "offset": 15
    }
  ],
  "location": "EditCustomerSteps.i_update_data_to_city(String)"
});
formatter.result({
  "duration": 174855367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Special characters are not allowed",
      "offset": 44
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_message_Edit_Page(String)"
});
formatter.result({
  "duration": 28015082,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1132854582,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Edit customer with input special value customer ID field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-special-value-customer-id-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 59,
      "name": "@TC_12_Edit_StateCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I update key tab to state",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Verify successfully with message Edit Page \"State must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 103940167,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1163865487,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_update_key_tab_to_state()"
});
formatter.result({
  "duration": 150523517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "State must not be blank",
      "offset": 44
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_message_Edit_Page(String)"
});
formatter.result({
  "duration": 25824101,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 68,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 67,
      "name": "@TC_13_14_Edit_StateCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I update data \"\u003cState\u003e\" to state",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "Verify successfully with message Edit Page \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 74,
  "name": "",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "State",
        "Message"
      ],
      "line": 75,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "123456",
        "Numbers are not allowed"
      ],
      "line": 76,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;2"
    },
    {
      "cells": [
        "name!@#",
        "Special characters are not allowed"
      ],
      "line": 77,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 735232928,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 67,
      "name": "@TC_13_14_Edit_StateCannotBeNumberic"
    },
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I update data \"123456\" to state",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "Verify successfully with message Edit Page \"Numbers are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 115447468,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1988299544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 15
    }
  ],
  "location": "EditCustomerSteps.i_update_data_to_state(String)"
});
formatter.result({
  "duration": 170366489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Numbers are not allowed",
      "offset": 44
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_message_Edit_Page(String)"
});
formatter.result({
  "duration": 26703009,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 2051069268,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 67,
      "name": "@TC_13_14_Edit_StateCannotBeNumberic"
    },
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I update data \"name!@#\" to state",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "Verify successfully with message Edit Page \"Special characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 102570872,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1173291561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name!@#",
      "offset": 15
    }
  ],
  "location": "EditCustomerSteps.i_update_data_to_state(String)"
});
formatter.result({
  "duration": 170268128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Special characters are not allowed",
      "offset": 44
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_message_Edit_Page(String)"
});
formatter.result({
  "duration": 22631604,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 81,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 80,
      "name": "@TC_15_17_18_Edit_PinMustBeNumeric"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I update data \"\u003cPIN\u003e\" to pin",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "Verify successfully with message Edit Page \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 87,
  "name": "",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "PIN",
        "Message"
      ],
      "line": 88,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "PIN123",
        "Characters are not allowed"
      ],
      "line": 89,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;2"
    },
    {
      "cells": [
        "123",
        "PIN Code must have 6 Digits"
      ],
      "line": 90,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;3"
    },
    {
      "cells": [
        "name!@#",
        "Special characters are not allowed"
      ],
      "line": 91,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1594027368,
  "status": "passed"
});
formatter.scenario({
  "line": 89,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 80,
      "name": "@TC_15_17_18_Edit_PinMustBeNumeric"
    },
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I update data \"PIN123\" to pin",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "Verify successfully with message Edit Page \"Characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 115217192,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 4596650969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PIN123",
      "offset": 15
    }
  ],
  "location": "EditCustomerSteps.i_update_data_to_pin(String)"
});
formatter.result({
  "duration": 170857120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Characters are not allowed",
      "offset": 44
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_message_Edit_Page(String)"
});
formatter.result({
  "duration": 26561980,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1261174176,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 80,
      "name": "@TC_15_17_18_Edit_PinMustBeNumeric"
    },
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I update data \"123\" to pin",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "Verify successfully with message Edit Page \"PIN Code must have 6 Digits\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 105425819,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1067093458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 15
    }
  ],
  "location": "EditCustomerSteps.i_update_data_to_pin(String)"
});
formatter.result({
  "duration": 165117294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PIN Code must have 6 Digits",
      "offset": 44
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_message_Edit_Page(String)"
});
formatter.result({
  "duration": 27147308,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1505698405,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 80,
      "name": "@TC_15_17_18_Edit_PinMustBeNumeric"
    },
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I update data \"name!@#\" to pin",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "Verify successfully with message Edit Page \"Special characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 104656764,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1626406002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name!@#",
      "offset": 15
    }
  ],
  "location": "EditCustomerSteps.i_update_data_to_pin(String)"
});
formatter.result({
  "duration": 170788521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Special characters are not allowed",
      "offset": 44
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_message_Edit_Page(String)"
});
formatter.result({
  "duration": 23589441,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1714179971,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "Edit customer with input special value customer ID field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-special-value-customer-id-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 94,
      "name": "@TC_16_Edit_PinCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 96,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I update key tab to pin",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "Verify successfully with message Edit Page \"PIN Code must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 105509064,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1495444141,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_update_key_tab_to_pin()"
});
formatter.result({
  "duration": 138912275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PIN Code must not be blank",
      "offset": 44
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_message_Edit_Page(String)"
});
formatter.result({
  "duration": 24882862,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 4098234224,
  "status": "passed"
});
formatter.scenario({
  "line": 102,
  "name": "Edit customer with input special value customer ID field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-special-value-customer-id-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 101,
      "name": "@TC_19_Edit_TelephoneCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 103,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I update key tab to phone",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "Verify successfully with message Edit Page \"Mobile no must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 122383112,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1227720327,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_update_key_tab_to_phone()"
});
formatter.result({
  "duration": 161387622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile no must not be blank",
      "offset": 44
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_message_Edit_Page(String)"
});
formatter.result({
  "duration": 26582777,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 109,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 108,
      "name": "@TC_20_Edit_TelephoneCannotHaveSpecialCharacter"
    }
  ]
});
formatter.step({
  "line": 110,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I update data \"\u003cPhone\u003e\" to phone",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "Verify successfully with message Edit Page \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 115,
  "name": "",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "Phone",
        "Message"
      ],
      "line": 116,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "name!@#",
        "Special characters are not allowed"
      ],
      "line": 117,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1198068443,
  "status": "passed"
});
formatter.scenario({
  "line": 117,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 108,
      "name": "@TC_20_Edit_TelephoneCannotHaveSpecialCharacter"
    },
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.step({
  "line": 110,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I update data \"name!@#\" to phone",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "Verify successfully with message Edit Page \"Special characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 97618100,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 879750512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name!@#",
      "offset": 15
    }
  ],
  "location": "EditCustomerSteps.i_update_data_to_phone(String)"
});
formatter.result({
  "duration": 171561844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Special characters are not allowed",
      "offset": 44
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_message_Edit_Page(String)"
});
formatter.result({
  "duration": 26744358,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1147791706,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "Edit customer with input special value customer ID field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-special-value-customer-id-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 120,
      "name": "@TC_21_Edit_EmailCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 122,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "I update key tab to email",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "Verify successfully with message Edit Page \"Email-ID must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 92320401,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1153695038,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_update_key_tab_to_email()"
});
formatter.result({
  "duration": 153730982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email-ID must not be blank",
      "offset": 44
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_message_Edit_Page(String)"
});
formatter.result({
  "duration": 32605582,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 128,
  "name": "",
  "description": "Edit customer with input special value customer ID field",
  "id": "edit-customer;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 127,
      "name": "@TC_22_Edit_EmailIncorrectFormat"
    }
  ]
});
formatter.step({
  "line": 131,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "I update data \"\u003cEmail\u003e\" to email",
  "keyword": "When "
});
formatter.step({
  "line": 134,
  "name": "Verify successfully with message Edit Page \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 136,
  "name": "",
  "description": "",
  "id": "edit-customer;;",
  "rows": [
    {
      "cells": [
        "Email",
        "Message"
      ],
      "line": 137,
      "id": "edit-customer;;;1"
    },
    {
      "cells": [
        "Guru99@",
        "Email-ID is not valid"
      ],
      "line": 138,
      "id": "edit-customer;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1397215589,
  "status": "passed"
});
formatter.scenario({
  "line": 138,
  "name": "",
  "description": "Edit customer with input special value customer ID field",
  "id": "edit-customer;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@EditCustomer"
    },
    {
      "line": 127,
      "name": "@TC_22_Edit_EmailIncorrectFormat"
    }
  ]
});
formatter.step({
  "line": 131,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "I update data \"Guru99@\" to email",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 134,
  "name": "Verify successfully with message Edit Page \"Email-ID is not valid\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 105369599,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 953933980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guru99@",
      "offset": 15
    }
  ],
  "location": "EditCustomerSteps.i_update_data_to_email(String)"
});
formatter.result({
  "duration": 156819369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email-ID is not valid",
      "offset": 44
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_message_Edit_Page(String)"
});
formatter.result({
  "duration": 24662095,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1677618346,
  "status": "passed"
});
formatter.scenario({
  "line": 142,
  "name": "Edit customer with input special value customer ID field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-special-value-customer-id-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 141,
      "name": "@TC_23_Edit_EmailCannotHaveBlankSpace"
    }
  ]
});
formatter.step({
  "line": 143,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 144,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I update key space to email",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "Verify successfully with message Edit Page \"First character can not have space\"",
  "keyword": "Then "
});
formatter.step({
  "line": 147,
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 110024529,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 2430861418,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_update_key_space_to_email()"
});
formatter.result({
  "duration": 154865119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First character can not have space",
      "offset": 44
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_message_Edit_Page(String)"
});
formatter.result({
  "duration": 27344061,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.quitBrowser()"
});
formatter.result({
  "duration": 98012623,
  "status": "passed"
});
});