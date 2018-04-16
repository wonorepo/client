import { Component } from '@angular/core'
import { FacebookService } from 'ng2-facebook-sdk'
import { SocialLoginService, Provider } from 'ngx-social-login'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {

    constructor (private fb : FacebookService, private test : SocialLoginService) {
        // fb.init({
        //   appId: '751488778286304',
        //   xfbml: true,
        //   version: 'v2.8'
        // })
    }

    async facebook () {
        this.test.login(Provider.FACEBOOK).subscribe(user => console.log(user))
        // const status = await this.fb.getLoginStatus()
        // if (status !== 'connected') {
        //     await this.fb.login({
        //         enable_profile_selector: true,
        //         return_scopes: true,
        //         scope: 'public_profile,email'
        //     })
        // }
        // const userData = await this.fb.api('/me')
        // console.dir(userData)
    }

    async google () {
        this.test.login(Provider.GOOGLE).subscribe(user => console.log(user))
    }

	async instagram () {
        this.test.login(Provider.INSTAGRAM).subscribe(user => console.log(user))
    }

	async vk () {
        this.test.login(Provider.VK).subscribe(user => console.log(user))
    }

    async twitter () {
        this.test.login(Provider.TWITTER).subscribe(user => console.log(user))
    }
}
