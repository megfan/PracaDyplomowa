import {action, makeObservable, observable} from "mobx";
import {ingredientsList} from "../../localDB/DB";


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

    @observable
    summaryTotal: number = 0;

    @observable
    priceTotal: number = 0;
    
    constructor() {
        makeObservable(this);
    }

    @action
    setDataValue(index: number, value: number): void {
        this.dataValues.set(index, isNaN(value) ? 0 : value);
        this.setSummaryValue();
        if (this.prices.has(index)) {
            this.sumTotalPrices();
        }
    }

    @action
    setPrice(index: number, value: number): void {
        this.prices.set(index, isNaN(value) ? 0 : value);
        if (this.dataValues.has(index)) {
            this.sumTotalPrices();
        }
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
                })
            }
        });
       
        this.sumTotalValues();
    }

    @action
    sumTotalValues() {
        let sum = 0;
        this.dataValues.forEach((val, key) => {
            sum += val;
        });
        this.summaryTotal = sum;
    }

    @action
    sumTotalPrices() {
        let price = 0;
        this.prices.forEach((val, key) => {
            price += (val * (this.dataValues.get(key) ?? 1)) / 100;
        });
        this.priceTotal = price;
    }
    
}

