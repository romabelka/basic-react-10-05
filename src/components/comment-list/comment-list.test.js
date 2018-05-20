import React from 'react'
import { shallow, render, mount } from 'enzyme'
import CommentList from './'
import DecoratedArticleList, { ArticleList } from '../article-list'
import articles from '../../fixtures'

describe('CommentList', () => {
  articles.forEach((article) => {
    it(`should render CommentList for article${article.id}`, () => {
      const wrapper = shallow(<CommentList comments={article.comments} />)
      expect(wrapper.find('.test__classlist').exists())
    })
  })
})

describe('ArticleList', () => {
  it('Article should open list of comments', () => {
    const wrapper = mount(<DecoratedArticleList articles={articles} />)

    wrapper.find('.test__article_btn').forEach((btn, i) => {
      btn.simulate('click')

      wrapper
        .find('.test__comments_btn')
        .at(i)
        .simulate('click')
      expect(wrapper.find('.test__comments-list_item').at(i).length).toEqual(1)
    })
  })
})
