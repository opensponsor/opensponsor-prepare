import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@/app/modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('@/app/modules/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'sponsor',
    loadChildren: () => import('@/app/modules/sponsor/sponsor.module').then(m => m.SponsorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
