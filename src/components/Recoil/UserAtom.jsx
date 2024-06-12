// UserAtom.js

import { atom } from 'recoil';

const UserState = atom({
    key: 'userState',
    default: null,
});

export default UserState;
