const {PrismaClient, Prisma} = require('@prisma/client');
const userController = require('../controller/userController.js');
const client = new PrismaClient();

module.exports = {
    // getUser: async() => {
    //     const user = await client.$queryRaw`SELECT * FROM "user"`
    //     const education = await client.$queryRaw`SELECT * FROM "education"`
    //     const skill = await client.$queryRaw`SELECT * FROM "skills"`
    //     const exp = await client.$queryRaw`SELECT * FROM "experience"`
    //     const profile = await client.$queryRaw`SELECT * FROM "profile"`
    //     const portfolio = await client.$queryRaw`SELECT * FROM "portfolio"`
    //     const clientt = await client.$queryRaw`SELECT * FROM "clients"`
    //     return user,education,skill,exp,profile,portfolio,clientt;
    //  },
}