const vm = require("vm");

const code = "const chai = require(\"chai\");\n" +
	"chai.should();\n" +
	"const test = \"test\";\n" +
	"test.should.be.equal(\"test\");\n";
vm.runInNewContext(code, { global, require }, { filename: "test.js"});