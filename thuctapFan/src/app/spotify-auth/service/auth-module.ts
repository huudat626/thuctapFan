import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyAuthComponent } from './auth.compoment';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';


const routes: Routes= [{
  path: '',
  canActivate: [ AuthGuard ],
  component: SpotifyAuthComponent
}];

@NgModule({
  declarations: [SpotifyAuthComponent],
  providers: [AuthGuard],
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class SpotifyAuthModule {
}
