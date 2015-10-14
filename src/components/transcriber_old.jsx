const global = { ///////////////////////////////////////////////////////////////////////////////////////////////////////
    collection:   'Crabs',
    nfnUrl:      'https://dev.zooniverse.org/projects/notes_from_nature',
    groupsUrl:   'https://dev.zooniverse.org/projects/notes_from_nature/groups/',
    subjectsUrl: 'https://dev.zooniverse.org/projects/notes_from_nature/groups/<groupId>/subjects?limit=10',
    talkUrl:     'http://talk.notesfromnature.org/#/subjects/<zooniverseId>',
    collections: {
        Herbarium:            {groupId: '525e954dedf877560a000002', title: 'HERBARIUM COLLECTION',   subtitle: 'from SERNEC'},
        Calbug:               {groupId: '525e9569edf877560a000012', title: 'CALBUG',                 subtitle: 'from Essig Museum Collections'},
        'calbug-expeditions': {groupId: '55ada9f2d076161a32000001', title: 'CALBUG EXPEDITIONS',     subtitle: 'from Essig Museum Collections'},
        Macrofungi:           {groupId: '525e9599edf877560a000036', title: 'MYCOLOGICAL COLLECTION', subtitle: 'from the New York Botanical Garden'},
        Ornithological:       {groupId: '525e9580edf877560a000024', title: 'ORNITHOLOGICAL',         subtitle: ''},
        Crabs:                {groupId: '525e954dedf877560a000002', title: 'THE CRAB SHACK',         subtitle: 'from the Hancock Foundation'} ///////////////////////
    },
    widthPadding: 20,
    navbarHeight: 90,
    footerHeight: 142,
};

const mockSubjects = [
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cce.jpg", "id": "55faf72ae3f666323e432cce", "name": "1000029_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432ccf.jpg", "id": "55faf72ae3f666323e432ccf", "name": "1000029_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432ccd", "name": "1000029", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cbe.jpg", "id": "55faf72ae3f666323e432cbe", "name": "1000024_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cbf.jpg", "id": "55faf72ae3f666323e432cbf", "name": "1000024_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432cbd", "name": "1000024", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cc5.jpg", "id": "55faf72ae3f666323e432cc5", "name": "1000026_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cc6.jpg", "id": "55faf72ae3f666323e432cc6", "name": "1000026_labels.jpg", "height": 2008},{"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cc4.jpg", "id": "55faf72ae3f666323e432cc4", "name": "1000026-001_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432cc3", "name": "1000026", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cc1.jpg", "id": "55faf72ae3f666323e432cc1", "name": "1000025_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cc2.jpg", "id": "55faf72ae3f666323e432cc2", "name": "1000025_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432cc0", "name": "1000025", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cc8.jpg", "id": "55faf72ae3f666323e432cc8", "name": "1000027_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cc9.jpg", "id": "55faf72ae3f666323e432cc9", "name": "1000027_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432cc7", "name": "1000027", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cb2.jpg", "id": "55faf72ae3f666323e432cb2", "name": "1000020_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cb3.jpg", "id": "55faf72ae3f666323e432cb3", "name": "1000020_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432cb1", "name": "1000020", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cb5.jpg", "id": "55faf72ae3f666323e432cb5", "name": "1000021_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cb6.jpg", "id": "55faf72ae3f666323e432cb6", "name": "1000021_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432cb4", "name": "1000021", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c8e.jpg", "id": "55faf72ae3f666323e432c8e", "name": "1000008_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c8f.jpg", "id": "55faf72ae3f666323e432c8f", "name": "1000008_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432c8d", "name": "1000008", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c91.jpg", "id": "55faf72ae3f666323e432c91", "name": "1000009_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c92.jpg", "id": "55faf72ae3f666323e432c92", "name": "1000009_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432c90", "name": "1000009", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c88.jpg", "id": "55faf72ae3f666323e432c88", "name": "1000006_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c89.jpg", "id": "55faf72ae3f666323e432c89", "name": "1000006_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432c87", "name": "1000006", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c8b.jpg", "id": "55faf72ae3f666323e432c8b", "name": "1000007_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c8c.jpg", "id": "55faf72ae3f666323e432c8c", "name": "1000007_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432c8a", "name": "1000007", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c82.jpg", "id": "55faf72ae3f666323e432c82", "name": "1000004_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c83.jpg", "id": "55faf72ae3f666323e432c83", "name": "1000004_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432c81", "name": "1000004", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c85.jpg", "id": "55faf72ae3f666323e432c85", "name": "1000005_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c86.jpg", "id": "55faf72ae3f666323e432c86", "name": "1000005_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432c84", "name": "1000005", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432ccb.jpg", "id": "55faf72ae3f666323e432ccb", "name": "1000028_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432ccc.jpg", "id": "55faf72ae3f666323e432ccc", "name": "1000028_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432cca", "name": "1000028", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c7f.jpg", "id": "55faf72ae3f666323e432c7f", "name": "1000003_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c80.jpg", "id": "55faf72ae3f666323e432c80", "name": "1000003_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432c7e", "name": "1000003", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c7c.jpg", "id": "55faf72ae3f666323e432c7c", "name": "1000001_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c7d.jpg", "id": "55faf72ae3f666323e432c7d", "name": "1000001_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432c7b", "name": "1000001", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cb8.jpg", "id": "55faf72ae3f666323e432cb8", "name": "1000022_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cb9.jpg", "id": "55faf72ae3f666323e432cb9", "name": "1000022_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432cb7", "name": "1000022", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cd1.jpg", "id": "55faf72ae3f666323e432cd1", "name": "1000030_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cd2.jpg", "id": "55faf72ae3f666323e432cd2", "name": "1000030_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432cd0", "name": "1000030", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432ce1.jpg", "id": "55faf72ae3f666323e432ce1", "name": "1000035_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432ce2.jpg", "id": "55faf72ae3f666323e432ce2", "name": "1000035_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432ce0", "name": "1000035", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cde.jpg", "id": "55faf72ae3f666323e432cde", "name": "1000034_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cdf.jpg", "id": "55faf72ae3f666323e432cdf", "name": "1000034_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432cdd", "name": "1000034", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cdb.jpg", "id": "55faf72ae3f666323e432cdb", "name": "1000033_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cdc.jpg", "id": "55faf72ae3f666323e432cdc", "name": "1000033_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432cda", "name": "1000033", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cd8.jpg", "id": "55faf72ae3f666323e432cd8", "name": "1000032_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cd9.jpg", "id": "55faf72ae3f666323e432cd9", "name": "1000032_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432cd7", "name": "1000032", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c97.jpg", "id": "55faf72ae3f666323e432c97", "name": "1000011_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c98.jpg", "id": "55faf72ae3f666323e432c98", "name": "1000011_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432c96", "name": "1000011", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c94.jpg", "id": "55faf72ae3f666323e432c94", "name": "1000010_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c95.jpg", "id": "55faf72ae3f666323e432c95", "name": "1000010_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432c93", "name": "1000010", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c9d.jpg", "id": "55faf72ae3f666323e432c9d", "name": "1000013_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c9e.jpg", "id": "55faf72ae3f666323e432c9e", "name": "1000013_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432c9c", "name": "1000013", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c9a.jpg", "id": "55faf72ae3f666323e432c9a", "name": "1000012_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432c9b.jpg", "id": "55faf72ae3f666323e432c9b", "name": "1000012_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432c99", "name": "1000012", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432ca3.jpg", "id": "55faf72ae3f666323e432ca3", "name": "1000015_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432ca4.jpg", "id": "55faf72ae3f666323e432ca4", "name": "1000015_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432ca2", "name": "1000015", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432ca0.jpg", "id": "55faf72ae3f666323e432ca0", "name": "1000014_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432ca1.jpg", "id": "55faf72ae3f666323e432ca1", "name": "1000014_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432c9f", "name": "1000014", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432ca9.jpg", "id": "55faf72ae3f666323e432ca9", "name": "1000017_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432caa.jpg", "id": "55faf72ae3f666323e432caa", "name": "1000017_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432ca8", "name": "1000017", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432ca6.jpg", "id": "55faf72ae3f666323e432ca6", "name": "1000016_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432ca7.jpg", "id": "55faf72ae3f666323e432ca7", "name": "1000016_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432ca5", "name": "1000016", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432caf.jpg", "id": "55faf72ae3f666323e432caf", "name": "1000019_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cb0.jpg", "id": "55faf72ae3f666323e432cb0", "name": "1000019_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432cae", "name": "1000019", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cac.jpg", "id": "55faf72ae3f666323e432cac", "name": "1000018_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cad.jpg", "id": "55faf72ae3f666323e432cad", "name": "1000018_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432cab", "name": "1000018", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cbb.jpg", "id": "55faf72ae3f666323e432cbb", "name": "1000023_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cbc.jpg", "id": "55faf72ae3f666323e432cbc", "name": "1000023_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432cba", "name": "1000023", "collection": "crabs", "dataset": "Crabs_pilot"},
    {"images": [{"width": 2008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cd5.jpg", "id": "55faf72ae3f666323e432cd5", "name": "1000031_jar.jpg", "height": 3008}, {"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cd6.jpg", "id": "55faf72ae3f666323e432cd6", "name": "1000031_labels.jpg", "height": 2008},{"width": 3008, "location": "http://www.notesfromnature.org/subjects/crabs/crab_pilot/55faf72ae3f666323e432cd4.jpg", "id": "55faf72ae3f666323e432cd4", "name": "1000031-001_labels.jpg", "height": 2008}], "id": "55faf72ae3f666323e432cd3", "name": "1000031", "collection": "crabs", "dataset": "Crabs_pilot"}
];

class Transcriber extends React.Component {
    constructor() {
        super();
        this.mockIndex = -1;
    }
    getInitialState() {
        return {
            currentImage: '',
            subjectImages: [],
            collection: '',
            subjectId: 0,
            navbarTitle: global.collections[global.collection].title,
            navbarSubtitle: global.collections[global.collection].subtitle,
            navbarCompleted: 0,
            talkHref: global.talkUrl.replace('<zooniverseId>', ''),
            index: -1,
            subjects: [],
            splashVisible: true
        };
    }
    componentDidMount() {
        this.getSubjects();
    }
    getSubjects() {
        let url = global.subjectsUrl.replace('<groupId>', global.collections[global.collection].groupId);
        $.getJSON(url).done(this.handleLoadSubjects);
    }
    handleLoadSubjects(json) {
        this.setState({index: -1, subjects: json});
        this.getNextSubject(json);
    }
    getNextSubject() {
        let currentImage, subjectImages, talkHref, index = this.state.index + 1;
        if (index >= this.state.subjects.length) {
            this.getSubjects();
            return;
        }
        talkHref      = global.talkUrl.replace('<zooniverseId>', this.state.subjects[index].zooniverseId);
        subjectImages = this.mockGetImages(index); //////////////////////////////////////////////////////////////
        currentImage  = subjectImages[0];
        if (subjectImages.length > 1) {
            $('body').addClass('has-footer');
        } else {
            $('body').removeClass('has-footer');
        }
        this.setState({index: index,
                       collection: global.collection, ///////////////////////////////////////////////////////////////
                       subjectId: mockSubjects[this.mockIndex].id, ///////////////////////////////////////////
                       currentImage: currentImage,
                       subjectImages: subjectImages,
                       talkHref: talkHref});
    }
    mockGetImages(index) { //////////////////////////////////////////////////////////////
        let mockSubject = mockSubjects[++this.mockIndex % mockSubjects.length];
        let uris = [];
        mockSubject.images.map(function (image) {
            uris.push(image.location);
        });
        return uris;
    }
    handleImageSelectorClick(event) {
        this.setState({currentImage: event.target.src});
    }
    handleFormSubmit(event) {
        this.getNextSubject();
        this.setState({navbarCompleted: ++this.state.navbarCompleted});
    }
    handleSkipButtonClick() {
        this.getNextSubject();
    }
    handleSplashHide() {
        this.setState({splashVisible: false});
    }
    render() {
        let images = this.state.subjectImages.map((image, i) => {
            return (
                <ImageContainer hasFooter={this.state.subjectImages.length > 1}
                                key={i}
                                currentImage={this.state.currentImage}
                                image={image} />
            );
        });
        return (
            <div>
                <NavBar navbarTitle={this.state.navbarTitle}
                        navbarSubtitle={this.state.navbarSubtitle}
                        navbarCompleted={this.state.navbarCompleted} />
                <Form onSubmit={this.handleFormSubmit}
                      disabled={this.state.splashVisible}
                      talkHref={this.state.talkHref}
                      collection={this.state.collection}
                      subjectId={this.state.subjectId}
                      onSkip={this.handleSkipButtonClick} />
                {images}
                <ImageSelector subjectImages={this.state.subjectImages}
                               currentImage={this.state.currentImage}
                               onClick={this.handleImageSelectorClick} />
                <Splash onHide={this.handleSplashHide} />
            </div>
        );
    }
}

let NavBar = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top nfn">
                <div className="container">
                    <p className="navbar-text">
                        <span className="nfn-nav-title">{this.props.navbarTitle}</span>
                        <br/>
                        <span className="nfn-nav-subtitle">{this.props.navbarSubtitle}</span>
                    </p>
                    <a className="navbar-text navbar-right visible-sm visible-md visible-lg glyphicon glyphicon-off nfn-nav-off-icon" href="/" aria-hidden="true"></a>
                    <p className="navbar-text navbar-right visible-sm visible-md visible-lg nfn-nav-count-text">RECORDS<br/>DONE</p>
                    <p className="navbar-text navbar-right visible-sm visible-md visible-lg nfn-nav-count">{this.props.navbarCompleted}</p>
                </div>
            </nav>
        );
    }
});

let ImageContainer = React.createClass({
    getInitialState: function() {
        return { zoomClick: false, ready: false };
    },
    componentDidMount: function() {
        $(window).on('resize', () => {
            this.scale();
            this.center();
        });
    },
    zoomIn: function() {
        $(React.findDOMNode(this.refs.image)).panzoom('zoom');
    },
    zoomOut: function() {
        $(React.findDOMNode(this.refs.image)).panzoom('zoom', true);
    },
    handleLoad: function() {
        this.scale();
        this.makePanZoom();
        this.center();
        this.setState({ready: true});
    },
    getMaxDimensions: function() {
        let img = React.findDOMNode(this.refs.image),
            maxWidth  = $(window).width() - global.widthPadding,
            maxHeight = $(window).height() - global.navbarHeight;
        maxHeight -= this.props.hasFooter ? global.footerHeight : 0;
        return [maxHeight, maxWidth];
    },
    scale: function() {
        let [maxHeight, maxWidth] = this.getMaxDimensions(),
            img = React.findDOMNode(this.refs.image),
            scale  = Math.min(1, maxHeight / img.naturalHeight);
        img.width  = img.naturalWidth  * scale;
        img.height = img.naturalHeight * scale;
    },
    center: function() {
        let [maxHeight, maxWidth] = this.getMaxDimensions(),
            img = React.findDOMNode(this.refs.image),
            moveX = Math.max((maxWidth  - img.width)  / 2, 0),
            moveY = Math.max((maxHeight - img.height) / 2, 0);
        $(React.findDOMNode(this.refs.image)).panzoom("reset").panzoom('pan', moveX, moveY);
    },
    makePanZoom: function() {
        let [maxHeight, maxWidth] = this.getMaxDimensions(),
            img  = React.findDOMNode(this.refs.image),
            $img = $(img).panzoom({increment: 0.2, maxScale: 20});
        $img.parent().on('mousewheel.focal', function(event) {
            event.preventDefault();
            var delta = event.delta || event.originalEvent.wheelDelta;
            var zoomOut = delta ? delta < 0 : event.originalEvent.deltaY > 0;
            $img.panzoom('zoom', zoomOut, {increment: 0.1, animate: false, focal: event});
        });
        $img.parent().css('overflow', 'visible'); // panzoom gives us hidden we want visible
    },
    componentWillUnmount: function() {
        $(React.findDOMNode(this.refs.image)).panzoom('destroy');
        $(window).off('resize');
    },
    render: function() {
        return (
            <div className={classNames({container: 1, 'image-container': 1, hide: (this.props.image != this.props.currentImage) || (!this.state.ready) })}
                 width="100%" height="100%">
                <span className="zoom-control zoom-in glyphicon glyphicon-plus"
                      onClick={this.zoomIn}></span>
                <span className="zoom-control zoom-out glyphicon glyphicon-minus"
                      onClick={this.zoomOut}></span>
                <img src={this.props.image}
                     ref="image"
                     onLoad={this.handleLoad}
                     onClick={this.props.onClick}></img>
            </div>
        );
    }
});

let ImageSelector = React.createClass({
    render: function() {
        let images = this.props.subjectImages.map((src, i) => {
            return (
                <SelectorImage key={i} src={src} onClick={this.props.onClick} currentImage={this.props.currentImage} />
            );
        });
        return (
            <footer className={this.props.subjectImages.length > 1 ? '' : 'hide'}>
                {images}
            </footer>
        );
    }
});

let SelectorImage = React.createClass({
    handleLoad: function(event) {
        const thumbnailSize = 120;
        let img = React.findDOMNode(this);
        img.width  = thumbnailSize * img.naturalWidth / img.naturalHeight;
        img.height = thumbnailSize;
    },
    render: function() {
        return (
            <img src={this.props.src} onLoad={this.handleLoad} onClick={this.props.onClick}
                 className={this.props.currentImage == this.props.src ? 'selected' : ''} ></img>
        );
    }
});

let Splash = React.createClass({
    componentDidMount: function() {
        $(React.findDOMNode(this)).on('hidden.bs.modal', this.props.onHide);
        $(React.findDOMNode(this)).modal('show');
        $(React.findDOMNode(this)).find('.modal-footer button').focus();
    },
    render: function() {
        return (
             <div id="splash" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.
                            </p>
                            <p>
                            Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. Curabitur venenatis pulvinar tellus gravida ornare. Sed et erat faucibus nunc euismod ultricies ut id justo. Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis lectus ac semper. Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies. Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. Fusce vel volutpat elit. Nam sagittis nisi dui.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Got it. Let me transcribe!</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

let Wizard = React.createClass({
    render: function() {
        return (
            <div></div>
        );
    }
});

let Form = React.createClass({
    firstField: 'accessionNumber',
    getInitialState: function() {
        return {
            hasFocus: this.firstField,
            alreadySkipped: false,
            helpExpanded: false
        };
    },
    componentWillReceiveProps: function(nextProps) {
        if (this.props.subjectId != nextProps.subjectId || this.props.disabled != nextProps.disabled) {
            this.setState({ hasFocus: this.firstField, alreadySkipped: false },
                          function() { React.findDOMNode(this.refs[this.firstField]).focus(); });
        }
    },
    handleSkip: function() {
        if (this.state.alreadySkipped) {
            this.props.onSkip();
        }
        this.setState({alreadySkipped: ! this.state.alreadySkipped});
    },
    handleSubmit: function(event) {
        event.preventDefault();
        // Validate form
        // Send completed data
        this.props.onSubmit(event.target);
    },
    handleHelpExpandClick: function() {
        this.setState({helpExpanded: ! this.state.helpExpanded});
    },
    handleFocus: function(controlName) {
        this.setState({ hasFocus: controlName }, function() { React.findDOMNode(this.refs[controlName]).focus(); });
    },
    componentDidMount: function() {
        $('#nfn-form-finder').dialog({
            closeEscape: false,
            dialogClass: 'nfn-form',
            resizable: false,
            position: {my: 'right top', at: 'right-10 top+160'},
            draggable: false
        }).parent().draggable();
        $(window).on('resize', () => {
            let $elt = $('.nfn-form'),
                left = $(window).width() - $elt.width() - global.widthPadding - 10;
            $elt.css({top: '160px', left: left + 'px' });
        });
        this.setState({ hasFocus: this.firstField }, function() { React.findDOMNode(this.refs[this.firstField]).focus(); });
    },
    render: function() {
        return (
            <div id="nfn-form-finder">
                <div className="form-help">
                    <FormHelp hasFocus={this.state.hasFocus} expanded={this.state.helpExpanded} handleClick={this.handleHelpExpandClick} disabled={this.props.disabled}
                        helpName="accessionNumber" title="ACCESSION NUMBER (Acc. No.)"
                        text="No help yet" />
                    <FormHelp hasFocus={this.state.hasFocus} expanded={this.state.helpExpanded} handleClick={this.handleHelpExpandClick} disabled={this.props.disabled}
                        helpName="catalogNumber" title="CATALOG NUMBER (Cat. No.)"
                        text='An identifier (preferably unique) for the record within the data set or collection. Examples: "2008.1334", "145732a", "145732".' />
                    <FormHelp hasFocus={this.state.hasFocus} expanded={this.state.helpExpanded} handleClick={this.handleHelpExpandClick} disabled={this.props.disabled}
                        helpName="family" title="FAMILY (or higher taxon) NAME(S)"
                        text="The full scientific name of the family in which the taxon is classified. You may include higher taxonomic classifications like class and order." />
                    <FormHelp hasFocus={this.state.hasFocus} expanded={this.state.helpExpanded} handleClick={this.handleHelpExpandClick} disabled={this.props.disabled}
                        helpName="scientificName" title="SCIENTIFIC NAME"
                        text="This is the species name. Include at least genus and species as written, but do not record Scientific Author’s name here." />
                    <FormHelp hasFocus={this.state.hasFocus} expanded={this.state.helpExpanded} handleClick={this.handleHelpExpandClick} disabled={this.props.disabled}
                        helpName="collectors" title="COLLECTOR(S)"
                        text="This is the name of the person that collected this specimen." />
                    <FormHelp hasFocus={this.state.hasFocus} expanded={this.state.helpExpanded} handleClick={this.handleHelpExpandClick} disabled={this.props.disabled}
                        helpName="location" title="LOCATION"
                        text="The place name or geographic description of the place where the specimen was found. Please see examples." />
                    <FormHelp hasFocus={this.state.hasFocus} expanded={this.state.helpExpanded} handleClick={this.handleHelpExpandClick} disabled={this.props.disabled}
                        helpName="habitat" title="HABITAT"
                        text="This is a description of the area where the specimen was found. Please see examples." />
                    <FormHelp hasFocus={this.state.hasFocus} expanded={this.state.helpExpanded} handleClick={this.handleHelpExpandClick} disabled={this.props.disabled}
                        helpName="dateStarted" title="DATE COLLECTION STARTED"
                        text='This is the day on which the specimen was collected, or a period of time during which the specimen could have been collected. If there is a range of dates, enter the beginning date in the boxes below, and the ending date below. If there is just one date, enter it into the "Begin Date Collected" fields below and leave the "End Date Collected" fields empty.' />
                    <FormHelp hasFocus={this.state.hasFocus} expanded={this.state.helpExpanded} handleClick={this.handleHelpExpandClick} disabled={this.props.disabled}
                        helpName="dateEnded" title="DATE COLLECTION ENDED"
                        text="This is the end day in a period of time during which the specimen could have been collected. Conventions are identical to other date information on the label. If there is only one date on the label, please leave these fields blank." />
                    <FormHelp hasFocus={this.state.hasFocus} expanded={this.state.helpExpanded} handleClick={this.handleHelpExpandClick} disabled={this.props.disabled}
                        helpName="identifiedBy" title="IDENTIFIED BY (ID. By)"
                        text='A list (concatenated and separated) of names of people, groups, or organizations who assigned the Taxon to the subject. The recommended best practice is to separate the values with a vertical bar ("|"). Examples: "James L. Patton", "Theodore Pappenfuss | Robert Macey".' />
                    <FormHelp hasFocus={this.state.hasFocus} expanded={this.state.helpExpanded} handleClick={this.handleHelpExpandClick} disabled={this.props.disabled}
                        helpName="stationNumber" title="STATION NUMBER (Sta. No.)"
                        text="No help yet." />
                    <FormHelp hasFocus={this.state.hasFocus} expanded={this.state.helpExpanded} handleClick={this.handleHelpExpandClick} disabled={this.props.disabled}
                        helpName="otherNotes" title="OTHER NOTES"
                        text="Information that is not included in the other fields. Examples of this include things like collecting method, the scientific names of host plants and collecting times. You do not need to enter the unique identifying number (e.g. 'EMEC29017') or the species name of the insect, because we have this information already." />
                </div>
                <div className="floating discuss"><a target="Blank" href={this.props.talkHref} tabIndex="-1" disabled={this.props.disabled} >Discuss</a></div>
                <div className="floating skipper"><a tabIndex="-1" onClick={this.handleSkip} disabled={this.props.disabled}>
                    {this.state.alreadySkipped ? 'Are you Sure?' : 'Skip Record'}</a></div>
                <form onSubmit={this.handleSubmit} name="transcript" autoComplete="on" >
                    <TextField name="accessionNumber" placeholder="-- Acc. No. --" onFocus={this.handleFocus} disabled={this.props.disabled}
                               subjectId={this.props.subjectId} collection={this.props.collection} ref="accessionNumber" />
                    <TextField name="catalogNumber" placeholder="-- Cat. No. --" onFocus={this.handleFocus} disabled={this.props.disabled}
                               subjectId={this.props.subjectId} collection={this.props.collection} ref="catalogNumber" />
                    <TextField name="family" placeholder="-- Family (or higher taxon) Name(s) --" onFocus={this.handleFocus} disabled={this.props.disabled}
                               subjectId={this.props.subjectId} collection={this.props.collection} ref="family" />
                    <TextField name="scientificName" placeholder="-- Scientific Name --" onFocus={this.handleFocus} disabled={this.props.disabled}
                               subjectId={this.props.subjectId} collection={this.props.collection} ref="scientificName" />
                    <TextField name="collectors" placeholder="-- Collector(s) --" onFocus={this.handleFocus} disabled={this.props.disabled}
                               subjectId={this.props.subjectId} collection={this.props.collection} ref="collectors" />
                    <TextField name="location" placeholder="-- Location --" onFocus={this.handleFocus} disabled={this.props.disabled}
                               subjectId={this.props.subjectId} collection={this.props.collection} ref="location" />
                    <TextField name="habitat" placeholder="-- Habitat --" onFocus={this.handleFocus} disabled={this.props.disabled}
                               subjectId={this.props.subjectId} collection={this.props.collection} ref="habitat" />
                    <DateField name="dateStarted" label="Date Collection Started:" onFocus={this.handleFocus} disabled={this.props.disabled}
                               subjectId={this.props.subjectId} collection={this.props.collection} ref="dateStarted" />
                    <DateField name="dateEnded" label="Date Collection Ended (very seldom used):" onFocus={this.handleFocus} disabled={this.props.disabled}
                               subjectId={this.props.subjectId} collection={this.props.collection} ref="dateEnded" />
                    <TextField name="identifiedBy" placeholder="-- ID By --" onFocus={this.handleFocus} disabled={this.props.disabled}
                               subjectId={this.props.subjectId} collection={this.props.collection} ref="identifiedBy" />
                    <TextField name="stationNumber" placeholder="-- Sta. No. --" onFocus={this.handleFocus} disabled={this.props.disabled}
                               subjectId={this.props.subjectId} collection={this.props.collection} ref="stationNumber" />
                    <TextField name="otherNotes" placeholder="-- Other Notes --" onFocus={this.handleFocus} disabled={this.props.disabled}
                               subjectId={this.props.subjectId} collection={this.props.collection} ref="otherNotes" />
                    <input type="submit" value="Finish This Record" disabled={this.props.disabled} />
                </form>
            </div>
        );
    }
});

let TextField = React.createClass({
    getInitialState: function() {
        return { value: '' };
    },
    componentWillReceiveProps: function(nextProps) {
        if (this.props.subjectId != nextProps.subjectId) {
            this.setState({value: '' });
        }
    },
    handleFocus: function() {
        this.props.onFocus(this.props.name);
    },
    handleChange: function(event) {
        this.setState({value: event.target.value });
    },
    handleBlur: function(event) {
        if (! this.state.value) { return; }
        let dittoKey = `${this.props.collection}.${this.props.name}`;
        let dittos   = JSON.parse(localStorage[dittoKey] || '[]');
        let ditto    = {subjectId: this.props.subjectId, value: this.state.value};
        if (dittos.length && dittos[0].subjectId == ditto.subjectId) {
            dittos[0] = ditto;
        } else {
            dittos.unshift(ditto);
        }
        if (dittos.length > 5) {
            dittos.pop();
        }
        localStorage[dittoKey] = JSON.stringify(dittos);
    },
    render: function() {
        return (
            <input type="text"
                   name={this.props.name}
                   value={this.state.value}
                   disabled={this.props.disabled}
                   placeholder={this.props.placeholder}
                   onChange={this.handleChange}
                   onFocus={this.handleFocus}
                   onBlur={this.handleBlur} />
        );
    }
});

let DateField = React.createClass({
    handleFocus: function() {
        this.props.onFocus(this.props.name);
    },
    render: function() {
        let dayOptions = [];
        let yearOptions = [];
        for (let d = 1; d <= 31; ++d) {
            let day = ('0' + d).substr(-2);
            dayOptions.push(<option key={d} value={day}>{day}</option>);
        }
        for (let y = (new Date()).getFullYear(); y >= 1830; --y) {
            yearOptions.push(<option key={y} value={y}>{y}</option>);
        }
        return (
            <div>
                <label>{this.props.label}</label>
                <select name={this.props.name + 'Month'} onFocus={this.handleFocus} disabled={this.props.disabled}>
                    <option key={-1} value={""}>-- Month --</option>
                    <option key={0} value={"00"}>Not Shown</option>
                    <option key={1} value={"01"}>01 - January - I</option>
                    <option key={2} value={"02"}>02 - February - II</option>
                    <option key={3} value={"03"}>03 - March - III</option>
                    <option key={4} value={"04"}>04 - April - IV</option>
                    <option key={5} value={"05"}>05 - May - V</option>
                    <option key={6} value={"06"}>06 - June - VI</option>
                    <option key={7} value={"07"}>07 - July - VII</option>
                    <option key={8} value={"08"}>08 - August - VIII</option>
                    <option key={9} value={"09"}>09 - September - IX</option>
                    <option key={10} value={"10"}>10 - October - X</option>
                    <option key={11} value={"11"}>11 - November - XI</option>
                    <option key={12} value={"12"}>12 - December - XII</option>
                </select>
                <select name={this.props.name + 'Day'} onFocus={this.handleFocus} disabled={this.props.disabled}>
                    <option key={-1} value={''}>-- Day --</option>
                    <option key={0} value={'00'}>Not Shown</option>
                    {dayOptions}
                </select>
                <select name={this.props.name + 'Year'} onFocus={this.handleFocus} disabled={this.props.disabled}>
                    <option key={-1} value={''}>-- Year --</option>
                    <option key={0} value={'0000'}>Not Shown</option>
                    {yearOptions}
                </select>
            </div>
        );
    }
});

let FormHelp = React.createClass({
    render: function() {
        return (
            <div className={classNames({field: 1, hide: this.props.hasFocus != this.props.helpName, expanded: this.props.expanded})}>
                <div className="help-header">
                    {this.props.title}
                    <button className="expand" onClick={this.props.handleClick} disabled={this.props.disabled}>{this.props.expanded ? 'Hide Help' : 'Show Help' }</button>
                </div>
                <div>
                    {this.props.text}
                </div>
            </div>
        );
    }
});

let classNames = function(names) {
    let classes = [];
    for (let key in names) {
        if (names.hasOwnProperty(key) && names[key])
            classes.push(key);
    }
    return classes.join(' ');
};

export default Transcriber;
