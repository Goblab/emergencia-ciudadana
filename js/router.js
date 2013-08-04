App.Router.map(function() {
 this.resource('splash');
 this.resource('ayuda');  
 this.resource('categorias');  
 this.resource('emergencias', {
    path: '/emergencias/:id'
 });
 this.resource('emergencia', { path: '/emergencia/:id' });  
});

App.IndexRoute = Ember.Route.extend({
    redirect: function () {
      if (!App.get('sesion').get('showSplash'))
        this.transitionTo('splash');
    }
});

App.SplashRoute = Ember.Route.extend({
    enter: function () {
        var widthOrHeight = $(window).height() > $(window).width() ? 'width' : 'height';
        App.get('sesion').set('showSplash', true);
        $('#splash-content').find('img').css(widthOrHeight, '100%');
        $('#splash').fadeIn();

        Ember.run.later(this, function () {
            $('#splash').fadeOut().detach();
            this.transitionTo('index');
        }, 1500);
    }
});

App.CategoriasRoute = Ember.Route.extend({
    model: function () {
      return App.Categoria.find();
    },
});


App.EmergenciasRoute = Ember.Route.extend({
    model: function (param) {
      return App.Categoria.find(param.id);
    },

    setupController: function(controller, model) {
      controller.set('content', model.get('emergencias'));
    },
});

App.EmergenciaRoute = Ember.Route.extend({
    model: function (param) {
      return App.Emergencia.find(param.id);
    },
});