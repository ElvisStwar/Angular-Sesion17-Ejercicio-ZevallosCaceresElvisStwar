import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MisionComponent,
    VisionComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterModule
  ],
  exports: [
    MisionComponent,
    VisionComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class ComponentesModule { }
