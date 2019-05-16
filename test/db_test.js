const tape = require("tape");
const getUser = require("../src/queries/getUser");
const postUser = require("../src/queries/postUser");

tape("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

tape("getUser", t => {
  runDbBuild(function(err, res) {
    t.error(err, "No Error"); //Assert that db_build finished successfully with no errors

    let expected = [
      {
      }
    ];

    getUser((err, result) => {
      if (err) console.log(err);
      t.deepEqual(result, expected, "Returns expected data");
      t.end();
    });
  });
});

tape("PostUser", t => {
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
