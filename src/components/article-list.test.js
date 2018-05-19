import React from 'react'
import { shallow, render, mount } from 'enzyme'
import DecoratedArticleList, { ArticleList } from './article-list'
import Article from './article'
import articles from '../fixtures'

describe('ArticleList', () => {
  it('should render ArticleList', () => {
    const wrapper = shallow(
      <ArticleList articles={articles} toggleOpenItem={() => {}} />
    )
    expect(wrapper.find('.test__article-list_item').length).toEqual(
      articles.length
    )
  })

  it('should contain all closed articles', () => {
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

  it('should close first article', (done) => {
    const wrapper = mount(
      <Article article={articles[0]} isOpen={true} toggleOpen={() => {}} />
    )

    expect(wrapper.find('.test__article_body').length).toEqual(1)

    wrapper
      .find('.test__article_btn')
      .at(0)
      .simulate('click')

    setTimeout(() => {
      done()
      expect(wrapper.find('.test__article_body').length).toEqual(0)
    }, 0)
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
})
