var transcriberData = {
  globalEvents : [],
  tooltips : {
    record: {
      content: 'There are still <u>{{pending}} empty fields</u> for this record that should be completed before finishing.',
      title: 'ARE YOU SURE?',
      orange: 'FINISH',
      white: 'CANCEL',
      tail: 'right'
    },
    skip : {
      content: 'If you can’t find the value, you can see <a class="example" href="#see_examples">examples</a> that surely will help you',
      title: 'ARE YOU SURE?',
      orange: 'SKIP FIELD',
      white: 'CANCEL',
      tail: 'center'
    },
    example : {
    }
  },
  titles: [
    'SCIENTIFIC NAME',
    'SCIENTIFIC AUTHOR',
    'COUNTY',
    'STATE',
    'LOCALITY DESCRIPTION',
    'HABITAT',
    'RECORDED BY',
    'RECORDED DATE',
    'RECORD NUMBER'
  ],
  explanations: [ {
    label: 'Drag & resize the viewer to the record you want to transcribe.'
  },
  {
    label: 'It is a Latin string at the top of the record',
    inputs: [
      { type: 'text', placeholder: 'SCIENTIFIC NAME', size: 'medium', name: 'scientific_name' }
    ],
    step: 'Scientific name',
    ok: 'in'
  },
  {
    label: 'A name, often first initials and a surname directly following the species name.',
    inputs: [
      { type: 'text', placeholder: 'SCIENTIFIC AUTHOR', size: 'medium', name: 'scientific_author' }
    ],
    step: 'Scientific author',
    ok: 'in'
  },
  {
    label: 'The name of the county the specimen was collected in.',
    inputs: [
      { type: 'text', placeholder: 'COUNTY', size: 'medium', name: 'county' }
    ],
    step: 'County',
    ok: 'in'
  },
  {
    label: 'State name where the specimen was collected.',
    inputs: [ { type: 'text', placeholder: 'STATE', size: 'short', name: 'state' } ],
    step: 'State',
    ok: 'in'
  },
  {
    label: 'A text description of the place the specimen was collected, not including habitat, county, or state.',
    inputs: [
      { type: 'text', placeholder: 'LOCALITY DESCRIPTION', size: 'long', name: 'locality_description' }
    ],
    step: 'Locality description',
    ok: 'in'
  },
  {
    label: 'A short description of the environment of the specimen.',
    inputs: [
      { type: 'text', placeholder: 'HABITAT', size: 'medium', name: 'habitat' }
    ],
    step: 'Habitat',
    ok: 'in'
  },
  {
    label: 'The name of the person that recorded the specimen at the museum.',
    inputs: [ { type: 'text', placeholder: 'RECORDED BY', size: 'medium', name: 'recorded_by' } ],
    step: 'Recorded by',
    ok: 'in'
  },
  {
    label: 'The date next to the recorder name that indicates the date it was recorded at the museum.',
    inputs: [ { type: 'text', placeholder: 'RECORDED DATE', size: 'medium', name: 'recorded_date' } ],
    step: 'Recorded date',
    ok: 'in'
  },
  {
    label: 'The short code that is a unique ID for this record.',
    inputs: [ { type: 'text', placeholder: 'RECORD NUMBER', size: 'short', name: 'record_number' } ],
    step: 'Record number',
    ok: 'in'
  }
  ]
};

