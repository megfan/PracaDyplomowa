import {action, computed, makeObservable, observable} from "mobx";
import {ingredientsList} from "./localDB/DB";


export interface Ingredient {
    index: number;
    name: string;
    converters: IngredientConverters
}

interface IngredientConverters {
    sm: number;
    mj: number;
    białko: number;
    lizyna: number;
    metionina: number;
    arginina: number;
    tryptofan: number;
    włókno: number;
    ca: number;
    p: number;
    na: number;
}

export class DataTableState {
    @observable
    dataValues = new Map<number, number>();

    @observable
    prices = new Map<number, number>();

    @observable
    summaryValues = new Map<string, number>();

    
    constructor() {
        makeObservable(this);
    }

    @action
    setDataValue(index: number, value: number): void {
        this.dataValues.set(index, value);
        this.setSummaryValue();
    }

    @action
    setPrice(index: number, value: number): void {
        this.prices.set(index, value);
    }

    @action
    setSummaryValue(): void {
        this.summaryValues.clear();
        this.dataValues.forEach((val, key) => {
            let row = ingredientsList.find(x => x.index === key)?.converters;
            if (row !== undefined) {
                Object.keys(row).map(e => {
                    let previousValue = this.summaryValues.get(e);
                    return this.summaryValues.set(e, Number(((((row as any)[e] * val) / 100) + (previousValue ?? 0)).toFixed(2)))
                })}
        })
    }
    
    @computed
    get summaryTotal(): number {
        let sum = 0;
        this.dataValues.forEach((val, key) => {
            sum += val;
        })
        // Array.from(this.dataValues).reduce((sum, [val,key]) => {
        //     return sum += val;
        // },0);
        return sum;
    }

    @computed
    get priceTotal(): number {
        let sum = 0;
        this.prices.forEach((val, key) => {
            sum += (val * (this.dataValues.get(key) ?? 1)) /100;
        })
        return sum;
    }
}

export const dataState = new DataTableState();