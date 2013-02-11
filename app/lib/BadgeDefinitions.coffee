module.exports =
  seed:
    url: 'badges/seed.png'
    description: "You earn this badge for transcribing 10 SERNEC records"
    awardText: "You earned this badge for transcribing 10 SERNEC records"
    condition: (details) -> details.user.project.classification_count == 1 
    collection: 'Herbarium'
  sprout:
    url: 'badges/seedling.png'
    description: "You earn this badge for transcribing 20 SERNEC records"
    awardText: "You earned this badge for transcribing 20 SERNEC records"
    condition: (details) -> details.user.project.classification_count == 10
    collection: 'Herbarium'
  seedling:
    url: 'badges/sapling.png'
    description: "You earn this badge for transcribing 50 SERNEC records"
    awardText:  "You earned this badge for transcribing 50 SERNEC records"
    condition: (details) -> details.user.project.classification_count == 50
    collection: 'Herbarium'
  sapling: 
    url: 'badges/tree.png'
    description: "You earn this badge for transcribing 100 SERNEC records"
    awardText:  "You earned this badge for transcribing 100 SERNEC records"
    condition: (details) -> details.user.project.classification_count == 100
    collection: 'Herbarium'  
