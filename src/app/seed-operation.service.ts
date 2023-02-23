import { Injectable } from '@angular/core';
import { Seed } from './seed';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeedDto } from './seed-dto';

@Injectable({
  providedIn: 'root'
})
export class SeedOperationService {
  baseURL = 'http://localhost:6001/seed';

  allSeedEndPoint = this.baseURL+'/seeds';
  // seedsByTypesOfSeedsEndPoint = this.baseURL+'seed/typesOfSeeds'  

  seedArr:Seed[] = [];

  constructor(private http:HttpClient) { 
      console.log("Inside Constructor" +this.allSeedEndPoint);
  }
  getAllSeedsFromSpring():Observable<Seed[]>
  {
    console.log("inside service : "+this.allSeedEndPoint);
      return this.http.get<Seed[]>(`${this.allSeedEndPoint}`);
  }
  addSeed(seedFromUser:Seed)
  {
    this.seedArr.push(seedFromUser); 
    console.log("Inside Seed Service : Seed Added "+seedFromUser.id);
    console.log(" Total Seed Are :- "+this.seedArr.length);
  }
  getSeedByNumber(searchSeedId:number):Seed
  {
    let outputSeed:Seed = new Seed(0,'','','',0,0,'','',0,0,0);
    for(let i=0;i<this.seedArr.length;i++)
    {
      let thisSeed:Seed = this.seedArr[i];
        if(thisSeed.id == searchSeedId)
        {
          outputSeed = thisSeed;
          break;
        }
    }
    return outputSeed;
  }

  getSeedsByStock(filterSeedsStock:number):Seed[]
  {
    let outputArr:Seed[] = [];

    this.seedArr.forEach(s=>{
      if(s.seedsStock == filterSeedsStock)
      {
        outputArr.push(s);
      }
    });

    return outputArr;
  }

  getSeedsPerPacket(filterSeedsPerPacket:number):Seed[]
  {
    let outputArr:Seed[] = [];

    this.seedArr.forEach(s=>{
      if(s.seedsPerPacket == filterSeedsPerPacket)
      {
        outputArr.push(s);
      }
    });

    return outputArr;
  }
  getSeedByBloomSeason(filterBloomSeason:string):Seed[]
  {
    let outputArr:Seed[] = [];
    this.seedArr.forEach(s=>{
      if(s.bloomSeason == filterBloomSeason)
      {
        outputArr.push(s);
      }
    });

    return outputArr;
  }
  getSeedsByTypesOfSeeds(filterTypesOfSeeds:string):Seed[]
  {
    let outputArr:Seed[] = [];

    this.seedArr.forEach(s=>{
      if(s.typesOfSeeds == filterTypesOfSeeds)
      {
        outputArr.push(s);
      }
    });

    return outputArr;
  }

  // getSeedsByTypesOfSeeds(filterTypesOfSeeds:string):Observable<SeedDto[]>{
  //   console.log("Inside Method 1" +this.getSeedsByTypesOfSeeds);
  //   this.seedsByTypesOfSeedsEndPoint = this.seedsByTypesOfSeedsEndPoint+'/'+filterTypesOfSeeds;
  //   console.log("After adding city 2" +this.seedsByTypesOfSeedsEndPoint);

  //   return this.http.get<SeedDto[]>(`${this.seedsByTypesOfSeedsEndPoint}`);
    
    
  // }
  getSeedByStarRating(filterStarRating:number):Seed[]
  {
   
   let outputArr:Seed[] = [];

    this.seedArr.forEach(s=>{
      if(s.starRating == filterStarRating)
      {
        outputArr.push(s);
      }
    });

    return outputArr;
  }

  getSeedArr():SeedDto[]
  {
    return this.seedArr;
  }

}
