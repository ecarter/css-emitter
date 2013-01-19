
/**
 * Module Dependencies
 */

var Emitter = require('emitter')
  , events = require('event');

// CSS events

var watch = [
  'transitionend'
, 'webkitTransitionEnd'
, 'oTransitionEnd'
, 'MSTransitionEnd'
, 'animationend'
, 'webkitAnimationEnd'
, 'oAnimationEnd'
, 'MSAnimationEnd'
];

/**
 * Expose `CSSnext`
 */

module.exports = CssEmitter;

/**
 * Initialize a new `CssEmitter`
 *
 */

function CssEmitter(element){
  if (!(this instanceof CssEmitter)) return new CssEmitter(element);
  Emitter.call(this);
  this.el = element;
  this.bind();
}

/**
 * Inherit from `Emitter.prototype`
 */

CssEmitter.prototype = new Emitter;

/**
 * Bind CSS events.
 *
 * @api private
 */

CssEmitter.prototype.bind = function(){
  var self = self || this;
  for (var i=0; i < watch.length; i++) {
    events.bind(this.el, watch[i], function(e){
      self.emit('end', e);
    });
  }
};

