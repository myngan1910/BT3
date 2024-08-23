const {PrismaClient, Prisma} = require('@prisma/client');
const login = require('../controller/loginController');
const client = new PrismaClient();

module.exports = {
    postLogin: async() =>{
        const pass = await client.$queryRaw`SELECT * FROM "dangnhap"`
        return pass;

    }
}