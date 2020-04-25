import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Storage, IonicStorageModule } from '@ionic/storage';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }, //create paths for all pages
  { path: 'welcome', loadChildren:'./welcome/welcome.module#WelcomePageModule'},
  { path: 'login', loadChildren:'./auth/login/login.module#LoginPageModule'},
  { path: 'forgot', loadChildren:'./auth/forgot/forgot.module#ForgotPageModule'},
  { path: 'breakfast', loadChildren:'./food/breakfast/breakfast.module#BreakfastPageModule'},
  { path: 'lunch', loadChildren:'./food/lunch/lunch.module#LunchPageModule'},
  { path: 'dinner', loadChildren:'./food/dinner/dinner.module#DinnerPageModule'},
  { path: 'barcode', loadChildren:'./food/barcode/barcode.module#BarcodePageModule'},
  { path: 'folder', loadChildren:'./folder/folder.module#FolderPageModule'},
  { path: 'home', loadChildren:'./home/home.module#HomePageModule'},
  {
    path: 'breakfast',
    loadChildren: () => import('./food/breakfast/breakfast.module').then( m => m.BreakfastPageModule)
  },
  {
    path: 'lunch',
    loadChildren: () => import('./food/lunch/lunch.module').then( m => m.LunchPageModule)
  },
  {
    path: 'dinner',
    loadChildren: () => import('./food/dinner/dinner.module').then( m => m.DinnerPageModule)
  },
  {
    path: 'barcode',
    loadChildren: () => import('./food/barcode/barcode.module').then( m => m.BarcodePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
