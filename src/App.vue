<script>
import { mapState } from 'pinia';
import { pushScopeId } from 'vue';
import SingleTodo from './components/SingleTodo.vue';
import { useTodoStore } from './stores/TodoStore';


export default{
    data() {
        return {};
    },
    computed: {
        ...mapState(useTodoStore, {
          todos:'todos', 
          completeTodos:'completeTodos',
          pendingTodo:'pendingTodo'
        })
    },
    methods: {
      addTask(){
        useTodoStore().addTask({
          id: (this.todos.length)+1,
          title: 'Todo-'+((this.todos.length)+1),
          completed: false
        })
      }

    },
    components: { SingleTodo }
}

</script>


<template>
  <div class="bg-gray-300 pb-20">
    <div class="shadow p-2 text-center">
      <button @click="addTask" class="font-semibold text-xs px-3 py-2 rounded bg-green-500 text-white">Add Task</button>
    </div>
    <div class="container mx-auto ">
      <h2 class="p-5 font-bold text-center">Todo</h2>
      <table class="table-auto border-collapse w-full text-center border border-white rounded-lg">
        <thead>
        <tr>
          <th class="py-2">Serial No</th>
          <th class="py-2">Task</th>
          <th class="py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <SingleTodo v-for="todo in todos" :key="todo.id" :todo="todo"/>
      </tbody>
      </table>

      <br>
      <h2 class="p-5 font-bold text-center">Todo</h2>
      <table class="table-auto border-collapse w-full text-center border border-white rounded-lg">
        <thead>
        <tr>
          <th class="py-2">Serial No</th>
          <th class="py-2">Task</th>
          <th class="py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <SingleTodo v-for="todo in completeTodos" :key="todo.id" :todo="todo"/>
      </tbody>
      </table>
    </div>
  </div>
 
</template>

<style scoped>

</style>
