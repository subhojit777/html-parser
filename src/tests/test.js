import { assert, expect } from 'chai'
import * as helper from '../helper'

describe('Test Helper module', () => {
  describe('Tests getReactAttributes()', () => {
    it('should convert style attribute to object', () => {
      let attribute = {
        type: 'text',
        style: 'border: "2px solid #CCCCCC"; color: #FF0000'
      }

      let reactAttribute = helper.convertToReactAttributes(attribute)

      assert.notTypeOf(reactAttribute.type, 'object')
      assert.typeOf(reactAttribute.type, 'string')

      assert.typeOf(reactAttribute.style, 'object')
      assert.equal(reactAttribute.style.border, '"2px solid #CCCCCC"')
      assert.equal(reactAttribute.style.color, '#FF0000')
    })

    it('should make style properties React compatible', () => {
      let attribute = {
        style: 'border: "2px solid #CCCCCC"; background-color: #FF0000'
      }

      let reactAttribute = helper.convertToReactAttributes(attribute)

      assert.isUndefined(reactAttribute.style['background-color'])
      assert.equal(reactAttribute.style.border, '"2px solid #CCCCCC"')
      assert.equal(reactAttribute.style.backgroundColor, '#FF0000')
    })
  })

  describe('Tests convertToReactStyle()', () => {
    it('mapping should work', () => {
      let style = helper.convertToReactStyle('background-color')

      assert.equal(style, 'backgroundColor')
    })
  })

  describe('Tests parseHtml()', () => {
    it('should always return an object', () => {
      let domHandler = helper.parseHtml('<div></div>\n<input type="text" />some<br />')

      assert.typeOf(domHandler, 'object')
    })
  })

  describe('Tests filterEmptyElements()', () => {
    it('should filter out empty text elements', () => {
      let domHandler = helper.parseHtml('<div></div>\n<input type="text" />some<br />')
      let filteredElements = helper.filterEmptyElements(domHandler.dom)

      assert.lengthOf(domHandler.dom, 5)
      assert.lengthOf(filteredElements, 4)
    })
  })
})
