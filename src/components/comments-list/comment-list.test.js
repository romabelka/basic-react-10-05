import React from 'react'
import { shallow, render, mount } from 'enzyme'
import DecoratedCommentList, { CommentList } from './comment-list'
import articles from '../../fixtures'

describe('CommentList', () => {
  articles.forEach((article) => {
    it('should render CommentList', () => {
      const wrapper = shallow(
        <CommentList comments={article.comments} toggleOpen={() => {}} />
      )

      expect(wrapper.find('.test__comment-list_item').length).toEqual(
        article.comments.length
      )
    })

    it('should contain all closed comments', () => {
      const wrapper = render(
        <CommentList comments={article.comments} toggleOpen={() => {}} />
      )
      expect(wrapper.find('.test__comment-list_item').length).toEqual(0)
    })

    it('should open/close comments', () => {
      const wrapper = mount(
        <CommentList comments={article.comments} toggleOpen={() => {}} />
      )

      wrapper
        .find('.test__comment_btn')
        .at(0)
        .simulate('click')

      expect(wrapper.find('.test__comment-list_item').length).toEqual(1)
    })
  })
})
