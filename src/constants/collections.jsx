import { fieldType } from 'constants/field_types';

export const collections = {
    Herbarium: {
        groupId: '525e954dedf877560a000002',
        title: 'HERBARIUM COLLECTION',
        subtitle: 'from SERNEC'
    },
    Calbug: {
        groupId: '525e9569edf877560a000012',
        title: 'CALBUG',
        subtitle: 'from Essig Museum Collections'
    },
    'calbug-expeditions': {
        groupId: '55ada9f2d076161a32000001',
        title: 'CALBUG EXPEDITIONS',
        subtitle: 'from Essig Museum Collections'
    },
    Macrofungi: {
        groupId: '525e9599edf877560a000036',
        title: 'MYCOLOGICAL COLLECTION',
        subtitle: 'from the New York Botanical Garden'
    },
    Ornithological: {
        groupId: '525e9580edf877560a000024',
        title: 'ORNITHOLOGICAL',
        subtitle: ''
    },
    Crabs: { /////////////////////////////// WRONG! //////////////////////////
        groupId: '525e954dedf877560a000002',
        title: 'THE CRAB SHACK',
        subtitle: 'from the Hancock Foundation',
        fields: [
            fieldType.accessionNumber,
            fieldType.catalogNumber,
            fieldType.stationNumber,
            fieldType.eventDate,
            fieldType.geographicLocality,
            fieldType.habitat,
            fieldType.geographicCoordinates,
            fieldType.depth,
            fieldType.collectors,
            fieldType.identification,
            fieldType.identification2nd,
            fieldType.otherText,
        ]
    }
};
