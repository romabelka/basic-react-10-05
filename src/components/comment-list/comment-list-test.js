import React from 'react'
import { shallow, render, mount } from 'enzyme'
import DecoratedCommentList, { PureCommentList } from './index'
import articles from '../../fixtures'

describe('CommentList', () => {
  it('should render with decorator', () => {
    const wrapper = mount(
      <DecoratedCommentList comments={articles[0].comments} />
    )
    expect(wrapper.find('.test__comment-list').length).toEqual(1)
  })

  it('should contain all closed articles', () => {
    const wrapper = mount(
      <DecoratedCommentList comments={articles[0].comments} />
    )
    expect(wrapper.find('.test__comments-body').length).toEqual(0)
  })

  it('should open comments at first article', () => {
    const wrapper = mount(
      <DecoratedCommentList comments={articles[0].comments} />
    )
    wrapper
      .find('.test__comments-btn')
      .at(0)
      .simulate('click')
    expect(wrapper.find('.test__comment-list_item').length).toEqual(
      articles[0].comments.length
    )
  })

  it('should close comments on doubleclick', () => {
    const wrapper = mount(
      <DecoratedCommentList comments={articles[0].comments} />
    )
    wrapper
      .find('.test__comments-btn')
      .at(0)
      .simulate('dblclick')
    expect(wrapper.find('.test__comments-body').length).toEqual(0)
  })

  it('should correct if not comments', () => {
    const wrapper = mount(
      <DecoratedCommentList comments={articles[6].comments} />
    )
    wrapper
      .find('.test__comments-btn')
      .at(0)
      .simulate('click')
    expect(wrapper.find('.test__comments-body').length).toEqual(0)
    expect(wrapper.find('h3').text()).toEqual('No comments yet')
  })
})
