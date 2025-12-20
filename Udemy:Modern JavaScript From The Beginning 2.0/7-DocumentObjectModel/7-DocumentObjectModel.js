// DOM
/*
Program interface for web elements
Structure that we can interact with JS
Include tags, attributes, text nodes, etc
Respresent as tree structure
*/
console.log(window);
console.dir(window.document);
console.dir(document.body.innerHTML);
console.dir(document.body.innerText);
//document.body.innerHTML = '<h1>YOYOYOYOYO</h1>';
console.log(document.getElementById('id1'));
const id1 = document.getElementById('id1');
id1.innerHTML = '<h1>Wassup</h1>';

console.log(document.querySelector('#id1 h1').innerText);
/* you can print
document.forms
document.URL
document.characterSet
document.contentType

*/
