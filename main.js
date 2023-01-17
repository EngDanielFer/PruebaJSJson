const api_url = 'https://images-api.nasa.gov/search';

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if(this.readyState === 4 && this.status === 200){
        // 0 = unset
        // 1 = opened
        // 2 = headers_received
        // 3 = loading
        // 4 = done
        const data = JSON.parse(this.response);
        //console.log(data);
        var HTMLResponse = document.getElementById("app");
        for (var i=0;i<10;i++){
            console.log(data.collection.items[i].data[0].title);
            HTMLResponse.innerHTML += `<tr><td>${data.collection.items[i].data[0].title}</td>
            <td><img src='https://images-assets.nasa.gov/video/${data.collection.items[i].data[0].title}/${data.collection.items[i].data[0].title}~thumb.jpg'></td>
            <td>${data.collection.items[i].data[0].description}</td></tr>`;
        }
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open('GET', `${api_url}?q=apollo%2011`);
xhr.send();