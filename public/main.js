document.getElementById("search").addEventListener("click", function(event) {
   event.preventDefult();

   fetch("/search")
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
 
