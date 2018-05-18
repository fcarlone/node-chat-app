// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    // return user that was removed
    // var user = getUser(id);
    var user = this.users.filter((user) => user.id === id)[0];

    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user;

    // var users = this.users.filter((user) => {
    //   return user.id !== id;
    // });
    //
    // var idArray = users.map((user) => {
    //   return user.id
    // });
    // return idArray;
  }
  getUser (id) {
    return this.users.filter((user) => user.id === id)[0];
    // var users = this.users.filter((user) => {
    //   return user.id === id;
    // });
    // var idArray = users.map((user)=> {
    //   return user.id
    // });
    // return idArray;
  }
  getUserList (room) {
    // or var users = this.users.filter((user) => user.room === room);
    var users = this.users.filter((user) => {
      return user.room === room;
    })
    var namesArray = users.map((user) => {
      return user.name
    })
    return namesArray;
  }
  // get room list
  getRoomList (room) {
    // var users = this.users.filter((user) => {
    //   return user.room === room;
    // })
    var roomsArray = [];
    this.users.forEach((user) => {
      // return user.room
      if (!roomsArray.includes(user.room)) {
        roomsArray.push(user.room);
      }
    })
    return roomsArray;
  }
 };

module.exports = {Users};

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription () {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// };
//
// var me = new Person('Frank', 47);
// var description = me.getUserDescription();
// console.log(description);
