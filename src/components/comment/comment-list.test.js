import React from 'react'
import { shallow, render, mount } from 'enzyme'
import ToggleOpen, { CommentList } from './comment-list'
import articles from '../../fixtures'

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

  it('should contain all closed comments', () => {
    const wrapper = render(
      <CommentList comments={articles[0].comments} toggleOpen={() => {}} />
    )
    expect(wrapper.find('.test__comment_body').length).toEqual(0)
  })

  it('should open comments', () => {
    const wrapper = mount(<ToggleOpen comments={articles[0].comments} />)
    if (wrapper.find('.test__comment_btn_open')) {
      wrapper
        .find('.test__comment_btn_open')
        .at(0)
        .simulate('click')

      expect(wrapper.find('.test__comment_body').length).toEqual(
        articles[0].comments.length
      )
    } else {
      wrapper
        .find('.test__comment_btn_close')
        .at(0)
        .simulate('click')

      expect(wrapper.find('.test__comment_body').length).toEqual(0)
    }
  })
})
