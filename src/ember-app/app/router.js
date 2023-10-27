import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test3-new-class3-l');
  this.route('i-i-s-test3-new-class3-e',
  { path: 'i-i-s-test3-new-class3-e/:id' });
  this.route('i-i-s-test3-new-class3-e.new',
  { path: 'i-i-s-test3-new-class3-e/new' });
  this.route('i-i-s-test3-город-l');
  this.route('i-i-s-test3-город-e',
  { path: 'i-i-s-test3-город-e/:id' });
  this.route('i-i-s-test3-город-e.new',
  { path: 'i-i-s-test3-город-e/new' });
  this.route('i-i-s-test3-здание-l');
  this.route('i-i-s-test3-здание-e',
  { path: 'i-i-s-test3-здание-e/:id' });
  this.route('i-i-s-test3-здание-e.new',
  { path: 'i-i-s-test3-здание-e/new' });
  this.route('i-i-s-test3-комната-l');
  this.route('i-i-s-test3-комната-e',
  { path: 'i-i-s-test3-комната-e/:id' });
  this.route('i-i-s-test3-комната-e.new',
  { path: 'i-i-s-test3-комната-e/new' });
});

export default Router;
