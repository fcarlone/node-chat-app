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
    var user = this.users.filter((user) => user.id === id)[0];
    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }
    return user;
  }
  getUser (id) {
    return this.users.filter((user) => user.id === id)[0];
  }
  // get user list
  getUserList (room) {
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
    var roomsArray = [];
    this.users.forEach((user) => {
      if (!roomsArray.includes(user.room)) {
        roomsArray.push(user.room);
      }
    })
    return roomsArray;
  }
 };

module.exports = {Users};
