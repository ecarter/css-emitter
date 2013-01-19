
# css-emitter

  fire events on css `transition` and `animation` completion

## Installation

    $ component install ecarter/css-callback

## Example

Styles:

    #box {
      transition: all 1s ease;
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      -o-transition: all 1s ease;
      width: 100px;
      height: 100px;
      background: black;
      display: block;
    }
    #box.in {
      width: 200px;
      height: 200px;
    }

Script:

    var cssEvent = require('css-emitter');
    var element = document.querySelector('#box');

    css = cssEvent(element);

    css.on('end', function(e){
      console.log(e);
    });

    setTimeout(function(){
      element.className = 'in';
    }, 1000);

## License

  MIT
