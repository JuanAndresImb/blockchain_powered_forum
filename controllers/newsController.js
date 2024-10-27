export.publish = async (re, res) => {
    const { title, content, userWalletAddress } = req.body;

    try {
        //call the contract and register the news into the blockchain
        const receipt = await Contract.methods.publishNews(title, content, userWalletAddress).send({
            from: userWalletAddress
        });
        res.status(200).json({ message: 'Your content has been published and register into the BlockChain', receipt })
    } catch (error) {
        console.error('Something went wrong, content may be published but is not register into the BlockChain.', error);
        res.status(500).json({ message: 'News not publihed into the BlockChain' });
    }

};