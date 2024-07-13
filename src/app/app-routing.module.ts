import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'register-template', component: TemplateDrivenFormComponent },
  { path: 'register-model', component: ModelDrivenFormComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/register-template', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
