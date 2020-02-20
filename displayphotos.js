window.addEventListener('load',function()
{
    figureRef=document.querySelector('#uploadedImage');
    if(localStorage.getItem("count")!=undefined) {
        for (i = 0; i < localStorage.getItem("count"); i++) {
            if (localStorage.getItem('doc' + i)) {
                showImage(localStorage.getItem('doc' + i));

            }
        }
    }
})



function showImage(data)
{
    var img=new Image();
    img.src=data;
    img.width=100;
    img.height=100;
    img.onload=function()
    {
        figureRef.appendChild(img);
        hr=document.createElement('hr');
        figureRef.appendChild(hr);
    }


}
