import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { BlogPageComponent } from './blog-page/blog-page.component';



@NgModule({
  declarations: [
    BlogMainComponent,
    BlogPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
