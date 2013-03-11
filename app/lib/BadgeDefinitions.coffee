module.exports =
  seed:
    url: 'badges/seed.png'
    description: "You earn this badge for transcribing a SERNEC record"
    awardText: "You earned this badge for transcribing a SERNEC record"
    condition: (details) -> details.user.project.classification_count == 1 
    collection: 'herbarium'
  sprout:
    url: 'badges/seedling.png'
    description: "You earn this badge for transcribing 10 SERNEC records"
    awardText: "You earned this badge for transcribing 10 SERNEC records"
    condition: (details) -> details.user.project.classification_count == 2
    collection: 'herbarium'
  seedling:
    url: 'badges/sapling.png'
    description: "You earn this badge for transcribing 25 SERNEC records"
    awardText:  "You earned this badge for transcribing 25 SERNEC records"
    condition: (details) -> details.user.project.classification_count == 3
    collection: 'herbarium'
  sapling: 
    url: 'badges/tree.png'
    description: "You earn this badge for transcribing 75 SERNEC records"
    awardText:  "You earned this badge for transcribing 75 SERNEC records"
    condition: (details) -> details.user.project.classification_count == 4
    collection: 'herbarium'
  oak: 
    url: 'badges/oak.png'
    description: "You earn this badge for transcribing 250 SERNEC records"
    awardText:  "You earned this badge for transcribing 250 SERNEC records"
    condition: (details) -> details.user.project.classification_count == 5
    collection: 'herbarium'
