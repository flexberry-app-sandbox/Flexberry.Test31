import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test3-здание', 'Unit | Model | i-i-s-test3-здание', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-test3-new-class3',
    'model:i-i-s-test3-город',
    'model:i-i-s-test3-здание',
    'model:i-i-s-test3-комната',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
