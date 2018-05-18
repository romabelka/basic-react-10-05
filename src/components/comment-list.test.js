import React from 'react'
import { mount } from 'enzyme'
import CommentList from './comment-list'
import articles from './../fixtures'

describe('CommentList', () => {
  it('should open and render comment', () => {
    const wrapper = mount(<CommentList comments={articles[0].comments} />)

    wrapper
      .find('.test__comment-list-btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test__CommentList-body_item').length).toBe(
      articles[0].comments.length
    )
  })

  it('no comments yet', () => {
    const wrapper = mount(<CommentList comments={articles[6].comments} />)

    wrapper
      .find('.test__comment-list-btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test__comment-list-empty').length).toBe(1)
  })

  it('it closed?', () => {
    const wrapper = mount(<CommentList comments={articles[0].comments} />)

    wrapper
      .find('.test__comment-list-btn')
      .at(0)
      .simulate('click')
    wrapper
      .find('.test__comment-list-btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test__CommentList-body_item').length).toBe(0)
  })
})
