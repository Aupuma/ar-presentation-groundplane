document.addEventListener("DOMContentLoaded", function() 
{
    const target = document.querySelector("#image-target")
    const sceneWrapper = document.querySelector("#SceneWrapper")
    let isFirstTime = true; //Used to avoid problem with first time loading

    target.addEventListener("targetFound", event => {
        console.log(isFirstTime)
        if(isFirstTime)
        {
            setTimeout(ShowElements,300)
            isFirstTime = false;
        }
        else
        {
            ShowElements()
        }
    });

    target.addEventListener("targetLost", event => {
        console.log("Target lost")
        sceneWrapper.emit("hideElements");
    });

    let ShowElements = () =>
    {
        sceneWrapper.emit("showElements");
    }
});