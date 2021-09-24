---
title: List of Mobile Money API Use Cases
sidebar_label: List of Use Cases
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Use Case (UC) code identifies the use case in relation to the others. The
code contains the acronym UC and a reference code (e.g. UC19). All use cases
currently available on the MMAPI Compliance platform and those under development
are listed below.

## UC01 - Payee/Merchant-Initiated Merchant Payment <a name="mimp"></a>

This use case describes the process in which a user (payer) purchases a service
or goods from a merchant. The transaction is initiated by the merchant (payee)
and needs to be validated by the user (payer).

:::note User Story

Didier walks into a store to purchase a modem for his home.

After giving his information to the merchant, the merchant generates a
transaction request which gets processed through the system. Didier is notified
of the request by his FSP, and approves the payment. After approval, both
parties receive a confirmation of payment from their respective FSPs.

:::

|                         Use Case Name: | Payee/Merchant-Initiated Merchant Payment                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                               Summary: | Service Provider requests a Payee-initiated merchant payment through the Mobile Money API sending both their own and customer’s details and the Mobile Money Provider handles the request and responds with an asynchronous callback. The payment request is successful and the transaction object is sent back to the service provider.                                   |
|                                Actors: | <ul><li>Service Provider</li><li>Mobile Money API Provider</li></ul>                                                                                                                                                                                                                                                                                                       |
|                         Preconditions: | <ul><li> Mobile Money Operator has GSMA Mobile Money API Implemented. </li><li> Mobile Money Operator is capable of handling async calls.</li></ul>                                                                                                                                                                                                                        |
|                           Description: | <ol><li> Payer wants to buy goods/services from a merchant. </li><li> Merchant sends a transaction request to their FSP (Payee FSP). </li><li> The Payee FSP then sends this request to the Payer FSP</li><li> Payer FSP sends a quote back to Payee FSP for confirmation </li><li> After confirmation, the transfer is sent from the Payer FSP to the Payee FSP</li></ol> |
| Exceptions<sup>[1](#exceptions)</sup>: | Business rule failure, Validation failure |                                                                                                              
The sequence diagram below shows the typical flow for an authorized transaction:

[![](https://mermaid.ink/img/eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG4gICAgcGFydGljaXBhbnQgUGF5ZXJcblxuICAgIFNlcnZpY2UgUHJvdmlkZXIgLT4-IE1NUDogUE9TVCAvdHJhbnNhY3Rpb25zL3R5cGUvbWVyY2hhbnRwYXlcbiAgICBhY3RpdmF0ZSBTZXJ2aWNlIFByb3ZpZGVyXG4gICAgYWN0aXZhdGUgTU1QXG4gICAgTU1QIC0tPj4gU2VydmljZSBQcm92aWRlcjogSFRUUCAyMDIgKFJlcXVlc3QgU3RhdGUgT2JqZWN0KVxuICAgIGRlYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuICAgIE1NUCAtPj4gUGF5ZXI6IE9idGFpbiBDdXN0b21lciBBdXRob3Jpc2F0aW9uXG4gICAgYWN0aXZhdGUgUGF5ZXJcbiAgICBQYXllciAtLT4-IE1NUDogKEF1dGhvcmlzZWQpXG4gICAgXG4gICAgTU1QIC0-PiBTZXJ2aWNlIFByb3ZpZGVyOiBQVVQge0NhbGxiYWNrIFVSTH0gKHRyYW5zYWN0aW9uIE9iamVjdClcbiAgICBhY3RpdmF0ZSBTZXJ2aWNlIFByb3ZpZGVyXG4gICAgU2VydmljZSBQcm92aWRlciAtLT4-IE1NUDogSFRUUCAyMDRcbiAgICBkZWFjdGl2YXRlIFNlcnZpY2UgUHJvdmlkZXJcbiAgICBkZWFjdGl2YXRlIE1NUFxuIiwibWVybWFpZCI6eyJzZXF1ZW5jZSI6eyJkaWFncmFtTWFyZ2luWCI6MzAsIndpZHRoIjoxODUsImhlaWdodCI6NjB9LCJ0aGVtZSI6Im5ldXRyYWwifSwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/edit/#eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG4gICAgcGFydGljaXBhbnQgUGF5ZXJcblxuICAgIFNlcnZpY2UgUHJvdmlkZXIgLT4-IE1NUDogUE9TVCAvdHJhbnNhY3Rpb25zL3R5cGUvbWVyY2hhbnRwYXlcbiAgICBhY3RpdmF0ZSBTZXJ2aWNlIFByb3ZpZGVyXG4gICAgYWN0aXZhdGUgTU1QXG4gICAgTU1QIC0tPj4gU2VydmljZSBQcm92aWRlcjogSFRUUCAyMDIgKFJlcXVlc3QgU3RhdGUgT2JqZWN0KVxuICAgIGRlYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuICAgIE1NUCAtPj4gUGF5ZXI6IE9idGFpbiBDdXN0b21lciBBdXRob3Jpc2F0aW9uXG4gICAgYWN0aXZhdGUgUGF5ZXJcbiAgICBQYXllciAtLT4-IE1NUDogKEF1dGhvcmlzZWQpXG4gICAgXG4gICAgTU1QIC0-PiBTZXJ2aWNlIFByb3ZpZGVyOiBQVVQge0NhbGxiYWNrIFVSTH0gKHRyYW5zYWN0aW9uIE9iamVjdClcbiAgICBhY3RpdmF0ZSBTZXJ2aWNlIFByb3ZpZGVyXG4gICAgU2VydmljZSBQcm92aWRlciAtLT4-IE1NUDogSFRUUCAyMDRcbiAgICBkZWFjdGl2YXRlIFNlcnZpY2UgUHJvdmlkZXJcbiAgICBkZWFjdGl2YXRlIE1NUFxuIiwibWVybWFpZCI6IntcbiAgXCJzZXF1ZW5jZVwiOiB7XG4gICAgXCJkaWFncmFtTWFyZ2luWFwiOiAzMCxcbiAgICBcIndpZHRoXCI6IDE4NSxcbiAgICBcImhlaWdodFwiOiA2MFxuICB9LFxuICBcInRoZW1lXCI6IFwibmV1dHJhbFwiXG59IiwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)                                                                                                                                                                                                              

## UC02 - Payer/Customer-Initiated Merchant Payment <a name="cimp"></a>

This use case describes the process in which a user (payer) purchases a service
or goods from a merchant. The transaction is initiated by the customer (payer).

:::note User Story

{Female Name} wants to purchase goods from a merchant. 

She first submits the payment requests via her preferred channel (e.g Mobile Money app) for processing to the Mobile Money Provider (MMP). The MMP will return the Request state object to indicate the request is pending.

The MMP then informs the Payer’s channel (Mobile Money app) that the payment has been successfully completed by returning the final representation of the transaction. The merchant is also notified that the payment was successful.

:::

|                         Use Case Name: | Payer/Customer-Initiated Merchant Payment                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                               Summary: | Service Provider requests a Payer-initiated merchant payment through the Mobile Money API sending both their own and customer’s details and the Mobile Money Provider handles the request and responds with an asynchronous callback. The payment request is successful and the transaction object is sent back to the service provider.                                   |
|                                Actors: | <ul><li>Service Provider</li><li>Mobile Money API Provider</li></ul>                                                                                                                                                                                                                                                                                                       |
|                         Preconditions: | <ul><li> Mobile Money Operator has GSMA Mobile Money API Implemented. </li><li> Mobile Money Operator is capable of handling async calls.</li></ul>                                                                                                                                                                                                                        |
|                           Description: | <ol><li> Payer wants to buy goods/services from a merchant. </li><li> Customer sends a transaction request to their FSP (Payer FSP). </li><li> The Payer FSP then sends this request to the Payee FSP</li><li> Payee FSP sends a quote back to Payer FSP for conformation </li><li> After conformation, the transfer is sent from the Payer FSP to the Payee FSP</li></ol> |
| Exceptions<sup>[1](#exceptions)</sup>: | Business rule failure, Validation failure|

The sequence diagram below shows the typical flow for an authorized transaction:

[![](https://mermaid.ink/img/eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG5cbiAgICBTZXJ2aWNlIFByb3ZpZGVyIC0-PiBNTVA6IFBPU1QgL3RyYW5zYWN0aW9ucy90eXBlL21lcmNoYW50cGF5XG4gICAgYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuICAgIGFjdGl2YXRlIE1NUFxuICAgIE1NUCAtLT4-IFNlcnZpY2UgUHJvdmlkZXI6IEhUVFAgMjAyIChSZXF1ZXN0IFN0YXRlIE9iamVjdClcbiAgICBkZWFjdGl2YXRlIFNlcnZpY2UgUHJvdmlkZXJcbiAgICBNTVAgLT4-IFNlcnZpY2UgUHJvdmlkZXI6IFBVVCB7Q2FsbGJhY2sgVVJMfSAodHJhbnNhY3Rpb24gT2JqZWN0KVxuICAgIGFjdGl2YXRlIFNlcnZpY2UgUHJvdmlkZXJcbiAgICBTZXJ2aWNlIFByb3ZpZGVyIC0tPj4gTU1QOiBIVFRQIDIwNFxuICAgIGRlYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuICAgIGRlYWN0aXZhdGUgTU1QXG4iLCJtZXJtYWlkIjp7InNlcXVlbmNlIjp7ImRpYWdyYW1NYXJnaW5YIjozMCwid2lkdGgiOjE4NSwiaGVpZ2h0Ijo2MH0sInRoZW1lIjoibmV1dHJhbCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/edit/#eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG5cbiAgICBTZXJ2aWNlIFByb3ZpZGVyIC0-PiBNTVA6IFBPU1QgL3RyYW5zYWN0aW9ucy90eXBlL21lcmNoYW50cGF5XG4gICAgYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuICAgIGFjdGl2YXRlIE1NUFxuICAgIE1NUCAtLT4-IFNlcnZpY2UgUHJvdmlkZXI6IEhUVFAgMjAyIChSZXF1ZXN0IFN0YXRlIE9iamVjdClcbiAgICBkZWFjdGl2YXRlIFNlcnZpY2UgUHJvdmlkZXJcbiAgICBNTVAgLT4-IFNlcnZpY2UgUHJvdmlkZXI6IFBVVCB7Q2FsbGJhY2sgVVJMfSAodHJhbnNhY3Rpb24gT2JqZWN0KVxuICAgIGFjdGl2YXRlIFNlcnZpY2UgUHJvdmlkZXJcbiAgICBTZXJ2aWNlIFByb3ZpZGVyIC0tPj4gTU1QOiBIVFRQIDIwNFxuICAgIGRlYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuICAgIGRlYWN0aXZhdGUgTU1QXG4iLCJtZXJtYWlkIjoie1xuICBcInNlcXVlbmNlXCI6IHtcbiAgICBcImRpYWdyYW1NYXJnaW5YXCI6IDMwLFxuICAgIFwid2lkdGhcIjogMTg1LFxuICAgIFwiaGVpZ2h0XCI6IDYwXG4gIH0sXG4gIFwidGhlbWVcIjogXCJuZXV0cmFsXCJcbn0iLCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)

## UC03 - Disbursements <a name="disbur"></a>

The Disbursement Mobile Money APIs allow organisations to disburse funds to
mobile money recipients.

<Tabs
  defaultValue="individual"
  values={[
    {label: 'Individual', value: 'individual'},
    {label: 'Bulk', value: 'bulk'},
  ]}>
  <TabItem value="individual">

:::note User Story

{Company} wants to make an individual disbursement. They simply submit the request for processing to the Mobile Money Provider, who will then return the final representation of the transaction once successfully completed.

:::

|                         Use Case Name: | Disbursements                                                                                                                                       |
| -------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
|                               Summary: | This use case simulates a scenario where the a service provider would like to disbuse funds to a single mobile money recipient         |
|                                Actors: | <ul><li>Service Provider</li><li>Mobile Money API Provider</li></ul>                                                                                |
|                         Preconditions: | <ul><li> Mobile Money Operator has GSMA Mobile Money API Implemented. </li><li> Mobile Money Operator is capable of handling async calls.</li></ul> |
|                           Description: | <ol><li>Service Provider submits disbursement request to MMP</li><li>MMP responds with final transactions object once successful</li></ol>                                                                                                                                  |
| Exceptions<sup>[1](#exceptions)</sup>: | 1-Step Async failure, 1-step Sync failure, 2-Step failure, Callback failure, Polling failure                                                                                                      |

The sequence diagram below shows the typical flow for an individual disbursement:

[![](https://mermaid.ink/img/eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNQIGFzIFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG5cbiAgICBTUCAtPj4gTU1QOiBQT1NUIC90cmFuc2FjdGlvbnMvdHlwZS9kaXNidXJzZW1lbnRcbiAgICBhY3RpdmF0ZSBTUFxuICAgIGFjdGl2YXRlIE1NUFxuICAgIE1NUCAtLT4-IFNQOiBIVFRQIDIwMiAoUmVxdWVzdCBTdGF0ZSBPYmplY3QpXG4gICAgZGVhY3RpdmF0ZSBTUFxuXG4gICAgTU1QIC0-PiBTUDogUFVUIHtDYWxsYmFjayBVUkx9ICh0cmFuc2FjdGlvbnMgT2JqZWN0KVxuICAgIGFjdGl2YXRlIFNQXG4gICAgU1AgLS0-PiBNTVA6IEhUVFAgMjA0XG4gICAgZGVhY3RpdmF0ZSBTUFxuICAgIGRlYWN0aXZhdGUgTU1QXG5cbiIsIm1lcm1haWQiOnsic2VxdWVuY2UiOnsiZGlhZ3JhbU1hcmdpblgiOjMwLCJ3aWR0aCI6MTg1LCJoZWlnaHQiOjYwfSwidGhlbWUiOiJuZXV0cmFsIn0sInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/edit/#eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNQIGFzIFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG5cbiAgICBTUCAtPj4gTU1QOiBQT1NUIC90cmFuc2FjdGlvbnMvdHlwZS9kaXNidXJzZW1lbnRcbiAgICBhY3RpdmF0ZSBTUFxuICAgIGFjdGl2YXRlIE1NUFxuICAgIE1NUCAtLT4-IFNQOiBIVFRQIDIwMiAoUmVxdWVzdCBTdGF0ZSBPYmplY3QpXG4gICAgZGVhY3RpdmF0ZSBTUFxuXG4gICAgTU1QIC0-PiBTUDogUFVUIHtDYWxsYmFjayBVUkx9ICh0cmFuc2FjdGlvbnMgT2JqZWN0KVxuICAgIGFjdGl2YXRlIFNQXG4gICAgU1AgLS0-PiBNTVA6IEhUVFAgMjA0XG4gICAgZGVhY3RpdmF0ZSBTUFxuICAgIGRlYWN0aXZhdGUgTU1QXG5cbiIsIm1lcm1haWQiOiJ7XG4gIFwic2VxdWVuY2VcIjoge1xuICAgIFwiZGlhZ3JhbU1hcmdpblhcIjogMzAsXG4gICAgXCJ3aWR0aFwiOiAxODUsXG4gICAgXCJoZWlnaHRcIjogNjBcbiAgfSxcbiAgXCJ0aGVtZVwiOiBcIm5ldXRyYWxcIlxufSIsInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)

  </TabItem>
  <TabItem value="bulk">

:::note User Story

{Company} wants to make a bulk disbursement. They simply submit the request for processing to the Mobile Money Provider, who will then return the final representation of the batch once successfully completed. 

{Company} also decides to retrieve a representation of the batch transactions, so that they can confirm the overall success of the approval request. 

{Company} may also optionally request details of all transactions in the batch that have been completed, or rejected.

:::

|                         Use Case Name: | Disbursements                                                                                                                                       |
| -------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
|                               Summary: | This use case simulates a scenario where the a service provider would like to disbuse funds to multiple mobile money recipients         |
|                                Actors: | <ul><li>Service Provider</li><li>Mobile Money API Provider</li></ul>                                                                                |
|                         Preconditions: | <ul><li> Mobile Money Operator has GSMA Mobile Money API Implemented. </li><li> Mobile Money Operator is capable of handling async calls.</li></ul> |
|                           Description: | <ol><li>Service Provider submits batch of transactions to Mobile Money Provider (MMP)</li><li>MMP will return `Request State` object to indicate that the batch is ‘pending’</li><li>MMP informs Service Provider that the request has been processed by returning the reprensentation of the batch.</li></ol>**Optional** - Retrieve Batch<ol><li>Service Provider sends retrieval request for a particular batch to Mobile Money Provider (MMP)</li><li>MMP sends back a batch transactions object that will confirm the overall success of the approval request.</li></ol>**Optional** - Retrieve Batch Rejections<ol><li>Service Provider sends retrieval request for a particular batch’s transactions that have been completed</li><li>MMP sends back a batch completions object with all completed transactions</li></ol>**Optional** - Retrieve Batch Completions<ol><li>Service Provider sends retrieval request for a particular batch’s transactions which have been rejected</li><li>MMP sends back a batch rejections object with all rejected transactions</li></ol>                                                                                                                                  |
| Exceptions<sup>[1](#exceptions)</sup>: | Retrieve Bulk failure, Retrieve Bulk Rejections failure, Retrieve Bulk Completions failure                                                                                                      |

The sequence diagram below shows the typical flow for a bulk disbursement:

[![](https://mermaid.ink/img/eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNQIGFzIFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG5cbiAgICBTUCAtPj4gTU1QOiBQT1NUIC9iYXRjaHRyYW5zYWN0aW9uc1xuICAgIGFjdGl2YXRlIFNQXG4gICAgYWN0aXZhdGUgTU1QXG4gICAgTU1QIC0tPj4gU1A6IEhUVFAgMjAyIChSZXF1ZXN0IFN0YXRlIE9iamVjdClcbiAgICBkZWFjdGl2YXRlIFNQXG5cbiAgICBNTVAgLT4-IFNQOiBQVVQge0NhbGxiYWNrIFVSTH0gKEJhdGNoIFRyYW5zYWN0aW9ucyBPYmplY3QpXG4gICAgYWN0aXZhdGUgU1BcbiAgICBTUCAtLT4-IE1NUDogSFRUUCAyMDRcbiAgICBkZWFjdGl2YXRlIFNQXG4gICAgZGVhY3RpdmF0ZSBNTVBcblxuICAgIGFsdCByZXRyaWV2ZSBiYXRjaFxuICAgIFNQIC0-PiBNTVA6IEdFVCAvYmF0Y2h0cmFuc2FjdGlvbnMve2JhdGNoSWR9XG4gICAgYWN0aXZhdGUgU1BcbiAgICBhY3RpdmF0ZSBNTVBcbiAgICBNTVAgLS0-PiBTUDogSFRUUCAyMDAgKEJhdGNoIFRyYW5zYWN0aW9ucyBPYmplY3QpXG4gICAgZGVhY3RpdmF0ZSBTUFxuICAgIGRlYWN0aXZhdGUgTU1QXG4gICAgZWxzZSByZXRyaWV2ZSBjb21wbGV0aW9uc1xuICAgIFNQIC0-PiBNTVA6IEdFVCAvYmF0Y2h0cmFuc2FjdGlvbnMve2JhdGNoSWR9L2NvbXBsZXRpb25zXG4gICAgYWN0aXZhdGUgU1BcbiAgICBhY3RpdmF0ZSBNTVBcbiAgICBNTVAgLS0-PiBTUDogSFRUUCAyMDAgKEJhdGNoIFRyYW5zYWN0aW9ucyBPYmplY3QpXG4gICAgZGVhY3RpdmF0ZSBTUFxuICAgIGRlYWN0aXZhdGUgTU1QXG4gICAgZWxzZSByZXRyaWV2ZSByZWplY3Rpb25zXG4gICAgU1AgLT4-IE1NUDogR0VUIC9iYXRjaHRyYW5zYWN0aW9ucy97YmF0Y2hJZH0vcmVqZWN0aW9uc1xuICAgIGFjdGl2YXRlIFNQXG4gICAgYWN0aXZhdGUgTU1QXG4gICAgTU1QIC0tPj4gU1A6IEhUVFAgMjAwIChCYXRjaCBUcmFuc2FjdGlvbnMgT2JqZWN0KVxuICAgIGRlYWN0aXZhdGUgU1BcbiAgICBkZWFjdGl2YXRlIE1NUFxuICAgIGVuZFxuXG4iLCJtZXJtYWlkIjp7InNlcXVlbmNlIjp7ImRpYWdyYW1NYXJnaW5YIjozMCwid2lkdGgiOjE4NSwiaGVpZ2h0Ijo2MH0sInRoZW1lIjoibmV1dHJhbCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/edit/#eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNQIGFzIFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG5cbiAgICBTUCAtPj4gTU1QOiBQT1NUIC9iYXRjaHRyYW5zYWN0aW9uc1xuICAgIGFjdGl2YXRlIFNQXG4gICAgYWN0aXZhdGUgTU1QXG4gICAgTU1QIC0tPj4gU1A6IEhUVFAgMjAyIChSZXF1ZXN0IFN0YXRlIE9iamVjdClcbiAgICBkZWFjdGl2YXRlIFNQXG5cbiAgICBNTVAgLT4-IFNQOiBQVVQge0NhbGxiYWNrIFVSTH0gKEJhdGNoIFRyYW5zYWN0aW9ucyBPYmplY3QpXG4gICAgYWN0aXZhdGUgU1BcbiAgICBTUCAtLT4-IE1NUDogSFRUUCAyMDRcbiAgICBkZWFjdGl2YXRlIFNQXG4gICAgZGVhY3RpdmF0ZSBNTVBcblxuICAgIGFsdCByZXRyaWV2ZSBiYXRjaFxuICAgIFNQIC0-PiBNTVA6IEdFVCAvYmF0Y2h0cmFuc2FjdGlvbnMve2JhdGNoSWR9XG4gICAgYWN0aXZhdGUgU1BcbiAgICBhY3RpdmF0ZSBNTVBcbiAgICBNTVAgLS0-PiBTUDogSFRUUCAyMDAgKEJhdGNoIFRyYW5zYWN0aW9ucyBPYmplY3QpXG4gICAgZGVhY3RpdmF0ZSBTUFxuICAgIGRlYWN0aXZhdGUgTU1QXG4gICAgZWxzZSByZXRyaWV2ZSBjb21wbGV0aW9uc1xuICAgIFNQIC0-PiBNTVA6IEdFVCAvYmF0Y2h0cmFuc2FjdGlvbnMve2JhdGNoSWR9L2NvbXBsZXRpb25zXG4gICAgYWN0aXZhdGUgU1BcbiAgICBhY3RpdmF0ZSBNTVBcbiAgICBNTVAgLS0-PiBTUDogSFRUUCAyMDAgKEJhdGNoIFRyYW5zYWN0aW9ucyBPYmplY3QpXG4gICAgZGVhY3RpdmF0ZSBTUFxuICAgIGRlYWN0aXZhdGUgTU1QXG4gICAgZWxzZSByZXRyaWV2ZSByZWplY3Rpb25zXG4gICAgU1AgLT4-IE1NUDogR0VUIC9iYXRjaHRyYW5zYWN0aW9ucy97YmF0Y2hJZH0vcmVqZWN0aW9uc1xuICAgIGFjdGl2YXRlIFNQXG4gICAgYWN0aXZhdGUgTU1QXG4gICAgTU1QIC0tPj4gU1A6IEhUVFAgMjAwIChCYXRjaCBUcmFuc2FjdGlvbnMgT2JqZWN0KVxuICAgIGRlYWN0aXZhdGUgU1BcbiAgICBkZWFjdGl2YXRlIE1NUFxuICAgIGVuZFxuXG4iLCJtZXJtYWlkIjoie1xuICBcInNlcXVlbmNlXCI6IHtcbiAgICBcImRpYWdyYW1NYXJnaW5YXCI6IDMwLFxuICAgIFwid2lkdGhcIjogMTg1LFxuICAgIFwiaGVpZ2h0XCI6IDYwXG4gIH0sXG4gIFwidGhlbWVcIjogXCJuZXV0cmFsXCJcbn0iLCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)

  </TabItem>
</Tabs>

## UC04 - Refunds & Reversals <a name="r&r"></a>

This use case describes the process involved when a user (payer) is requesting a
refund or reversal for a merchant payment through the Mobile Money API.

:::note User Story

{Company} wants to issue a refund/reversal to a payer. They first submit a refund/reversal request for processing to the MMP, who will then inform the merchant ({Company}) that the refund/reversal has been successfully completed along with the final representation of the refund/reversal.

:::

|                         Use Case Name: | Refunds & Reversals                                                                                                                                                                                                                                                                                  |
| -------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                               Summary: | Service Provider requests a refund/reversal for a merchant payment through the Mobile Money API and the Mobile Money Provider handles the request and responds with an asynchronous callback. The refund/reversal is successful and the refund/reversal object is sent back to the service provider. |
|                                Actors: | <ul><li>Service Provider</li><li>Mobile Money API Provider</li></ul>                                                                                                                                                                                                                                 |
|                         Preconditions: | <ul><li> Mobile Money Operator has GSMA Mobile Money API Implemented. </li><li> Mobile Money Operator is capable of handling async calls.</li></ul>                                                                                                                                                  |
|                           Description: | <ol><li>Service Provider submits a refund or reversal request to the Mobile Money Provider (MMP)</li><li>MMP returns the Request State object to indicate that the request is ‘pending’</li><li>MMP informs the Service Provider that the refund / reversal has been successfully completed by returning the final representation of the refund/reversal.</li></ol>                                                                                                                                                                                                                                                                                   |
| Exceptions<sup>[1](#exceptions)</sup>: | Reversal Validation Format Failure, Refund Validation Format Failure                                                                                                                                                                                                                                                       |

<Tabs
  defaultValue="refund"
  values={[
    {label: 'Refund', value: 'refund'},
    {label: 'Reversal', value: 'reversal'},
  ]}>
  <TabItem value="refund">

The sequence diagram below shows the typical flow for a merchant refund:

[![](https://mermaid.ink/img/eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG5cbiAgICBTZXJ2aWNlIFByb3ZpZGVyIC0-PiBNTVA6IFBPU1QgL3RyYW5zYWN0aW9ucy90eXBlL2FkanVzdG1lbnRcbiAgICBhY3RpdmF0ZSBTZXJ2aWNlIFByb3ZpZGVyXG4gICAgYWN0aXZhdGUgTU1QXG4gICAgTU1QIC0tPj4gU2VydmljZSBQcm92aWRlcjogSFRUUCAyMDIgKFJlcXVlc3QgU3RhdGUgT2JqZWN0KVxuICAgIGRlYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuXG4gICAgTU1QIC0-PiBTZXJ2aWNlIFByb3ZpZGVyOiBQVVQge0NhbGxiYWNrIFVSTH0gKFRyYW5zYWN0aW9ucyBPYmplY3QpXG4gICAgYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuICAgIFNlcnZpY2UgUHJvdmlkZXIgLS0-PiBNTVA6IEhUVFAgMjA0XG4gICAgZGVhY3RpdmF0ZSBTZXJ2aWNlIFByb3ZpZGVyXG4gICAgZGVhY3RpdmF0ZSBNTVBcbiAgICBcbiAgICBcbiIsIm1lcm1haWQiOnsic2VxdWVuY2UiOnsiZGlhZ3JhbU1hcmdpblgiOjMwLCJ3aWR0aCI6MTg1LCJoZWlnaHQiOjYwfSwidGhlbWUiOiJuZXV0cmFsIn0sInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/edit/#eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG5cbiAgICBTZXJ2aWNlIFByb3ZpZGVyIC0-PiBNTVA6IFBPU1QgL3RyYW5zYWN0aW9ucy90eXBlL2FkanVzdG1lbnRcbiAgICBhY3RpdmF0ZSBTZXJ2aWNlIFByb3ZpZGVyXG4gICAgYWN0aXZhdGUgTU1QXG4gICAgTU1QIC0tPj4gU2VydmljZSBQcm92aWRlcjogSFRUUCAyMDIgKFJlcXVlc3QgU3RhdGUgT2JqZWN0KVxuICAgIGRlYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuXG4gICAgTU1QIC0-PiBTZXJ2aWNlIFByb3ZpZGVyOiBQVVQge0NhbGxiYWNrIFVSTH0gKFRyYW5zYWN0aW9ucyBPYmplY3QpXG4gICAgYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuICAgIFNlcnZpY2UgUHJvdmlkZXIgLS0-PiBNTVA6IEhUVFAgMjA0XG4gICAgZGVhY3RpdmF0ZSBTZXJ2aWNlIFByb3ZpZGVyXG4gICAgZGVhY3RpdmF0ZSBNTVBcbiAgICBcbiAgICBcbiIsIm1lcm1haWQiOiJ7XG4gIFwic2VxdWVuY2VcIjoge1xuICAgIFwiZGlhZ3JhbU1hcmdpblhcIjogMzAsXG4gICAgXCJ3aWR0aFwiOiAxODUsXG4gICAgXCJoZWlnaHRcIjogNjBcbiAgfSxcbiAgXCJ0aGVtZVwiOiBcIm5ldXRyYWxcIlxufSIsInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)

  </TabItem>
  <TabItem value="reversal">

The sequence diagram below shows the typical flow for a merchant reversal:

[![](https://mermaid.ink/img/eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG5cbiAgICBTZXJ2aWNlIFByb3ZpZGVyIC0-PiBNTVA6IFBPU1QgL3RyYW5zYWN0aW9ucy97b3JpZ2luYWwgdHJhbnNhY3Rpb24gcmVmZXJlbmNlfS9yZXZlcnNhbHNcbiAgICBhY3RpdmF0ZSBTZXJ2aWNlIFByb3ZpZGVyXG4gICAgYWN0aXZhdGUgTU1QXG4gICAgTU1QIC0tPj4gU2VydmljZSBQcm92aWRlcjogSFRUUCAyMDIgKFJlcXVlc3QgU3RhdGUgT2JqZWN0KVxuICAgIGRlYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuXG4gICAgTU1QIC0-PiBTZXJ2aWNlIFByb3ZpZGVyOiBQVVQge0NhbGxiYWNrIFVSTH0gKFJldmVyc2FsIE9iamVjdClcbiAgICBhY3RpdmF0ZSBTZXJ2aWNlIFByb3ZpZGVyXG4gICAgU2VydmljZSBQcm92aWRlciAtLT4-IE1NUDogSFRUUCAyMDRcbiAgICBkZWFjdGl2YXRlIFNlcnZpY2UgUHJvdmlkZXJcbiAgICBkZWFjdGl2YXRlIE1NUFxuICAgIFxuIiwibWVybWFpZCI6eyJzZXF1ZW5jZSI6eyJkaWFncmFtTWFyZ2luWCI6MzAsIndpZHRoIjoxODUsImhlaWdodCI6NjB9LCJ0aGVtZSI6Im5ldXRyYWwifSwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/edit/#eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG5cbiAgICBTZXJ2aWNlIFByb3ZpZGVyIC0-PiBNTVA6IFBPU1QgL3RyYW5zYWN0aW9ucy97b3JpZ2luYWwgdHJhbnNhY3Rpb24gcmVmZXJlbmNlfS9yZXZlcnNhbHNcbiAgICBhY3RpdmF0ZSBTZXJ2aWNlIFByb3ZpZGVyXG4gICAgYWN0aXZhdGUgTU1QXG4gICAgTU1QIC0tPj4gU2VydmljZSBQcm92aWRlcjogSFRUUCAyMDIgKFJlcXVlc3QgU3RhdGUgT2JqZWN0KVxuICAgIGRlYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuXG4gICAgTU1QIC0-PiBTZXJ2aWNlIFByb3ZpZGVyOiBQVVQge0NhbGxiYWNrIFVSTH0gKFJldmVyc2FsIE9iamVjdClcbiAgICBhY3RpdmF0ZSBTZXJ2aWNlIFByb3ZpZGVyXG4gICAgU2VydmljZSBQcm92aWRlciAtLT4-IE1NUDogSFRUUCAyMDRcbiAgICBkZWFjdGl2YXRlIFNlcnZpY2UgUHJvdmlkZXJcbiAgICBkZWFjdGl2YXRlIE1NUFxuICAgIFxuIiwibWVybWFpZCI6IntcbiAgXCJzZXF1ZW5jZVwiOiB7XG4gICAgXCJkaWFncmFtTWFyZ2luWFwiOiAzMCxcbiAgICBcIndpZHRoXCI6IDE4NSxcbiAgICBcImhlaWdodFwiOiA2MFxuICB9LFxuICBcInRoZW1lXCI6IFwibmV1dHJhbFwiXG59IiwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)

  </TabItem>
</Tabs>

## UC05 - Transactions

This use case describes the process involved when a Service Provider wants to
retrieve a single transaction through the Mobile Money API.

:::note User Story

TODO

:::

|                         Use Case Name: | Transactions                                                                                                                                                                                                             |
| -------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                               Summary: | Service Provider requests their own account transaction history through the Mobile Money API and the Mobile Money Provider handles the request and successfully responds synchronously with the request transaction(s). |
|                                Actors: | <ul><li>Service Provider</li><li>Mobile Money API Provider</li></ul>                                                                                                                                                     |
|                         Preconditions: | <ul><li> Mobile Money Operator has GSMA Mobile Money API Implemented. </li><li> Mobile Money Operator is capable of handling async calls.</li></ul>                                                                      |
|                           Description: | <ol><li>Service Provider submits a request to retrieve a singular transaction using a transaction reference to the Mobile Money Provider (MMP)</li><li>MMP sends back a transaction object matching the transaction reference</li></ol>                                                                                                                                                                                                       |
| Exceptions<sup>[1](#exceptions)</sup>: | `identifierType` error                                                                                                                                                                           |

The sequence diagram below shows the typical flow for a transaction retrieval:

[![](https://mermaid.ink/img/eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG5cbiAgICBTZXJ2aWNlIFByb3ZpZGVyIC0-PiBNTVA6IEdFVCAvdHJhbnNhY3Rpb25zL3t0cmFuc2FjdGlvblJlZmVyZW5jZX1cbiAgICBhY3RpdmF0ZSBTZXJ2aWNlIFByb3ZpZGVyXG4gICAgYWN0aXZhdGUgTU1QXG4gICAgTU1QIC0tPj4gU2VydmljZSBQcm92aWRlcjogSFRUUCAyMDAgKHRyYW5zYWN0aW9ucyBPYmplY3QpXG4gICAgZGVhY3RpdmF0ZSBTZXJ2aWNlIFByb3ZpZGVyXG4gICAgZGVhY3RpdmF0ZSBNTVBcbiAgICBcbiAgICBcbiIsIm1lcm1haWQiOnsic2VxdWVuY2UiOnsiZGlhZ3JhbU1hcmdpblgiOjMwLCJ3aWR0aCI6MTg1LCJoZWlnaHQiOjYwfSwidGhlbWUiOiJuZXV0cmFsIn0sInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/edit/#eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG5cbiAgICBTZXJ2aWNlIFByb3ZpZGVyIC0-PiBNTVA6IEdFVCAvdHJhbnNhY3Rpb25zL3t0cmFuc2FjdGlvblJlZmVyZW5jZX1cbiAgICBhY3RpdmF0ZSBTZXJ2aWNlIFByb3ZpZGVyXG4gICAgYWN0aXZhdGUgTU1QXG4gICAgTU1QIC0tPj4gU2VydmljZSBQcm92aWRlcjogSFRUUCAyMDAgKHRyYW5zYWN0aW9ucyBPYmplY3QpXG4gICAgZGVhY3RpdmF0ZSBTZXJ2aWNlIFByb3ZpZGVyXG4gICAgZGVhY3RpdmF0ZSBNTVBcbiAgICBcbiAgICBcbiIsIm1lcm1haWQiOiJ7XG4gIFwic2VxdWVuY2VcIjoge1xuICAgIFwiZGlhZ3JhbU1hcmdpblhcIjogMzAsXG4gICAgXCJ3aWR0aFwiOiAxODUsXG4gICAgXCJoZWlnaHRcIjogNjBcbiAgfSxcbiAgXCJ0aGVtZVwiOiBcIm5ldXRyYWxcIlxufSIsInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)

## UC06 - Account Information

This use case describes the process involved when a Service Provider needs to
request certain account information, such as account balance or transaction
information, from a Mobile Money API provider.

<Tabs
  defaultValue="tran-hist"
  values={[
    {label: 'Transaction History', value: 'tran-hist'},
    {label: 'Account Balance', value: 'balance'},
  ]}>
  <TabItem value="tran-hist">

:::note User Story

The Service Provider wants to retrieve their own transaction history for review. They first request a maximum of 20 transactions from the Mobile Money Provider using the limit parameter, who then returns an array of 20 transactions, and indicates via a response header that there 40 records available in total. 

With this in mind the Service Provider decides to request the remaining transactions, and does so using the offset parameter in addition to the limit parameter, to retrieve the rest of the transactions.

:::

|                         Use Case Name: | Account Information                                                                                                                                                                                                                          |
| -------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                               Summary: | Service Provider requests their own transaction history through the Mobile Money API and the Mobile Money Provider handles the request and successfully responds synchronously with the requested transaction(s). |
|                                Actors: | <ul><li>Service Provider</li><li>Mobile Money API Provider</li></ul>                                                                                                                                                                         |
|                         Preconditions: | <ul><li> Mobile Money Operator has GSMA Mobile Money API Implemented. </li><li> Mobile Money Operator is capable of handling async calls.</li></ul>                                                                                          |
|                           Description: | <ol><li>Service Provider requests a number of transactions from the Mobile Money Provider (MMP)</li><li>MMP returns an array with the number of transactions requested</li></ol>                                                                                                                                                                                                                           |
| Exceptions<sup>[1](#exceptions)</sup>: | Format Error (identifierType)                                                                                                                                                                                               |
The sequence diagram below shows the typical flow for retrieving a transaction history:

[![](https://mermaid.ink/img/eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG5cbiAgICBTZXJ2aWNlIFByb3ZpZGVyIC0-PiBNTVA6IEdFVCAvYWNjb3VudHMve2lkZW50aWZpZXJUeXBlfS97aWRlbnRpZmllcn0vdHJhbnNhY3Rpb25zP29mZnNldD0wJmxpbWl0PTIwXG4gICAgYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuICAgIGFjdGl2YXRlIE1NUFxuICAgIE1NUCAtLT4-IFNlcnZpY2UgUHJvdmlkZXI6IEhUVFAgMjAwIChUcmFuc2FjdGlvbnMgQXJyYXkpIChYLVJlY29yZHMtQXZhaWxhYmxlLUNvdW50PTQwKVxuICAgIGRlYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuICAgIGRlYWN0aXZhdGUgTU1QXG5cbiAgICBTZXJ2aWNlIFByb3ZpZGVyIC0-PiBNTVA6IEdFVCAvYWNjb3VudHMve2lkZW50aWZpZXJUeXBlfS97aWRlbnRpZmllcn0vdHJhbnNhY3Rpb25zP29mZnNldD0yJmxpbWl0PTIwXG4gICAgYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuICAgIGFjdGl2YXRlIE1NUFxuICAgIE1NUCAtLT4-IFNlcnZpY2UgUHJvdmlkZXI6IEhUVFAgMjAwIChUcmFuc2FjdGlvbnMgQXJyYXkpIChYLVJlY29yZHMtQXZhaWxhYmxlLUNvdW50PTQwKVxuICAgIGRlYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuICAgIGRlYWN0aXZhdGUgTU1QXG4gICAgXG4iLCJtZXJtYWlkIjp7InNlcXVlbmNlIjp7ImRpYWdyYW1NYXJnaW5YIjozMCwid2lkdGgiOjE4NSwiaGVpZ2h0Ijo2MH0sInRoZW1lIjoibmV1dHJhbCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/edit/#eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG5cbiAgICBTZXJ2aWNlIFByb3ZpZGVyIC0-PiBNTVA6IEdFVCAvYWNjb3VudHMve2lkZW50aWZpZXJUeXBlfS97aWRlbnRpZmllcn0vdHJhbnNhY3Rpb25zP29mZnNldD0wJmxpbWl0PTIwXG4gICAgYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuICAgIGFjdGl2YXRlIE1NUFxuICAgIE1NUCAtLT4-IFNlcnZpY2UgUHJvdmlkZXI6IEhUVFAgMjAwIChUcmFuc2FjdGlvbnMgQXJyYXkpIChYLVJlY29yZHMtQXZhaWxhYmxlLUNvdW50PTQwKVxuICAgIGRlYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuICAgIGRlYWN0aXZhdGUgTU1QXG5cbiAgICBTZXJ2aWNlIFByb3ZpZGVyIC0-PiBNTVA6IEdFVCAvYWNjb3VudHMve2lkZW50aWZpZXJUeXBlfS97aWRlbnRpZmllcn0vdHJhbnNhY3Rpb25zP29mZnNldD0yJmxpbWl0PTIwXG4gICAgYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuICAgIGFjdGl2YXRlIE1NUFxuICAgIE1NUCAtLT4-IFNlcnZpY2UgUHJvdmlkZXI6IEhUVFAgMjAwIChUcmFuc2FjdGlvbnMgQXJyYXkpIChYLVJlY29yZHMtQXZhaWxhYmxlLUNvdW50PTQwKVxuICAgIGRlYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuICAgIGRlYWN0aXZhdGUgTU1QXG4gICAgXG4iLCJtZXJtYWlkIjoie1xuICBcInNlcXVlbmNlXCI6IHtcbiAgICBcImRpYWdyYW1NYXJnaW5YXCI6IDMwLFxuICAgIFwid2lkdGhcIjogMTg1LFxuICAgIFwiaGVpZ2h0XCI6IDYwXG4gIH0sXG4gIFwidGhlbWVcIjogXCJuZXV0cmFsXCJcbn0iLCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)

  </TabItem>
  <TabItem value="balance">

:::note User Story

The Service Provider wants to request their own balance. To do so they simply send a request to the Mobile Money Provider, who returns with a balance object.

:::

|                         Use Case Name: | Account Information                                                                                                                                                                                                                          |
| -------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                               Summary: | Service Provider requests their own account balance through the Mobile Money API and the Mobile Money Provider handles the request and successfully responds synchronously with the requested account's balance. |
|                                Actors: | <ul><li>Service Provider</li><li>Mobile Money API Provider</li></ul>                                                                                                                                                                         |
|                         Preconditions: | <ul><li> Mobile Money Operator has GSMA Mobile Money API Implemented. </li><li> Mobile Money Operator is capable of handling async calls.</li></ul>                                                                                          |
|                           Description: | <ol><li>Service Provider requests their own balance from the Mobile Money Provider (MMP)</li><li>MMP returns with a Balance object containing the SP's balance</li></ol>                                                                                                                                                                                                                           |
| Exceptions<sup>[1](#exceptions)</sup>: | Target Resource Failure                                                                                                                                                        |
The sequence diagram below shows the typical flow for retrieving a merchant's balance:

[![](https://mermaid.ink/img/eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG5cbiAgICBTZXJ2aWNlIFByb3ZpZGVyIC0-PiBNTVA6IEdFVCAvYWNjb3VudHMve2lkZW50aWZpZXJUeXBlfS97aWRlbnRpZmllcn0vYmFsYW5jZVxuICAgIGFjdGl2YXRlIFNlcnZpY2UgUHJvdmlkZXJcbiAgICBhY3RpdmF0ZSBNTVBcbiAgICBNTVAgLS0-PiBTZXJ2aWNlIFByb3ZpZGVyOiBIVFRQIDIwMCAoQmFsYW5jZSBPYmplY3QpXG4gICAgZGVhY3RpdmF0ZSBTZXJ2aWNlIFByb3ZpZGVyXG4gICAgZGVhY3RpdmF0ZSBNTVBcbiAgICBcbiAgICBcbiIsIm1lcm1haWQiOnsic2VxdWVuY2UiOnsiZGlhZ3JhbU1hcmdpblgiOjMwLCJ3aWR0aCI6MTg1LCJoZWlnaHQiOjYwfSwidGhlbWUiOiJuZXV0cmFsIn0sInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/edit/#eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG5cbiAgICBTZXJ2aWNlIFByb3ZpZGVyIC0-PiBNTVA6IEdFVCAvYWNjb3VudHMve2lkZW50aWZpZXJUeXBlfS97aWRlbnRpZmllcn0vYmFsYW5jZVxuICAgIGFjdGl2YXRlIFNlcnZpY2UgUHJvdmlkZXJcbiAgICBhY3RpdmF0ZSBNTVBcbiAgICBNTVAgLS0-PiBTZXJ2aWNlIFByb3ZpZGVyOiBIVFRQIDIwMCAoQmFsYW5jZSBPYmplY3QpXG4gICAgZGVhY3RpdmF0ZSBTZXJ2aWNlIFByb3ZpZGVyXG4gICAgZGVhY3RpdmF0ZSBNTVBcbiAgICBcbiAgICBcbiIsIm1lcm1haWQiOiJ7XG4gIFwic2VxdWVuY2VcIjoge1xuICAgIFwiZGlhZ3JhbU1hcmdpblhcIjogMzAsXG4gICAgXCJ3aWR0aFwiOiAxODUsXG4gICAgXCJoZWlnaHRcIjogNjBcbiAgfSxcbiAgXCJ0aGVtZVwiOiBcIm5ldXRyYWxcIlxufSIsInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)

  </TabItem>
</Tabs>

## UC07 - General

This use case describes the process involved when a Service Provider wants to make general requests, such as checking the service's availability or retrieving a missing API response.

<Tabs
  defaultValue="service-availability"
  values={[
    {label: 'Check Service Availability', value:'service-availability'},
    {label: 'Retrieve Missing API Response', value: 'retrieve-api'},
  ]}>
  <TabItem value="service-availability">

:::note User Story

A merchant wants to check whether the Mobile Money Provider is capable of receiving requests for processing. Using the Heartbeat API they request the availability of the service from the MMP, who will then return its current status (available, unavailable, or degraded).

:::

|                         Use Case Name: | General                                                                                                                                             |
| -------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
|                               Summary: | This use case simulates a scenario where the Service Provider would like to check the status of the Mobile Money Provider.         |
|                                Actors: | <ul><li>Service Provider</li><li>Mobile Money API Provider</li></ul>                                                                                |
|                         Preconditions: | <ul><li> Mobile Money Operator has GSMA Mobile Money API Implemented. </li><li> Mobile Money Operator is capable of handling async calls.</li></ul> |
|                           Description: | <ol><li>Service Provider request the availability of the service from the MMP</li><li>MMP returns its current status (available, unavailable, or degraded)</li></ol>                                                                                                                                  |
| Exceptions<sup>[1](#exceptions)</sup>: |                                                                                                       |

  The sequence diagram below shows the typical flow for checking the service's availability

[![](https://mermaid.ink/img/eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG5cbiAgICBTZXJ2aWNlIFByb3ZpZGVyIC0-PiBNTVA6IEdFVCAvaGVhcnRiZWF0XG4gICAgYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuICAgIGFjdGl2YXRlIE1NUFxuICAgIE1NUCAtLT4-IFNlcnZpY2UgUHJvdmlkZXI6IEhUVFAgMjAwIChIZWFydGJlYXQgT2JqZWN0KVxuICAgIGRlYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuICAgIGRlYWN0aXZhdGUgTU1QXG4gICAgXG4iLCJtZXJtYWlkIjp7InNlcXVlbmNlIjp7ImRpYWdyYW1NYXJnaW5YIjozMCwid2lkdGgiOjE4NSwiaGVpZ2h0Ijo2MH0sInRoZW1lIjoibmV1dHJhbCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/edit/#eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG5cbiAgICBTZXJ2aWNlIFByb3ZpZGVyIC0-PiBNTVA6IEdFVCAvaGVhcnRiZWF0XG4gICAgYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuICAgIGFjdGl2YXRlIE1NUFxuICAgIE1NUCAtLT4-IFNlcnZpY2UgUHJvdmlkZXI6IEhUVFAgMjAwIChIZWFydGJlYXQgT2JqZWN0KVxuICAgIGRlYWN0aXZhdGUgU2VydmljZSBQcm92aWRlclxuICAgIGRlYWN0aXZhdGUgTU1QXG4gICAgXG4iLCJtZXJtYWlkIjoie1xuICBcInNlcXVlbmNlXCI6IHtcbiAgICBcImRpYWdyYW1NYXJnaW5YXCI6IDMwLFxuICAgIFwid2lkdGhcIjogMTg1LFxuICAgIFwiaGVpZ2h0XCI6IDYwXG4gIH0sXG4gIFwidGhlbWVcIjogXCJuZXV0cmFsXCJcbn0iLCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)

  </TabItem>
  <TabItem value="retrieve-api">

:::note User Story

A merchant fails to receive a callback from the mobile moeny provider, so they want to get understand what happened to the missing resource. To do so the merchant uses their client correlation ID to make a request for the missing API response. The MMP returns a link to the missing resource, which the merchant can then use to optain the final representation of the missing resource.

:::

|                         Use Case Name: | General                                                                                                                                             |
| -------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
|                               Summary: | This use case simulates a scenario where the Service Provider would like to retrieve a missing API response.         |
|                                Actors: | <ul><li>Service Provider</li><li>Mobile Money API Provider</li></ul>                                                                                |
|                         Preconditions: | <ul><li> Mobile Money Operator has GSMA Mobile Money API Implemented. </li><li> Mobile Money Operator is capable of handling async calls.</li></ul> |
|                           Description: | <ol><li>Service Provider makes a request for a missing API response using their clientCorrelationId to the Mobile Money Provider (MMP)</li><li>MMP returns a Responses object containing a link to the missing resource</li><li>Service Provider uses the link to obtain a representation of the missing resource</li></ol>                                                                                                                                  |
| Exceptions<sup>[1](#exceptions)</sup>: | clientCorrelationId error                                                                                                      |


  The sequence diagram below shows the typical flow for retrieving a missing API response:

[![](https://mermaid.ink/img/eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG5cbiAgICBTZXJ2aWNlIFByb3ZpZGVyIC0-PiBNTVA6IEdFVCAvcmVzcG9uc2VzL3tjbGllbnRDb3JyZWxhdGlvbklkfVxuICAgIGFjdGl2YXRlIFNlcnZpY2UgUHJvdmlkZXJcbiAgICBhY3RpdmF0ZSBNTVBcbiAgICBNTVAgLS0-PiBTZXJ2aWNlIFByb3ZpZGVyOiBIVFRQIDIwMCAoUmVzcG9uc2VzIE9iamVjdClcbiAgICBkZWFjdGl2YXRlIFNlcnZpY2UgUHJvdmlkZXJcbiAgICBkZWFjdGl2YXRlIE1NUFxuICAgIFxuICAgIFNlcnZpY2UgUHJvdmlkZXIgLT4-IE1NUDogR0VUIC97bGlua31cbiAgICBhY3RpdmF0ZSBTZXJ2aWNlIFByb3ZpZGVyXG4gICAgYWN0aXZhdGUgTU1QXG4gICAgTU1QIC0tPj4gU2VydmljZSBQcm92aWRlcjogSFRUUCAyMDAgKFJlcXVlc3RlIE9iamVjdClcbiAgICBkZWFjdGl2YXRlIFNlcnZpY2UgUHJvdmlkZXJcbiAgICBkZWFjdGl2YXRlIE1NUFxuIiwibWVybWFpZCI6eyJzZXF1ZW5jZSI6eyJkaWFncmFtTWFyZ2luWCI6MzAsIndpZHRoIjoxODUsImhlaWdodCI6NjB9LCJ0aGVtZSI6Im5ldXRyYWwifSwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/edit/#eyJjb2RlIjoiJSV7aW5pdDogeyd0aGVtZSc6ICduZXV0cmFsJyB9IH0lJVxuXG5zZXF1ZW5jZURpYWdyYW1cblxuICAgIHBhcnRpY2lwYW50IFNlcnZpY2UgUHJvdmlkZXJcbiAgICBwYXJ0aWNpcGFudCBNTVAgYXMgTW9iaWxlIE1vbmV5IFByb3ZpZGVyXG5cbiAgICBTZXJ2aWNlIFByb3ZpZGVyIC0-PiBNTVA6IEdFVCAvcmVzcG9uc2VzL3tjbGllbnRDb3JyZWxhdGlvbklkfVxuICAgIGFjdGl2YXRlIFNlcnZpY2UgUHJvdmlkZXJcbiAgICBhY3RpdmF0ZSBNTVBcbiAgICBNTVAgLS0-PiBTZXJ2aWNlIFByb3ZpZGVyOiBIVFRQIDIwMCAoUmVzcG9uc2VzIE9iamVjdClcbiAgICBkZWFjdGl2YXRlIFNlcnZpY2UgUHJvdmlkZXJcbiAgICBkZWFjdGl2YXRlIE1NUFxuICAgIFxuICAgIFNlcnZpY2UgUHJvdmlkZXIgLT4-IE1NUDogR0VUIC97bGlua31cbiAgICBhY3RpdmF0ZSBTZXJ2aWNlIFByb3ZpZGVyXG4gICAgYWN0aXZhdGUgTU1QXG4gICAgTU1QIC0tPj4gU2VydmljZSBQcm92aWRlcjogSFRUUCAyMDAgKFJlcXVlc3RlIE9iamVjdClcbiAgICBkZWFjdGl2YXRlIFNlcnZpY2UgUHJvdmlkZXJcbiAgICBkZWFjdGl2YXRlIE1NUFxuIiwibWVybWFpZCI6IntcbiAgXCJzZXF1ZW5jZVwiOiB7XG4gICAgXCJkaWFncmFtTWFyZ2luWFwiOiAzMCxcbiAgICBcIndpZHRoXCI6IDE4NSxcbiAgICBcImhlaWdodFwiOiA2MFxuICB9LFxuICBcInRoZW1lXCI6IFwibmV1dHJhbFwiXG59IiwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)

  </TabItem>
</Tabs>

---

##### Footnotes

- <a name="exceptions">1 </a>: The exceptions listed are directly related to
  alternative paths the use case can take. Using the exceptions, it is possible
  to derive the unhappy flows covered by the appropriate test cases.
