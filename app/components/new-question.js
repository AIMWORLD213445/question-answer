import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    newFormShow() {
      this.set("addNewQuestion", true);
    },

    saveQuestion() {
      var params = {
        query: this.get("query"),
        author: this.get("author"),
        note: this.get("note"),
      };
      this.set("addNewQuestion", false);
      this.sendAction("saveQuestion", params);
    }
  }
});
