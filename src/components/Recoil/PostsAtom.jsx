import { atom } from 'recoil';
import data from '../../data.json';

const PostsAtom = atom({
    key: 'postState',
    default: [],
    onClickItem: () => {},
});

export default PostsAtom;