import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    MisionComponent,
    VisionComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentesModule { }
