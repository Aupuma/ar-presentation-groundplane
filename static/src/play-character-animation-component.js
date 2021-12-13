AFRAME.registerComponent('play-character-animation', 
{
    schema: 
    {
        clip:{type: 'string'},
        loop:{type: 'boolean', default: true}
    },

    init: function () 
    {        
        var data = this.data;
        var character = document.querySelector('#MiniYo')

        let playAnimation = () =>
        {
            if(data.loop == true)
            {
                character.setAttribute('animation-mixer', {
                    clip: data.clip,
                    loop: 'repeat',
                    clampWhenFinished: false
                  });
            }
            else
            {
                character.setAttribute('animation-mixer', {
                    clip: data.clip,
                    loop: 'once',
                    clampWhenFinished: true
                  });
            }
        }

        this.el.setAttribute('class','clickable');
        this.el.addEventListener('click', playAnimation);
    },
});