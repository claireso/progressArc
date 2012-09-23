(function(window, document){

    $(function(){
        var $canvas = $('canvas'),
            currentVal = document.querySelector('#cu'),
            $range = $('input[type="range"]');

        $canvas.progressArc({
            styles: {
                fgColor : "#619fb9",
                bgColor : "#333",
                strokeWidth: 60
            },
            data: {
                start:40
            }
        });
        
        $canvas.on('change',function(e, current){
            currentVal.innerHTML = current;
        });

        $range.on('change',function(){
            $canvas.trigger('setProgress',[$(this).val()]);
        });

        if('ontouchstart' in window){
            document.addEventListener('touchmove',function(e){
                e.preventDefault();
            });
        }

        //external links
        $('a').on('click',function(e){
            e.preventDefault();
            window.open($(this).attr('href'));
        });

        //panel info
        var $header = $('header'),
            togglePanel = function togglePanel(){
                $header.toggleClass('state-close');
            };

        $header.find('>span').on("click", togglePanel);

    });

})(window,document);

