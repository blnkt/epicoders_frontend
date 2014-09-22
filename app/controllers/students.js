import Ember from 'ember';

export default Ember.ArrayController.extend({
  // sortProperties: ['date', 'time'],
  years: ['', 2012, 2013, 2014, 2015],
  seasons: ['', 'Spring', 'Summer', 'Fall', 'Winter'],
  results: function(){
    var searchName = this.get('searchName');
    var selectedYear = this.get('selectedYear');
    var selectedSeason = this.get('selectedSeason');
    var students = this.get('content');

    if(searchName){
      return students.filter(function(student){
        return student.get('name').toLowerCase().indexOf(searchName.toLowerCase()) > -1;
      });
    } else if(selectedYear) {
      return students.filter(function(student){
        return student.get('year') === selectedYear;
      });
    } else if(selectedSeason) {
      return students.filter(function(student){
        return student.get('season') === selectedSeason;
      });
    } else{
     return students;
     }

  }.property('content', 'searchName', 'selectedYear', 'selectedSeason')
});
