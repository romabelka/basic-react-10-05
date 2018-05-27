import React from 'react'
import { shallow, render, mount } from 'enzyme'
import accordion from '../decorators/accordion'
import { ArticleList } from './article-list'
import articles from '../fixtures'

jest.mock('./article', () => ({ isOpen, toggleOpen, article: { id } }) => {
  return (
    <div className="test__article-list_item">
      <div className="test__article_btn" onClick={() => toggleOpen(id)} />
      {isOpen ? <div className="test__article_body" /> : null}
    </div>
  )
})

const DecoratedArticleList = accordion(ArticleList)

describe('ArticleList', () => {
  it('should render ArticleList', () => {
    const wrapper = shallow(
      <ArticleList articles={articles} toggleOpenItem={() => {}} />
    )
    expect(wrapper.find('.test__article-list_item').length).toEqual(
      articles.length
    )
  })

  it('should contain all closed items', () => {
    const wrapper = render(
      <ArticleList articles={articles} toggleOpenItem={() => {}} />
    )
    expect(wrapper.find('.test__article_body').length).toEqual(0)
  })

  it('should open first article', () => {
    const wrapper = mount(<DecoratedArticleList articles={articles} />)

    wrapper
      .find('.test__article_btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test__article_body').length).toEqual(1)
  })

  it('should request data fetching', (done) => {
    render(
      <ArticleList
        articles={[]}
        toggleOpenItem={() => {}}
        fetchData={() => done()}
      />
    )
  })

  it('should close an article', () => {
    const wrapper = mount(<DecoratedArticleList articles={articles} />)
    expect(wrapper.find('.test__article_body').length).toEqual(0)

    wrapper
      .find('.test__article_btn')
      .at(0)
      .simulate('click')
    expect(wrapper.find('.test__article_body').length).toEqual(1)

    wrapper
      .find('.test__article_btn')
      .at(0)
      .simulate('click')
    expect(wrapper.find('.test__article_body').length).toEqual(0)
  })
})
