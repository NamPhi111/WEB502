console.log("typescript");

//1. Core Types: number, string, bolean
let myName: string = "hoadv";// chuoi ky  tu
const age: number = 36;
const isMarried: boolean = true;

console.log(myName);

//2.Type info suy dien ra kieu du lieu
let count = 10;
//count = "20"; //error

//3.Core types: obj
let product: {
    id: number;
    title: string;
    price: number;
} = {
    id: 1,
    title: 'Samshjt',
    price: 20,
}

//4.Core types: array number[] or array<number>
let number: number[] = [1,2,3,4,5];
let names: string[] = ["An", "Phi", "Dư", "Doanh"];
let scores: Array<number> = [10, 9, 6]; //number[]

//6. Special Types: any
let randomValues: any =10; //Gan any cho chay code
randomValues = "Hello";

//7.Type: Union ( | )
let multiType: number | string;
multiType = 42; // Hợp lệ
multiType = "Success"; // Hợp lệ
// multiType = true; // Lỗi

//8.Literal Type
let status: "success" | "error" | "loading";
status = "success"; // Hợp lệ
// status = "failed"; // Lỗi

//9. Null và Undefined
let value: string | null = null;
let score: number | undefined = undefined;

//10. Unknown và Any
let input: unknown = 42;
if (typeof input === "number") {
  let num: number = input; // Hợp lệ sau khi kiểm tra kiểu
}
let data: any = 10;
let num: number = data; // Không cần kiểm tra, nhưng không an toàn

//11. Type Assertions
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
// Hoặc sử dụng cú pháp <>
let strLength2: number = (<string>someValue).length; 






