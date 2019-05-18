const tape = require("tape");
const getUser = require("../src/queries/getUser");
const postUser = require("../src/queries/postUser");
const runDbBuild = require("../src/database/db_build");

tape("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

tape("getUser", (t) => {
  runDbBuild(function(err, res) {
    t.error(err, "No Error"); //Assert that db_build finished successfully with no errors

    let expected = [
      {
        id: 1,
        name: 'Lospago',
        location: 'Osfia',
        business_owner: 'Walaa',
        type_of_restaurant: 'Italian'
      }
    ];

    getUser((err, result) => {
      if (err) console.log(err);
      t.deepEqual(result, expected, "Returns expected data");
      t.end();
    });
  });
});

tape("postUser", t => {
  runDbBuild(function(err, res) {
    t.error(err, "No Error");

    postData("Minesh", "London", (err, result) => {
      if (err) console.log(err);
      getData((err, result) => {
        if (err) console.log(err);
        t.deepEqual(result.length, 2, "Returns expected data");
        t.end();
      });
    });
  });
});
