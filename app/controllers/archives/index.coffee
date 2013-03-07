ArchivesList = require 'controllers/archives/list'
ArchivesItem = require 'controllers/archives/item'
Transcriptions = require 'controllers/TranscriptionController'

class ArchivesStack extends Spine.Stack

  controllers:
    archivesList: ArchivesList
    archivesItem: ArchivesItem
    transcribe: Transcriptions

  routes:
    '/archives': 'archivesList'
    '/archives/:id': 'archivesItem'
    '/archives/:id/transcribe': 'transcribe'

  default: 'archivesList'

module.exports = ArchivesStack