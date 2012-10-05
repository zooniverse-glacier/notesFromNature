Spine   = require('spine')
Subject = require('models/Subject')
EOL     = require('models/EOL')

class SernacTranscriptionController extends Spine.Controller
  className: "SernacTranscriptionController"


  startWorkflow:(subject)=>
    @currentSubject= subject
    @render()
    @delay =>

      nfn.load "nfn/", ->

        GOD = new nfn.ui.view.GOD({
          model: new nfn.ui.model.GOD()
        })

        window.GOD = GOD

        transcriberModel = new nfn.ui.model.Herbarium()

        transcriber = new nfn.ui.view.HerbariumTranscriber({
          model: transcriberModel
        })

        callback = -> 
          transcriber.spinner.hide()
          transcriber.startTranscribing()

        transcriber.loadPhoto("http://nfn.s3.amazonaws.com/transcriber_sernac_01.png", callback)

        window.transcriber = transcriber
        

    , 500

  render:=>
    @html require('views/transcription/sernac')
      subject: @currentSubject


module.exports = SernacTranscriptionController
