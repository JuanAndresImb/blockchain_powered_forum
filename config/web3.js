const Web3 = require('web3');
const Web3 = new Web3(Web3.givenProvider || "ws://localhost: 8545");

//function that connects the wallet

exports.connecWallet = (req, res) => {
    const { walletAddress } = req.body;
    if (Web3.utils.isAddress(walletAddress)) {
        res.json({ message: 'Wallet conected', walletAddress });
    } else {
        res.status(400).json({ message: 'Address not match' });
    }
};

//events emited from contracts 
Contract.events.NewsVerified({
    filter: {},
    fromBlock: 'latest',
}, (error, event) => {
    if (error) {
        console.error('Error on listening the event:', error);
    } else {
        console.log('Got the Verification Event:', event);
    }
});