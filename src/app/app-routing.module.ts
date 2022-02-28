import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',loadChildren:()=>import('./public/login/login.module').then(m=>m.LoginModule)
  },
  {
    path: '',
    loadChildren: () =>
      import('./layouts/layouts.module').then((m) => m.LayoutsModule),
  },

  {
    path:'**',pathMatch:'full',loadChildren:()=>import('./public/not-found/not-found.module').then((m)=>m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
