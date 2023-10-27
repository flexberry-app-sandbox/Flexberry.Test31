import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  id: DS.attr('number'),
  номерКомнаты: DS.attr('number'),
  этаж: DS.attr('number')
});

export let ValidationRules = {
  id: {
    descriptionKey: 'models.i-i-s-test3-комната.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерКомнаты: {
    descriptionKey: 'models.i-i-s-test3-комната.validations.номерКомнаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  этаж: {
    descriptionKey: 'models.i-i-s-test3-комната.validations.этаж.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КомнатаE', 'i-i-s-test3-комната', {
    номерКомнаты: attr('Номер комнаты', { index: 0 }),
    этаж: attr('Этаж', { index: 1 }),
    id: attr('Id', { index: 2 })
  });

  modelClass.defineProjection('КомнатаL', 'i-i-s-test3-комната', {
    номерКомнаты: attr('Номер комнаты', { index: 0 }),
    этаж: attr('Этаж', { index: 1 }),
    id: attr('Id', { index: 2 })
  });
};
