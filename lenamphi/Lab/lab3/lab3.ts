// File lab3.ts xứ lý theo yêu cầu, build lab3.js (dist)
// - Hàm tính điểm trung bình (Return type + Arrow Function)
// - Định nghĩa kiểu hàm kiểm tra số chẵn lẻ (Function as Type)
// - Hàm tạo thông tin người dùng (Default + Optional Parameter)
// - Hàm xử lý danh sách sản phẩm (Spread + Rest)
// ==========================
// 1. Hàm tính điểm trung bình (Return type + Arrow Function)
// ==========================
const tinhDiemTrungBinh = (a: number, b: number, c: number): number => {
    return (a + b + c) / 3;
};

console.log("Điểm trung bình:", tinhDiemTrungBinh(8, 9, 7));


// ==========================
// 2. Định nghĩa kiểu hàm kiểm tra số chẵn lẻ (Function as Type)
// ==========================
type CheckEvenOdd = (n: number) => string;

const kiemTraChanLe: CheckEvenOdd = (n: number): string => {
    return n % 2 === 0 ? "Số chẵn" : "Số lẻ";
};

console.log("5 là:", kiemTraChanLe(5));
console.log("10 là:", kiemTraChanLe(10));


// ==========================
// 3. Hàm tạo thông tin người dùng (Default + Optional Parameter)
// ==========================
const taoThongTinNguoiDung = (
    name: string,
    age: number = 18,      // default parameter
    address?: string      // optional parameter
): string => {
    return `Tên: ${name}, Tuổi: ${age}, Địa chỉ: ${address ?? "Chưa cập nhật"}`;
};

console.log(taoThongTinNguoiDung("Văn A"));
console.log(taoThongTinNguoiDung("Văn B", 22));
console.log(taoThongTinNguoiDung("Văn C", 25, "Hà Nội"));


// ==========================
// 4. Hàm xử lý danh sách sản phẩm (Spread + Rest)
// ==========================
type Product = {
    id: number;
    name: string;
    price: number;
};

// Rest parameter
const themSanPham = (...products: Product[]): Product[] => {
    return products;
};

const p1: Product = { id: 1, name: "SP1", price: 1000 };
const p2: Product = { id: 2, name: "SP2", price: 2000 };
const p3: Product = { id: 3, name: "SP3", price: 3000 };

// Spread operator
const danhSachCu: Product[] = [p1, p2];
const danhSachMoi: Product[] = [...danhSachCu, ...themSanPham(p3)];

console.log("Danh sách sản phẩm:", danhSachMoi);
