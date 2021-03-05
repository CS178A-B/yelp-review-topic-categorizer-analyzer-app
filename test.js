const supertest = require("supertest");

var server = supertest.agent("http://localhost:5000")

describe("test server", () => {
  it("should run port 5000", (done) => {
    .get("/")
    .expect("Content-type", /text/)
    .expect(200)
    .end(function(err, res) {
      done();
    });
  }); 
});
