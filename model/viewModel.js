const {PrismaClient, Prisma} = require('@prisma/client');
const { getView, deleViewUser, viewEdu } = require('../controller/viewController');
const client = new PrismaClient();

module.exports = {
    getViews: async() => {
       const data = await client.$queryRaw`SELECT * FROM "user"`
       return data;
    },
    getViewUser: async(genId) => {
         const dtUser = await client.$queryRaw`SELECT * FROM "user" WHERE id=${genId}`
         return dtUser;
    },
    deleViewUser: async(genId) => {
        const deleUser = await client.$queryRaw`DELETE FROM user WHERE id=${genId}`
        return deleUser;
    },
    upViewUser: async(genId,name,job,newpsth,newp,des1,des2,mail,phone) => {
         const updateedu = await client.$queryRaw`UPDATE "user" SET name=${name}, job=${job},image=${newpsth},avata=${newp},description1=${des1},description2=${des2},mail=${mail},phone=${phone} WHERE id = ${genId} `
         return updateedu;
    },
    // EDUCATION
    getEdu: async() => {
         const data = await client.$queryRaw`SELECT * FROM "education"`
         return data;
    },
    postEdu : async(year,deg,nuni,ifuser,add) => {
        const createuser = await client.$queryRaw`INSERT INTO "education" (year, degree,name, information,address) VALUES ( ${year},${deg},${nuni},${ifuser},${add})`;
        return createuser;
    },
    detailEdu: async(genId) => {
        const data = await client.$queryRaw`SELECT * FROM education WHERE id=${genId}`
        return data;
    },
    deleEdu: async(genId) => {
        const data = await client.$queryRaw`DELETE FROM education WHERE id=${genId}`
        return data;
    },
    viewEdu: async(genId,year,deg,nuni,ifuser,add) => {
         const updateedu = await client.$queryRaw`UPDATE education SET year=${year}, degree=${deg},name=${nuni},information=${ifuser},address=${add} WHERE id = ${genId} `
         return updateedu;
    },
    
    //SKILLS
    getSkill: async() => {
         const data = await client.$queryRaw`SELECT * FROM "skills"`
         return data;
    },
    postskill : async(name,percent) => {
        const createskill = await client.$queryRaw`INSERT INTO "skills" (name, percent) VALUES ( ${name},${percent})`;
        return createskill;
    },
    detailskill: async(genId) => {
         const data = await client.$queryRaw`SELECT * FROM skills WHERE id=${genId}`
         return data;
    },
    deleskill: async(genId) => {
        const data = await client.$queryRaw`DELETE FROM skills WHERE id=${genId}`
        return data;

    },
    deleskill: async(genId,percent,name) => {
        const updateskill = await client.$queryRaw`UPDATE skills SET name=${name},percent=${percent} WHERE id = ${genId} `
        return updateskill;

    },
 //
    getExp: async() => {
        const data = await client.$queryRaw`SELECT * FROM "experience"`
        return data;
    },
    postExp : async(year,job,name,add,des) => {
        const create = await client.$queryRaw`INSERT INTO "experience" (year,job, name, address, description) VALUES ( ${year},${job},${name},${add},${des})`;
        return create;
    },
    detailExp: async(genId) => {
        const data = await client.$queryRaw`SELECT * FROM "experience" WHERE id=${genId}`
         return data;
    },
    deleExp: async(genId) => {
        const data = await client.$queryRaw`DELETE FROM "experience" WHERE id=${genId}`
        return data;

    },
    viewExp: async(genId,year,job,name,add,des) => {
        const updateexp = await client.$queryRaw`UPDATE "experience" SET year=${year}, job=${job},name=${name},address=${add},description=${des} WHERE id = ${genId} `
        return updateexp;

    },

    //PROFILE
    getPro: async() => {
         const data = await client.$queryRaw`SELECT * FROM "profile"`
        return data;
    },
    postPro : async(name,icon,link) => {
        const create = await client.$queryRaw`INSERT INTO "profile" (name,icon, link) VALUES ( ${name},${icon},${link})`;
        return create;
    },
    detailPro: async(genId) => {
        const data = await client.$queryRaw`SELECT * FROM "profile" WHERE id=${genId}`
         return data;
    },
    delePro: async(genId) => {
        const data = await client.$queryRaw`DELETE FROM "profile" WHERE id=${genId}`
        return data;

    },
    viewPro: async(genId,name,icon,link) => {
        const updatePro = await client.$queryRaw`UPDATE "profile" SET name=${name}, icon=${icon},link=${link} WHERE id = ${genId} `
        return updatePro;

    },

    //CONTACT

    getCtc: async() => {
       const data = await client.$queryRaw`SELECT * FROM "contact"`
       return data;
   },
   postCtc : async(name,mail,tt,mes) => {
    const create = await client.$queryRaw`INSERT INTO "contact" (name, mail, title, message) VALUES ( ${name},${mail},${tt},${mes})`;
    return create;
   },
   detailCtc: async(genId) => {
    const data = await client.$queryRaw`SELECT * FROM "contact" WHERE id=${genId}`
    return data;
    },
    deleCtc: async(genId) => {
        const data = await client.$queryRaw`DELETE FROM "contact" WHERE id=${genId}` 
        return data;

    },
    viewCtc: async(genId,name,mail,tt,mes) => {
        const updateCt = await client.$queryRaw`UPDATE "contact" SET name=${name},mail=${mail},title=${tt},message=${mes} WHERE id = ${genId} `
        return updateCt;

    },


    getPort: async() => {
        const data = await client.$queryRaw`SELECT * FROM "portfolio"`
       return data;
   },
    postPort : async(name,image,link) => {
        const create = await client.$queryRaw`INSERT INTO "portfolio" (name,image, link) VALUES ( ${name},${image},${link})`;
        return create;
        },
        detailPort: async(genId) => {
            const data = await client.$queryRaw`SELECT * FROM "portfolio" WHERE id=${genId}`
            return data;
        },
        delePort: async(genId) => {
            const data = await client.$queryRaw`DELETE FROM "portfolio" WHERE id=${genId}`
            return data;

        },
        viewPort: async(genId,name,image,link) => {
            const updateedu = await client.$queryRaw`UPDATE "portfolio" SET name=${name}, image=${image},link=${link} WHERE id = ${genId} `
            return updateedu;

        },


        //CLIENT
        getClient: async() => {
            const data = await client.$queryRaw`SELECT * FROM "clients"`
           return data;
       },
       postClient : async(name,logo) => {
        const create = await client.$queryRaw`INSERT INTO "clients" (name, logo) VALUES ( ${name},${logo})`;
        return create;
        },
        detailClient: async(genId) => {
            const data = await client.$queryRaw`SELECT * FROM "clients" WHERE id=${genId}`
            return data;
        },
        deleClient: async(genId) => {
            const data = await client.$queryRaw`DELETE FROM "clients" WHERE id=${genId}`
            return data;

        },
        viewClient: async(genId,name,logo) => {
            const update = await client.$queryRaw`UPDATE "clients" SET name=${name},logo=${logo} WHERE id = ${genId} `
            return update;

        },

        //SOCIAL
        getSo: async() => {
            const data = await client.$queryRaw`SELECT * FROM "social"`
            return data;
       },
       postSo : async(name,link) => {
        const create = await client.$queryRaw`INSERT INTO "social" (name, link) VALUES ( ${name},${link})`;
        return create;
        },
        detailSo: async(genId) => {
            const data = await client.$queryRaw`SELECT * FROM "social" WHERE id=${genId}`
            return data;
        },
        deleSo: async(genId) => {
            const data = await client.$queryRaw`DELETE FROM "social" WHERE id=${genId}`
            return data;

        },
        viewSo: async(genId,name,link) => {
            const update = await client.$queryRaw`UPDATE "social" SET name=${name},link=${link} WHERE id = ${genId} `
            return update;

        },
    }