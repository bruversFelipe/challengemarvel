function sessionGet(key) {
  return JSON.parse(sessionStorage.getItem(key));
}

function sessionSet(key, object) {
  return sessionStorage.setItem(key, JSON.stringify(object));
}

export { sessionGet, sessionSet };
