import Data from "./Data";
import CloudRepositoryImplementation from './CloudRepositoryImplementation'
import DBRepositoryImplementation from './DBRepositoryImplementation'

export default class DataImplementation extends Data{

    constructor(){
        this.cloudImpl = new CloudRepositoryImplementation()
        this.dbImpl = new DBRepositoryImplementation()
    }

    getUserDetail(){
        super.getUserDetail();
    }
}