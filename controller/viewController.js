const ViewModel = require('../model/viewModel.js')

module.exports = {
    getAdmin: async(req,res) => {
        res.render('index')
},
    getView: async(req,res) => {
        const listView = await ViewModel.getViews();
        return res.render('user', {data:listView})
},
    getViewUser: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const getlist = await ViewModel.getViewUser(genId);
        return res.render("userDetail", {userDetail: getlist})

    },
    deleViewUser: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const delelist = await ViewModel.deleViewUser(genId);
        res.redirect(`/admin/user`)
    },
    upViewUser: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
      const job = req.body.job;
    
     const newpsth= "assets/uploads/" + req.files.image[0].filename
      const newp= "assets/uploads/" + req.files.avata[0].filename
     
      const des1 = req.body.description1;
      const des2 = req.body.description2;
      const mail = req.body.mail;
      const phone = req.body.phone;
      const upUser = await ViewModel.upViewUser(genId,name,job,newpsth,newp,des1,des2,mail,phone);
      return res.redirect(`/admin/user`)

    },
    // EDUCATION
    getEdu: async(req,res) => {
        const data = await ViewModel.getEdu();
        return res.render('education', {data:data})
    },
    createEdu: async(req,res) => {
        res.render('educationcre')
    },
    postEdu:  async(req,res) => {
        const year = req.body.year;
        const deg = req.body.degree;  
        const nuni = req.body.name;
        const ifuser = req.body.information;
        const add = req.body.address;
        const createEdu =  await ViewModel.postEdu(year,deg,nuni,ifuser,add);
        return res.redirect(`/admin/education`)
    },
    detailEdu: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const detailEdu =  await ViewModel.detailEdu(genId)
        return res.render("eduDetail", {eduDetail: detailEdu})
    },
    deleEdu: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const deleEdu =  await ViewModel.deleEdu(genId)
  
       res.redirect(`/admin/education`)
    },
    viewEdu: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const year = req.body.year;
        const deg = req.body.degree;
        const nuni = req.body.name;
        const ifuser = req.body.information;
        const add = req.body.address;
        const createEdu =  await ViewModel.viewEdu(genId,year,deg,nuni,ifuser,add);
        
       
        return res.redirect(`/admin/education`)


    },
    // SKILLS
    getSkill: async(req,res) => {
        const data = await ViewModel.getSkill();
        return res.render('skill', {data:data})
    },
    createskill: async(req,res) => {
        res.render('skillcre')
    },
    postskill:  async(req,res) => {
        const name = req.body.name;
        const percent = parseInt(req.body.percent);
        const createskill =  await ViewModel.postskill(name,percent);
        
        return res.redirect(`/admin/skills`)
    },
    detailskill: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const detailskill=  await ViewModel.detailskill(genId)
        return res.render("skillDetail", {skillDetail: detailskill})
      
       
    },
    deleskill: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const deleskill =  await ViewModel.deleskill(genId)
        
        res.redirect(`/admin/skills`)
    },
    viewskill: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const percent = parseInt(req.body.percent);
        const name = req.body.name;
        const viewkill =  await ViewModel.viewskill(genId,percent,name)
    
      
        return res.redirect(`/admin/skills`)
    },

    ///experience
    getExp: async(req,res) =>{
        const dtExp = await ViewModel.getExp();
        
        return res.render('exp', {data:dtExp})
    },
    createExp: async(req,res) => {
        res.render('expcre')
    },
    postExp:  async(req,res) => {
        const year = req.body.year;
        const job = req.body.job;
        const name = req.body.name;
        const add = req.body.address;
        const des = req.body.description;
        const createExp =  await ViewModel.postExp(year,job,name,add,des);

      
     res.redirect(`/admin/experience`)
    },
    detailExp: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        
      
        const detailExp=  await ViewModel.detailExp(genId)
        return res.render("expDetail", {expDetail: detailExp})
      
      
       
    },
    deleExp: async(req,res) => {
        const genId = parseInt(req.params.ID);
   
        const deleExp =  await ViewModel.deleExp(genId)
        res.redirect(`/admin/experience`)
        
    },
    viewExp: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const year = req.body.year;
        const job = req.body.job;
        const name = req.body.name;
        const add = req.body.address;
        const des = req.body.description;
    
        const viewExp =  await ViewModel.viewExp(genId,year,job,name,add,des)
      return res.redirect(`/admin/experience`)
    },

    // PROFILE
    getPro: async(req,res) =>{
        const dtPro = await ViewModel.getPro();
        return res.render('pro', {data:dtPro})
    },
    createPro: async(req,res) => {
        res.render('procre')
    },
    postPro:  async(req,res) => {
        const name = req.body.name;
        const icon =  "assets/uploads/" + req.file.filename ;
        const link = req.body.link;
        
        const createPro =  await ViewModel.postPro(name,icon,link);
        res.redirect(`/admin/profile`)
      
    
    },
    detailPro: async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const detailPro=  await ViewModel.detailPro(genId)
        return res.render("proDetail", {proDetail: detailPro})
      
      
        
      
      
       
    },
    delePro: async(req,res) => {
        const genId = parseInt(req.params.ID);
     
        const delePro =  await ViewModel.delePro(genId)
        res.redirect(`/admin/profile`)
        
    },
    viewPro: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const icon = "assets/uploads/" + req.file.filename;
        const link = req.body.link;
        
        
        
    
        const viewPro =  await ViewModel.viewPro(genId,name,icon,link)
        return res.redirect(`/admin/profile`)
    },

    // CONTACT
    getCtc: async(req,res) =>{
        const data = await ViewModel.getCtc();
        return res.render('ctc', {data:data})
    },
    postCtc:  async(req,res) => {
        const name = req.body.name;
        const mail = req.body.email;
        const tt = req.body.title;
        const mes = req.body.message;
        const createCtc =  await ViewModel.postCtc(name,mail,tt,mes);
          
         res.redirect(`../`)
        
       
       
      
    
    },
    detailCtc: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const detailCtc =  await ViewModel.detailCtc(genId)
        return res.render("ctcDetail", {ctcDetail: detailCtc})
    },
    deleCtc: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const deleCtc =  await ViewModel.deleCtc(genId)
        res.redirect(`/admin/contact`)
        
    },
    viewCtc: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const mail = req.body.email;
        const tt = req.body.title;
        const mes = req.body.message;
       
        const viewCt =  await ViewModel.viewCtc(genId,name,mail,tt,mes)
        return res.redirect(`/admin/contact`)
    },

// PORTFOLIO
    getPort: async(req,res) =>{
        const data = await ViewModel.getPort();
        return res.render('port', {data:data})
    },
    createPort: async(req,res) => {
        res.render('portcre')
    },
    postPort:  async(req,res) => {
        const name = req.body.name;
        const image = "assets/uploads/" + req.file.filename;
        const link = req.body.link;
         
        const createPort =  await ViewModel.postPort(name,image,link);
        res.redirect(`/admin/portfolio`)
    },
    detailPort: async(req,res) => {
        const genId = parseInt(req.params.ID);
       
        const detailport=  await ViewModel.detailPort(genId)
        return res.render("portDetail", {portDetail: detailport})
       
    },
    delePort: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const delePro =  await ViewModel.delePort(genId)
        res.redirect(`/admin/portfolio`)
    },
    viewPort: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const image = "assets/uploads/" + req.file.filename;
        const link = req.body.link;
       
        const viewPro =  await ViewModel.viewPort(genId,name,image,link)
        return res.redirect(`/admin/portfolio`)
    },


    //CLIENT
    getClient: async(req,res) =>{
        const data = await ViewModel.getClient();
        return res.render('client', {data:data})
    },
    createClient: async(req,res) => {
        return res.render('clientcre')
    },
    postClient:  async(req,res) => {
        const name = req.body.name;
        const logo = "assets/uploads/" + req.file.filename;
        const createPort =  await ViewModel.postClient(name,logo);
        return res.redirect(`/admin/clients`)
    },
    detailClient: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const detailClient=  await ViewModel.detailClient(genId)
        return res.render("clientDetail", {clientDetail: detailClient})
       
    },
    deleClient: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const delePro =  await ViewModel.deleClient(genId)
        res.redirect(`/admin/clients`)
    },
    viewClient: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const name = req.body.name;
        const logo = "assets/uploads/" + req.file.filename;
        const viewPro =  await ViewModel.viewClient(genId,name,logo)
        return res.redirect(`/admin/clients`)
    },

    //SOCIAL
    getSo: async(req,res) =>{
        const data = await ViewModel.getSo();
        return res.render('social', {data:data})
    },
    createSo: async(req,res) => {
        res.render('socialgre')
    },
    postSo:  async(req,res) => {
        const name = req.body.name;
        const link = req.body.link;
        const createPort =  await ViewModel.postSo(name,link);
        return res.redirect(`/admin/social`)
    },
    detailSo: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const deta=  await ViewModel.detailSo(genId)
        return res.render("soDetail", {soDetail: deta})
       
    },
    deleSo: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const delePro =  await ViewModel.deleSo(genId)
        res.redirect(`/admin/social`)
    },
    viewSo: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const link = req.body.link;
        const name = req.body.name;
        const viewPro =  await ViewModel.viewSo(genId,name,link)
        return res.redirect(`/admin/social`)
    },
}