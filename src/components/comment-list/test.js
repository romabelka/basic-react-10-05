import React from 'react'
import { shallow, render, mount } from 'enzyme'
import DecoratedCommentList, { CommentList } from '../comment-list'
import articles from '../../fixtures'

describe('CommentList', () => {
  articles.forEach((article) => {
    it('should render CommentList', () => {
      const wrapper = shallow(
        <CommentList comments={article.comments} isOpen toggleOpen={() => {}} />
      )

      expect(wrapper.find('.test__comment-list_item').length).toEqual(
        article.comments ? article.comments.length : 0
      )
    })

    it('should render closed CommentList', () => {
      const wrapper = shallow(
        <CommentList
          comments={article.comments}
          isOpen={false}
          toggleOpen={() => {}}
        />
      )

      expect(wrapper.find('.test__comment-list_item').length).toEqual(0)
    })

    it('should open comment-list', () => {
      if (!article.comments) return

      const wrapper = mount(
        <DecoratedCommentList
          comments={article.comments}
          isOpen
          toggleOpen={() => {}}
        />
      )

      wrapper
        .find('.test__comment-list_btn')
        .at(0)
        .simulate('click')

      expect(wrapper.find('.test__comment-list_body').length).toEqual(1)
    })
  })

  it('should render no-comment header', () => {
    const wrapper = shallow(<CommentList isOpen toggleOpen={() => {}} />)

    expect(wrapper.find('.test__comment-list_no-comments').length).toEqual(1)
  })
})
