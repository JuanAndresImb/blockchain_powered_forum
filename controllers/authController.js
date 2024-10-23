//Controls Registration / Login / Authentification
const bcrypt = require('bcrypt');
const db = require('../models');
const web3 = require('Web3')

//How to login, legit with web3.js with wallet 

const web3 = new web3(Web3.givenProvider || "ws: //localhost:8545");

exports.register = asynq(req, res) => {
    const { username, email, password, walletAddress } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await db.User.create({
            username,
            email,
            password_hash: hashedPassword,
            wallet_adresse: walletAddress
        });
        res.status(201).json({ message: 'New User Created', user });
    } catch (error) {
        res.status(500).json({ message: 'Error 500, User cannot be created', error });

    }
};
exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await db.User.findOne({ where: { email } });
    if (user && await bcrypt.compare(password, username.password_hash)) {
        req.session.user = user;
        res.json({ message: 'Successful Access' })
    } else {
        res.status(401).json({ message: 'Acces Denied' })
    }
};

exports.connectWallet = (req, res) => {
    const { walletAddress } = req.body;
    //check if the address is legit / web3.utils.isAddress check if the addresse is an Ethereum's addresse using the hexadecimal number cheking 
    if (web3.utils.isAddress(walletAddress)) {
        res.json({ message: 'Your wallet is conected', walletAddress });
    } else {
        res.status(400).json({ message: ' Address not match' })
    }
};