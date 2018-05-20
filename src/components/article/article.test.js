import React from 'react'
import { mount } from 'enzyme'
import Article from './article'

describe('Article', () => {
  const article = {
    id: '56c782f18990ecf954f6e027',
    date: '2016-06-09T15:03:23.000Z',
    title: 'Commodo qui incididunt',
    text:
      'Commodo qui incididunt ex ut ea nulla et eu aliquip duis. Aute deserunt excepteur ullamco fugiat sunt aliquip exercitation do sint incididunt. Amet consectetur sint irure reprehenderit fugiat amet mollit. In commodo mollit ullamco cillum pariatur eiusmod cillum aute mollit. Culpa non sint eiusmod ad dolor velit dolore voluptate do adipisicing. Cupidatat sint est magna officia qui magna eu elit qui excepteur fugiat duis ex labore.\n\nAliquip veniam ad reprehenderit mollit exercitation id enim ut exercitation. Esse irure ipsum minim laborum reprehenderit irure ut. Tempor excepteur nisi nulla nostrud amet id cillum. Sint velit sint officia aliqua sint quis deserunt.\n\nAliquip dolor cillum deserunt enim nulla dolor amet irure cupidatat commodo laboris id aliqua. Labore aliqua adipisicing Lorem id adipisicing. Ad cupidatat et do anim ex commodo elit magna ad consequat. Nostrud sit eu laborum ut consequat fugiat aute culpa. Lorem tempor quis sunt ad consequat excepteur est. Enim voluptate cillum Lorem ex fugiat ea qui. Irure aute magna dolore eiusmod minim non ad anim dolore sint et.',
    comments: [
      {
        id: 'qwerqwer',
        user: 'Gilliam Underwood',
        text:
          'Velit anim deserunt elit velit est fugiat duis eiusmod eu do incididunt ut tempor voluptate. Officia dolor aliqua id anim mollit pariatur id commodo. Laborum minim non ut aliquip commodo est consectetur. Mollit eu aliqua tempor est nulla ullamco irure. Sit non amet et eiusmod cillum ex cillum anim incididunt ad laboris mollit. Sunt quis incididunt elit ea qui non ullamco aliquip consequat voluptate eiusmod est. Irure laboris amet culpa sit aliquip.'
      },
      {
        id: 'lkjhsdlfkg',
        user: 'Dolly Franklin',
        text:
          'Aliquip id nostrud adipisicing irure. Labore reprehenderit ea ex officia ullamco incididunt consequat elit amet quis commodo. Fugiat amet veniam cillum ut aliquip velit est esse minim fugiat eiusmod sint. Commodo ea in culpa deserunt.'
      },
      {
        id: 'zxcvzcxvzxcv',
        user: 'Brennan Atkins',
        text:
          'Nisi sit nisi cillum dolor fugiat sint do nostrud ex cillum cupidatat. Culpa do duis non et excepteur labore dolor culpa qui tempor veniam. Ex labore deserunt qui sit aute ad incididunt do cupidatat eiusmod reprehenderit ad. Qui laborum qui voluptate velit et consectetur ipsum enim dolore minim. Est sint velit tempor reprehenderit. Qui consectetur ad minim consequat.'
      },
      {
        id: 'fghjfghjfghj',
        user: 'Jodi Humphrey',
        text:
          'Non amet amet ut magna culpa dolore consequat occaecat. Commodo adipisicing laboris voluptate enim mollit mollit anim aliquip deserunt nostrud deserunt cillum est. Ad eu cupidatat dolor nostrud et minim id in dolor occaecat ad magna elit. Laboris elit laboris aliquip Lorem reprehenderit id amet reprehenderit laborum minim incididunt cupidatat eiusmod.'
      },
      {
        id: 'ertyoertywte',
        user: 'Joyce Weber',
        text:
          'Non qui Lorem qui commodo sint in esse non aliqua pariatur mollit veniam. Elit labore ad nisi anim adipisicing tempor velit commodo adipisicing ipsum ut. Nostrud cillum aliquip adipisicing id do occaecat est eiusmod adipisicing duis. Magna dolore et non nisi in non cillum officia elit non esse proident irure aute. Proident mollit amet enim dolore eiusmod dolor qui. Eiusmod reprehenderit cillum sit deserunt nostrud enim duis excepteur. Excepteur pariatur sunt in ipsum id minim est mollit.'
      }
    ]
  }

  it('should be called toggleOpen', (done) => {
    const wrapper = mount(
      <Article
        article={article}
        isOpen
        toggleOpen={(id) => {
          expect(id).toEqual(article.id)
          done()
        }}
      />
    )

    wrapper
      .find('.test__article_btn')
      .at(0)
      .simulate('click')
  })
})
