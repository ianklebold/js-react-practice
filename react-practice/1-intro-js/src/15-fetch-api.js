
//Un fetch es una promesa y devuelve un response
const httpClient = fetch('https://jsonplaceholder.ir/users');

/*
Ese response devuelve algo como esto : El response de cualquier API

body: ReadableStream
bodyUsed: false
headers: Headers {}
ok: true
redirected: false
status: 200
statusText: ""
type: "cors"
url: "https://jsonplaceholder.ir/users"
*/



/*

httpClient
.then(response => {
    console.log(response);
    
    response.json() //Json() devuelve una promesa y su resultado es el body sin el ReadableStream
    .then(data => {
        console.log(data);
    });
});

*/

//Es lo mismo que lo siguiente : 
//Los returns (Siempre que sea una promesa lo que se devuelve) permite utilizar los metodos de promesas
httpClient
.then(response =>{ 
    return response.json();
})
.then(data => console.log(data))