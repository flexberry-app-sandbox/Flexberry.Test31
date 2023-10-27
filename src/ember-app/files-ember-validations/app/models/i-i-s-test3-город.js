import {
  defineNamespace,
  Model as ГородMixin
} from '../mixins/regenerated/models/i-i-s-test3-город';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГородMixin, {
});

defineNamespace(Model);

export default Model;
