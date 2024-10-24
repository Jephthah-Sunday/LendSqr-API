# LendSqr-API
This repository contains API tests

# How to run test script
1. Clone repository
2. run "npx cypress open" on the IDE terminal to open cypress ui runner
3. Upon successful opening of the cypress runner, Select a test script file from a module
4. Watch the test script run
5. To run the scripts at a go, run "npx cypress run" on the IDE terminal



**SUMMARY OF TEST RESULT**

====================================================================================================

       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  Validation/bvnConsent.cy.js              00:29        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  Validation/bvnDetails.cy.js              00:04        2        -        2        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  Core Services/authenticateUser.cy.j      00:01        1        -        1        -        - │
  │    s                                                                                           │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Decisioning/getDecisionModelDetails      00:01        3        3        -        -        - │
  │    .cy.js                                                                                      │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Decisioning/getDecisionsModels.cy.j      870ms        2        2        -        -        - │
  │    s                                                                                           │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Credit Bureaus/getCreditReportFromF      00:01        2        2        -        -        - │
  │    irstCentralCreditBureau.cy.js                                                               │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Credit Bureaus/getCreditReportfromC      00:04        2        2        -        -        - │
  │    RCCreditBureau.cy.js                                                                        │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Data for Lenders/optionsDataForLend      00:05        2        2        -        -        - │
  │    ers.cy.js                                                                                   │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Data for Lenders/usersDataForLender      00:01        2        2        -        -        - │
  │    s.cy.js                                                                                     │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Direct Debit/getAllBanks.cy.js           883ms        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Operational Services/getAdjutorServ      00:07        2        2        -        -        - │
  │    icesPricing.cy.js                                                                           │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Operational Services/getListOfBanks      00:01        2        2        -        -        - │
  │    .cy.js                                                                                      │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  2 of 12 failed (17%)                     01:00       24       21        3        -        -  
