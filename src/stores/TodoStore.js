import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore', {
  
  //state (as like as data in vue)

  state:()=>({
    todos:[
      {id:1, title: 'Todo-1', completed: false},
      {id:2, title: 'Todo-2', completed: false},
      {id:3, title: 'Todo-3', completed: false},
      {id:4, title: 'Todo-4', completed: false},
      {id:5, title: 'Todo-5', completed: false}
    ]
  }),

  //actions (as like as methods)

  actions:{
    addTask(todo){
      this.todos.push(todo)
    },
    deleteTodo(id){
      this.todos = this.todos.filter((todo)=>todo.id!==id)
    },

    completeTask(id){
      this.todos = this.todos.map(todo=>{
        if(todo.id==id){
          todo.completed = !todo.completed;
        }
        return todo
      })
      // this.todos=this.todos.filter((todo)=>todo.id!==id);
    }



  },


  // getters (as like as computed)

  getters:{
    allTodos: (state)=>state.todos,
    completeTodos: (state)=>state.todos.filter(todo=>todo.completed),
    pendingTodo:(state)=>state.todos.filter(todo=>!todo.completed)
  }
  
})
