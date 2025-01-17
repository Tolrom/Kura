import { Route } from '@angular/router';
import { HomeComponent } from './views/public/home/home.component';
import { NotFoundComponent } from './views/public/notFound/NotFound.component';

export const appRoutes: Route[] = [
    {
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full',
        title: 'Kura',
    },
    {
        path: 'home',
        component: HomeComponent,
        // canActivateChild: [reverseAuthGuard],
        // children: [
        //     {
        //         path: '', 
        //         redirectTo: 'login', 
        //         pathMatch: 'prefix',
        //     },
        //     {
        //         path: 'register', 
        //         // component: RegisterComponent,
        //         title: 'Inscription | NuHo',
        //     },
        //     {
        //         path: 'login', 
        //         // component: LoginComponent,
        //         title: 'Connexion | NuHo',
        //     },
        //     {
        //         path: 'pass-reset',
        //         // component: PassResetComponent,
        //         title: 'Mot de passe oublié | NuHo'
        //     },
        //     {
        //         path: 'confirm/:token',
        //         // component: ConfirmationComponent,
        //         title: 'Confirmation de l\'email | NuHo'
        //     },
        // ]
    },
    
    {
        path: '**',
        component: NotFoundComponent,
        title: '404 Not Found',
    },
];
