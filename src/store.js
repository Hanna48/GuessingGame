import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        todos: [],
        newTodo: "",
        todoKey: 0,
        isShowUnfinish: true,
        isShowComplete: true,
    },
    getters: {
        todos: state => state.todos.filter((todo) => { return !todo.iscompleted }),
        completed: state => state.todos.filter((todo) => { return todo.iscompleted }),
    },
    mutations: {
        GET_TODO(state, todo) {
            state.newTodo = todo;
        },
        ADD_TODO(state) {
            state.todos.push({
                id: state.todoKey + 1,
                body: state.newTodo,
                iscompleted: false,
            })
            state.todoKey++;
        },
        CLEAR_TODO(state) {
            state.newTodo = ""
        },
        COMPLETE_TODO(state, todo) {
            state.todos.forEach(x => {
                if (x.id == todo.id) {
                    x.iscompleted = true;
                }
            })
        },
        EDIT_TODO(state, todo) {
            var todos = state.todos
            todos.splice(todos.indexOf(todo), 1)
            state.todos = todos
            state.newTodo = todo.body
        },
        DELETE_TODO(state, todo) {
            var todos = state.todos
            todos.splice(todos.indexOf(todo), 1)
        },
        SHOW_COMPLETE(state) {
            state.isShowComplete = !state.isShowComplete;
        },
        SHOW_UNFINISH(state) {
            state.isShowUnfinish = !state.isShowUnfinish;
        },
        SHOW_ALL(state) {
            state.isShowUnfinish = true;
            state.isShowComplete = true;
        }
    },
    actions: {
        GetTodo({ commit }, todo) {
            commit('GET_TODO', todo)
        },
        AddTodo({ commit }) {
            commit("ADD_TODO");
        },
        ClearTodo({ commit }) {
            commit('CLEAR_TODO')
        },
        CompleteTodo({ commit }, todo) {
            commit('COMPLETE_TODO', todo)
        },
        EditTodo({ commit }, todo) {
            commit('EDIT_TODO', todo)
        },
        DeleteTodo({ commit }, todo) {
            commit('DELETE_TODO', todo);
        },
        ShowComplete({ commit }) {
            commit('SHOW_COMPLETE');
        },
        ShowUnfinish({ commit }) {
            commit('SHOW_UNFINISH');
        },
        ShowAll({ commit }) {
            commit('SHOW_ALL');
        }
    },
})