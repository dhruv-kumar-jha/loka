# Loka
#### Easily make your data accessible throughout the application without declaring them globally.

General features:

 * **set**: set your variable
 * **get**: get the variable that you've already set
 * **update**: update an existing variable
 * **delete**: delete an existing variable
 * **store**: access the entire store


### Use Case

Lot of times we have to make certain data available throughout the the application, These could be config variables, data we received from the middlewares/database/thirdparty, etc.

Specially in express, If you're doing token based authentication or if your app is multi tenant, You will need access to the user and tenant information throughout the application, And the only way to do it is either by passing the `req` param to all the methods or using `globals` which is not recommended, or using a helper module which stores and manages the data.

**This is that helper module** (unless you're already using one or have created one, in that case you dont need it.)
Its simple, readable and gets the job done.


### Installation

Let's get started by installing the library,
Do `npm install loka --save`


And then require/import in your project like

```javascript
import 'Loka' from 'loka';
// or
const Loka = require('loka');
```


#### Adding a key to Loka store, `Loka.set()`

```javascript
Loka.set('name', 'John Doe');
Loka.set('user', {
	name: 'Johnny Bravo',
    email: 'johnny.bravo@gmail.com',
    gender: 'male',
    verified: true,
});
```


#### Accessing a key from Loka store, `Loka.get()`

```javascript
const name = Loka.get('name');
console.log(`name: ${name}`); // this will output `name: John Doe`

const user = Loka.get('user');
console.log(user);
// this will output
// {
//     name: 'Johnny Bravo',
//     email: 'johnny.bravo@gmail.com',
//     gender: 'male',
//     verified: true,
// }
```


#### Updating a key in Loka store, `Loka.update()`

```javascript
Loka.update('name', 'John Doe');
// this will update the key of name `name` in the store and set its value to `John Doe`

const new_name = Loka.update('name', 'Hello World');
console.log(new_name); // this will output the updated value of key `name`, that is `Hello World`

// You can very easily update an object and add new properties, update existing properties of it.
// following our `user` example from adding variables section above, we can do

const updated = Loka.update('user', {
	name: 'Matt Murdock',
	alias: 'Daredevil',
    phone: '111-2222-3333',
});
// this will add and update the properties of the `user` object.

console.log('updated',updated);
// this will output
// updated {
//     name: 'Matt Murdock',
//     email: 'johnny.bravo@gmail.com',
//     gender: 'male',
//     verified: true,
//     alias: 'Daredevil',
//     phone: '111-2222-3333',
// }
```


#### Deleting a key in Loka store, `Loka.delete()`

```javascript
Loka.delete('name');
// this will delete the key of name `name` in the store.

let user_name = Loka.get('name');
console.log(user_name) // this will output `undefined`

// if an object, you can delete one of its properties instead of the entire object by providing a path
const delete_email = Loka.delete('user', 'email');
console.log(delete_email);
// this will output
// {
//     name: 'Matt Murdock',
//     gender: 'male',
//     verified: true,
//     alias: 'Daredevil',
//     phone: '111-2222-3333',
// }

// or you can just do 

const deleted = Loka.delete('user'); // this will delete key `user` from store along with all of its properties
console.log(deleted);
// this will output `undefined`
```



#### Accessing the entire store, `Loka.store()`
```javascript
const store = Loka.store();
// this will return the entire store object.

console.log(store);
// this will output `{}` because the store is empty.
```

