import 'mocha';
import chai from 'chai';
import {expect} from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const url = 'mongodb://localhost:27017/dsi-assessment';

describe('Get request test', () => {
    it('Should get all athletes', (done) => {
      chai.request(url).get('/athletes').end((err, res) => {
        if (err) {
          throw new Error('An error has occur');
        }
        console.log(res.body);
        expect(res).to.have.status(200);
        done();
    });
  });
});