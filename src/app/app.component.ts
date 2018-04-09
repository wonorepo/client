import { WalletService } from './services/wallet.service'
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WalletService]
})
export class AppComponent {
  creds = {}
  wallet = {}
  loading : boolean = false

  constructor (private walletService : WalletService) {}

  async newWallet (seed : string) {
    this.loading = true
    this.wallet = await this.walletService.walletByCredentials(this.creds.pass, seed)
    this.loading = false
  }
}
