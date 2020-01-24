import 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import Server from '../server';

describe('Albums', () => {
  let id;
  it('should get all albums', () =>
    request(Server)
      .get('/api/v1/albums')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body).to.be.an('array');
      }));

  it('should add a new album', () =>
    request(Server)
      .post('/api/v1/albums')
      .send({
        title: 'test',
        releaseDate: '2020-01-20',
        rating: '5',
        year: '2020',
      })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('title')
          .equal('test');
        id = r.body._id;
      }));

  it('should get an album by id', () => {
    request(Server)
      .get('/api/v1/albums/' + id)
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('title')
          .equal('test');
      });
  });

  it('should delete an album by id', () => {
    request(Server)
      .delete('/api/v1/albums/' + id)
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.status).equal(204);
      });
  });
});
