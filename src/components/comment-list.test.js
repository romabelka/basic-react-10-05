import React from 'react'
import { shallow, render, mount } from 'enzyme'
import DecoratedCommentList, { CommentList } from './comment-list'
import articles from '../fixtures'

describe('CommentList', () => {
  it('should render CommentList', () => {
    const wrapper = shallow(
      <CommentList
        comments={articles[0].comments}
        isOpen={true}
        toggleOpen={() => {}}
      />
    )
    expect(wrapper.find('.test__comment-list_item').length).toEqual(
      articles[0].comments.length
    )
  })
  it('should render H3 if there are no comments', () => {
    const wrapper = shallow(
      <CommentList comments={[]} isOpen={true} toggleOpen={() => {}} />
    )
    expect(wrapper.find('.test__comment-list_no-item').length).toEqual(1)
  })
  it('should render closed comments', () => {
    const wrapper = render(
      <CommentList
        comments={articles[0].comments}
        isOpen={false}
        toggleOpen={() => {}}
      />
    )
    expect(wrapper.find('.test__comment-list_item').length).toEqual(0)
  })

  it('should open comments', () => {
    const wrapper = mount(
      <DecoratedCommentList comments={articles[0].comments} />
    )

    wrapper
      .find('.test__comment_btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test__comment-list_body').length).toEqual(1)
  })
})
