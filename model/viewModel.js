const {PrismaClient, Prisma} = require('@prisma/client');
const { getView, deleViewUser, viewEdu } = require('../controller/viewController');
const client = new PrismaClient();

module.exports = {
    getViews: async() => {
       const data = await client.user.findMany();
       return data;
    },
    getViewUser: async(genId) => {
         const dtUser = await client.user.findUnique({ where: {id:genId}})
         return dtUser;
    },
    deleViewUser: async(genId) => {
        const deleUser = await client.user.deleteMany({where: {id:genId}})
        return deleUser;
    },
    upViewUser: async(genId,name,job,newpsth,newp,des1,des2,mail,phone) => {
         const updateedu = await client.user.update({
            where: {id:genId},
            data: {
                name: name,
                job: job,
                image: newpsth,
                avata: newp,
                description1: des1,
                description2: des2,
                mail: mail,
                phone: phone
            }
         })
         return updateedu;
    },
    // EDUCATION
    getEdu: async() => {
         const data = await client.education.findMany();
         return data;
    },
    postEdu : async(year,deg,nuni,ifuser,add) => {
        const createuser = await client.education.create({
            data: {
                year: year,
                degree: deg,
                name: nuni,
                information: ifuser,
                address: add
            }
        })
        return createuser;
    },
    detailEdu: async(genId) => {
        const data = await client.education.findUnique({
            where: {id:genId}
        })
        return data;
    },
    deleEdu: async(genId) => {
        const data = await client.education.deleteMany({where: {id:genId}})
        return data;
    },
    viewEdu: async(genId,year,deg,nuni,ifuser,add) => {
         const updateedu = await client.education.update({
            where: {id: genId},
            data: {
                year: year,
                degree: deg,
                name: nuni,
                information: ifuser,
                address: add

            }
         })
         return updateedu;
    },
    
    //SKILLS
    getSkill: async() => {
         const data = await client.skills.findMany();
         return data;
    },
    postskill : async(name,percent) => {
        const createskill = await client.skills.create({
            data: {
                name: name,
                percent: percent
            }
        })
        return createskill;
    },
    detailskill: async(genId) => {
         const data = await client.skills.findUnique({ where: {id: genId}})
         return data;
    },
    deleskill: async(genId) => {
        const data = await client.skills.deleteMany({ where: {id:genId}})
        return data;

    },
    deleskill: async(genId,percent,name) => {
        const updateskill = await client.skills.update({
            where: {id:genId},
            data: {
                name: name,
                percent: percent
            }
        })
        return updateskill;

    },
 //
    getExp: async() => {
        const data = await client.experience.findMany();
        return data;
    },
    postExp : async(year,job,name,add,des) => {
        const create = await client.experience.create({
            data: {
                year: year,
                job: job,
                name: name,
                address: add,
                description: des
            }
        })
        return create;
    },
    detailExp: async(genId) => {
        const data = await client.experience.findUnique({ where: {id: genId}})
         return data;
    },
    deleExp: async(genId) => {
        const data = await client.experience.deleteMany({ where: {id:genId}})
        return data;

    },
    viewExp: async(genId,year,job,name,add,des) => {
        const updateexp = await client.experience.update({
            where: {id: genId},
            data: {
                year: year,
                job: job,
                name: name,
                address: add,
                description: des
            }
        })
        return updateexp;

    },

    //PROFILE
    getPro: async() => {
         const data = await client.profile.findMany()
        return data;
    },
    postPro : async(name,icon,link) => {
        const create = await client.profile.create({
            data: {
                name: name,
                icon: icon,
                link: link
            }
        })
        return create;
    },
    detailPro: async(genId) => {
        const data = await client.profile.findUnique({where: {id:genId}})
         return data;
    },
    delePro: async(genId) => {
        const data = await client.profile.deleteMany({ where: {id:genId}})
        return data;

    },
    viewPro: async(genId,name,icon,link) => {
        const updatePro = await client.profile.update({
            where: {id:genId},
            data: {
                name: name,
                icon: icon,
                link: link
            }
        })
        return updatePro;

    },

    //CONTACT

    getCtc: async() => {
       const data = await client.contact.findMany()
       return data;
   },
   postCtc : async(name,mail,tt,mes) => {
    const create = await client.contact.create({
        data: {
            name: name,
            mail: mail,
            title: tt,
            message: mes
        }
    })
    return create;
   },
   detailCtc: async(genId) => {
    const data = await client.contact.findUnique({ where: {id: genId}})
    return data;
    },
    deleCtc: async(genId) => {
        const data = await client.contact.deleteMany({ where: {id:genId}})
        return data;

    },
    viewCtc: async(genId,name,mail,tt,mes) => {
        const updateCt = await client.contact.update({
            where: {id:genId},
            data: {
                name: name,
                mail: mail,
                title: tt,
                message: mes
            }
        })
        return updateCt;

    },

//PORTFOLIO 
    getPort: async() => {
        const data = await client.portfolio.findMany();
       return data;
   },
    postPort : async(name,image,link) => {
        const create = await client.portfolio.create({
            data: {
                name: name,
                image: image,
                link: link
            }
        })
        return create;
        },
        detailPort: async(genId) => {
            const data = await client.portfolio.findUnique({where: {id:genId}})
            return data;
        },
        delePort: async(genId) => {
            const data = await client.portfolio.deleteMany({where: {id:genId}})
            return data;

        },
        viewPort: async(genId,name,image,link) => {
            const updateedu = await client.portfolio.update({
                where: {id:genId},
                data: {
                    name: name,
                    image: image,
                    link: link
                }
            })
            return updateedu;

        },


        //CLIENT
        getClient: async() => {
            const data = await client.clients.findMany()
           return data;
       },
       postClient : async(name,logo) => {
        const create = await client.clients.create({
            data: {
                name: name,
                logo: logo
            }
        })
        return create;
        },
        detailClient: async(genId) => {
            const data = await client.clients.findUnique({
                where: {id:genId}
            })
            return data;
        },
        deleClient: async(genId) => {
            const data = await client.clients.deleteMany({where: {id:genId}})
            return data;

        },
        viewClient: async(genId,name,logo) => {
            const update = await client.clients.update({
                where: {id:genId},
                data: {
                    name: name ,
                    logo: logo
                }
            })
            return update;

        },

        //SOCIAL
        getSo: async() => {
            const data = await client.social.findMany()
            return data;
       },
       postSo : async(name,link) => {
        const create = await client.social.create({
            data: {
                name: name,
                link: link
            }
        })
        return create;
        },
        detailSo: async(genId) => {
            const data = await client.social.findUnique({where: {id:genId}})
            return data;
        },
        deleSo: async(genId) => {
            const data = await client.social.deleteMany({where: {id:genId}})
            return data;

        },
        viewSo: async(genId,name,link) => {
            const update = await client.social.update({
                where: {id:genId},
                data: {
                    name: name,
                    link: link
                }
            })
            return update;

        },
    }