const app = require('../src/app')

describe('GET /user', () => {
  it('GET /user responds with 200 containing array of users', () => {
    return supertest(app)
      .get('/user')
      .query({})
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.lengthOf.at.least(1);
        expect(res.body[0]).to.include.all.keys(keyList);
      })
  })
})

describe('DELETE /user/:userId', () =>{
  let id = 'ce20079c-2326-4f17-8ac4-f617bfd28b7f'
  it('DELETE /user/:userId responds with 204 and deletes user by id', () => {
    return supertest(app)
    .del(`/user/${id}`)
    .expect(204);
})

it('Delete returns 404 if user not found', ()=>{
  return supertest(app)
    .del('/user/123213123123')
    .expect(404, 'User not found')
})
})

describe('POST /register testing', ()=>{
  it('POST /register respons with 200', ()=>{
    return supertest(app)
    .post('/register')
    .send({
      'username': 'sallyStudent',
      'password': 'sally5ever',
      'favoriteClub': 'Salt City Curling Club',
      'newsLetter': 'false'
    })
    .expect(200);

  })
})


const keyList = ("id","username","password","favoriteClub","newsLetter")