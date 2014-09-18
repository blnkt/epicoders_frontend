import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('profiles', {path: '/'});
  this.resource('profile', {path: 'profiles/:profile_id'}, function() {
    this.resource('new-comment');
  });
  this.resource('new-profile');
  this.resource('recent-comments');
  this.resource('about', {path: '/about-us'});
  this.resource('contact', {path: '/get-in-touch'}, function() {
    this.resource('phone');
    this.resource('email');
  });
});


export default Router;
