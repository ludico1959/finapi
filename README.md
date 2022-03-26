# FinAPI V2 (real database) 🏦🏧💰

FinAPI is a simple API with the four basic CRUD operations and it is about banking operation simulation, where you can create an account, make deposits and withdrawals and see the client's statement and balance. 
The API was built during Ignit Node.JS course from Rocketseat. For more information, [click here](https://www.rocketseat.com.br/ignite). 
After some point, I updated it to use a MongoDB database and implemented the MVC (Model-View-Controller) architecture.

The Model–view–controller (MVC) is a software design pattern commonly used for developing user interfaces that divide the related program logic into three interconnected elements. This is done to separate internal representations of information from the ways information is presented to and accepted from the user.

The main goal of this project was to learn about Node.JS completing the following checklist below. 

## 📝 Checklist

For completing this project, the following requirements and business rules must be completed.

### Requirements 

- [x] It must be possible to create an account.
- [x] It must be possible to fetch the customer's bank statement.
- [x] It must be possible to make a deposit.
- [x] It must be possible to make a withdrawal.
- [ ] It must be possible to search the customer's bank statement by date.**
- [x] It must be possible to update customer account data.
- [x] It must be possible to obtain customer account data.
- [x] It must be possible to delete an account.
- [x] It must be possible to return the balance.

** This requirement was not concluded in FinAPI version 2.

### Business rules

- [x] It must not be possible to register an account with an existing CPF.
- [x] It must not be possible to fetch a statement from a non-existing account.
- [x] It must not be possible to make a deposit to a non-existing account.
- [x] It must not be possible to withdraw from a non-existing account.
- [x] It must not be possible to withdraw when the balance is insufficient.
- [x] It must not be possible to delete a non-existing account.

## 💾 Resources 

- Node.JS v14.17.6;
- Node Third Party Modules:
  - Express.Js v4.17.1,
  - uuid v8.3.2 version 4 (random)**,
  - dotenv v10.0.0,
  - mongoose v6.1.4,
  - morgan v1.10.0, 
  - Nodemon v2.0.14 (devDependencie); 
- JSON data (for sending and returning data);
- Postman v8.12.5 (for testing endpoits).

** uuid module was used in FinAPI version 1 which does not had connection to a database. Because of that, we had to generate our own id with this module.

## 🚀 Test

You can test the CRUD operations using an API test tool like Postman or Insomnia! Just import the file named is **FinAPI.postman_collection.json**.

* **Postman**: If you don't have it, just download it [here](https://www.postman.com/downloads/). 
* **Insomnia**: If you don't have it, just download it [here](https://insomnia.rest/download/).
