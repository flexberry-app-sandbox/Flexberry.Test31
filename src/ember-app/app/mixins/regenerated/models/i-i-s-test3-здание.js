import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количествоЭтаж: DS.attr('number'),
  номерДома: DS.attr('string'),
  улица: DS.attr('string'),
  город: DS.belongsTo('i-i-s-test3-город', { inverse: null, async: false })
});

export let ValidationRules = {
  количествоЭтаж: {
    descriptionKey: 'models.i-i-s-test3-здание.validations.количествоЭтаж.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерДома: {
    descriptionKey: 'models.i-i-s-test3-здание.validations.номерДома.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  улица: {
    descriptionKey: 'models.i-i-s-test3-здание.validations.улица.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  город: {
    descriptionKey: 'models.i-i-s-test3-здание.validations.город.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('зданиеE', 'i-i-s-test3-здание', {
    улица: attr('Улица', { index: 0 }),
    номерДома: attr('Номер дома', { index: 1 }),
    количествоЭтаж: attr('Количество этаж', { index: 2 }),
    город: belongsTo('i-i-s-test3-город', 'Город', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('зданиеL', 'i-i-s-test3-здание', {
    улица: attr('Улица', { index: 0 }),
    номерДома: attr('Номер дома', { index: 1 }),
    количествоЭтаж: attr('Количество этаж', { index: 2 }),
    город: belongsTo('i-i-s-test3-город', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
