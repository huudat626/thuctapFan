// import { Pipe, PipeTransform } from '@angular/core';
// import { DomSanitizer} from '@angular/platform-browser';

// @Pipe({ name: 'url' })
// export class UriPipe implements PipeTransform {
//   constructor(private sanitizer: DomSanitizer) {}
//   transform(url: string) {
//     return this.sanitizer.bypassSecurityTrustResourceUrl(url);
//   }
// }

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

@Pipe({
  name: 'uri'
})
export class UriPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer){ /*empty*/ }

  // receives uri and verifies security
  transform( value: string): any {
    const url = 'https://open.spotify.com/embed?uri=';
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
