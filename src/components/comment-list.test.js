import React from 'react'
import { shallow, render, mount } from 'enzyme'
import Comment from '../comment'
import CommentList from '../comments/comment-list'
import articles from '../../fixtures'

describe('CommentList', () => {
  it('should render closed comment-list', () => {
    const wrapper = render(
      <CommentList
        comments={articles[0].comments}
        isOpen={false}
        toggleOpen={() => {}}
      />
    )
    expect(wrapper.find('.test__comment-list_item').length).toEqual(0)
  })

  it('should toggle back and forth with click', () => {
    const wrapper = mount(
      <CommentList comments={articles[0].comments} toggleOpen={() => {}} />
    )

    wrapper
      .find('.test__toggle_comment-list_btn')
      .at(0)
      .simulate('click')
    expect(wrapper.find('.test__comment-list_item').length).toEqual(
      articles[0].comments.length
    )

    wrapper
      .find('.test__toggle_comment-list_btn')
      .at(0)
      .simulate('click')
    expect(wrapper.find('.test__comment-list_item').length).toEqual(0)
  })
})
