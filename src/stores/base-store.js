import { EventEmitter } from 'events';
import BaseConstants from '../constants/base-constants'


export default class BaseStoreClass extends EventEmitter {

  addChangeListener(cb) {
    this.on(BaseConstants.EVENT_EMITTER_CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(BaseConstants.EVENT_EMITTER_CHANGE_EVENT, cb);
  }

  emitChange(){
    this.emit(BaseConstants.EVENT_EMITTER_CHANGE_EVENT);
  }
}