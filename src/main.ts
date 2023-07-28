import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

module.exports={
  addons: ['storybook-addon-designs']
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
