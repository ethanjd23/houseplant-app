
async function basiclogin (email, password) {
  const response = await trefle.post(loginEndpoint, {
    auth: {
      username: email,
      password: password
    },
    body: {  }
  })
}
async function basiclogin (email, password) {
  const response = await trefle.post()
  const { token } = response.body
  
  localStorage.setItem('token', token)
}

async function isLoggedIn () {
  const token = store.get('token')
  if (!token) return false
}

async function autoRedirect () {
  const validLogin = await isLoggedIn()
  if (!validLogin && location.pathname !== '/login/') redirect('/login')
  if (validLogin && location.pathname === '/login/') redirect('/')
}

async function isLoggedIn () {
  
  const response = await trefle.post(loginEndpoint, {
    auth: token,
    body: { course: 'Create Account' }
  })
}

async function isLoggedIn () {
  
  const { token } = response.body
  localStorage.setItem('token', token)

  return true
}

function basiclogin (email, password) {
  const response = await trefle.post()
  const { token, user } = response.body
  
  localStorage.setItem('user', user)
}

function isLoggedIn () {
  
  const { token, user } = response.body
  localStorage.setItem('user', user)
}

function logout () {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}