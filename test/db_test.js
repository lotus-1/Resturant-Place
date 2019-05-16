const tape = require("tape");
const getUser = require("../src/queries/getUser");
const postUser = require("../src/queries/postUser");

tape("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});
//
// tape("getUser", t => {
//
// })
