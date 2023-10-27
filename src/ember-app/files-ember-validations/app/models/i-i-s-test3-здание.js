import {
  defineNamespace,
  Model as зданиеMixin
} from '../mixins/regenerated/models/i-i-s-test3-здание';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(зданиеMixin, {
});

defineNamespace(Model);

export default Model;
