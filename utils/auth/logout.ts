import cookies from 'js-cookie'

const logout = (lang: string) => {
  cookies.remove('token')
  localStorage.removeItem('certificates')
  window.location.href = `/${lang}`
}

export default logout
