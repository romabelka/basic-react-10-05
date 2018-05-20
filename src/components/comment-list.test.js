import React from 'react'
import { shallow, render, mount } from 'enzyme'
import DecoratedCommentList, { CommentList } from './comment-list'
import articles from '../fixtures'
import Comment from './comment'


describe('<CommentList />', () => {
 it('should render CommentList for the first article', () => {
    const wrapper = shallow(
      <DecoratedCommentList  comments={articles[0].comments} />
    )
    expect(wrapper.find('.test__comment-list_item').length).toEqual(
    articles[0].comments.length
    )
  })

  it('should contain all closed comments', () => {
    const wrapper = render(
      <DecoratedCommentList  comments={articles[0].comments}  />
    )
    expect(wrapper.find('.test__comment-list_item').length).toEqual(0)
  })

  it('should open first article comments', () => {
     const wrapper = mount(<DecoratedCommentList  comments={articles[0].comments} />)

     wrapper
       .find('.test__button')
       .at(0)
       .simulate('click')

     expect(wrapper.find('.test__comment-list_item').length).toEqual(articles[0].comments.length)
   })

  it('should close first article comments on button click', () => {
    const wrapper = mount(<DecoratedCommentList  comments={articles[0].comments} />)

    wrapper
      .find('.test__button')
      .simulate('dblclick')

    expect(wrapper.find('.test__comment-list_item').length).toEqual(0)
  })

})
