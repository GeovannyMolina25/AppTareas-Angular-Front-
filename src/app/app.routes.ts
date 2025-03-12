import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies',component:MovieListComponent },
  {path: 'create', component:FormPageComponent},
  {path: 'movies/:movieName',component:MovieDetailsComponent},
  {path: 'users',component:UserListComponent},
  {path: 'users/:userName',component:UserDetailsComponent},
];
