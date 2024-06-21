import { Routes, RouterModule } from '@angular/router';
import { PackagesComponent } from './Projeto_Marmitas/packages/packages.component';
import { FoodListComponent } from './Projeto_Marmitas/food-list/food-list.component';
import { NgModule } from '@angular/core';
import { PackagesDefaultComponent } from './Projeto_Marmitas/packages/packages-default/packages-default.component';
import { PackagesDetailsComponent } from './Projeto_Marmitas/packages/packages-details/packages-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/marmitas', pathMatch: 'full'}, //quando for apenas esse nada, aí ele redireciona p marmitas
    { path: 'marmitas', component: PackagesComponent, children: [
       { path: '', component: PackagesDefaultComponent},
       { path: ':id', component: PackagesDetailsComponent}
    ]},
    { path: 'alimentos', component: FoodListComponent}, 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class appRoutes {

}