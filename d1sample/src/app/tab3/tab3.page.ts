import { CallNumber } from '@ionic-native/call-number/ngx';
import { Component } from '@angular/core';

import {BrowserTab} from '@ionic-native/browser-tab/ngx'


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  constructor(private callNumber:CallNumber, private browserTab:BrowserTab) {   }

  call()
  {

    this.callNumber.callNumber("9313572259",true)
    .then(res=>console.log("Dialer Launched",res))
    .catch(err=>console.log("Error lanuching"));

  }

  browse()
  {

     this.browserTab.isAvailable()
     .then(isAavailable=>{

      if(isAavailable)
      {
           this.browserTab.openUrl('https://new.siemens.com/global/en/general/contact.html');
      }

      else{

            console.log("Error lanching browser");
      }
     })

  }

  

}
