# progressArc

ProgressArc is a jQuery plugin that allows you to draw a visual loader.

You can control the loader using the `setProgress` custom event and get the current progress value using the `change` custom event.

The user can interact with the arc using his mouse or his finger. So you can use this plugin not just for visual loader but like for exemple a player volume control (like on the [pitchfork player](http://pitchfork.com/) ).

## Documentation

### Basic usage

```js
$("canvas").progressArc({
    styles: {
        fgColor : "#619fb9",
        bgColor : "#333",
        strokeWidth: 60
    },
    data: {
        start:40
    }
});
```

### Options
* fgColor : the color of the arc
* bgColor : the color of the background circle
* strokeWidth : width of the stroke arc
* data.start : the initial position of the arc 
* cursor : boolean to enable the user to move the arc with the mouse (or finger) (default : true)

### Events
You can dynamically update the position of the arc using the `setProgress` event:

```js
var $canvas = $("canvas");
$canvas.trigger('setProgress',[$(this).val()]);
```

To know the current value of the arc, just listen the `change` event:

```js
var $canvas = $("canvas");
$canvas.on('change',function(e, val){
    //code
});
```