// Thực hành lab4: https://github.com/vanhoa690/typescript-web502-spring26/blob/main/note/lesson4.md
// Build file lab4.js
// Bài 1
// Tạo type Student gồm id, name, score.
// Bài 2
// Tạo interface User có id, email là required, còn phone optional.
// Bài 3
// Tạo type function Calculate cho phép cộng và nhân. Nhận 2 số a, b
// Trả về number Viết hàm:
// add(a, b)
// multiply(a, b)
// Bài 4
// Tạo type ApiStatus gồm: "idle" | "loading" | "success" | "error"
// Viết function logStatus(status: ApiStatus) Nếu:
// loading → in "Đang tải..."
// success → in "Thành công"
// error → in "Có lỗi xảy ra"

// ===== BÀI 1: Tạo type Student =====
type Student = {
  id: number;
  name: string;
  score: number;
};

const student1: Student = {
  id: 1,
  name: "Nguyễn Văn A",
  score: 8.5
};

// ===== BÀI 2: Tạo interface User =====
interface User {
  id: number;
  email: string;
  phone?: string; // optional
}

const user1: User = {
  id: 1,
  email: "a@gmail.com"
};

const user2: User = {
  id: 2,
  email: "b@gmail.com",
  phone: "0123456789"
};

// ===== BÀI 3: Type function Calculate =====
type Calculate = (a: number, b: number) => number;

const add: Calculate = (a, b) => {
  return a + b;
};

const multiply: Calculate = (a, b) => {
  return a * b;
};

// ===== BÀI 4: Type ApiStatus + function logStatus =====
type ApiStatus = "idle" | "loading" | "success" | "error";

const logStatus = (status: ApiStatus): void => {
  switch (status) {
    case "loading":
      console.log("Đang tải...");
      break;
    case "success":
      console.log("Thành công");
      break;
    case "error":
      console.log("Có lỗi xảy ra");
      break;
    default:
      console.log("Trạng thái rảnh");
  }
};

// ===== TEST TẤT CẢ =====
console.log("Student:", student1);
console.log("User 1:", user1);
console.log("User 2:", user2);

console.log("Add:", add(3, 4));
console.log("Multiply:", multiply(3, 4));

logStatus("loading");
logStatus("success");
logStatus("error");
logStatus("idle");
