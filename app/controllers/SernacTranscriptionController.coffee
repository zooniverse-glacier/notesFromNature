Spine = require('spine')
Subject= require('models/Subject')
EOL = require('models/EOL')

class SernacTranscriptionController extends Spine.Controller
  className: "SernacTranscriptionController"
  

  startWorkflow:(subject)=>
    @currentSubject= subject
    @render()
    @delay =>
      console.log $('div.transcribing')
      $('div.transcribing').transcriberSernac();
    , 300
    
  render:=>
    @html require('views/transcription/sernac')
      subject: @currentSubject
  
 
module.exports = SernacTranscriptionController