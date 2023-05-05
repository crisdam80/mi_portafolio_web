import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoargComponent } from './componentes/logoarg/logoarg.component';
import { RedesSocialesComponent } from './componentes/redes-sociales/redes-sociales.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { BarraDeProgresoComponent } from './componentes/barra-de-progreso/barra-de-progreso.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoargComponent,
    RedesSocialesComponent,
    BannerComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    BarraDeProgresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
