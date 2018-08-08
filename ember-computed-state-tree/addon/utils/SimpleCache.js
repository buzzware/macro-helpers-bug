import EmberObject from '@ember/object';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';

import { createClassComputed } from 'ember-macro-helpers';

var SimpleCache = EmberObject.extend({
});
SimpleCache.lookupId = createClassComputed(
  [false, true],
  (aResource, aId) => {
    if (aId===null || aId===undefined)
      return;

    if (Array.isArray(aId)) {
      var keys = aId.map(id => `${aResource}__${id}`);
      return computed(...keys, function () {
        var result = keys.map(k => this.get(k));
        return result;
      });
    } else {
      return readOnly(`${aResource}__${aId}`);
    }
  }
);
export default SimpleCache;
