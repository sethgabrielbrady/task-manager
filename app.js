
var app = new Vue({
  el: '#app',
  data: {
    tasks: [
      { id: 1, name: 'Todo 1', description: 'This is a todo', completed: false },
      { id: 2, name: 'Todo 2', description: 'This is another todo', completed: false },
      { id: 3, name: 'Todo 3', description: 'This is yet another todo', completed: false },
      { id: 4, name: 'Todo 4', description: 'This is also a todo', completed: false }
    ],
    message: "Hello World!!!"
  }
});
