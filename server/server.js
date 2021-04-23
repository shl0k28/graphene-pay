require('dotenv').config()

const { WalletFactory, XrplNetwork, Wallet} = require('xpring-js')

const createNewWallet = async () => {
    var walletFactory = WalletFactory(XrplNetwork.Test)
    var newResult = await walletFactory.generateRandomWallet()
    var wallet = newResult.wallet
    console.log(wallet)
}

createNewWallet()