const express = require('express')
const path = require('path')
const app = express()
var body= require('body-parser')
const {PrismaClient} = require('@prisma/client')
const client = new PrismaClient();
const port = 3000
const multer = require('multer')
const { userInfo } = require('os')
const { name } = require('ejs')
const session = require('express-session');
const cookieParser = require('cookie-parser');


const viewRouter = require('./router/viewRouter.js')
const userRouter = require('./router/userRouter.js')
const requireLogin = require('./middleware/checkout.js')
const login = require('./router/loginRouter.js')
app.use('/', express.static(path.join(__dirname, 'profile')))


app.set('view engine', 'ejs')
app.use( body.json() ); 
     
app.use(body.urlencoded({    
  extended: true
})); 
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));



app.use('/admin',requireLogin.requireLogin,viewRouter);
app.use('/', userRouter)
app.use('/', login)






  





























































// app.get('/', async(req, res) => {
//   const user = await client.$queryRaw`SELECT * FROM "user"`
//   const education = await client.$queryRaw`SELECT * FROM "education"`
//   const skill = await client.$queryRaw`SELECT * FROM "skills"`
//   const exp = await client.$queryRaw`SELECT * FROM "experience"`
//   const profile = await client.$queryRaw`SELECT * FROM "profile"`
//   const portfolio = await client.$queryRaw`SELECT * FROM "portfolio"`
//   const clientt = await client.$queryRaw`SELECT * FROM "clients"`
//  console.log({education:education});
 
//   res.render('index1',{userInfo:user[0],education:education, skill:skill, exp:exp, pro:profile, port:portfolio, cli:clientt })
// })
// app.get('//', (req, res) => {
//   res.render('index2')
// })
// app.get('/admin', (req, res) => {
//   res.render('index')
// })
// USER
// app.get('/user', async(req, res) => {
//   const data = await client.$queryRaw`SELECT * FROM "user"`
//  return res.render('user', {data:data})
// })

// app.get('/create-user', async(req, res) => {
 
//   res.render('usercre')
// })

// app.post('/createuser',upload.fields([{name:'image'},{name:'avata'}]), async(req,res) =>{
//   const name = req.body.name;
//   const job = req.body.job;
//   const newpsth= "assets/uploads/" + req.files.image[0].filename
//   const newp= "assets/uploads/" + req.files.avata[0].filename
//   const des1 = req.body.description1;
//   const des2 = req.body.description2;
//   const mail = req.body.mail;
//   const phone = req.body.phone;

//   const create = await client.$queryRaw`INSERT INTO "user" (name, job,image,avata, description1, description2, mail,phone) VALUES ( ${name},${job},${newpsth},${newp},${des1},${des2},${mail},${phone})`;
    
//   return res.redirect(`/user`)
//   })
  // app.get('/inuser/:ID', async (req,res) =>{
  //   const genId = parseInt(req.params.ID);
  //   const data = await client.$queryRaw`SELECT * FROM "user" WHERE id=${genId}`
  //   console.log(data);
  //   return res.render("userDetail", {userDetail: data[0]})
  // })  
  // app.get('/userdele/:ID', async (req,res) =>{
  //   const genId = parseInt(req.params.ID);
  //   const data = await client.$queryRaw`DELETE FROM user WHERE id=${genId}`
  //   res.redirect(`/user`)
  // })  
  
 
//   app.post('/uu/:ID',upload.fields([{name:'image'},{name:'avata'}]), async (req, res) => {
//      const genId = parseInt(req.params.ID);
//     const name = req.body.name;
//   const job = req.body.job;

//  const newpsth= "assets/uploads/" + req.files.image[0].filename
//   const newp= "assets/uploads/" + req.files.avata[0].filename
 
//   const des1 = req.body.description1;
//   const des2 = req.body.description2;
//   const mail = req.body.mail;
//   const phone = req.body.phone;
  

//   console.log(req.files.image[0].path)
//   console.log(req.files.avata[0].path)

//   // newpsth= "assets/uploads/" + req.file.filename
  

//   console.log(newpsth);

//   // res.send(req.files)

//     const updateedu = await client.$queryRaw`UPDATE "user" SET name=${name}, job=${job},image=${newpsth},avata=${newp},description1=${des1},description2=${des2},mail=${mail},phone=${phone} WHERE id = ${genId} `
//     return res.redirect(`/user`)
//   })

// EDUCATION
// app.get('/education', async(req, res) => {
//   const data = await client.$queryRaw`SELECT * FROM "education"`
//  return res.render('education', {data:data})
// })
// app.get('/create-education', async(req, res) => {
 
//   res.render('educationcre')
// })
// app.post('/createdu', async(req,res) =>{
//   const year = req.body.year;
//     const deg = req.body.degree;  
//     const nuni = req.body.name;
//     const ifuser = req.body.information;
//     const add = req.body.address;

//     const createuser = await client.$queryRaw`INSERT INTO "education" (year, degree,name, information,address) VALUES ( ${year},${deg},${nuni},${ifuser},${add})`;
      
//     return res.redirect(`/education`)
//     })

//  app.get('/education/:ID', async (req,res) =>{
//   const genId = parseInt(req.params.ID);
//   const data = await client.$queryRaw`SELECT * FROM education WHERE id=${genId}`
//   console.log(data);
//   return res.render("eduDetail", {eduDetail: data[0]})
// })  
// app.get('/delete/:ID', async (req,res) =>{
//   const genId = parseInt(req.params.ID);
//   const data = await client.$queryRaw`DELETE FROM education WHERE id=${genId}`
//   res.redirect(`/education`)
// })  


// app.post('/education/:ID', async (req, res) => {
//   const genId = parseInt(req.params.ID);
//   const year = req.body.year;
//   const deg = req.body.degree;
//   const nuni = req.body.name;
//   const ifuser = req.body.information;
//   const add = req.body.address;

 
//   const updateedu = await client.$queryRaw`UPDATE education SET year=${year}, degree=${deg},name=${nuni},information=${ifuser},address=${add} WHERE id = ${genId} `
//   return res.redirect(`/education`)
// })

//SKILLS

// app.get('/skills', async(req, res) => {
//   const data = await client.$queryRaw`SELECT * FROM "skills"`
//  return res.render('skill', {data:data})
// })
// app.get('/create-skill', async(req, res) => {
 
//   res.render('skillcre')
// })

// app.post('/createskill', async(req,res) =>{
//     const name = req.body.name;
//     const percent = parseInt(req.body.percent);

//     const createskill = await client.$queryRaw`INSERT INTO "skills" (name, percent) VALUES ( ${name},${percent})`;
      
//     return res.redirect(`/skills`)
//     })

//  app.get('/skill/:ID', async (req,res) =>{
//   const genId = parseInt(req.params.ID);
//   const data = await client.$queryRaw`SELECT * FROM skills WHERE id=${genId}`
//   console.log(data);
//   return res.render("skillDetail", {skillDetail: data[0]})
// })  
  // app.get('/delet/:ID', async (req,res) =>{
  //   const genId = parseInt(req.params.ID);
  //   const data = await client.$queryRaw`DELETE FROM skills WHERE id=${genId}`
  //   res.redirect(`/skills`)
  // })  


  // app.post('/ski/:ID', async (req, res) => {
  //   const genId = parseInt(req.params.ID);
  //   const percent = parseInt(req.body.percent);
  //   const name = req.body.name;
      

  
  //   const updateskill = await client.$queryRaw`UPDATE skills SET name=${name},percent=${percent} WHERE id = ${genId} `
  //   return res.redirect(`/skills`)
  // })

// EXPERIENCE

// app.get('/experience', async(req, res) => {
//   const data = await client.$queryRaw`SELECT * FROM "experience"`
//   return res.render('exp', {data:data})
// })

// app.get('/create-exp', async(req, res) => {
 
//    res.render('expcre')
// })


// app.post('/createex', async(req,res) =>{
//   const year = req.body.year;
//     const job = req.body.job;
//     const name = req.body.name;
//     const add = req.body.address;
//     const des = req.body.description;

//     const create = await client.$queryRaw`INSERT INTO "experience" (year,job, name, address, description) VALUES ( ${year},${job},${name},${add},${des})`;
      
//      res.redirect(`/experience`)
//     })
//     app.get('/exper/:ID', async (req,res) =>{
//       const genId = parseInt(req.params.ID);
//       const data = await client.$queryRaw`SELECT * FROM "experience" WHERE id=${genId}`
//       console.log(data);
//       return res.render("expDetail", {expDetail: data[0]})
//     })  
//     app.get('/dele/:ID', async (req,res) =>{
//       const genId = parseInt(req.params.ID);
//       const data = await client.$queryRaw`DELETE FROM "experience" WHERE id=${genId}`
//       res.redirect(`/experience`)
//     })  
    
    
//     app.post('/exper/:ID', async (req, res) => {
//       const genId = parseInt(req.params.ID);
//       const year = req.body.year;
//       const job = req.body.job;
//       const name = req.body.name;
//       const add = req.body.address;
//       const des = req.body.description;
    
     
//       const updateedu = await client.$queryRaw`UPDATE "experience" SET year=${year}, job=${job},name=${name},address=${add},description=${des} WHERE id = ${genId} `
//       return res.redirect(`/experience`)
//     })
    


// PROFILE
// app.get('/profile', async(req, res) => {
//   const data = await client.$queryRaw`SELECT * FROM "profile"`
//   return res.render('pro', {data:data})
// })
// app.get('/create-pro', async(req, res) => {
 
//   res.render('procre')
// })


// app.post('/createpro',upload.single('icon'), async(req,res) =>{
//   const name = req.body.name;
//     const icon =  "assets/uploads/" + req.file.filename ;
//     const link = req.body.link;
   

//     const create = await client.$queryRaw`INSERT INTO "profile" (name,icon, link) VALUES ( ${name},${icon},${link})`;
      
//      res.redirect(`/profile`)
//     })
//     app.get('/profi/:ID', async (req,res) =>{
//       const genId = parseInt(req.params.ID);
//       const data = await client.$queryRaw`SELECT * FROM "profile" WHERE id=${genId}`
//       console.log(data);
//       return res.render("proDetail", {proDetail: data[0]})
//     })  
//     app.get('/prodele/:ID', async (req,res) =>{
//       const genId = parseInt(req.params.ID);
//       const data = await client.$queryRaw`DELETE FROM "profile" WHERE id=${genId}`
//       res.redirect(`/profile`)
//     })  
    
    
//     app.post('/prof/:ID',upload.single('icon'), async (req, res) => {
//       const genId = parseInt(req.params.ID);
//       const name = req.body.name;
//       const icon = "assets/uploads/" + req.file.filename;
//       const link = req.body.link;
    
     
//       const updateedu = await client.$queryRaw`UPDATE "profile" SET name=${name}, icon=${icon},link=${link} WHERE id = ${genId} `
//       return res.redirect(`/profile`)
//     })

// CONTACT

// app.get('/contact', async(req, res) => {
//   const data = await client.$queryRaw`SELECT * FROM "contact"`
//   return res.render('ctc', {data:data})
// })



// app.post('/creatact', async(req,res) =>{
//     const name = req.body.name;
//     const mail = req.body.email;
//     const tt = req.body.title;
//     const mes = req.body.message;

//     const create = await client.$queryRaw`INSERT INTO "contact" (name, mail, title, message) VALUES ( ${name},${mail},${tt},${mes})`;
      
//      res.redirect(`/contact`)
//     })
    // app.get('/contact/:ID', async (req,res) =>{
    //   const genId = parseInt(req.params.ID);
    //   const data = await client.$queryRaw`SELECT * FROM "contact" WHERE id=${genId}`
    //   console.log(data);
    //   return res.render("ctcDetail", {ctcDetail: data[0]})
    // })  
    // app.get('/ctdele/:ID', async (req,res) =>{
    //   const genId = parseInt(req.params.ID);
    //   const data = await client.$queryRaw`DELETE FROM "contact" WHERE id=${genId}`
    //   res.redirect(`/contact`)
    // })  
    
    
    // app.post('/conta/:ID', async (req, res) => {
    //   const genId = parseInt(req.params.ID);
    //   const name = req.body.name;
    //   const mail = req.body.email;
    //   const tt = req.body.title;
    //   const mes = req.body.message;
     
    //   const updateedu = await client.$queryRaw`UPDATE "contact" SET name=${name},mail=${mail},title=${tt},message=${mes} WHERE id = ${genId} `
    //   return res.redirect(`/contact`)
    // })
    



///portfolio

// app.get('/portfolio', async(req, res) => {
//   const data = await client.$queryRaw`SELECT * FROM "portfolio"`
//   return res.render('port', {data:data})
// })
// app.get('/create-port', async(req, res) => {

//    res.render('portcre')
// })


// app.post('/createport',upload.single('image'), async(req,res) =>{
//   const name = req.body.name;
//     const image = "assets/uploads/" + req.file.filename;
//     const link = req.body.link;
   

//     const create = await client.$queryRaw`INSERT INTO "portfolio" (name,image, link) VALUES ( ${name},${image},${link})`;
      
//      res.redirect(`/portfolio`)
//     })
//     app.get('/porte/:ID', async (req,res) =>{
//       const genId = parseInt(req.params.ID);
//       const data = await client.$queryRaw`SELECT * FROM "portfolio" WHERE id=${genId}`
//       console.log(data);
//       return res.render("portDetail", {portDetail: data[0]})
//     })  
//     app.get('/portdele/:ID', async (req,res) =>{
//       const genId = parseInt(req.params.ID);
//       const data = await client.$queryRaw`DELETE FROM "portfolio" WHERE id=${genId}`
//       res.redirect(`/portfolio`)
//     })  
    
    
//     app.post('/portfi/:ID',upload.single('image'), async (req, res) => {
//       const genId = parseInt(req.params.ID);
//       const name = req.body.name;
//       const newig = "assets/uploads/" + req.file.filename;
//       const link = req.body.link;
    
     
//       const updateedu = await client.$queryRaw`UPDATE "portfolio" SET name=${name}, image=${newig},link=${link} WHERE id = ${genId} `
//       return res.redirect(`/portfolio`)
//     })



//CLIENT    
// app.get('/clients', async(req, res) => {
//   const data = await client.$queryRaw`SELECT * FROM "clients"`
//  return res.render('client', {data:data})
// })
// app.get('/create-client', async(req, res) => {
  
//  return res.render('clientcre')
// })

// app.post('/createclient',upload.single('logo'), async(req,res) =>{
//     const name = req.body.name;
//     const logo = "assets/uploads/" + req.file.filename;

//     const create = await client.$queryRaw`INSERT INTO "clients" (name, logo) VALUES ( ${name},${logo})`;
      
//     return res.redirect(`/clients`)
//     })

//  app.get('/client/:ID', async (req,res) =>{
//   const genId = parseInt(req.params.ID);
//   const data = await client.$queryRaw`SELECT * FROM "clients" WHERE id=${genId}`
//   console.log(data);
//   return res.render("clientDetail", {clientDetail: data[0]})
// })  
//   app.get('/clientdele/:ID', async (req,res) =>{
//     const genId = parseInt(req.params.ID);
//     const data = await client.$queryRaw`DELETE FROM "clients" WHERE id=${genId}`
//     res.redirect(`/clients`)
//   })  


//   app.post('/tt/:ID',upload.single('logo'), async (req, res) => {
//     const genId = parseInt(req.params.ID);
//     const name = req.body.name;
//     const logo = "assets/uploads/" + req.file.filename;
      

  
//     const update = await client.$queryRaw`UPDATE "clients" SET name=${name},logo=${logo} WHERE id = ${genId} `
//     return res.redirect(`/clients`)
//   })

///social
// app.get('/social', async(req, res) => {
//   const data = await client.$queryRaw`SELECT * FROM "social"`
//  return res.render('social', {data:data})
// })

// app.get('/create-social', async(req, res) => {
 
//   res.render('socialgre')
// })

// app.post('/createsocial', async(req,res) =>{
//   const name = req.body.name;
//   const link = req.body.link;

//   const create = await client.$queryRaw`INSERT INTO "social" (name, link) VALUES ( ${name},${link})`;
    
//   return res.redirect(`/social`)
//   })

//   app.get('/socials/:ID', async (req,res) =>{
//     const genId = parseInt(req.params.ID);
//     const data = await client.$queryRaw`SELECT * FROM "social" WHERE id=${genId}`
//     console.log(data);
//     return res.render("soDetail", {soDetail: data[0]})
//   })  
//     app.get('/socialdele/:ID', async (req,res) =>{
//       const genId = parseInt(req.params.ID);
//       const data = await client.$queryRaw`DELETE FROM "social" WHERE id=${genId}`
//       res.redirect(`/social`)
//     })  
  
  
//     app.post('/ss/:ID', async (req, res) => {
//       const genId = parseInt(req.params.ID);
//       const link = req.body.link;
//       const name = req.body.name;
        
  
    
//       const update = await client.$queryRaw`UPDATE "social" SET name=${name},link=${link} WHERE id = ${genId} `
//       return res.redirect(`/social`)
//     })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})