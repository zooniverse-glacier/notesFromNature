module.exports=

  seed :
    url: 'badges/seed.png'
    description: "You earn this badge for transcribing 10 Hebernium records"
    awardText:  "You earned this badge for transcribing 10 Hebernium records"
    condition: (details)-> details.user.project.classification_count >= 1 
    collection: 'Herbarium'

  sprout :
    url: 'badges/seedling.png'
    description: "You earn this badge for transcribing 20 Hebernium records"
    awardText:  "You earned this badge for transcribing 20 Hebernium records"
    condition: (details)-> details.user.project.classification_count > 10
    collection: 'Herbarium'

  seedling :
    url: 'badges/sapling.png'
    description: "You earn this badge for transcribing 50 Hebernium records"
    awardText:  "You earned this badge for transcribing 50 Hebernium records"
    condition: (details)-> details.user.project.classification_count > 50
    collection: 'Herbarium'

  sapling : 
    url: 'badges/tree.png'
    description: "You earn this badge for transcribing 100 Hebernium records"
    awardText:  "You earned this badge for transcribing 100 Hebernium records"
    condition: (details)-> details.user.project.classification_count > 100
    collection: 'Herbarium'  
