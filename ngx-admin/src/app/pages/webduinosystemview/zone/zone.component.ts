import { Component, OnInit, Input } from '@angular/core';
import { Zone } from '../../../zone';
import { WebduinosystemService } from '../../../webduinosystem.service';

@Component({
  selector: 'ngx-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {

  zone: Zone;
  @Input() zoneid: number;

  //id: number;
  
  constructor(private webduinosystemService: WebduinosystemService,) 
  {
  }

  ngOnInit() {

    this.webduinosystemService.getZone(this.zoneid)
      .subscribe(zone => {
        this.zone = zone;
      });
    
  }
}

