var rectPath = new Rect(10,10,100,100)
.addTo(stage)
.attr('fillColor', 'pink')
.animate(new KeyframeAnimation('2000ms',{
    from:{x: 100, y: 100},
    to: {x: 800, y: 100}
 
    
}

));

var RectPath = new Rect(10,10,100,100)
.addTo(stage)
.attr('fillColor', 'purple')
.animate(new KeyframeAnimation('1000ms', {
        from:{x: 800, y:500},
        to: {x: 100, y: 500}
}
));

var rectpath = new Rect(10,10,100,100)
.addTo(stage)
.attr('fillColor', 'green')
.animate(new KeyframeAnimation('1000ms', {
        from:{x: 100, y:500},
        to: {x: 800, y: 100}
}
));

stage.addChild(rectPath);
rectPath.animate('3s',{
        rotation: Math.PI*2
})

stage.addChild(RectPath);
RectPath.animate('3s',{
        rotation: Math.PI*2
})

stage.addChild(rectpath);
rectpath.animate('3s',{
        rotation: Math.PI*2
})