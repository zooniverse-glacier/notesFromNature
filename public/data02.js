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
    'RECORD POSITION',
    'RECORD CODE',
    'GENUS & SPECIES',
    'COLLECTION LOCATION',
    'COLLECTION DATE ',
    'COLLECTOR',
    'TRANSFERRER',
    'TRANSFER DATE',
    'ADDITIONAL INFORMATION'
  ],
  explanations: [ {
    label: 'Drag & resize the viewer to the record you want to transcribe.'
  },
  {
    label: 'It’s a 4 digit number located at the top right of the page.',
    inputs: [
      { type: 'text', placeholder: 'CODE', size: 'medium', name: 'record_code' }
    ],
    step: 'Code',
    ok: 'in',
    x: 0,
    y: 20
  },
  {
    label: '2 or 3 latin words in the first line, next to the margin.',
    inputs: [
      { type: 'text', placeholder: 'SPECIES', size: 'long', name: 'species' }
    ],
    step: 'Species',
    ok: 'in',
    x: 0,
    y: 0
  },
  {
    label: 'A place name, in the second line.',
    inputs: [
      { type: 'text', placeholder: 'LOCATION', size: 'long', name: 'location' }
    ],
    step: 'Location',
    ok: 'in',
    x: 0,
    y: 0
  },
  {
    label: 'A date in the third line.',
    inputs: [
      { type: 'select', placeholder: 'MONTH', size: 'medium', name: 'collection_month', source: ["January","February","March","April","May","June","July","August","September","October","November","December"]},
      { type: 'select', placeholder: 'DAY', size: 'short', name: 'collection_day', source: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},
      { type: 'text', placeholder: 'YEAR', size: 'short', name: 'collection_year' }
    ],
    step: 'Collection date',
    ok: 'out',
    x: 0,
    y: 0
  },
  {
    label: 'A person name in the same line than the date.',
    inputs: [
      { type: 'text', placeholder: 'COLLECTOR', size: 'long', name: 'collector' }
    ],
    step: 'Collector',
    ok: 'in'
  },
  {
    label: 'A person name at the top right of the record.',
    inputs: [
      { type: 'text', placeholder: 'TRANSFERER', size: 'long', name: 'transferer' }
    ],
    step: 'Transferer',
    ok: 'in',
    x: 2000
  },
  {
    label: 'A date under the transferrer.',
    inputs: [
      { type: 'select', placeholder: 'MONTH', size: 'medium', name: 'transfer_month', source: ["January","February","March","April","May","June","July","August","September","October","November","December"]},
      { type: 'select', placeholder: 'DAY', size: 'short', name: 'transfer_day', source: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31] },
      { type: 'text', placeholder: 'YEAR', size: 'short', name: 'transfer_year' }
    ],
    step: 'Transfer date',
    ok: 'out',
    x: 0
  },
  {
    label: 'Can you detect this information?.',
    inputs: [
      { type: 'select', placeholder: 'GENDER', size: 'short', name: 'gender', source: ['male','female'] },
      { type: 'text', placeholder: 'AGE', size: 'short', name: 'age' },
      { type: 'text', placeholder: 'REGISTER', size: 'short', name: 'register' }
    ],
    step: 'Other',
    ok: 'out'
  }
  ]
};

