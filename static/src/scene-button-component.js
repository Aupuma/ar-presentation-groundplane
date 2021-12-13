AFRAME.registerComponent('scene-button', 
{
    schema: 
    {
        sceneToShow:{type: 'selector'},
        sceneToHide:{type: 'selector'}
    },

    init: function () 
    {        
        var data = this.data;

        let animateButton = () =>
        {
            this.el.emit('push');
            setTimeout(changeScene,200)
        }

        let changeScene = () => 
        {
            data.sceneToHide.emit('hide');
            setTimeout(makeOldInvisible,225);

            data.sceneToShow.setAttribute('visible',true);
            setTimeout(makeNewVisible,150);
        }

        let makeNewVisible = () =>
        {
            data.sceneToShow.emit('show');
        }

        let makeOldInvisible = () =>
        {
            data.sceneToHide.setAttribute('visible',false);
        }

        this.el.setAttribute('class','clickable');
        this.el.addEventListener('click', animateButton);
    },
});