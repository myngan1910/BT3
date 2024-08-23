const express = require('express')
const router = express.Router();
const viewController = require('../controller/viewController.js')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './profile/assets/uploads')
    },
    filename: function (req, file, cb) {
      const suffix = file.mimetype.split('/');
      cb(null, `${file.fieldname}-${Date.now()}.${suffix[1]}`);
    }
  })

  const upload = multer({ storage: storage })

  router.get('/',viewController.getAdmin);
// User
router.get('/user',viewController.getView);
router.get('/inuser/:ID',viewController.getViewUser );
router.get('/userdele/:ID',viewController.deleViewUser );
router.post('/uu/:ID', upload.fields([{name:'image'},{name:'avata'}]),viewController.upViewUser );

// EDUCATION
router.get('/education',viewController.getEdu);
router.get('/create-education',viewController.createEdu);
router.post('/createdu', viewController.postEdu);
router.get('/education/:ID',viewController.detailEdu);
router.get('/delete/:ID',viewController.deleEdu);
router.post('/education/:ID', viewController.viewEdu);

// SKILLS
router.get('/skills',viewController.getSkill);
router.get('/create-skill',viewController.createskill);
router.post('/createskill', viewController.postskill);
router.get('/skill/:ID',viewController.detailskill);
router.get('/delet/:ID',viewController.deleskill);
router.post('/ski/:ID', viewController.viewskill);

//EXPERIENCE
router.get('/experience',viewController.getExp);
router.get('/create-exp',viewController.createExp);
router.post('/createex', viewController.postExp);
router.get('/exper/:ID',viewController.detailExp);
router.get('/dele/:ID',viewController.deleExp);
router.post('/exper/:ID', viewController.viewExp);


//PROFILE
router.get('/profile',viewController.getPro);
router.get('/create-pro',viewController.createPro);
router.post('/createpro',upload.single('icon'), viewController.postPro);
router.get('/profi/:ID',viewController.detailPro);
router.get('/prodele/:ID',viewController.delePro);
router.post('/prof/:ID', upload.single('icon'),viewController.viewPro);


// CONTACT
router.get('/contact',viewController.getCtc);
router.post('/creatact', viewController.postCtc);
router.get('/contact/:ID',viewController.detailCtc);
router.get('/ctdele/:ID',viewController.deleCtc);
router.post('/conta/:ID', viewController.viewCtc);

/////portfolio
router.get('/portfolio',viewController.getPort);
router.get('/create-port',viewController.createPort);
router.post('/createport',upload.single('image'), viewController.postPort);
router.get('/porte/:ID',viewController.detailPort);
router.get('/portdele/:ID',viewController.delePort);
router.post('/portfi/:ID',upload.single('image'),viewController.viewPort);

//CLIENT
router.get('/clients',viewController.getClient);
router.get('/create-client',viewController.createClient);
router.post('/createclient',upload.single('logo'), viewController.postClient);
router.get('/client/:ID',viewController.detailClient);
router.get('/clientdele/:ID',viewController.deleClient);
router.post('/tt/:ID',upload.single('logo'),viewController.viewClient);

//SOCIAL
router.get('/social',viewController.getSo);
router.get('/create-social',viewController.createSo);
router.post('/createsocial', viewController.postSo);
router.get('/socials/:ID',viewController.detailSo);
router.get('/socialdele/:ID',viewController.deleSo);
router.post('/ss/:ID',viewController.viewSo);
module.exports = router;