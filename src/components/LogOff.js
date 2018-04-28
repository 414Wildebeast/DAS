import React from 'react';

import { auth } from '../firebase';

const LogOffButton = () =>
    <button
        type="button"
        onClick={auth.doSignOut}
    >
      LogOff
    </button>

export default LogOffButton;