import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  season: DS.attr(),
  year: DS.attr(),
  github_username: DS.attr(),
  githubLink: function() {
    return 'https://github.com/' + this.get('github_username');
  }.property('github_username'),
  email: DS.attr(),
  emailLink: function() {
    return 'mailto:' + this.get('email');
  }.property('email'),
  avatar: DS.attr(),
  current_location: DS.attr(),
  hireable: DS.attr(),
  bio: DS.attr(),
  project: DS.attr(),
  html_url: DS.attr(),
  linked_in_url: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});

// Student.reopenClass({
//   FIXTURES: [
//     { id: 1, name: 'jj', season: 'summer', year: 2014, github_username: 'jjidt', email: 'email@email.com', avatar:'https://avatars2.githubusercontent.com/u/7355492?v=2&s=400', current_location: 'portland, OR', hireable: true, bio: 'nteger tristique nunc nec augue ultricies, quis mattis eros sollicitudin. Integer sit amet vulputate metus. Integer nisl dolor, aliquet tincidunt nisi eget, malesuada pulvinar diam.nteger tristique nunc nec augue ultricies, quis mattis eros sollicitudin. Integer sit amet vulputate metus. Integer nisl dolor, aliquet tincidunt nisi eget, malesuada pulvinar diam.', project: 'https://github.com/jjidt/epicoders_backend', html_url: 'https://google.com'},
//     { id: 2, name: 'tara', season: 'spring', year: 2014, github_username: 'idk', email: 'email@email.com', avatar:'https://avatars2.githubusercontent.com/u/7355492?v=2&s=400', current_location: 'portland, OR', hireable: false, bio: 'nteger tristique nunc nec augue ultricies, quis mattis eros sollicitudin. Integer sit amet vulputate metus. Integer nisl dolor, aliquet tincidunt nisi eget, malesuada pulvinar diam.', project: 'https://github.com/jjidt/epicoders_backend', html_url: 'https://google.com' },
//     { id: 3, name: 'Mac', season: 'fall', year: 2013, github_username: 'macAttack', email: 'email@email.com', avatar:'https://avatars2.githubusercontent.com/u/7355492?v=2&s=400', current_location: 'portland, OR', hireable: true, bio: 'nteger tristique nunc nec augue ultricies, quis mattis eros sollicitudin. Integer sit amet vulputate metus. Integer nisl dolor, aliquet tincidunt nisi eget, malesuada pulvinar diam.', project: 'https://github.com/jjidt/epicoders_backend', html_url: 'https://google.com' },
//     { id: 4, name: 'Paul', season: 'fall', year: 2013, github_username: 'macAttack', email: 'email@email.com', avatar:'https://avatars2.githubusercontent.com/u/7355492?v=2&s=400', current_location: 'portland, OR', hireable: true, bio: 'nteger tristique nunc nec augue ultricies, quis mattis eros sollicitudin. Integer sit amet vulputate metus. Integer nisl dolor, aliquet tincidunt nisi eget, malesuada pulvinar diam.', project: 'https://github.com/jjidt/epicoders_backend', html_url: 'https://google.com' }
//   ]
// });

//  export default Student;

// export default DS.Model.extend({
//   name: DS.attr(),
//   season: DS.attr(),
//   year: DS.attr(),
//   github_username: DS.attr(),
//   comments: DS.hasMany('comment', {async: true})
// });

