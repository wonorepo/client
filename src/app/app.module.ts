import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { FacebookService } from 'ng2-facebook-sdk'

import { NgxSocialLoginModule } from 'ngx-social-login'

import { AppComponent } from './app.component'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxSocialLoginModule.init(
            {
                google: {
                    client_id: '1019497029966-nkmnpmcc0nd660sedoi66esfiafv3r6p.apps.googleusercontent.com'
                },
                facebook: {
                    initOptions: {
                        appId: '751488778286304'
                    }
                },
                vk: {
                    client_id: '6430510'
                },
                twitter: {
                    appId: '239471023123'
                }
            }
        )
  ],
  providers: [FacebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
