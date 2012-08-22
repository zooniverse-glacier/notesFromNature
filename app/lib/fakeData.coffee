Institute = require('models/Institute')
Archive = require('models/Archive')
Subject = require('models/Subject')

# months = ["January", "February", "March", "April", "May","June", "July","August", "September", "October", "November", "December"]
# days   = [1..31]




# m = Institute.create
#   name:"The Natural History Museum"
#   metadata:
#     description:"Originally formed as the Natural History departments of the British Museum, the Natural History Museum became a separate entity through the British Museum Act 1963. We were known as the British Museum (Natural History) until we officially became the Natural History Museum through the Museums and Galleries Act 1992.
#     The museum is home to life and earth science specimens comprising some 70 million items within five main collections: Botany, Entomology, Mineralogy, Palaeontology and Zoology. The museum is a world-renowned centre of research, specialising in taxonomy, identification and conservation. Given the age of the institution, many of the collections have great historical as well as scientific value, such as specimens collected by Darwin."
#     url:"http://www.nhm.ac.uk/"
#     location: 'spain'
#     collectionTypes: ['Birds','Bugs']
#     image_url : "images/bg-collection.jpg"
#     logo_url: "images/logoMuseum.png"

# m.archives().create
#   name:"History Birds"
#   metadata:
#     description: "After the nephew died without heirs in 1835, President Andrew Jackson informed
#                   Congress of the bequest, which amounted to 104,960 gold sovereigns, or US$500,000 
#                   ($10,100,997 in 2008 U.S. dollars after inflation). Given the age of the institution, many
#                   of the collections have great historical as well as scientific value, such as specimens collected
#                   by Darwin.  The museum is a world-renowned centre of research, specialising in taxonomy.The money
#                   was invested in shaky state bonds, which quickly defaulted gold sovereigns"
#     mainImage: "images/img-collections1.png"
#     logo: "images/logoMuseum.png"
#     complete: false
#     progress: 20
#     taxonomy: ['Birds']
#     regions: ['spain', 'france']
#     startDate: "1/10/1990"
#     endDate: "1/10/1999" 
#     userCount: 201 
#     difficulty: "hard"

# m.archives().create
#   name:"Old Bugs"
#   metadata:
#     description: "There are more species of insect in the world than any other group, representing about 80 percent of the world’s species. Their distant relatives, the spiders, are also a diverse and fascinating group. These creepy crawlies are often feared and disliked by humans, but many of them have important roles to play in medical and forensic science, or by preying on insect pests."
#     mainImage: "images/img-collections3.png"
#     logo: "images/logoMuseum.png"
#     complete: true
#     progress: 100
#     taxonomy: ['Bugs']
#     regions: ['uk']
#     startDate: "15/10/1990"
#     endDate: "16/10/1993" 
#     userCount: 5000
#     difficulty: "easy"


# s = m.archives().first().subjects().create
#   location: "http://cdbetissanisidro.es//transcription.jpg?2"
#   transcriberType: 'sernac'


window.entities=[ 
      name: "RECORD POSITION"
      instructions: "Drag & resize the viewer to the record you want to transcribe."
      fields: []
      draggable: true
    , 
      name: "record code"
      draggable: false
      instructions: "It’s a 4 digit number located at the top right of the page."
      fields: [
        type: "text"
        name: 'code'
      ]
    ,
      name: "GENUS & SPECIES"
      instructions: "2 or 3 latin words in the first line, next to the margin."
      draggable: false
      fields: [
        type: "text"
        name: 'SPECIES'
        size: 'long'
      ] 
    ,
      name: "COLLECTION LOCATION"
      instructions: "A place name, in the second line."
      draggable: false
      fields: [
        type: "text"
        name: "location"
        size: 'long'
      ]
    ,
      name: "COLLECTION DATE"
      instructions: "A date in the third line."
      draggable: false
      fields: [
        type: "text"
        name: "collection_date"
        size: 'long'
      ]
  ]
