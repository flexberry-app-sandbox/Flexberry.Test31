import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  здание: DS.belongsTo('i-i-s-test3-здание', { inverse: null, async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-test3-new-class3.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  здание: {
    descriptionKey: 'models.i-i-s-test3-new-class3.validations.здание.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('NewClass3E', 'i-i-s-test3-new-class3', {
    номер: attr('Номер', { index: 0 }),
    здание: belongsTo('i-i-s-test3-здание', 'Здание', {
      улица: attr('Улица', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'улица' })
  });

  modelClass.defineProjection('NewClass3L', 'i-i-s-test3-new-class3', {
    номер: attr('Номер', { index: 0 }),
    здание: belongsTo('i-i-s-test3-здание', 'Улица', {
      улица: attr('Улица', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
