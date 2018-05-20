import React from 'react'
import { shallow, render, mount } from 'enzyme'
import DecoratedCommentList, { CommentList } from './index'
import articles from '../../fixtures'

describe('CommentList', () => {
  it('should render CommentList', () => {
    const wrapper = shallow(
      <CommentList
        comments={articles[0].comments}
        toggleOpen={() => {}}
        isOpen={true}
      />
    )
    expect(wrapper.find('.test__comment-list_item').length).toEqual(
      articles[0].comments.length
    )
  })

  it('should closed CommentList', () => {
    const wrapper = render(
      <CommentList comments={articles[0].comments} toggleOpen={() => {}} />
    )
    expect(wrapper.find('.test__comment-list_body').length).toEqual(0)
  })

  /*  следующие два теста почему-то пропускаются, в консоле - 2 skipped.
        может быть я что-то упускаю по невнимательности. вроде по логике это 
        не отличается от теста открытия статьи в ArticleList, но тем не менее там этот
        тест не пропускается. 
    */
  it('should open CommentList'),
    () => {
      const wrapper = mount(
        <DecoratedCommentList comments={articles[0].comments} />
      )
      wrapper.find('.test__comment-list_btn').simulate('click')

      expect(wrapper.find('.test__comment-list_body').length).toEqual(1)
    }

  it('should close CommentList'),
    () => {
      const wrapper = mount(
        <DecoratedCommentList comments={articles[0].comments} />
      )
      wrapper.find('.test__comment-list_btn').simulate('doubleclick')

      expect(wrapper.find('.test__comment-list_body').length).toEqual(0)
    }
})
