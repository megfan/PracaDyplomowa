import {action, makeObservable, observable} from "mobx";


export enum birdType {
    CHICKEN,
    NUMIDIES,
    DUCK,
}

export class AppState {
    @observable
    type: birdType = birdType.CHICKEN;


    constructor() {
        makeObservable(this);
    }

    @action
    setType(t: birdType): void {
        this.type = t;
    }

};