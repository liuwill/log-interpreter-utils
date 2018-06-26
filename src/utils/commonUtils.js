export function buildUrl (domainStr) {
  if (domainStr.indexOf('http') >= 0) {
    return domainStr
  }

  const protocol = window.location.href.split(':')[0]
  return `${protocol}://${domainStr}`
}
