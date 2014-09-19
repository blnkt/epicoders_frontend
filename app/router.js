import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('students', {path: '/'});
  this.resource('student', {path: 'students/:student_id'}, function() {
    this.resource('new-comment');
  });
  this.resource('new-student');
  this.resource('recent-comments');
  this.resource('about', {path: '/about-us'});
  this.resource('contact', {path: '/get-in-touch'}, function() {
    this.resource('phone');
    this.resource('email');
  });
});


export default Router;
