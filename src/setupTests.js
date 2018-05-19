import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import jsdom from 'jsdom'

Enzyme.configure({ adapter: new Adapter() })

//пришлось добавить код ниже, у меня почему то не работал mount в тестах, не смогла разобраться почему у вас работало на уроке
//https://github.com/airbnb/enzyme/issues/341
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView
