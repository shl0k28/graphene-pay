import React from 'react'
import { ethers } from 'ethers'

interface Web3Details {
    signer: ethers.providers.JsonRpcSigner | null,
    provider: ethers.providers.Web3Provider
}

const Web3Context = React.createContext(null)