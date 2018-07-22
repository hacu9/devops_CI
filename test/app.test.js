const app = require('../app');
const request = require('supertest');

describe('app', function() {
     it('should serve html on index', (done) => {
         	request(app).get('/').expect('Content-Type', /html/).expect(200, done);
     })
})

