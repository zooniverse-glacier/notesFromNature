import * as helper from 'reducers/transcriber_submit_helpers';

// fieldKey : {
//      name:           Form input name
//      dwc:            Mapping to DarwinCore field(s)
//      type:           Base field type. Needs to match a field class name
//      title:          Title used in collapsed help text
//      label:          Form input label
//      placeholder:    Form input placeholder
//      submitHelpers:  A list of functions to run ON THE FIELD when a form is submitted
//      help:           Help text given as an array of paragraphs
//}

export const fieldType = {
    accessionNumber: {
        name: 'accessionNumber',
        dwc: 'recordNumber',
        type: 'TextField',
        title: 'Acc. No.',
        label: '',
        placeholder: '-- Acc. No. --',
        submitHelpers: [helper.validatePresent],
        help: [
            `On preprinted labels, this will be in a field named “Acc. No.” Type in all characters from that field, including numbers, letters, and punctuation.`,
            `This is an accession number, one of several numbers the Museum uses to track incoming specimens.`
        ],
    },
    catalogNumber: {
        name: 'catalogNumber',
        dwc: 'catalogNumber',
        type: 'TextField',
        title: 'Cat. No.',
        label: '',
        placeholder: '-- Cat. No. --',
        submitHelpers: [helper.validatePresent],
        help: [
            'On preprinted labels, this will be in a field named “Cat. No.” Type in all characters from that field, including numbers, letters, and punctuation.',
            'This is a catalog number, one of several numbers the Museum uses to track incoming specimens and specimens used in publications.',
        ],
    },
    collectors: {
        name: 'collectors',
        dwc: 'recordedBy',
        type: 'TextField',
        title: 'Collector Name(s)',
        label: '',
        placeholder: '-- Collector Name(s) --',
        submitHelpers: [helper.validatePresent],
        help: [
            'These will be name(s) or initials following “Coll”, “Collector”, or “Collected By”, or they may be present without any field name on the label. Enter the name(s) or initials exactly as they appear on the label.',
            'This is NOT the author name immediately following the scientific name, and they are NOT names following the field name “Id.”',
            'These are the name or names (or initials) of the person or people who collected the specimen in the field.',
        ],
    },
    depth: {
        name: 'depth',
        dwc: 'verbatimDepth',
        type: 'DepthField',
        title: 'Depth',
        label: 'Depth',
        placeholder: '-- Depth --',
        submitHelpers: [helper.validateDepth],
        help: [
            'DEPTH: Enter the collection depth, using just numbers (and an optional decimal point, if present). Leave blank if no depth is given.',
            'DEPTH UNITS: Pick the units in which depth is given (if a depth is present on the labels). If no units are given or no depth is given, leave this as “no units”. “Feet” may abbreviated as “f”; “meters” may be abbreviated as “m”; “fathoms” may be abbreviated as “ftm”.',
        ],
    },
    eventDate: {
        name: 'eventDate',
        dwc: 'eventDate',
        type: 'DateField',
        title: 'Collection Date',
        label: 'Collection Date:',
        placeholder: '',
        submitHelpers: [helper.formatDate],
        help: [
            'MONTH: This is a one- or two-digit month. Leave blank if there is no collection month or date on the label(s).',
            'Occasionally, months are given as Roman numerals. Please interpret to a two-digit month: 1 = Jan = i, 2 = Feb = ii, 3 = Mar = iii, 4 = Apr = iv, 5 = May = v, 6 = Jun = vi, 7 = Jul = vii, 8 = Aug = viii, 9 = Sep = ix, 10 = Oct = x, 11 = Nov = xi, 12 = Dec = xii',
            'DAY: This is a one- or two-digit day of the month. Leave blank if there is no collection day or date given on the label(s).',
            'YEAR: This is a four-digit year. Leave blank if there is no collection year or date given on the label(s).',
        ],
    },
    geographicCoordinates: {
        name: 'geographicCoordinates',
        dwc: ['verbatimLatitude', 'verbatimLongitude'],
        type: 'GeographicCoordinatesField',
        title: 'Geographic Coordinates',
        label: 'Geographic Coordinates',
        placeholder: '',
        submitHelpers: [helper.validateAllPresent],
        help: [
            'LATITUDE: Enter the latitude as it appears on the label. This is likely to be a series of numbers and punctuation, and may include a final “N” or “S”. The first number (the degrees of latitude) must be between -90 and 90.',
            'Examples include: 23.82N, 23° 49’ 12” N, or -23° 49.2’',
            'LONGITUDE: Enter the longitude as it appears on the label. This is likely to be a series of numbers and punctuation, and may include a final “E” or “W”. The first number (the degrees of longitude) must be between -180 and 180.',
            'Examples include: 118.73W, 118° 43’ 48” W, or -118° 43.8’',
        ],
    },
    geographicLocality: {
        name: 'geographicLocality',
        dwc: 'verbatimLocality',
        type: 'TextField',
        title: 'Geographic Locality',
        label: 'Geographic Locality',
        placeholder: '-- Geographic Locality --',
        submitHelpers: [helper.validatePresent],
        help: [
            'This is the geographic location where the specimen was found. An example might be “Hesketh I., Kachemak Bay, Cook Inlet, Alaska”. Do NOT include the description of the site or habitat, if that is also present.',
        ],
    },
    habitat: {
        name: 'habitat',
        type: 'TextField',
        dwc: 'habitat',
        title: 'Site Description / Habitat',
        label: '',
        placeholder: '-- Site Description / Habitat --',
        submitHelpers: [helper.validatePresent],
        help: [
            'This is any text that describes the site or habitat. Examples might be “intertidal” or “with algae under cobbles”. Do NOT include the geographic locality itself.',
        ],
    },
    identification: {
        name: 'identification',
        dwc: ['scientificName', 'identifiedBy'],
        type: 'IdentificationField',
        title: 'Identification',
        label: 'Identification',
        placeholder: '-- Identification --',
        submitHelpers: [helper.validateAllPresent],
        help: [
            'SCIENTIFIC NAME: This will be made of two words: the capitalized genus name and the lower-case species name. The scientific name may be followed by the capitalized name of the author who originally described the species (and that may be in parentheses). Enter ONLY the genus and species name; ignore the (optional) trailing name of the author.',
            'Examples include: “Cancer anthonyi Rathbun” (enter only “Cancer anthonyi”), “Cancer oregonensis (Dana)” (enter only “Cancer oregonensis”), or “Metacarcinus sp.” (enter “Metacarcinus sp.”)',
            'IDENTIFIER’S NAME: In some cases the person who identified the species of the specimen will be noted on the label. If there is a scientific name but no identifier, leave this field blank.',
            'On preprinted labels, this information will be in a field named “Id. By”, “Id.”, or “Identified By”. In other cases, it may be before or after the scientific name. Note, however, that it is NOT the author name that may immediately follow the genus and species parts of the scientific name.',
            'Enter the name or initials of the identifier exactly as they appear on the labels.',
        ],
    },
    identification2nd: {
        name: 'identification2nd',
        dwc: ['scientificName', 'identifiedBy'],
        type: 'IdentificationField',
        title: 'Second Identification',
        label: 'Second Identification',
        placeholder: '-- Second Identification --',
        submitHelpers: [helper.validateAllPresent],
        help: [
            'SCIENTIFIC NAME 2: In some cases, more than one identification has been made of a single specimen or group of specimens. In that case, use this field to record a second identification. For details, see help for “Scientific Name”.',
            'In the rare case of a third identification, enter the Scientific Name and Identifier’s Name in the “Other Text” field.',
            'IDENTIFIER’S NAME 2: In some cases, more than one identification has been made of a single specimen or group of specimens. In the case of a second identification, if the name of the person who made that identification is given, enter that identifier’s name here. For details, see help for “Identifier’s Name”.',
        ],
    },
    otherText: {
        name: 'otherText',
        dwc: 'occurrenceRemarks',
        type: 'TextField',
        title: 'Other Text',
        label: '',
        placeholder: '-- Other Text --',
        submitHelpers: [helper.validatePresent],
        help: [
            'If there is other text on the label that doesn’t seem to fit any of the other predefined fields, please enter it here.',
            'Please DO enter preprinted collection names, such as “Dominion Museum, Wellington, N.Z.” There is an exception to that guideline: because they are so common in this collection, do NOT enter “Allan Hancock Foundation” or “University of Southern California”.',
            'Do NOT type in preprinted field names such as “Acc. No.” or “Sta. No.” as long as the contents of these fields have been entered elsewhere.',
        ],
    },
    stationNumber: {
        name: 'stationNumber',
        dwc: '',
        type: 'TextField',
        title: 'Sta. No.',
        label: '',
        placeholder: '-- Sta. No. --',
        submitHelpers: [helper.validatePresent],
        help: [
            'On preprinted labels, this information will be in a field named “Sta. No.” or “Sta.” Type in all characters from that field, including numbers, letters, and punctuation.',
            'In some cases the station number will be present without any field name. It may consist of four digits, or it may be four digits, a dash, and two more digits (for example: “1638-48”).',
            'This is the collecting station number, which indicates the expedition log entry that holds information about when and where the specimen was collected.',
        ],
    },
};
