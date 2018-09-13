export class Diary {
  public showDescription: boolean;
    constructor(public id:number, public name:string,public description:string,public addedDate:Date){
       this.showDescription=false
    }
}
