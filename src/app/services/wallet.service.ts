import { Injectable } from '@angular/core'
import * as lightwallet from 'eth-lightwallet'

@Injectable()
export class WalletService {

  get randomSeed () {
    return lightwallet.keystore.generateRandomSeed()
  }

  async walletByCredentials (password : string, seed : string) {
    return new Promise((resolve, reject) => {
      lightwallet.keystore.createVault({
  			password: password,
  			seedPhrase: lightwallet.keystore.isSeedValid(seed) ? seed : this.randomSeed,
        hdPathString: "m/0'/0'/0'"
  		}, (error, keystore) => {
          if (error) reject(error)
          keystore.keyFromPassword(password, (error, pwDerivedKey) => {
            if (error) reject(error)
            keystore.generateNewAddress(pwDerivedKey, 1)
            const address = keystore.getAddresses()[0]
            const privateKey = keystore.exportPrivateKey(address, pwDerivedKey)
            const seed = keystore.getSeed(pwDerivedKey)
            resolve({ address, privateKey, seed })
          })
      })
    })
  }
}
