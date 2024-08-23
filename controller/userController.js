const express = require('express')
const app = express()
const userModel = require('../model/viewModel.js')

module.exports = {
    getUser: async(req,res) => {
        const user = await userModel. getViews();
        const education = await userModel.getEdu();
        const skill = await userModel.getSkill();
        const exp = await userModel.getExp();
        const profile = await userModel.getPro();
        const portfolio = await userModel.getPort();
        const clientt = await userModel.getClient();
        res.render('index1',{userInfo:user[0],education:education, skill:skill, exp:exp, pro:profile, port:portfolio, cli:clientt })
    }
}