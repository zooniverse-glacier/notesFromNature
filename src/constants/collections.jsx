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
        goText: [
                `Welcome to the crab specimens of the family Cancridae at the Natural History Museum of
                Los Angeles County! Because of the way wet-preserved marine specimens accumulate
                labels over time, this is a particularly challenging transcription project, but we think you’re
                eager for the challenge.`,

                `Many of these specimens have been in our collection since the early twentieth century.
                Over time, generations of collections staff and researchers have added labels to many of
                the jars. Therefore a single jar may have anything from one to a dozen labels, with
                partially-overlapping information.`,

                `We’re giving you a full list of data fields that could be filled in for each jar of specimens.
                However, we expect that, even combining the information from all the labels, most
                specimens will have partial information. Expect to leave many or even most of the data
                fields empty`,

                `Some labels, particularly from the huge Allan Hancock Foundation subset, are preprinted
                with field tags that will help guide you in assigning text to data fields. In some cases, labels
                are purely handwritten, and you may have to make your best guess on assigning
                information to a data field. Looking around at all the labels from a jar can yield hints on
                some of the less obvious data field assignments.
                When in doubt, just go ahead and enter the text into the “Other Text” field and we’ll take it
                from there.`,

                `This is a tough project, but the crabs are cute (well, we think so!). For many of these
                irreplaceable specimens, you’ll be the first person in decades to really look closely at the
                jar and its data. Thanks for helping us to bring knowledge of these animals into the
                twenty-first century!`,
        ],
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
