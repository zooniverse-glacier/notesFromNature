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
        transcriberModel = new nfn.ui.model.Sernac()

        transcriber = new nfn.ui.view.SernacTranscriber({
          model: transcriberModel
        })

        transcriber.loadPhoto("http://assets.javierarce.com/biotrans/transcriber_sernac_01.png")

        window.transcriber = transcriber

    , 500

  render:=>
    @html require('views/transcription/sernac')
      subject: @currentSubject


module.exports = SernacTranscriptionController
