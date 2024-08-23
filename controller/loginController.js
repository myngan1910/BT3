const login = require('../model/loginModel.js')

module.exports = {
    login: async(req,res) =>{
        res.render("login");
    },
    postLogin: async(req,res) =>{

        const name = req.body.username;
        const passs = req.body.password;
        const pass = await login.postLogin();
      if(pass[0].user == name && pass[0].pass == passs){
        req.session.userId = pass[0].id;
        
        res.redirect(`/admin/userInfo`);
      } else{
        res.redirect('/login')
      }
      
      
    },
    logout: async(req,res) =>{
        req.session.destroy(err => {
            if (err) {
              console.error('Error destroying session:', err);
            }
            res.clearCookie('connect.sid');
            res.redirect(`/admin/userInfo`);
          });

    }

}
