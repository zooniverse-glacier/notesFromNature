module.exports = [
    name: 'Seed'
    url: 'badges/seed.png'
    description: 'You earn this badge for transcribing a SERNEC record'
    awardText: 'You earned this badge for transcribing a SERNEC record'
    condition: 
      func: (details) ->
        if details.user.project.groups?[details.archive.id]?
          return details.user.project.groups[details.archive.id].classification_count > 0
        else
          return false
    collection: 'herbarium'
  ,
    name: 'Seedling'
    url: 'badges/seedling.png'
    description: 'You earn this badge for transcribing 10 SERNEC records'
    awardText: 'You earned this badge for transcribing 10 SERNEC records'
    condition:
      func: (details) ->
        if details.user.project.groups?[details.archive.id]?
          return details.user.project.groups[details.archive.id].classification_count > 10
        else
          return false
    collection: 'herbarium'
  ,
    name: 'Sprout'
    url: 'badges/sapling.png'
    description: 'You earn this badge for transcribing 25 SERNEC records'
    awardText: 'You earned this badge for transcribing 25 SERNEC records'
    condition:
      func: (details) ->
        if details.user.project.groups?[details.archive.id]?
          return details.user.project.groups[details.archive.id].classification_count > 25
        else
          return false
    collection: 'herbarium'
  ,
    name: 'Tree'
    url: 'badges/tree.png'
    description: 'You earn this badge for transcribing 75 SERNEC records'
    awardText: 'You earned this badge for transcribing 75 SERNEC records'
    condition:
      func: (details) ->
        if details.user.project.groups?[details.archive.id]?
          return details.user.project.groups[details.archive.id].classification_count > 75
        else
          return false
    collection: 'herbarium'
  ,
    name: 'Oak'
    url: 'badges/oak.png'
    description: 'You earn this badge for transcribing 250 SERNEC records'
    awardText: 'You earned this badge for transcribing 250 SERNEC records'
    condition:
      func: (details) ->
        if details.user.project.groups?[details.archive.id]?
          return details.user.project.groups[details.archive.id].classification_count > 250
        else
          return false
    collection: 'herbarium'
  ,
    name: 'Egg'
    url: 'badges/calbug/egg.png'
    description: 'You earn this badge for transcribing a Calbug record'
    awardText: 'You earned this badge for transcribing a Calbug record'
    condition:
      func: (details) ->
        if details.user.project.groups?[details.archive.id]?
          return details.user.project.groups[details.archive.id].classification_count > 0
        else
          return false
    collection: 'calbug'
  ,
    name: 'Caterpillar'
    url: 'badges/calbug/caterpillar.png'
    description: 'You earn this badge for transcribing 25 Calbug records'
    awardText: 'You earned this badge for transcribing 25 Calbug records'
    condition:
      func: (details) ->
        if details.user.project.groups?[details.archive.id]?
          return details.user.project.groups[details.archive.id].classification_count > 25
        else
          return false
    collection: 'calbug'
  ,
    name: 'Butterfly'
    url: 'badges/calbug/butterfly.png'
    description: 'You earn this badge for transcribing 100 Calbug records'
    awardText: 'You earned this badge for transcribing 100 Calbug records'
    condition:
      func: (details) ->
        if details.user.project.groups?[details.archive.id]?
          return details.user.project.groups[details.archive.id].classification_count > 100
        else
          return false
    collection: 'calbug'

]
