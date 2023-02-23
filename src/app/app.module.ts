import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { FlowerSeedsComponent } from './flower-seeds/flower-seeds.component';
import { VegetableSeedsComponent } from './vegetable-seeds/vegetable-seeds.component';
import { FruitSeedsComponent } from './fruit-seeds/fruit-seeds.component';
import { HerbSeedsComponent } from './herb-seeds/herb-seeds.component';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { SeedPipe } from './seed-pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { TdfseedComponent } from './tdfseed/tdfseed.component';
import { AboutComponent } from './about/about.component';
import { SeedListComponent } from './seed-list/seed-list.component';



const allLinks:Routes=[
  {path: 'launchseeds',component:AdminWorkComponent},
  {path: 'flower-seeds',component:FlowerSeedsComponent},
  {path: 'fruit-seeds',component:FruitSeedsComponent},
  {path: 'herb-seeds', component:HerbSeedsComponent},
  {path: 'vegetable-seeds', component: VegetableSeedsComponent},
  {path: 'viewallseeds',component: UserComponent},
  {path: 'seedsInDB',component: SeedListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminWorkComponent,
    FlowerSeedsComponent,
    VegetableSeedsComponent,
    FruitSeedsComponent,
    HerbSeedsComponent,
    UserComponent,
    SeedPipe,
    // TdfseedComponent,
    AboutComponent,
    SeedListComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,
    RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
