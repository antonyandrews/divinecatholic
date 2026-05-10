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
            import('./features/journey/components/begining/begining.component').then(m => m.BeginingComponent)
    },
    {
        path: 'jesus',
        loadComponent: () =>
            import('./features/infant-jesus/infant-jesus.component').then(m => m.InfantJesusComponent)
    },
    {
        path: 'miracles',
        loadComponent: () =>
            import('./features/miracles/miracles.component').then(m => m.MiraclesComponent)
    },
    {
        path: 'passionofchrist',
        loadComponent: () =>
            import('./features/crucification/crucification.component').then(m => m.CrucificationComponent)
    },
    {
        path: 'apostles',
        loadComponent: () =>
            import('./features/apostles/component/apostle-list/apostle-list.component')
                .then(m => m.ApostleListComponent)
    },
    {
        path: 'apostles/:id',
        loadComponent: () =>
            import('./features/apostles/component/view-apostle/view-apostle.component')
                .then(m => m.ViewApostleComponent)
    },
    {
        path: 'prayers',
        loadComponent: () =>
            import('./features/prayers/component/prayers-home/prayers-home.component')
                .then(m => m.PrayersHomeComponent)
    },

    {
        path: 'prayers/:id',
        loadComponent: () =>
            import('./features/prayers/component/prayer-details/prayer-details.component')
                .then(m => m.PrayerDetailsComponent)
    }
];
