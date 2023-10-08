export interface SignUp{
    name:string,
    password:string,
    email:string
};
export interface Login{
    email:string,
    password:string,
    
};

export interface product{
    name:string,
    price:string,
    category:string,
    color:string,
    description:string,
    image:string,
    id:number,
    quantity: undefined | number,
}