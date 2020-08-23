import { createStore } from 'vuex';
import auth from './modules/auth';
import link from './modules/link';

export default createStore({
    modules: {
        auth,
        link
    }
});
