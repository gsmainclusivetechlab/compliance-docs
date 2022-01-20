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
for the APIs under test. A reference to the business rules error codes can be found [here](https://compliance.mobilemoneyapi.io/tutorials#mobile-money-api-businessrules)

## List of Test Cases <a name="tc"></a>

### Payee-Initiated Merchant Payment <a name="pimp"></a>

|                                                                                 Test Case                                                                                 | Test Scenario                                 |                  Results                   | Status | Error |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------- | :----------------------------------------: | :----: | :---: |
|          PIMP100           | Merchant-initiated merchant payment (callback, debitParty sent)                        |                  Approved                  |  Pass  |   -   |
|      PIMP200       | Merchant-initiated merchant payment (callback, debitParty and creditParty sent)                  |  Approved  |   Pass   | -
|     PIMP300     | Merchant-initiated merchant payment (callback, auth code, debitParty sent) |                  Approved                  |  Pass  |   -   |
|       PIMP400       | Merchant-initiated merchant payment (polling)                         |                  Approved                  |  Pass  |  -  |
|       PIMP4001       | Merchant-initiated merchant payment (callback, debitParty and creditParty sent, error)                         |                  Declined                  |  Fail  |  204  |
|       PIMP4002       | Merchant-initiated merchant payment (callback, auth code, debitParty sent, business error)                         |                  Declined                  |  Fail  |  204  |
|       PIMP4003       | Merchant-initiated merchant payment (callback, auth code, debitParty sent, format error)                         |                  Declined                  |  Fail  |  204  |
|       PIMP4004       | Merchant-initiated merchant payment (polling, error)                         |                  Declined                  |  Fail  |  404  |

### Customer-Initiated Merchant Payment <a name="cimp"></a>

|                                                                                 Test Case                                                                                 | Test Scenario                                 |                  Results                   | Status | Error |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------- | :----------------------------------------: | :----: | :---: |
|          CIMP100           | Customer-initiated merchant payment (callback, creditParty sent)                         |                  Approved                  |  Pass  |   -   |
|      CIMP200       | Customer-initiated merchant payment (callback, debitParty and creditParty sent)|                  Approved                  |  Pass  |   -   |
|     CIMP300     | Customer-initiated merchant payment (auth code) |                  Approved                  |  Pass  |   -   |
|       CIMP400       | Customer-initiated merchant payment (polling, debitParty and creditParty sent)                         |                  Approved                  |  Pass  |  -  |
|       CIMP4001       | Customer-initiated merchant payment (callback, debitParty and creditParty sent, error)                         |                  Declined                  |  Fail  |  204  |
|       CIMP4002       | Customer-initiated merchant payment (auth code, error)                         |                  Declined                  |  Fail  |  204  |
|       CIMP4003       | Customer-initiated merchant payment (polling, debitParty and creditParty sent, error)                         |                  Declined                  |  Fail  |  404  |

### Disbursements <a name="disbmt"></a>

|                                                                                 Test Case                                                                                 | Test Scenario                                 |                  Results                   | Status | Error |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------- | :----------------------------------------: | :----: | :---: |
|          DISBMT100           | Make Individual Disbursement with Callback – Success                        |                  Approved                  |  Pass  |   -   |
|      DISBMT200       | Make Individual Disbursement with Polling – Success|                  Approved                  |  Pass  |   -   |
|     DISBMT300     | Make 1-Step Bulk Disbursement with Callback – Success |                  Approved                  |  Pass  |   -   |
|       DISBMT400       | Make 2-Step Bulk Disbursement with Callback – Success                         |                  Approved                  |  Pass  |  -  |
|       DISBMT500       | Retrieve Bulk Disbursements by Service Provider                        |                  Declined                  |  Fail  |  204  |
|       DISBMT600       | Retrieve Bulk Disbursements Completed by Service Provider                     |                  Declined                  |  Fail  |  204  |
|       DISBMT700       | Retrieve Bulk Disbursement Rejected - Success                        |                  Declined                  |  Fail  |  404  |
|       DISBMT4001       | Make Individual Disbursement with Callback – Failure          |                  Declined                  |  Fail  |  204  |
|       DISBMT4002       | Make Individual Disbursement with Polling – Failure                        |                  Declined                  |  Fail  |  404  |
|       DISBMT4003      | Make 1-Step Bulk Disbursement with Callback – Failure - Returned Async                        |                  Declined                  |  Fail  |  204  |
|       DISBMT4004       | Make 1-Step Bulk Disbursement with Callback – Failure - Returned Sync                        |                  Declined                  |  Fail  |  500  |
|       DISBMT4005       | Make 2-Step Bulk Disbursement with Callback – Failure                        |                  Declined                  |  Fail  |  204  |
|       DISBMT4006       | Retrieve Bulk Disbursement (failure)                        |                  Declined                  |  Fail  |  404  |
|       DISBMT4007       | Retrieve Bulk Disbursement Completed (failure)                        |                  Declined                  |  Fail  |  404  |
|       DISBMT4008       | Retrieve Bulk Disbursement Rejected (failure)                        |                  Declined                  |  Fail  |  404  |

### Account Information <a name="accinf"></a>

|                                                                                 Test Case                                                                                 | Test Scenario                                 |                  Results                   | Status | Error |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------- | :----------------------------------------: | :----: | :---: |
|          ACCINF100           | Obtain a Merchant Account Balance – Success                        |                  Approved                  |  Pass  |   -   |
|      ACCINF200       | Retrieve Payments for a Merchant – Success|                  Approved                  |  Pass  |   -   |
|     ACCINF300     | Retrieve Payments for a Merchant with offsets and limits – Success |                  Approved                  |  Pass  |   -   |
|       ACCINF400       | Obtain a Merchant Account Balance – Failure to Identify the Target Resource                         |                  Approved                  |  Pass  |  -  |
|       ACCINF4001       | Retrieve Payments for a Merchant –Failure - due to Format Error (invalid identifierType)                        |                  Declined                  |  Fail  |  400  |

### Transactions <a name="txn"></a>

|                                                                                 Test Case                                                                                 | Test Scenario                                 |                  Results                   | Status | Error |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------- | :----------------------------------------: | :----: | :---: |
|          TXN100           | Retrieve Transaction by reference - success                        |                  Approved                  |  Pass  |   -   |
|      TXN4001       | Retrieve Transaction by reference - failure|                  Declined                  |  Fail  |   400   |

### Refunds & Reversals <a name="r&r"></a>

|                                                                                 Test Case                                                                                 | Test Scenario                                 |                  Results                   | Status | Error |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------- | :----------------------------------------: | :----: | :---: |
|          R&R100           | Request Merchant Payment Refund                        |                  Approved                  |  Pass  |   -   |
|      R&R200       | Request Merchant Payment Reversal|                  Approved                  |  Pass  |   -   |
|          R&R4001           | Request Merchant Payment Refund (failure)                        |                  Declined                  |  Fail  |   204   |
|      R&R4002       | Request Merchant Payment Reversal (failure)|                  Declined                  |  Fail  |   204   |

### General <a name="gen"></a>

|                                                                                 Test Case                                                                                 | Test Scenario                                 |                  Results                   | Status | Error |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------- | :----------------------------------------: | :----: | :---: |
|          GEN100           | Check for service availability                        |                  Approved                  |  Pass  |   -   |
|          GEN200           | Retrieve a missing API response - success                        |                  Approved                  |  Pass  |   -   |
|      GEN4001       | Retrieve a missing API response - failure |                  Declined                  |  Fail  |   401   |
