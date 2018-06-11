export function fetchData(endpoint) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(`/api/${endpoint}`)
        .then((res) => {
          if (res.status >= 400) throw new Error(res.statusText)
          return res.json()
        })
        .then(resolve)
        .catch(reject)
    }, 1000)
  })
}
