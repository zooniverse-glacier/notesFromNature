fs = require 'fs'

filePath = './lib/'
files = [
  'vendor/backbone-min.js',

  'vendor/jquery-ui-1.8.24.custom.min.js',
  'vendor/jquery.easing.min.js',
  'vendor/jquery.mousewheel.min.js',
  'vendor/jquery.imagesloaded.min.js',
  'vendor/jquery.mCustomScrollbar.js',
  'vendor/jquery.jscrollpane.js',
  'vendor/spin.min.js',
  'vendor/mustache.js',

  'nfn/nfn.js',
  'nfn/core/config.js',
  'nfn/core/log.js',
  'nfn/core/profiler.js',
  'nfn/core/template.js',
  'nfn/core/view.js',
  'nfn/core/god.js',

  'nfn/ui/widget.js',
  'nfn/ui/spinner.js',
  'nfn/ui/backdrop.js',
  'nfn/ui/tooltip.js',
  'nfn/ui/statusbar.js',
  'nfn/ui/transcriptions.js',
  'nfn/ui/transcriber.js',
  'nfn/ui/photos.js',
  'nfn/ui/closer.js',
  'nfn/ui/popup.js',
  'nfn/ui/discuss.js',
  'nfn/ui/skipper.js',

  'nfn/ui/herbarium/transcriber.js',
  'nfn/ui/herbarium/widget.js',
  'nfn/ui/herbarium/launcher.js',
  'nfn/ui/herbarium/magnifier.js',
  'nfn/ui/herbarium/selection.js',
  'nfn/ui/herbarium/highlight.js',
  'nfn/ui/herbarium/helper.js',

  'nfn/ui/bugs/data/counties.js',
  'nfn/ui/bugs/transcriber.js',
  'nfn/ui/bugs/widget.js',
  'nfn/ui/bugs/magnifier.js',
  'nfn/ui/bugs/selection.js',
  'nfn/ui/bugs/highlight.js',
  'nfn/ui/bugs/helper.js',
  'nfn/ui/bugs/metadata.js',

  'nfn/ui/fungi/transcriber.js',
  'nfn/ui/fungi/widget.js',
  'nfn/ui/fungi/launcher.js',
  'nfn/ui/fungi/magnifier.js',
  'nfn/ui/fungi/selection.js',
  'nfn/ui/fungi/highlight.js',
  'nfn/ui/fungi/helper.js'
]

source = ''

processFiles = ->
  for file in files
    source += fs.readFileSync filePath + file

  fs.writeFileSync __dirname + '/public/nfn/build.js', source

processFiles()

