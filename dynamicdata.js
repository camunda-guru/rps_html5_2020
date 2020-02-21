window.addEventListener('load',function() {
    //ajax call
    var xhr = null;
    try {
        xhr = new XMLHttpRequest(); //chrome,safari,firefox
    } catch (err) {

        try {
            //  first attempt for Internet Explorer
            xhr = new ActiveXObject("MSXML2.XMLHttp.6.0");
        } catch (err) {
            alert(err);
        }


    }

    table=document.createElement('table');
    section=document.querySelector('#country');
    //event handling
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            //console.log(xhr.responseText);
            response=JSON.parse(xhr.responseText);
            response.forEach(obj=>{
                row=document.createElement('tr');
                col=document.createElement('td');
                textNode=document.createTextNode(obj.name);
                col.appendChild(textNode);
                row.appendChild(col);
                col=document.createElement('td');
                textNode=document.createTextNode(obj.capital);
                col.appendChild(textNode);
                row.appendChild(col);
                col=document.createElement('td');
                textNode=document.createTextNode(obj.population);
                col.appendChild(textNode);
                row.appendChild(col);
                table.appendChild(row);
            })

            section.appendChild(table);
        }
    }
    //request mapping path
    xhr.open('GET', 'https://restcountries.eu/rest/v2/all', false);
    xhr.send();


});




