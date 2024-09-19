/* eslint-disable no-unused-vars */

declare interface IskillData {
    project: string;
    description: string;
    techs: string[];
    responsibilities: string[];
    languages: string[];
}

declare type IskillListInfo = {
    name: string;
    progressValue: number;
}

declare type skillCondensation = {
    [x: string]: number;
}

declare type Icompetencies = {
    dataList: Array<skillCondensation>;
}

declare interface filters {
    filter: string[];
}
