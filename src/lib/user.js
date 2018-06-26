export function isUserLogin() {
  return expireHandle()
}

export function getUserData() {
  if (!isUserLogin()) {
    return null
  }
  const userEmail = window.localStorage.email
  const hostDomain = window.localStorage.domain
  const loginExpire = window.localStorage.expire

  return {
    userEmail, hostDomain, loginExpire
  }
}

export function expireHandle() {
  const nowTime = (new Date()).getTime()
  if (window.localStorage.domain && (nowTime - window.localStorage.expire) / 1000 < 86400) {
    return true
  } else {
    window.localStorage.removeItem('domain')
    window.localStorage.removeItem('expire')
    window.localStorage.removeItem('email')
  }

  return false
}

export function saveUserData(loginData) {
  const hostDomain = loginData.domain
  const userEmail = loginData.mail
  const loginExpire = (new Date()).getTime()

  window.localStorage.domain = hostDomain
  window.localStorage.email = userEmail
  window.localStorage.expire = loginExpire

  return {
    userEmail, hostDomain, loginExpire
  }
}
