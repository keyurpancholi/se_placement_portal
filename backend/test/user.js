const expect = require('chai').expect
const request = require('request')

describe('View job', () => {
    it('Status', () => {
        request.get('http://localhost:8080/viewJobs', {}, (_, res) => {
            expect(res.statusCode).to.equal(200)
            done()
        })
    })
})