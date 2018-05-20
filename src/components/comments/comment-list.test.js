import React from 'react'
import { shallow, render, mount } from 'enzyme'
import ToggleOpenComments, { CommentList } from '../comments/comment-list.js'

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

describe('CommentList', () => {
  const hideCommentsText = 'hide comments'
  const showCommentsText = 'show comments'

  const comments = [
    {
      id: 'kjfviudfv089w74',
      user: 'Joyce Weber',
      text:
        'Non qui Lorem qui commodo sint in esse non aliqua pariatur mollit veniam. Elit labore ad nisi anim adipisicing tempor velit commodo adipisicing ipsum ut. Nostrud cillum aliquip adipisicing id do occaecat est eiusmod adipisicing duis. Magna dolore et non nisi in non cillum officia elit non esse proident irure aute. Proident mollit amet enim dolore eiusmod dolor qui. Eiusmod reprehenderit cillum sit deserunt nostrud enim duis excepteur. Excepteur pariatur sunt in ipsum id minim est mollit.'
    },
    {
      id: 'r23uyrghasdfb7',
      user: 'Joyce Weber',
      text:
        'Non qui Lorem qui commodo sint in esse non aliqua pariatur mollit veniam. Elit labore ad nisi anim adipisicing tempor velit commodo adipisicing ipsum ut. Nostrud cillum aliquip adipisicing id do occaecat est eiusmod adipisicing duis. Magna dolore et non nisi in non cillum officia elit non esse proident irure aute. Proident mollit amet enim dolore eiusmod dolor qui. Eiusmod reprehenderit cillum sit deserunt nostrud enim duis excepteur. Excepteur pariatur sunt in ipsum id minim est mollit.'
    }
  ]

  it('should render CommentList', () => {
    const wrapper = shallow(
      <CommentList comments={comments} isOpen toggleOpen={() => {}} />
    )
    expect(wrapper.find('.test__comment-list_item').length).toEqual(
      comments.length
    )
  })

  it('should be closed', () => {
    const wrapper = render(
      <CommentList comments={comments} toggleOpen={() => {}} />
    )
    expect(wrapper.find('.test__comment-list_item').length).toEqual(0)
    expect(wrapper.find('.test__comment-button').text()).toEqual(
      showCommentsText
    )
  })

  it('should be open', () => {
    const wrapper = render(
      <CommentList comments={comments} isOpen toggleOpen={() => {}} />
    )
    expect(wrapper.find('.test__comment-list_item').length).toEqual(
      comments.length
    )
    expect(wrapper.find('.test__comment-button').text()).toEqual(
      hideCommentsText
    )
  })

  it('should be without error if comment list undefined', () => {
    const wrapper = render(<CommentList isOpen toggleOpen={() => {}} />)
    expect(wrapper.find('.test__comment-list_item').length).toEqual(0)
  })

  it('should be opened when click show', () => {
    const wrapper = mount(<ToggleOpenComments comments={comments} />)

    wrapper
      .find('.test__comment-button')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test__comment-list_item').length).toEqual(
      comments.length
    )
    expect(wrapper.find('.test__comment-button').text()).toEqual(
      hideCommentsText
    )
  })

  it('should be closed when click hide', async (done) => {
    const wrapper = mount(<ToggleOpenComments comments={comments} />)

    wrapper
      .find('.test__comment-button')
      .at(0)
      .simulate('click') //открываем коменты

    await sleep(1000)

    expect(wrapper.find('.test__comment-button').text()).toEqual(
      hideCommentsText
    )
    expect(wrapper.find('.test__comment-list_item').length).toEqual(2)

    wrapper
      .find('.test__comment-button')
      .at(0)
      .simulate('click') //скрываем

    await sleep(1000)

    wrapper.simulate('transitionEnd')

    expect(wrapper.find('.test__comment-button').text()).toEqual(
      showCommentsText
    )
    expect(wrapper.find('.test__comment-list_item').length).toEqual(0)

    done()
  })
})
