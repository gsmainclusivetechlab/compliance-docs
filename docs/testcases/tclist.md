---
title: Mobile Money API Compliance Test Cases
sidebar_label: List of Test Cases
---

Where a Compliance [Use Case](/testcases/intro) represents the different goals that
actors within the system might have, a _test case_ represents a specific path
taken to achieve a goal. Test cases are separated into "_happy_" and "_unhappy_"
so that they cover all the possibilities for a use case. Tests typically include
several alternative paths that evaluate the exceptions and errors in the use
case. It is also possible that there are several happy paths, addressing
different business rules that result in different expected outcomes.

All test cases currently available on the Mobile Money API Compliance Platform are
listed below. As new test cases are created, the documentation, and therefore
the list, will be updated. The list of test cases is split according to use
cases and contains the following attributes:

**Test Case Code:** Code that identifies the test case in relation to the
others. The code consists of two parts: an acronym that is directly related to
the use case, and a code that differentiates tests for the test group to which
it belongs.

**Test Case Scenario:** This field is made up of properties that define the
scenario in which the test case is being executed. These are the specific
parameters that define a scenario, such as: fees and commissions involved, use
of an account lookup system, currencies supported by the provider, etc.

**Status:** Expected results after running the test case. The result indicates
whether the evaluated path is a "happy" flow or "unhappy" flow.

**Results:** The results field indicates the expected behaviour for test cases
under validation. Particularly when dealing with rejected transactions, the
value of this attribute gives a better understanding of the reason for not
carrying out the transaction.

**Error Number:** Indicates the number of the current error for the test case.
This will generally be a 3-digit (for HTTP errors) or 4-digit (for MMAPI
errors) error code, which can be understood with reference to the documentation
for the APIs under test.

## List of Test Cases <a name="tc"></a>

### Payee-Initiated Merchant Payment <a name="pimp"></a>

|                                                                                 Test Case                                                                                 | Test Scenario                                 |                  Results                   | Status | Error |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------- | :----------------------------------------: | :----: | :---: |
|          PIMP100           | Merchant-initiated merchant payment (callback, debitParty sent)                        |                  Approved                  |  Pass  |   -   |
|      [PIMP200](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-with-account-lookup.yaml)       | Merchant-initiated merchant payment (callback, debitParty and creditParty sent)                  |  Approved  |   Pass   | -
|     [PIMP300](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-with-authorizationcode.yaml)     | Merchant-initiated merchant payment (callback, auth code, debitParty sent) |                  Approved                  |  Pass  |   -   |
|       [PIMP400](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-400.yaml)       | Merchant-initiated merchant payment (polling)                         |                  Approved                  |  Pass  |  -  |
|       [PIMP4001](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-401.yaml)       | Merchant-initiated merchant payment (callback, debitParty and creditParty sent, error)                         |                  Declined                  |  Fail  |  204  |
|       [PIMP4002](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-404.yaml)       | Merchant-initiated merchant payment (callback, auth code, debitParty sent, business error)                         |                  Declined                  |  Fail  |  204  |
|       [PIMP4003](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-500.yaml)       | Merchant-initiated merchant payment (callback, auth code, debitParty sent, format error)                         |                  Declined                  |  Fail  |  204  |
|       [PIMP4004](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-500.yaml)       | Merchant-initiated merchant payment (polling, error)                         |                  Declined                  |  Fail  |  404  |

### Customer-Initiated Merchant Payment <a name="cimp"></a>

|                                                                                 Test Case                                                                                 | Test Scenario                                 |                  Results                   | Status | Error |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------- | :----------------------------------------: | :----: | :---: |
|          [CIMP100](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-transaction.yaml)           | Customer-initiated merchant payment (callback, creditParty sent) Transaction                        |                  Approved                  |  Pass  |   -   |
|      [CIMP200](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-with-account-lookup.yaml)       | Customer-initiated merchant payment (callback, debitParty and creditParty sent)|                  Approved                  |  Pass  |   -   |
|     [CIMP300](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-with-authorizationcode.yaml)     | Customer-initiated merchant payment (auth code) |                  Approved                  |  Pass  |   -   |
|       [CIMP400](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-400.yaml)       | Customer-initiated merchant payment (polling, debitParty and creditParty sent)                         |                  Approved                  |  Pass  |  -  |
|       [CIMP4001](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-401.yaml)       | Customer-initiated merchant payment (callback, debitParty and creditParty sent, error)                         |                  Declined                  |  Fail  |  204  |
|       [CIMP4002](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-404.yaml)       | Customer-initiated merchant payment (auth code, error)                         |                  Declined                  |  Fail  |  204  |
|       [CIMP4003](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-500.yaml)       | Customer-initiated merchant payment (polling, debitParty and creditParty sent, error)                         |                  Declined                  |  Fail  |  404  |

### Disbursements <a name="disbmt"></a>

|                                                                                 Test Case                                                                                 | Test Scenario                                 |                  Results                   | Status | Error |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------- | :----------------------------------------: | :----: | :---: |
|          [DISBMT100](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-transaction.yaml)           | Make Individual Disbursement with Callback – Success                        |                  Approved                  |  Pass  |   -   |
|      [DISBMT200](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-with-account-lookup.yaml)       | Make Individual Disbursement with Polling – Success|                  Approved                  |  Pass  |   -   |
|     [DISBMT300](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-with-authorizationcode.yaml)     | Make 1-Step Bulk Disbursement with Callback – Success |                  Approved                  |  Pass  |   -   |
|       [DISBMT400](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-400.yaml)       | Make 2-Step Bulk Disbursement with Callback – Success                         |                  Approved                  |  Pass  |  -  |
|       [DISBMT500](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-401.yaml)       | Retrieve Bulk Disbursements by Service Provider                        |                  Declined                  |  Fail  |  204  |
|       [DISBMT600](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-404.yaml)       | Retrieve Bulk Disbursements Completed by Service Provider                     |                  Declined                  |  Fail  |  204  |
|       [DISBMT700](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-500.yaml)       | Retrieve Bulk Disbursement Rejected - Success                        |                  Declined                  |  Fail  |  404  |
|       [DISBMT4001](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-500.yaml)       | Make Individual Disbursement with Callback – Failure          |                  Declined                  |  Fail  |  204  |
|       [DISBMT4002](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-500.yaml)       | Make Individual Disbursement with Polling – Failure                        |                  Declined                  |  Fail  |  404  |
|       [DISBMT4003](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-500.yaml)       | Make 1-Step Bulk Disbursement with Callback – Failure - Returned Async                        |                  Declined                  |  Fail  |  204  |
|       [DISBMT4004](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-500.yaml)       | Make 1-Step Bulk Disbursement with Callback – Failure - Returned Sync                        |                  Declined                  |  Fail  |  500  |
|       [DISBMT4005](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-500.yaml)       | Make 2-Step Bulk Disbursement with Callback – Failure                        |                  Declined                  |  Fail  |  204  |
|       [DISBMT4006](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-500.yaml)       | Retrieve Bulk Disbursement (failure)                        |                  Declined                  |  Fail  |  404  |
|       [DISBMT4007](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-500.yaml)       | Retrieve Bulk Disbursement Completed (failure)                        |                  Declined                  |  Fail  |  404  |
|       [DISBMT4008](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-500.yaml)       | Retrieve Bulk Disbursement Rejected (failure)                        |                  Declined                  |  Fail  |  404  |

### Account Information <a name="accinf"></a>

|                                                                                 Test Case                                                                                 | Test Scenario                                 |                  Results                   | Status | Error |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------- | :----------------------------------------: | :----: | :---: |
|          [ACCINF100](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-transaction.yaml)           | Obtain a Merchant Account Balance – Success                        |                  Approved                  |  Pass  |   -   |
|      [ACCINF200](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-with-account-lookup.yaml)       | Retrieve Payments for a Merchant – Success|                  Approved                  |  Pass  |   -   |
|     [ACCINF300](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-with-authorizationcode.yaml)     | Retrieve Payments for a Merchant with offsets and limits – Success |                  Approved                  |  Pass  |   -   |
|       [ACCINF400](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-400.yaml)       | Obtain a Merchant Account Balance – Failure to Identify the Target Resource                         |                  Approved                  |  Pass  |  -  |
|       [ACCINF4001](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-401.yaml)       | Retrieve Payments for a Merchant –Failure - due to Format Error (invalid identifierType)                        |                  Declined                  |  Fail  |  400  |

### Transactions <a name="txn"></a>

|                                                                                 Test Case                                                                                 | Test Scenario                                 |                  Results                   | Status | Error |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------- | :----------------------------------------: | :----: | :---: |
|          [TXN100](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-transaction.yaml)           | Retrieve Transaction by reference - success                        |                  Approved                  |  Pass  |   -   |
|      [TXN4001](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-with-account-lookup.yaml)       | Retrieve Transaction by reference - failure|                  Declined                  |  Fail  |   400   |

### Refunds & Reversals <a name="r&r"></a>

|                                                                                 Test Case                                                                                 | Test Scenario                                 |                  Results                   | Status | Error |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------- | :----------------------------------------: | :----: | :---: |
|          [R&R100](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-transaction.yaml)           | Request Merchant Payment Refund                        |                  Approved                  |  Pass  |   -   |
|      [R&R200](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-with-account-lookup.yaml)       | Request Merchant Payment Reversal|                  Approved                  |  Pass  |   -   |
|          [R&R4001](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-transaction.yaml)           | Request Merchant Payment Refund (failure)                        |                  Declined                  |  Fail  |   204   |
|      [R&R4002](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-with-account-lookup.yaml)       | Request Merchant Payment Reversal (failure)|                  Declined                  |  Fail  |   204   |

### General <a name="gen"></a>

|                                                                                 Test Case                                                                                 | Test Scenario                                 |                  Results                   | Status | Error |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------- | :----------------------------------------: | :----: | :---: |
|          [GEN100](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-transaction.yaml)           | Check for service availability                        |                  Approved                  |  Pass  |   -   |
|          [GEN200](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-transaction.yaml)           | Retrieve a missing API response - success                        |                  Approved                  |  Pass  |   -   |
|      [GEN4001](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-with-account-lookup.yaml)       | Retrieve a missing API response - failure |                  Declined                  |  Fail  |   401   |
