import React from 'react'
import { shallow, render, mount } from 'enzyme'
import { CommentList } from './index.js'
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
})
