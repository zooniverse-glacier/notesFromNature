Field = require './field'

class MultiField extends Field
  className: 'field multi'
  template: require '../../../views/transcription/interfaces/birds/fields/multi'

  constructor: (opts) ->
    throw new Error('Must provide sub fields for MultiField') unless opts.field.sub_fields
    super

    opField = @opField
    @el.find('input, select').each (i) ->
      $(@).focus ->
        $(@).removeClass 'focus-text'
        if $(@).val() is opField.sub_fields[i].helper_text
          $(@).val ''

      $(@).blur ->
        if $(@).val() is ''
          $(@).addClass 'focus-text'
          $(@).val opField.sub_fields[i].helper_text

  getValue: =>
    data = []
    opField = @opField

    @el.find('input, select').each (i) ->
      if $(@).val() is opField.sub_fields[i].helper_text
        data.push ''
      else
        data.push $(@).val()
    return data

  setValue: =>
    data = @data
    opField = @opField

    @el.find('input, select').each (i) ->
      if data?.data?.value?[i]?
        $(@).val data.data.value[i]
      else
        $(@).val opField.sub_fields[i].helper_text
        $(@).addClass 'focus-text'

module.exports = MultiField
