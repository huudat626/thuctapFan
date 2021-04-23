import { NgModule } from '@angular/core';

// Pipes
import { ErrorImagePipe } from './error-image.pipe';
import { TimecustomPipe } from './timepipe';
import { UriPipe } from './uri.pipe';

@NgModule({
  imports: [],
  declarations: [
        ErrorImagePipe,
        UriPipe,
        TimecustomPipe
    ],
  exports: [
        ErrorImagePipe,
        UriPipe,
        TimecustomPipe
    ]
})
export class PipesModule { }
