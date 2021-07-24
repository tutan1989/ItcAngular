export class Customer {
    public id: number;
    public name:string;
    public age: number;
    public location : string;
    public pincode: number;

    constructor(id:number, name:string, age:number, location: string, pincode: number){
        this.id = id;
        this.name= name;
        this.age = age;
        this.location = location;
        this.pincode = pincode;
    }
}
