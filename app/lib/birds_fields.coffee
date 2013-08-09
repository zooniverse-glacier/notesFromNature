old_format = [{
  name: 'registration_number'
  description: require 'lib/data_format_views/old/registration_number'
  type: 'multi'
  fields: [{
    name: 'registration_year'
    type: 'input'
  },{
    name: 'registration_month'
    type: 'input'
  },{
    name: 'registration_day'
    type: 'input'
  },{
    name: 'registration_number_in_batch'
    type: 'input'
  }]
},{
  name: 'scientific_name'
  type: 'input'
},{
  name: 'location'
  type: 'input'
},{
  name: 'date_collected'
  type: 'multi'
  fields: [{
    name: 'collected_year'
    type: 'input'
  },{
    name: 'collected_month'
    type: 'input'
  },{
    name: 'collected_day'
    type: 'input'
  }]
}]

new_format = [{
  name: 'registration_number'
  display: 'Registration Number'
  description: require 'lib/data_format_views/new/registration_number'
  type: 'multi'
  sub_fields: [{
    name: 'registration_year'
    helper_text: 'YEAR'
    size: 'medium'
    type: 'input'
  },{
    name: 'registration_batch'
    helper_text: 'BATCH'
    size: 'medium'
    type: 'input'
  },{
    name: 'registration_number_in_batch'
    helper_text: 'BATCH #'
    size: 'medium'
    type: 'input'
  }]
},{
  name: 'scientific_name'
  display: 'Scientific Name'
  description: require 'lib/data_format_views/new/scientific_name'
  helper_text: 'Scientific Name'
  size: 'large'
  type: 'input'
},{
  name: 'location'
  display: 'Location'
  description: require 'lib/data_format_views/new/location'
  helper_text: 'Location'
  size: 'large'
  type: 'input'
},{
  name: 'date_collected'
  display: 'Date Collected'
  description: require 'lib/data_format_views/new/date_collected'
  type: 'multi'
  sub_fields: [{
    name: 'collected_day'
    helper_text: 'Day Collected'
    type: 'input'
  },{
    name: 'collected_month'
    helper_text: 'Month Collected'
    type: 'input'
  },{
    name: 'collected_year'
    helper_text: 'Year Collected'
    type: 'input'
  }]
}]

module.exports =
  old_format: old_format
  new_format: new_format