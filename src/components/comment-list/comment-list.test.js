import React from 'react'
import { render, mount } from 'enzyme'
import DecoratedCommentList, { CommentList } from './index'
import articles from '../../fixtures'

describe('CommentList', () => {
  it('should render empty CommentList', () => {
    const wrapper = render(
      <DecoratedCommentList comments={articles[0].comments} />
    )

    expect(wrapper.find('.test__comment-list').length).toEqual(0)
    expect(wrapper.find('.test__comment-list_button').length).toEqual(1)
  })

  it('should open comment-list on click', () => {
    const wrapper = mount(
      <DecoratedCommentList comments={articles[0].comments} />
    )

    wrapper
      .find('.test__comment-list_button')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test__comment-list_item').length).toEqual(
      articles[0].comments.length
    )
  })

  it('should close comment-list on dblclick', () => {
    const wrapper = mount(
      <DecoratedCommentList comments={articles[0].comments} />
    )

    wrapper
      .find('.test__comment-list_button')
      .at(0)
      .simulate('dblclick')

    expect(wrapper.find('.test__comment-list_item').length).toEqual(0)
  })
})
