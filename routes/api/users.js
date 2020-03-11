const express = require('express');
const router = express.Router();
//將使用者密碼加密
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../../models/User')
const key = require('../../config/keys').secret

/**
 * @route POST api/users/regist
 * @desc Register the User
 * @access Public
 */

router.post('/register', (req, res) => {
    let {
        username,
        password,
        confirm_password,
        name,
        email,
    } = req.body

    //Check for the unique Username
    User.findOne({ username: username }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "帳號名稱已存在"
            });
        }
    })
    //Check for the unique Email
    User.findOne({ email: email }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Email已存在"
            });
        }
    })

    //That data is valid and now we can register the user
    let newUser = new User({
        name,
        username,
        password,
        email
    });
    //Hash our password

    bcrypt.genSalt(10, (err, salt) => {

        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) { console.log(err) };
            newUser.password = hash;
            newUser.save().then(() => {
                return res.status(200).json({
                    success: true,
                    msg: '成功註冊'
                });
            });

        });
    })

})

/**
 * @route POST api/users/regist
 * @desc Login the User
 * @access Public
 */

router.post('/login', (req, res) => {
    User.findOne({ username: req.body.username })
        .then(user => {
            if (!user) {
                return res.status(404).json({
                    msg: 'User not found',
                    success: false
                })
            }
            //比對輸入密碼是否正確
            bcrypt.compare(req.body.password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        //使用者密碼正確，塞一個JWT Token給他吧
                        const payload = {
                            _id: user.id,
                            username: user.username,
                            name: user.name,
                            email: user.email
                        }
                        jwt.sign(payload, key, { expiresIn: 604800 }, (err, token) => {
                            res.status(200).json({
                                success: true,
                                token: `Bearer ${token}`,
                                user: user,
                                msg: "成功登入"
                            });
                        });
                    } else {
                        return res.status(404).json({
                            msg: '密碼錯誤',
                            success: false
                        })
                    }
                }
                )
        })
})

/**
 * @route GET api/users/regist
 * @desc Return User date
 * @access Private
 */
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    })
})

module.exports = router;