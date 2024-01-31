const request = require('supertest')
const app = require('../src/index')


test('Should manage like for image', () => {
    request(app).post('/likes')
        .send({imageId: 'fcc40f61-b7cd-4813-88c0-4d7f907a9b19', liked: true})
        .then((res) => {
            expect(res.status).toBe(201)
            expect(res.body.name).toBe('Luiz')
    })
})

test('Shoud get image likes',  () => {
    request(app).get('/likes/count/').then( (res) => {
        expect(res.status).toBe(200)
        expect(res.body.length).toBeGreaterThan(0)
    })
})
