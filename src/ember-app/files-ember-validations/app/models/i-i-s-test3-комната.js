import {
  defineNamespace,
  Model as КомнатаMixin
} from '../mixins/regenerated/models/i-i-s-test3-комната';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КомнатаMixin, {
});

defineNamespace(Model);

export default Model;
