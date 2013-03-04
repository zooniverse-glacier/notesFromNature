module.exports =
  seed:
    url: 'badges/seed.png'
    description: "You earn this badge for transcribing a SERNEC record"
    awardText: "You earned this badge for transcribing a SERNEC record"
    number: 1
    condition: (details) -> details.user.project.classification_count == 1 
    collection: 'herbarium'
  sprout:
    url: 'badges/seedling.png'
    description: "You earn this badge for transcribing 20 SERNEC records"
    awardText: "You earned this badge for transcribing 20 SERNEC records"
    number: 10
    condition: (details) -> details.user.project.classification_count == 10
    collection: 'herbarium'
  seedling:
    url: 'badges/sapling.png'
    description: "You earn this badge for transcribing 50 SERNEC records"
    awardText:  "You earned this badge for transcribing 50 SERNEC records"
    condition: (details) -> details.user.project.classification_count == 50
    collection: 'herbarium'
  sapling: 
    url: 'badges/tree.png'
    description: "You earn this badge for transcribing 100 SERNEC records"
    awardText:  "You earned this badge for transcribing 100 SERNEC records"
    condition: (details) -> details.user.project.classification_count == 100
    collection: 'herbarium'
