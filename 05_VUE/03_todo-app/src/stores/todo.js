import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

const BASE_URL = '/api';

export const useTodoStore = defineStore('todo', () => {
  const todoArr = ref([]);
  const isFetching = ref(false);
  const isError = ref(false);

  const resetCondition = () => {
    isFetching.value = true;
    isError.value = false;
  };

  const fetchTodoList = async () => {
    try {
      resetCondition();

      const fetchTodoListUrl = BASE_URL + '/todos';
      const fetchTodoListRes = await axios.get(fetchTodoListUrl);

      todoArr.value = fetchTodoListRes.data;

      isFetching.value = false;
      return fetchTodoListRes.data;
    } catch (error) {
      isError.value = true;
      console.error(error);
    }
  };

  const addTodo = async (newTodo) => {
    try {
      resetCondition();

      const addTodoUrl = BASE_URL + '/todos';
      const addTodoRes = await axios.post(addTodoUrl, newTodo);

      isFetching.value = false;
      return addTodoRes.data;
    } catch (error) {
      isError.value(true);
      console.error(error);
    }
  };

  const fetchTodo = async (id) => {
    try {
      resetCondition();

      const fetchTodoUrl = BASE_URL + `/todos/${id}`;
      const fetchTodoRes = await axios.get(fetchTodoUrl);

      isFetching.value = false;
      return fetchTodoRes.data;
    } catch (error) {
      isError.value = true;
      console.error(error);
    }
  };

  const editTodo = async (editTodo) => {
    try {
      resetCondition();

      const editTodoUrl = BASE_URL + `/todos/${editTodo.id}`;
      const editTodoRes = await axios.patch(editTodoUrl, editTodo);

      isFetching.value = false;
      return editTodoRes.data;
    } catch (error) {
      isError.value = true;
      console.error(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      resetCondition();

      const deleteTodoUrl = BASE_URL + `/todos/${id}`;
      const deleteTodoRes = await axios.delete(deleteTodoUrl);

      isFetching.value = false;
      return deleteTodoRes.data;
    } catch (error) {
      isError.value = true;
      console.error(error);
    }
  };
  return {
    todoArr,
    isFetching,
    isError,
    fetchTodoList,
    fetchTodo,
    addTodo,
    editTodo,
    deleteTodo,
  };
});
