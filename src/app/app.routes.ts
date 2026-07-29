import { Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'about', component: AboutUsComponent, title: "Route | about-us" },
    { path: 'blog', component: BlogComponent, title: "Route | blog " },
    { path: 'home', component: HomeComponent, title: 'Route | home' }

];
