import cookies from 'js-cookie'

const logout = () => {
  cookies.remove('token')
  window.location.href = '/'
}

export default logout
