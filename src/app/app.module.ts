import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AgmCoreModule } from "@agm/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MapComponent } from "./components/map/map.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ApiService } from "./api.service";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent, MapComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCSaaeF-m4WEo39i9eSAOirYlFu2ZxSzsU"
      /* apiKey is required, unless you are a 
      premium customer, in which case you can 
      use clientId 
      */
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
