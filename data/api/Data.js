import { Constant, Error_Msg, Logger } from '../../util/Utils'
export default class Data {

    constructor() {
        if (this.constructor == Data) {
          throw new Error(Error_Msg.INSTANTIATION_ERROR);
        }
      }

    getUserDetail(){
        Logger.showLog(Constant.USER_DETAIL)
    }
}