import Ember from 'ember';

export default Ember.ArrayController.extend({
  // sortProperties: ['date', 'time'],
  years: ['', 2012, 2013, 2014, 2015],
  results: function(){
    var searchName = this.get('searchName'),
        students      = this.get('content');

    var selectedYear = this.get('selectedYear');
    if(searchName){
      return students.filter(function(student){
        return student.get('name').toLowerCase().indexOf(searchName.toLowerCase()) > -1;
      });
    }

    else if(selectedYear) {
      return students.filter(function(student){
        return student.get('year') === selectedYear;
      });
    }
    else{
     return students;
     }

  }.property('content', 'searchName', 'selectedYear'),


  actions: {
    sortByStuff: function() {
      this.set('sortProperties', ['year']);
    }
  }
});
