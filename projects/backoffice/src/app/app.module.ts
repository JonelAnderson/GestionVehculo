import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntityDataModule } from '@ngrx/data';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppStoreModule } from '@cad-shared/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core';
import { PrivateModule } from './private/private.module';
import { PublicModule } from './public/public.module';
import { ToastrModule } from 'ngx-toastr';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    AppStoreModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    EntityDataModule.forRoot({}),
    PublicModule,
    PrivateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
