App.Emergencia = DS.Model.extend({
  id: DS.attr('number'),
  titulo: DS.attr('string'),
  contenido: DS.attr('string'),
  categoria: DS.belongsTo('App.Categoria'),

  contenidoExterno: '',

  contenidoChange: function () {
    _self = this;
    $.get(this.get('contenido'), function(data) {
      _self.set('contenidoExterno', data);
    });
  }.observes('contenido'),

  contenidoHTML: function () {
    if (this.get('contenidoExterno') == '') this.contenidoChange();
    return this.get('contenidoExterno').htmlSafe();
  }.property('contenidoExterno'),

});

App.Categoria = DS.Model.extend({
  id: DS.attr('number'),
  titulo: DS.attr('string'),
  emergencias: DS.hasMany('App.Emergencia')
});
