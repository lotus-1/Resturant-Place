document.getElementById("searchButton").addEventListener("click", function(event) {
   event.preventDefult();


 var xhttp = new XMLHttpRequest();


   fetch("/add")
    .then(function(response) {
      return response.json();
    })

    .then(function(data) {
       console.log(data);
        var node = document.createTextNode("Click Here");
        resturant.appendChild(node);
     })
     catch(function(error) {
        console.log(error);
     });
});


 var request = new XMLHttpRequest();
  request.open('GET', url);
   request.responseType = 'text';
    request.onload = function() {
       pomeDispaly.textContent = request.response;
    };

     request.send();
