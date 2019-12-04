import { Store, createStore } from 'redux';
import { reducer } from './accountant/accountant.reducer';
import { increaserAction, multiplierAction } from './accountant/accountant.actions';

// Creation of the store
const store: Store = createStore(reducer);


// store subscription
store.subscribe(() => {
    console.log('Subscribe:', store.getState());
});

// Change Old State
store.dispatch(increaserAction);

// Change Old State
store.dispatch(multiplierAction);
