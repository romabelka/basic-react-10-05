export default () => {
  function random() {
    return pad(3, Math.round(0.5 + Math.random() * 999))
  }
  function pad(length, number) {
    const string = number.toString()
    return string.length >= length
      ? string
      : new Array(length - string.length + 1).join('0') + number
  }

  return `${Date.now()}${random()}`
}
