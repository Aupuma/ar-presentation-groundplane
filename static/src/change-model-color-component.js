AFRAME.registerComponent('change-model-color', 
{
    schema: { type: 'color', default: '#FF0'},

    init: function () 
    {        
        var data = this.data;

        let changeColor = () => 
        {
            let mesh = this.el.getObject3D('mesh');
            if(!mesh) return;

            mesh.traverse(function(node)
            {
                if(node.isMesh)
                {
                    let mat = new THREE.MeshStandardMaterial;
                    node.material = mat;

                    let color = new THREE.Color(data);
                    node.material.color = color;
                }
            })
        }

        // After gltf model has loaded, switching textures is allowed
        this.el.addEventListener('model-loaded', function(ev){
            changeColor()
        });  
    }
});