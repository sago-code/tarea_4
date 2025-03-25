import { Routes } from '@angular/router';
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { HomePageComponent } from './components/homePage/homePage.component';

export const routes: Routes = [
    { path: "", redirectTo: 'portfolio', pathMatch:'full' },
    { path: "portfolio", component: PortfolioComponent },
    { path: "home-page", component: HomePageComponent }
];
