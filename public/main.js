document
  .getElementById("searchButton")
  .addEventListener("click", function(event) {
    event.preventDefault();

    fetch('/postUser')
      .then(function(response) {
        return response.json();
      })
      .then(function(err, data) {
        if (err) {
          console.log(err);
        } else {
          var users = JSON.parse(data);
          var table = document.getElementById("users-table");
          users.forEach(function(user) {
            var row = document.createElement("tr");

            var name = document.createElement("td");
            name.textContent = user.CustomerName;
            row.appendChild(name);

            var resturant = document.createElement("td");
            resturant.textContent = user.RestaurantName;
            row.appendChild(restaurant);
            table.appendChild(row);

            var location = document.createElement("td");
            location.textContent = user.location;
            row.appendChild(location);
            table.appendChild(row);

            var rating = document.createElement("td");
            rating.textContent = user.rating;
            row.appendChild(rating);
            table.appendChild(row);
          });
        }
      });
  });
      // fetch('/add')
      // .then(function(response) {
      //   return response.json();
      // })
      // .then(function(data) {
      //
      // })
