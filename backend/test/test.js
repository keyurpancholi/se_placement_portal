const expect = require('chai').expect
const request = require('request')
const { addJob, addUser } = require('../util/services')



describe('Testing add job', () => {
    describe('addJob()', () => {
        const Job = {
            companyName: 'ICICI Lombard',
            position: 'Risk Analyst',
            salary: 13,
            description: 'This is a test description for ICICI',
            type: 'Technical',
            category: 'Super Dream',
            imageUrl: 'https://media2.vault.com/14343503/210909_jp-morgan_logo.jpg',
            mingpa: 8.5
        }

        const Joblist = []

        it('Should increase the length of job array', () =>{
            let oldlen = Joblist.length
            addJob(Joblist, Job)
            expect(Joblist.length).to.equal(oldlen+1)
        })

        it('Should have latest job at the end of the list', () => {
            let latestJob = Job

            addJob(Joblist, Job)
            expect(Joblist[Joblist.length-1]).to.equal(latestJob)
        })
    })
})

describe('Testing add user', () => {
    describe('addUser()', () => {
        const User = {
            username: 'Test username',
            email: 'testusername@gmail.com',
            password: 'testusername123',
            cgpa: 9
        }

        const userlist = []

        it('Should increase the length of the user array', () => {
            const oldlen = userlist.length
            addUser(userlist, User)
            expect(userlist.length).to.equal(oldlen+1)
        })

        it('Should have latest user at the end of the list', () => {
            let latestuser = User;

            addUser(userlist, User)
            expect(userlist[userlist.length-1]).to.equal(latestuser)
        })
    })
})

