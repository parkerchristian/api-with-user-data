import { app } from '../src/firebase/firebase.js';

import './html-equal.js';
import './template.test/profile-display.test.js';
import './template.test/album-card.test.js';
import './query.tests/query.test.js';
import './object-to-array.test/object-to-array.test.js';
import './paging.test/paging-component.test.js';

QUnit.done(() => {
    app.delete();
});