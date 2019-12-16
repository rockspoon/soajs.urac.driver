"use strict";

const shell = require('shelljs');
const assert = require('assert');
let sampleData = require("../data/index");

describe("Starting URAC driver Unit test", () => {

    before((done) => {
        done();
    });

    it("Unit Test - import data", (done) => {
        shell.pushd(sampleData.dir);
        shell.exec("chmod +x " + sampleData.shell, (code) => {
            assert.equal(code, 0);
            shell.exec(sampleData.shell, (code) => {
                assert.equal(code, 0);
                shell.popd();
                done();
            });
        });
    });
    it ("Testing all models", (done) => {

        require("./model/mongo/group.js");
        require("./model/mongo/user.js");
        done();
    });

    it ("Testing all BL", (done) => {

        require("./lib/common.js");
        require("./lib/user.js");
        require("./lib/group.js");
        done();
    });

    it ("Testing urac", (done) => {

        require("./urac.driver.js");
        done();
    });

    after((done) => {
        done();
    });
});