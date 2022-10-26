const request = require('supertest');
const app = require('./app');


describe('Auth API', () => {

    it('GET /users ----> ', () => {
        return request(app)
            .get('/users/login')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            fullName: expect.any(String),
                            email: expect.any(String),
                            tokens: expect.any([{ String }]),
                        })

                    ])
                )
            })
    })


    it('GET /users ----> by id', () => {
        return request(app)
            .get('/users/:id')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            fullName: expect.any(String),
                            email: expect.any(String),
                            tokens: expect.any([{ String }]),
                        })

                    ])
                )
            })
    })


    it('POST /users ----> ', () => {
        return request(app)
            .post('/users/login')
            .expect('Content-Type', /json/)
            .expect(201)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        fullName: expect.any(String),
                        email: expect.any(String),
                    })
                )
            })
    })
})

// Media test cases :

describe('Media API', () => {
    it('GET /media ----> ', () => {
        return request(app)
            .get('/media')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            post: expect.any(String),
                            description: expect.any(String),
                        })
                    ])
                )
            })
    })

    it('GET /media ----> by id', () => {
        return request(app)
            .get('/media/:_id')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            post: expect.any(String),
                            description: expect.any(String),
                        })
                    ])
                )
            })
    })

    it('POST /media ----> ', () => {
        return request(app)
            .post('/media/create')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        post: expect.any(String),
                        description: expect.any(String),
                    })
                )
            })
    })

    it('DELETE /media ----> delete post', () => {
        return request(app)
            .delete('/media/:id')
            .expect(200)
    })
})

// Comments Test Cases :

describe("Comments API", () => {
    it('GET /comment ----> ', () => {
        return request(app)
            .get('/comment')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            comments: expect.any(String),
                        })
                    ])
                )
            })
    })

    it('GET /comment ----> by id', () => {
        return request(app)
            .get('/comment/:media_id')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            comments: expect.any(String),
                        })
                    ])
                )
            })
    })


    it('POST /comment ----> ', () => {
        return request(app)
            .post('/comment/comment_post/:media_id')
            .expect('Content-Type', /json/)
            .expect(201)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        comments: expect.any(String),
                    })
                )
            })
    })

    it('DELETE /comment ----> by id', () => {
        return request(app)
            .delete('/comment/:id')
            .expect(200)
    })
})

