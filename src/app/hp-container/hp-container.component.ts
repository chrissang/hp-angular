import { HpService } from './../hp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hp-container',
  template: `
    <main style="min-height:100vh">
      <div>
        <h1>HP Container</h1>
      </div>
    </main>`
})
export class HpContainerComponent implements OnInit {
  jsonData;

  constructor(service: HpService) {
    this.jsonData = service.getHpData();
    console.log('jsonData ', this.jsonData);
  }

  ngOnInit() {
  }

}
