import Data from "./Data";
import CloudRepositoryImplementation from './CloudRepositoryImplementation'
import DBRepositoryImplementation from './DBRepositoryImplementation'

export default class DataImplementation extends Data{

    constructor(){
        super()
        cloudImpl = new CloudRepositoryImplementation()
        dbImpl = new DBRepositoryImplementation()
    }

    getUserDetail(){
        super.getUserDetail();
    }
}