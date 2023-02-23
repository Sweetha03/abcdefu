import { Component } from '@angular/core';
import { SeedDto } from '../seed-dto';
import { SeedOperationService } from '../seed-operation.service';


@Component({
  selector: 'app-seed-list',
  templateUrl: './seed-list.component.html',
  styleUrls: ['./seed-list.component.css']
})
export class SeedListComponent {

  allSeeds:SeedDto[] = [];
  constructor(private seedService:SeedOperationService)
  {
    seedService. getAllSeedsFromSpring().subscribe(
      data=>{
        this.allSeeds = data;
      },
      err=>{
        console.log("Error" +err);
        
      }
    );
        
  }
}
