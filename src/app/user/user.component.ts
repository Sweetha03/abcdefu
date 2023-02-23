import { Component } from '@angular/core';
import { Seed } from '../seed';
import { SeedOperationService } from '../seed-operation.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  __seedService:SeedOperationService;

  allSeed : Array<Seed> = [];
  watchlist : Array<Seed> = [];
  watchlistCount : number=0;

  priceHighCss: string = "color:crimson";
  priceLowCss:string = "color:rgb(8, 112, 63);font-weight: 700;";
  priceNormalCSS:string = "color:black";

  constructor(seedService: SeedOperationService)
  {
    this.__seedService = seedService;
    this.allSeed = this.__seedService.getSeedArr();
  }

  goForBuy(seed:string)
  {
    let seedId = parseInt(seed);
    console.log("code to buy"+ seedId+ "seed");
    
  }

  addWatchlist(seed:string)
  {
    let addSeedId = parseInt(seed);
    
    this.allSeed.forEach(s=>{
      if(s.id == addSeedId)
      {
        this.watchlist.push(s);
        
      }
    });
    this.watchlistCount = this.watchlist.length;
    console.log(this.watchlist);
  }

  viewSeedDetails(Seed:string)
  {

  }

  getFilterData(filterValue:string)
  {
    console.log("Filter Value "+filterValue);

    this.allSeed = this.__seedService.getSeedByBloomSeason(filterValue);
    
  }
  getFilterData1(filterValue:string)
  {
    console.log(" Filter Value "+filterValue);

    this.allSeed = this.__seedService.getSeedsByTypesOfSeeds(filterValue);
  }
 
  getFilterData2(filterValue:string)
  {
  
    console.log(" Filter Value "+filterValue);

    this.allSeed = this.__seedService.getSeedByStarRating(parseInt(filterValue));
  }

}


