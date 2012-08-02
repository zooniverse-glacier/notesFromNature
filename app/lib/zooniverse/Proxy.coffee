Spine = require 'spine'

config = require 'lib/zooniverse/config'
{remove} = require 'lib/zooniverse/util'

unless config.apiHost
  console.log config 
  throw new Error 'zooniverse/Proxy needs config.apiHost' unless config.apiHost
  
unless config.proxyPath  
  console.log config
  throw new Error 'zooniverse/Proxy needs config.proxyPath' 

class Proxy extends Spine.Module
  @extend Spine.Events

  @iframe = $("<iframe src='#{config.apiHost}#{config.proxyPath}'></iframe>")
  @iframe.css display: 'none'
  @iframe.appendTo 'body'
  @external = @iframe.get(0).contentWindow

  # The iframe will post "ready" message when it loads.
  @ready: false

  # Requests added here and posted sequentially when the iframe is ready.
  @readyDaisyChain: [new $.Deferred]
  
  @requests:
    READY: new $.Deferred (deferred) =>
      deferred.always =>
        Proxy.ready = true
        # Kick off the daisy chain when the "ready" message comes.
        Proxy.readyDaisyChain[0].resolve()
        remove Proxy.readyDaisyChain[0], from: Proxy.readyDaisyChain

  # Headers to send along with requests (e.g. for authentication)
  @headers: {}

  @postMessage: (message) =>
    console.log message
    @external.postMessage JSON.stringify(message), config.apiHost

  @request: (type, url, data, done, fail) =>
    if typeof data is 'function'
      fail = done
      done = data
      data = null

    id = Math.floor(Math.random() * 999999)
    deferred = new $.Deferred -> @then done, fail

    message = {id, type, url, data, @headers}
    console.log message
    if true
      console.log 'ready'
      @postMessage message
    else
      console.log 'notready'
      # Post this message after the last deferred in the chain has completed.
      Proxy.readyDaisyChain.slice(-1)[0].always =>
        @postMessage message
        remove deferred, from: Proxy.readyDaisyChain

      # Add this deferred to the end of the chain.
      Proxy.readyDaisyChain.push deferred

    Proxy.requests[id] = deferred
    deferred.always => delete Proxy.requests[id]

    deferred

  # Shortcuts
  @get: => @request 'get', arguments...
  @post: => @request 'post', arguments...
  @delete: => @request 'delete', arguments...
  @del: => @request 'delete', arguments...
  @getJSON: => @request 'getJSON', arguments...

  $(window).on 'message', ({originalEvent: e}) =>
    return unless e.origin is config.apiHost
    # Data will come back as:
    # {"id": "1234567890", "response": ["foo", "bar"]}
    {id, failure, response} = JSON.parse e.data
    @requests[id][not failure and 'resolve' or 'reject'] response

module.exports = Proxy
