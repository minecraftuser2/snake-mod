javascript:(function(){
    var c = document.querySelector('canvas') || document.querySelector('iframe')?.contentWindow?.document.querySelector('canvas');
    if (!c) { alert("Start the game first!"); return; }
    
    /* Create the green overlay layer */
    var overlay = document.getElementById('greenOverlay') || document.createElement('div');
    overlay.id = 'greenOverlay';
    var rect = c.getBoundingClientRect();
    
    overlay.style.position = 'fixed';
    overlay.style.top = rect.top + 'px';
    overlay.style.left = rect.left + 'px';
    overlay.style.width = rect.width + 'px';
    overlay.style.height = rect.height + 'px';
    overlay.style.backgroundColor = 'rgba(0, 255, 0, 0.25)'; /* 25% Green */
    overlay.style.pointerEvents = 'none'; /* Lets you click through it to play */
    overlay.style.zIndex = '99999';
    
    document.body.appendChild(overlay);
    
    /* Keep the overlay attached if the window resizes */
    window.onresize = function() {
        var r = c.getBoundingClientRect();
        overlay.style.top = r.top + 'px';
        overlay.style.left = r.left + 'px';
    };
})();
