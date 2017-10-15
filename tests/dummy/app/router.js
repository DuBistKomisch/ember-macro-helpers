import BaseRouter from '@ember/routing/router';
import config from './config/environment';

const Router = BaseRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('double-render');
  this.route('no-render');
});

export default Router;
