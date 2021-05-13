import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NzCardModule } from 'ng-zorro-antd/card';

// Components
// import { SearchComponent } from './search-component/search.component';
import { SearchArtistItemComponent } from './search-artist-item/search-artist-item.component'; import { SearchTrackItemComponent } from './search-track-item/search-track-item.component';
import { SearchModalComponent } from './search-modal/search-modal.component';
import { SearchRoutingModule } from './search-routing.module';
// Services
import { SearchService } from './services/search.service';

// Pipes

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { SearchComponent } from './search.component';
import { from } from 'rxjs';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    SearchComponent,
    SearchArtistItemComponent,
    SearchModalComponent,
    SearchTrackItemComponent

  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    PipesModule,
    HttpClientModule,
    NzAutocompleteModule,
    NzCardModule

  ],
  providers: [
    SearchService,
  ]
})
export class SearchModule { }
