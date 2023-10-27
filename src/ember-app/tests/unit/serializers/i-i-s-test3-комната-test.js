import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test3-комната', 'Unit | Serializer | i-i-s-test3-комната', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test3-комната',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
