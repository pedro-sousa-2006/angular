import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Aluno } from './aluno/aluno';
import { Professor } from './professor/professor';
import { Administrador } from './administrador/administrador';
import { Login } from './login/login';
import { Contato } from './contato/contato';

export const routes: Routes = [
    {path:"home" , component:Home},
    {path:"aluno" , component:Aluno},
    {path:"professor" , component:Professor},
    {path:"administrador" , component:Administrador},
    {path:"contato" , component:Contato},
    {path:"", component:Login}
];
