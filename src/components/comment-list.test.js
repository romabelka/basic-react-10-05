import React from 'react'
import { shallow, mount } from 'enzyme'
import DecoratedCommentList, { CommentList } from './comment-list'
import articles from '../fixtures'

describe('CommentList', () => {
  it('should render CommentList with comments', () => {
    const wrapper = shallow(
      <CommentList
        comments={articles[0].comments}
        isOpen={true}
        toggleOpen={() => {}}
      />
    )
    expect(wrapper.find('.test__comment-item').length).toEqual(
      articles[0].comments.length
    )
    expect(wrapper.find('.test__comment-toggle-btn').length).toEqual(1)
  })

  it('should render CommentList without comments', () => {
    const wrapper = shallow(
      <CommentList comments={[]} isOpen={true} toggleOpen={() => {}} />
    )
    expect(wrapper.find('.test__comment-item').length).toEqual(0)
    expect(wrapper.find('.test__no-comment-msg').length).toEqual(1)
    expect(wrapper.find('.test__comment-toggle-btn').length).toEqual(1)
  })

  it('should open comments on click', () => {
    const wrapper = mount(
      <DecoratedCommentList comments={articles[0].comments} />
    )

    wrapper
      .find('.test__comment-toggle-btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test__comment-item').length).toEqual(
      articles[0].comments.length
    )
  })

  it('should close comments on click', (done) => {
    const wrapper = mount(
      <DecoratedCommentList comments={articles[0].comments} />
    )

    wrapper
      .find('.test__comment-toggle-btn')
      .at(0)
      // First click opens comments
      .simulate('click')
      // Second click should close comments
      .simulate('click')

    setTimeout(() => {
      wrapper.simulate('transitionEnd')

      expect(wrapper.find('.test__comment-item').length).toEqual(0)
      done()
    }, 800)
  })
})
