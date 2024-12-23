import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './guards/auth.guard';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', runGuardsAndResolvers: 'always', canActivate: [authGuard],

    children: [
      { path: 'members', component: MemberListComponent },
      { path: 'members/:username', component: MemberDetailComponent },
      { path: 'lists', component: ListsComponent },
      { path: 'messages', component: MessagesComponent },

    ]
   },
   { path: 'not-found', component: NotFoundComponent},
   { path: 'server-error', component: ServerErrorComponent},
  { path: 'errors', component: TestErrorsComponent},// Add this line
  { path: '**', component: HomeComponent, pathMatch: 'full'},// Add this line
  // Other routes
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
