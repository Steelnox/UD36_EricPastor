// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
addEventListener('load', inicializarEventos, false);
function inicializarEventos() {
    var ob = document.getElementById('boton1');
    ob.addEventListener('click', presionBoton, false);
    var ob2 = document.getElementById('boton2');
    ob2.addEventListener('click', presionBoton2, false);
    var ob3 = document.getElementById('boton3');
    ob3.addEventListener('click', presionBoton3, false);
}

function presionBoton() {
    getAll();
}

function presionBoton2() {
    var id = 2;
    getId(id);
}

function presionBoton3() {
    getStock();
}


function getAll() {
    $.ajax({
        url: "https://localhost:44311/api/Products",
        method: 'GET',
        dataType: 'json',
        headers: {
            'Accept': 'application/json'
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJJbnZlbnRvcnlTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiI5ZjlkNTI4OS0wZmQ1LTQxMWMtYWE4Yi0zNzFkODYyYmU4ZDMiLCJpYXQiOiIwMS8wMy8yMDIxIDg6Mjg6MzEiLCJJZCI6IjIiLCJGaXJzdE5hbWUiOiJFcmljIiwiTGFzdE5hbWUiOiJQYXN0b3IiLCJVc2VyTmFtZSI6IkVQMDgiLCJFbWFpbCI6ImVyaWMxNHBhc3RvckBnbWFpbC5jb20iLCJleHAiOjE2MTQ2NzM3MTEsImlzcyI6IkludmVudG9yeUF1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiSW52ZW50b3J5U2VydmljZVBvc3RtYW5DbGllbnQifQ.OzZXTMfBQSnuEdVx0cQQEQsZKIqqzgp3-QT2H5lk2bA',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token , Authorization'
        },
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {
            let text = "<tr>";
            data.forEach(element => {
                text = text + "</tr>" + "<td>" + element.productId + "</td>" + "<td>" + element.name + "</td>" + "<td>" + element.category + "</td>" + "<td>" + element.color + "</td>";
            });
            console.log(JSON.stringify(data));
            document.getElementById("resultados").innerHTML = text;
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getId(id) {
    $.ajax({
        url: "https://localhost:44311/api/Products/" + id,
        method: 'GET',
        dataType: 'json',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJJbnZlbnRvcnlTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiI5ZjlkNTI4OS0wZmQ1LTQxMWMtYWE4Yi0zNzFkODYyYmU4ZDMiLCJpYXQiOiIwMS8wMy8yMDIxIDg6Mjg6MzEiLCJJZCI6IjIiLCJGaXJzdE5hbWUiOiJFcmljIiwiTGFzdE5hbWUiOiJQYXN0b3IiLCJVc2VyTmFtZSI6IkVQMDgiLCJFbWFpbCI6ImVyaWMxNHBhc3RvckBnbWFpbC5jb20iLCJleHAiOjE2MTQ2NzM3MTEsImlzcyI6IkludmVudG9yeUF1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiSW52ZW50b3J5U2VydmljZVBvc3RtYW5DbGllbnQifQ.OzZXTMfBQSnuEdVx0cQQEQsZKIqqzgp3-QT2H5lk2bA',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token , Authorization'
        },
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {
            let text = "<tr>";
            text = "<td>" + data.productId + "</td>" + "<td>" + data.name + "</td>" + "<td>" + data.category + "</td>" + "<td>" + data.color + "</td> </tr>";

            console.log(JSON.stringify(data));
            document.getElementById("resultados").innerHTML = text;
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getStock() {
    $.ajax({
        url: "https://localhost:44311/api/Products/stock",
        method: 'GET',
        dataType: 'json',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJJbnZlbnRvcnlTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiI5ZjlkNTI4OS0wZmQ1LTQxMWMtYWE4Yi0zNzFkODYyYmU4ZDMiLCJpYXQiOiIwMS8wMy8yMDIxIDg6Mjg6MzEiLCJJZCI6IjIiLCJGaXJzdE5hbWUiOiJFcmljIiwiTGFzdE5hbWUiOiJQYXN0b3IiLCJVc2VyTmFtZSI6IkVQMDgiLCJFbWFpbCI6ImVyaWMxNHBhc3RvckBnbWFpbC5jb20iLCJleHAiOjE2MTQ2NzM3MTEsImlzcyI6IkludmVudG9yeUF1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiSW52ZW50b3J5U2VydmljZVBvc3RtYW5DbGllbnQifQ.OzZXTMfBQSnuEdVx0cQQEQsZKIqqzgp3-QT2H5lk2bA',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token , Authorization'
        },
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {
            let text = "<tr>";
            data.forEach(element => {
                text = text + "</tr>" + "<td>" + element.productId + "</td>" + "<td>" + element.name + "</td>" + "<td>" + element.category + "</td>" + "<td>" + element.color + "</td>";
            });
            console.log(JSON.stringify(data));
            document.getElementById("resultados").innerHTML = text;
        },
        error: function (error) {
            console.log(error);
        }
    });
}