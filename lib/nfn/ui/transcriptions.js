// Transcriptions -------------------------------------
nfn.ui.model.Transcription = Backbone.Model.extend({ });

nfn.ui.collection.Transcriptions = Backbone.Collection.extend({
  model: nfn.ui.model.Transcription,
});

// Lines
nfn.ui.model.Line = Backbone.Model.extend({
  defaults: function() {
    this.transcriptions = new nfn.ui.collection.Transcriptions();
  }
});

nfn.ui.collection.Lines = Backbone.Collection.extend({
  model: nfn.ui.model.Line,
});