require('dotenv').config()

const dogeTestApiKey = process.env.DOGECOIN_TESTNET_API_KEY
const BlockIo = require('block_io')
const blockIoClient = new BlockIo(dogeTestApiKey)

const getNet = async () => {
    var network = await blockIoClient.get_balance()
    console.log(network)
}

getNet()