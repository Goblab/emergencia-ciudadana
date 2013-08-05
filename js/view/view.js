App.ApplicationView = Ember.View.extend({
  didInsertElement: function () {
    this._super();
    $('.nav').click( function() {
        $('.btn-navbar').addClass('collapsed');
        $('.nav-collapse').removeClass('in').css('height', '0');
    });    
  }
})

App.IndexView = Ember.View.extend({
  didInsertElement: function () {
    this._super();
  }
});

App.IndexController = Ember.ArrayController.extend({
  init: function () {
    console.log('pepe');
  }
});


App.CategoriasView = Ember.View.extend({
  didInsertElement: function () {
    this._super();
  }
});

App.EmergenciasView = Ember.View.extend({
  didInsertElement: function () {
    this._super();
  }
});

App.EmergenciaView = Ember.View.extend({
  didInsertElement: function () {
    this._super();
  },
});


App.SplashView = Ember.View.extend({
    percent: 0,
    interval: null,

    progress: function () {
       this.set('percent', this.get('percent') + 15);
       this.$('#progress').attr('style', "width: " + this.get('percent') + "%;");
    },

    willDestroyElement: function () {
       clearInterval(this.get('interval'));
    },

    didInsertElement: function () {
       this._super();
       var self = this;
       this.set("interval", setInterval(function() {self.progress()}, 150));
    }
});