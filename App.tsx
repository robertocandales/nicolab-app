import React from 'react';
import {Provider} from 'react-redux';
import Screens from './src/navigation';
import generateStore from './src/redux/stores';

//store & customTypes
const store = generateStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default function App() {
  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  );
}
