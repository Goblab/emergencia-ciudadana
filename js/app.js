App = Ember.Application.create({
    ready: function() {
    }
});

App.Store = DS.Store.extend({
  revision: 12,

  adapter: DS.FixtureAdapter.create({}),
});

Ember.View.reopen({
  didInsertElement: function () {
    this.$().fadeIn(500);
  }
});

App.sesion = Ember.Object.create({
    showSplash: false,
});


