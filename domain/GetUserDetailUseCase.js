import DataImplementation from "../data/api/DataImplementation";

export default class GetUserDetailUseCase {
    constructor(){
        this.dataImplementation = new DataImplementation()
    }

    executeGetUserDetailUseCase(){
        this.dataImplementation.getUserDetail();
    }
} 