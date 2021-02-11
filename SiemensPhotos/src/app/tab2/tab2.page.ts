import { Component } from '@angular/core';

import {PhotoService} from '../services/photo.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public siemensPhotoService:PhotoService) {}


  async ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    await this.siemensPhotoService.loadSaved();

  }

  addPhoto()
  {

    this.siemensPhotoService.addNewToGallery();
  }

}