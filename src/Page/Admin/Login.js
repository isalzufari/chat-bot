import React from 'react'

const Login = () => {
  return (
    <main class="form-signin w-100 m-auto text-center" style={{ maxWidth: 330 }}>
      <form style={{ marginTop: 100, marginBottom: 100 }}>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>
    </main>
  )
}

export default Login