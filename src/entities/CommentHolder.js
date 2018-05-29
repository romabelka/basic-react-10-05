const TYPE_ARTICLE = Symbol('TYPE_ARTICLE')

export default class CommentHolder {
  static get TYPE_ARTICLE() {
    return TYPE_ARTICLE
  }

  constructor(id, type = CommentHolder.TYPE_ARTICLE) {
    if (typeof id !== 'string' || id.length === 0) {
      throw new TypeError('id should be a not empty string')
    }

    if (type !== CommentHolder.TYPE_ARTICLE) {
      throw new TypeError('type should be equal TYPE_ARTICLE')
    }

    this._id = id
    this._type = type
  }

  getId() {
    return this._id
  }

  getType() {
    return this._type
  }
}
