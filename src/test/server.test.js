import request from "supertest";
import { expect } from "chai";
import app from '../app.js';

describe('Api CRUD Anime working correctly', () => {
    describe('Server online', () => {
        it('The server should operate without problems', (done) => {
            request(app)
            .get('/')
            .expect(404)
            .end((err, res) => {
                if (err) return done(err);
                expect( res.status ).to.equal(404);
                done();
            })
        })
    }) 
})