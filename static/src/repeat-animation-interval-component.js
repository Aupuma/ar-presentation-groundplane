AFRAME.registerComponent('repeat-animation-interval', 
{
    schema: 
    {
        animationName: {type: 'string'}, //The animation name must match the startEvents
        interval:{type:'number', default:1000}
    },

    init: function () 
    {        
        var data = this.data;

        let playAnimation = () => 
        {
            setTimeout(()=>{
                this.el.emit(data.animationName) 
            }, data.interval)
        }

        this.el.addEventListener("animationcomplete",function(e){
            var animationDetail = e.detail.name
            var detectedName = animationDetail.split('__')[1]

            if(detectedName == data.animationName)
            {
                playAnimation()
            }
        })

        this.el.emit(data.animationName)
    }
});