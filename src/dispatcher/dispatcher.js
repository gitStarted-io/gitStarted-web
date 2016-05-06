import { Dispatcher } from 'flux';

class DispatcherClass extends Dispatcher {

  send(action, payload){
    this.dispatch({
      action: action,
      payload: payload
    })
  }

}

const AppDispatcher = new DispatcherClass();

export default AppDispatcher;