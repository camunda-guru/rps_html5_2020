window.addEventListener('load',function()
{
    //retrieve data from session
    if(window.sessionStorage.getItem('account')!=undefined)
    {
       accountObj=window.sessionStorage.getItem('account');
       alert(accountObj);
    }

    buttonRef=document.querySelector('#upload')
    fileRef=document.querySelector('#photo');
    figureRef=document.querySelector('#uploadedImage');
    fileType=/image.*/

    buttonRef.addEventListener('click',function()
    {
        //reading multiple files
        //console.log(fileRef.files.length);
        localStorage.setItem("count",fileRef.files.length);
        for(let i=0;i<fileRef.files.length;i++)
        {
            showImage(fileRef.files[i],i);
        }


    })

})

function showImage(file,pos)
{
    fileReader=new FileReader();
    if(file.type.match(fileType))
    {
        fileReader.onload=function(evt)
        {
            //across the browser sessions
            localStorage.setItem('doc'+pos,evt.target.result);
            /*
            var image=new Image();
            image.src=evt.target.result;
            image.width=100;
            image.height=100;
            figureRef.appendChild(image);
            hr=document.createElement('hr');
            figureRef.appendChild(hr);

             */
        }
    }
    fileReader.readAsDataURL(file);
}
