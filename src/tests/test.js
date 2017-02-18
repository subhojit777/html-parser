import { assert, expect } from 'chai'
import * as helper from '../helper'

describe('Test Helper module', () => {
  describe('Tests getReactAttributes()', () => {
    it('should convert style attribute to object', () => {
      let attribute = {
        type: 'text',
        style: 'border: "2px solid #CCCCCC"; color: #FF0000'
      }

      let reactAttribute = helper.getReactAttributes(attribute)

      assert.notTypeOf(reactAttribute.type, 'object')
      assert.typeOf(reactAttribute.type, 'string')

      assert.typeOf(reactAttribute.style, 'object')
      assert.equal(reactAttribute.style.border, '"2px solid #CCCCCC"')
      assert.equal(reactAttribute.style.color, '#FF0000')
    })
  })
})
