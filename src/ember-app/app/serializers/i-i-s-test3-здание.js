import { Serializer as зданиеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test3-здание';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(зданиеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
