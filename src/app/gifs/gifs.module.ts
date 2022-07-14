import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [GifsPageComponent, SearchComponent, ResultComponent],
  imports: [CommonModule],
  exports: [GifsPageComponent],
})
export class GifsModule {}
