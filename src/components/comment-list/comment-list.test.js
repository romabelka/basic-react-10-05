import React from 'react'
import { render, mount } from 'enzyme'
import CommentList from './comment-list'
import articles from '../../fixtures'

const comments = articles[0].comments

describe('CommentList', () => {
  it('open button should contain correct text if isOpen is false', () => {
    const wrapper = render(<CommentList />)

    expect(wrapper.find('.toggle-comment-button').text()).toEqual(
      'show comments'
    )
  })

  it('should show correct button text if isOpen true', () => {
    const wrapper = mount(<CommentList comments={comments} />)

    wrapper.find('.toggle-comment-button').simulate('click')

    expect(wrapper.find('.toggle-comment-button').text()).toEqual(
      'hide comments'
    )
  })

  it('should show correct text if comments is empty and was open', () => {
    const wrapper = mount(<CommentList />)

    wrapper.find('.toggle-comment-button').simulate('click')

    expect(wrapper.find('.no-comments-title').text()).toEqual('No comments yet')
  })

  it('should have no comment list', () => {
    const wrapper = mount(<CommentList />)

    wrapper.find('.toggle-comment-button').simulate('click')

    expect(wrapper.find('.comment-list')).toHaveLength(0)
  })

  it('should have no comment list', () => {
    const wrapper = mount(<CommentList comments={comments} />)

    wrapper.find('.toggle-comment-button').simulate('click')

    expect(wrapper.find('.comment-list_item')).toHaveLength(comments.length)
  })
})
