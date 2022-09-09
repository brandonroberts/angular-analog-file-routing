import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Route } from '@angular/router';

const routeConfig: Route = {
  canActivate: [() => true],
  providers: [importProvidersFrom(HttpClientModule)]
}

export default routeConfig;