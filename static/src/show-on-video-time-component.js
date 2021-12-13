AFRAME.registerComponent('show-on-video-time', 
{
    schema: 
    {
        video:{type:'selector'},
        videoController:{type:'selector'},
        showTime:{type: 'number'},
        showAnimEvent:{type:'string'},
        hideTime:{type: 'number'},
        hideAnimEvent:{type:'string'}
    },

    init: function () 
    {        
        var data = this.data;
        let videoSource = data.video;
        var hasPlayedShowAnim = false;
        var hasPlayedHideAnim = false;
        var el = this.el;
        
        data.videoController.addEventListener('resetPlayback', (event)=>
        {
            hasPlayedHideAnim = false;
            hasPlayedShowAnim = false;
            el.emit(data.hideAnimEvent);
        })

        videoSource.addEventListener('timeupdate', function(evt)
        {
            //console.log("updating")
            if(!hasPlayedShowAnim && videoSource.currentTime > data.showTime)
            {
                el.setAttribute('visible',true);
                el.emit(data.showAnimEvent);
                hasPlayedShowAnim = true;
            }
            if(!hasPlayedHideAnim && videoSource.currentTime > data.hideTime)
            {
                el.emit(data.hideAnimEvent);
                hasPlayedHideAnim = true;
                setTimeout(()=>{
                    el.setAttribute('visible',false);
                },250);
            }
        })
    },
});