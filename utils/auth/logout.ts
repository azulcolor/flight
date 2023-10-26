import cookies from 'js-cookie'

const logout = () => {
  cookies.remove('token')
  localStorage.removeItem('certificates')
  window.location.href = '/'
}

export default logout
