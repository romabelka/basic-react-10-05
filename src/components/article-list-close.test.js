import React from 'react'
import { shallow, render, mount } from 'enzyme'
import DecoratedArticleList, { ArticleList } from './article-list'
import articles from '../fixtures'

describe('ArticleList', () => {
  it('should close first article', () => {
    const wrapper = mount(<DecoratedArticleList articles={articles} />)

    wrapper
      .find('.test__article_btn')
      .at(0)
      .simulate('click')

    if (wrapper.find('.test__article_body').length === 1) {
      console.log('ok')
      wrapper
        .find('.test__article_btn')
        .at(0)
        .simulate('click')

      setTimeout(
        () => expect(wrapper.find('.test__article_body').length).toEqual(0),
        600
      )
    } else {
      throw new Error('Test failed')
    }
  })
})
