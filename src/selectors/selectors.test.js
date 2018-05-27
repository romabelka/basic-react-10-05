import { selectedFilteredArticles } from './selectors'
import articles from '../reducer/articles'
import moment from 'moment'

const initialState = {
  articles: {
    items: [
      {
        id: '56c782f18990ecf954f6e027',
        date: '2016-06-09T15:03:23.000Z',
        title: 'Commodo qui incididunt'
      },
      {
        id: '56c782f17b4e0ba78c7ad717',
        date: '2016-04-09T18:03:23.000Z',
        title: 'Quis occaecat'
      },
      {
        id: '56c782f1978fdf9a0100df52',
        date: '2016-06-02T11:03:23.000Z',
        title: 'Hello my new world'
      },
      {
        id: '56c782f1e17f4f9311dfaa2c',
        date: '2016-05-19T23:03:23.000Z',
        title: 'Voluptate est officia'
      },
      {
        id: '56c782f197fe2bad471b3740',
        date: '2016-06-04T15:03:23.000Z',
        title: 'Ex sunt sunt aliqua'
      }
    ],
    filter: {
      selected: [],
      from: null,
      to: null
    }
  }
}

describe('filteredArticles', () => {
  it('should be not filtered', () => {
    const filteredArticles = selectedFilteredArticles(initialState)

    expect(filteredArticles).toEqual(initialState.articles.items)
  })

  it('should be filtered by ids', () => {
    const filteredArticles = selectedFilteredArticles({
      articles: {
        ...initialState.articles,
        filter: {
          ...initialState.filter,
          selected: [
            { value: '56c782f1978fdf9a0100df52' },
            { value: '56c782f197fe2bad471b3740' }
          ]
        }
      }
    })

    expect(filteredArticles).toEqual([
      {
        id: '56c782f1978fdf9a0100df52',
        date: '2016-06-02T11:03:23.000Z',
        title: 'Hello my new world'
      },
      {
        id: '56c782f197fe2bad471b3740',
        date: '2016-06-04T15:03:23.000Z',
        title: 'Ex sunt sunt aliqua'
      }
    ])
  })

  it('should be filtered by date from', () => {
    const filteredArticles = selectedFilteredArticles({
      articles: {
        ...initialState.articles,
        filter: {
          ...initialState.filter,
          from: moment('2016-04-10T18:03:23.000Z').toDate()
        }
      }
    })

    expect(filteredArticles).toEqual([
      {
        id: '56c782f18990ecf954f6e027',
        date: '2016-06-09T15:03:23.000Z',
        title: 'Commodo qui incididunt'
      },
      {
        id: '56c782f1978fdf9a0100df52',
        date: '2016-06-02T11:03:23.000Z',
        title: 'Hello my new world'
      },
      {
        id: '56c782f1e17f4f9311dfaa2c',
        date: '2016-05-19T23:03:23.000Z',
        title: 'Voluptate est officia'
      },
      {
        id: '56c782f197fe2bad471b3740',
        date: '2016-06-04T15:03:23.000Z',
        title: 'Ex sunt sunt aliqua'
      }
    ])
  })

  it('should be filtered by date to', () => {
    const filteredArticles = selectedFilteredArticles({
      articles: {
        ...initialState.articles,
        filter: {
          ...initialState.filter,
          from: moment('2015-02-01T15:03:23.000Z').toDate(),
          to: moment('2016-06-01T15:03:23.000Z').toDate()
        }
      }
    })

    expect(filteredArticles).toEqual([
      {
        id: '56c782f17b4e0ba78c7ad717',
        date: '2016-04-09T18:03:23.000Z',
        title: 'Quis occaecat'
      },
      {
        id: '56c782f1e17f4f9311dfaa2c',
        date: '2016-05-19T23:03:23.000Z',
        title: 'Voluptate est officia'
      }
    ])
  })

  it('should be filtered by period', () => {
    const filteredArticles = selectedFilteredArticles({
      articles: {
        ...initialState.articles,
        filter: {
          ...initialState.filter,
          from: moment('2016-05-19T15:03:23.000Z').toDate(),
          to: moment('2016-06-04T15:03:23.000Z').toDate()
        }
      }
    })

    expect(filteredArticles).toEqual([
      {
        id: '56c782f1978fdf9a0100df52',
        date: '2016-06-02T11:03:23.000Z',
        title: 'Hello my new world'
      },
      {
        id: '56c782f1e17f4f9311dfaa2c',
        date: '2016-05-19T23:03:23.000Z',
        title: 'Voluptate est officia'
      },
      {
        id: '56c782f197fe2bad471b3740',
        date: '2016-06-04T15:03:23.000Z',
        title: 'Ex sunt sunt aliqua'
      }
    ])
  })
})
