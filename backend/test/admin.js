const expect = require('chai').expect
const request = require('request')

describe('Testing add job', () => {
    it('Status', () => {
        request.post("http://localhost:8080/addNewJob", {body: {}}, (_, res) => {
            console.log(res.statusCode)
            expect(res.statusCode).to.equal(201)
            done()
        })
    })
})
