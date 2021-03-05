const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const url = 'http://localhost:5000';
const { describe, it } = require('mocha');

chai.use(chaiHttp);

describe('get the program with id 21824: ', () => {
	it('should get the program with id 21824', done => {
		chai
			.request(url)
			.get('/programs/21824')
			.end(function (err, res) {
				console.log(res.body);
				expect(res.body).to.have.property('id').to.be.equal('21824');
				expect(res).to.have.status(200);
				done();
			});
	});
});

describe('get all programs: ', () => {
	it('should get all programs', done => {
		chai
			.request(url)
			.get('/')
			.end(function (err, res) {
				console.log(res.body);
				expect(res).to.have.status(200);
				done();
			});
	});
});
