const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() })

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
