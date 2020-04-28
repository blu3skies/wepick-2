import { expect } from "chai";
import WePick from "./server.js";
import request from "supertest";

  describe("Server", function() {
    let testServer = new WePick
    it("renders correctly", function(){
      expect(testServer).to.be.an('object');
    });
  });

  describe("Server running test", function() {
    it("runs the server", function(done) {
      const res = request(WePick).get("/")

      res.expect({val: "Server running"})
      res.expect(200, done)
    })
  })
  