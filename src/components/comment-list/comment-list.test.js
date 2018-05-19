import React from 'react'
import { shallow, render, mount } from 'enzyme'
import DecoratedCommentList, { PureCommentList } from './index'
import articles from '../../fixtures'

describe('CommentList', () => {
  it('should render', () => {
    const wrapper = shallow(
      <PureCommentList comments={articles[0].comments} toggleOpen={() => {}} />
    )
    expect(wrapper.find('.test__comment-list').length).toEqual(1)
  })

  it('should render with decorator', () => {
    const wrapper = mount(
      <DecoratedCommentList comments={articles[0].comments} />
    )
    expect(wrapper.find('.test__comment-list').length).toEqual(1)
  })

  it('should be closed at default', () => {
    const wrapper = mount(
      <DecoratedCommentList comments={articles[0].comments} />
    )
    expect(wrapper.find('.test__comments').length).toEqual(0)
  })

  it('should open all comments', () => {
    const wrapper = mount(
      <DecoratedCommentList comments={articles[0].comments} />
    )

    wrapper
      .find('.test__comments-btn')
      .at(0)
      .simulate('click')
    expect(wrapper.find('.test__comments li').length).toEqual(
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
    expect(wrapper.find('.test__comments').length).toEqual(0)
  })
})
