// Following command when run in ~/mongo/bin will start up server
// ./mongod --dbpath ~/mongo-data

//destructure object in ES6
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  //look for duplicates deleteMany()
  //delete one by id

  // db.collection('Users').deleteMany({name: 'John'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('59593828b35466261aabee84')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  //db.close();
});
