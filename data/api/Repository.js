import { Constant, Error_Msg, Logger } from '../../util/Utils'

export default class Repository{
    constructor() {
        if (this.constructor == Repository) {
          // throw new Error(Error_Msg.INSTANTIATION_ERROR);
        }
      }

    getUserDetail(){
      Logger.showLog(Constant.USER_DETAIL)
    }
}