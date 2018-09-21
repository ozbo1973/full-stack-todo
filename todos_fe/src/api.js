import axios from "axios";

const APIURL = "/api/todos";

export async function getTodos() {
  return axios
    .get(APIURL)
    .then(res => res.data)
    .catch(err => catchError(err));
}

export async function createTodo(val) {
  const newTodo = { name: val };
  return axios.post(APIURL, newTodo).catch(err => catchError(err));
}

export async function deleteTodo(_id, name) {
  axios.delete(`${APIURL}/${_id}`).catch(err => catchError(err));
}

export async function updateTodo(todo) {
  return axios
    .put(`${APIURL}/${todo._id}`, { completed: !todo.completed })
    .catch(err => catchError(err));
}

function catchError(err) {
  if (err.response) {
    console.log(
      `status error: ${err.response.status} data:${err.response.data}`
    );
  } else if (err.request) {
    console.log(`request error: ${err.request}`);
  } else {
    console.log("Error", err.message);
  }
}
