module.exports=

  seed :
    url: 'badge1.png'
    description: "You earned this badge for transcribing 10 Hebernium records"
    condition: (details)-> details.user.project.classification_count >= 1 
    collection: 'Herbarium'

  sprout :
    url: 'badge2.png'
    description: "You earned this badge for transcribing 20 Hebernium records"
    condition: (details)-> details.user.project.classification_count > 2
    collection: 'Herbarium'

  seeding :
    url: 'badge3.png'
    description: "You earned this badge for transcribing 50 Hebernium records"
    condition: (details)-> details.user.project.classification_count > 50
    collection: 'Herbarium'

  sapling : 
    url: 'badge1.png'
    description: "You earned this badge for transcribing 100 Hebernium records"
    condition: (details)-> details.user.project.classification_count > 100
    collection: 'Herbarium'  
