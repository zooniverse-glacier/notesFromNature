Field = require './field'

class InputField extends Field
  className: 'field input'
  template: require '../../../views/transcription/interfaces/birds/fields/input'

  elements:
    '#field': 'field'

  getValue: =>
    @field.val()

  setValue: =>
    if @data?.data?.value?
      @field.val @data.data.value

  preRenderHook: =>
    fieldClass = []

    switch @opField.size
      when 'large'
        fieldClass.push 'large'
      when 'medium'
        fieldClass.push 'medium'
      when 'small'
        fieldClass.push 'small'
      else
        fieldClass.push 'medium'

    @opField.class = fieldClass.join(' ')

module.exports = InputField
