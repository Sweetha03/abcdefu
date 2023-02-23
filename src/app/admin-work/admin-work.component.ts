import { Component } from '@angular/core';
import { SeedOperationService } from '../seed-operation.service';
import { Seed } from '../seed';

@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent {
  __seedService:SeedOperationService;
  s:Seed = new Seed(0,'','','',0,0,'','',0,0,0);

  constructor(seedService:SeedOperationService)
  {
    this.__seedService=seedService;
  }

  doFormSubmit() {
    console.log("Form Submit button clicked")
    console.log(this.s);
    
    
  }

  readSeed(id:string,seedName:string,bloomSeason:string,typesOfSeeds:string,seedsStock:string,seedsPerPacket:string,image:string,about:string,discount:string,price:string,starRating:string)
  {
    console.log(id+" "+seedName+" "+bloomSeason+" "+typesOfSeeds+" "+seedsStock+" "+seedsPerPacket+" "+image+" "+about+" "+discount+" "+price+" "+starRating);
    let seedFromUser:Seed = new Seed(parseInt(id),seedName,bloomSeason,typesOfSeeds,parseInt(seedsStock),parseInt(seedsPerPacket),image,about,parseInt(discount),parseInt(price),parseInt(starRating));
    this.__seedService.addSeed(seedFromUser);
  }

  

}
