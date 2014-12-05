GBIF_API_ROOT = 'http://api.gbif.org/v0.9'

# To keep this file independent
formatNumber = (n) ->
    return n unless n
    n.toString().replace /(\d)(?=(\d{3})+(?!\d))/g, '$1,'

class SpeciesChecker
  attachPoint: null
  possibleResults: ['exact', 'fuzzy', 'none']

  constructor: (params) ->
    @[key] = value for key, value of params

    @el = document.createElement 'div'
    @el.innerHTML = """
      <div class="species feedback"></div>
      <div class="records feedback"></div>
    """
    @el.classList.add 'species-checker'

    @speciesEl = @el.querySelector '.species'
    @recordsEl = @el.querySelector '.records'

    @attachPoint.appendChild @el

    $(window).on 'check-species', @runSpeciesCheck

  runSpeciesCheck: (e, {species}) =>
    @reset()

    $.getJSON "#{GBIF_API_ROOT}/species/match?name=#{species}", (response) =>
      switch response.matchType
        when 'EXACT'
          @speciesEl.classList.add 'exact'
          @speciesEl.innerHTML = '&#x2713'
          @runRecordsCheck response.scientificName
        when 'FUZZY'
          @speciesEl.classList.add 'fuzzy'
          @speciesEl.innerHTML = '&#8776'
          @runRecordsCheck response.scientificName
        when 'NONE'
          @speciesEl.classList.add 'none'
        else
          console?.log 'other match', response.matchType

  runRecordsCheck: (scientificName) =>
    $.getJSON "#{GBIF_API_ROOT}/occurrence/search?scientificName=#{encodeURIComponent scientificName}", (response) =>
      count = response.count || 0

      if count is 0 then $(window).trigger 'unrecorded-species', {species: scientificName}
      recordsFeedbackDiv = @el.querySelector '.feedback.records'
      recordsFeedbackDiv.innerHTML = formatNumber count

  reset: =>
    @speciesEl.classList.remove possibleResult for possibleResult in @possibleResults
    @speciesEl.innerHTML = ''
    @recordsEl.innerHTML = ''

module.exports = SpeciesChecker
