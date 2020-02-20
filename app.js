/**
 * Created by BALASUBRAMANIAM on 01-12-2015.
 */


window.addEventListener('load',function()
{
    ahref=document.querySelector('a');
    ahref.addEventListener('click',function()
    {
         notifyMe(); //user defined function
    })

})












function notifyMe() {
    if (!Notification) {
        alert('Desktop notifications not available in your browser. ' +
            'Try Chrome.');
        return;
    }

    if (Notification.permission !== "granted") {
        Notification.requestPermission();
        console.log("got permission");
    }


        console.log("Entering with permission...")
        var notification = new Notification('Notification title', {
            icon: 'images/tweet.jpg',
            body: "Hey there! You've been notified!"
        });

        notification.onclick = function (event) {
            event.preventDefault(); //
           notification.close();
            window.open("https://www.amazon.in/");
        };



}
