# FinAPI 🏦🏧💰

FinAPI is a simple API with the four basic CRUD operations and it is about banking operation simulation. 
The API was built during Ignit Node.JS course from Rocketseat. For more information, click [here](https://www.rocketseat.com.br/ignite).   

## 📝 Checklist

For completing this project, the following requirements and business rules must be completed.

### Requirements 

- [x] It must be possible to create an account.
- [x] It must be possible to fetch the customer's bank statement.
- [x] It must be possible to make a deposit.
- [x] It must be possible to make a withdrawal.
- [x] It must be possible to search the customer's bank statement by date.
- [x] It must be possible to update customer account data.
- [x] It must be possible to obtain customer account data.
- [x] It must be possible to delete an account.
- [x] It must be possible to return the balance.

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
  - uuid v8.3.2 version 4 (random),
  - Nodemon v2.0.14 (devDependencie); 
- JSON data (for sending and returning data);
- Postman v8.12.5 (for testing endpoits).

## 📮 Testing endpoints

You can test the CRUD operation using an API test toll like Postman or Insomnia! Just import the file named is **postman_collection.json**.

* **Postman**: If you don't have it, just download it [here](https://www.postman.com/downloads/). 
* **Insomnia**: If you don't have it, just download it [here](https://insomnia.rest/download/).
