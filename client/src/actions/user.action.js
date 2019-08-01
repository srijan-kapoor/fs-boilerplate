// const uri = 'http://localhost:8000'

const actions = {
  createUser: (data) => dispatch => {
    fetch(`/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(user => console.log(user, 'in create user'))
  },

  loginUser: (data) => dispatch => {
    fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(user => console.log(user, 'in login'))
  }
}

export default actions;