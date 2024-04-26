import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [BlogMainComponent, BlogPageComponent],
  imports: [CommonModule, BlogRoutingModule],
})
export class BlogModule {}
