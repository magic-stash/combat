import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('player-character');
  },

  actions: {
    async create(name) {
      if (!name) { return; }
      this.controller.set('showCreateModal', false);
      let pc = await this.store.createRecord('player-character', { name }).save()
      this.transitionTo('player-characters.details', pc.id);
    },
    startCreate() {
      this.controller.set('showCreateModal', true);
      this.controller.set('name', null);
    },
    cancelCreate() {
      this.controller.set('showCreateModal', false);
      this.transitionTo('player-characters');
    }
  }

});
