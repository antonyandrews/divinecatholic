import { Routes } from '@angular/router';
import { HomeComponent } from './features/landing/pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'journey',
        loadComponent: () =>
            import('./features/journey/components/begining/begining.component')
                .then(m => m.BeginingComponent)
    }
];
