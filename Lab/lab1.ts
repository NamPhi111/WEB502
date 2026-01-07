// 1. Hàm tính chu vi và diện tích hình chữ nhật
function rectangleInfo(dai: number, rong: number): { cVi: number; dTich: number } {
  const cVi = 2 * (dai + rong);
  const dTich = dai * rong;
  return { cVi, dTich };
}

// 2. Hàm tính tổng nhiều số (rest parameter)
function sumNumbers(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// 3. Hàm đếm số lần xuất hiện của 1 ký tự trong chuỗi
function countChar(str: string, char: string): number {
  let count = 0;
  for (let c of str) {
    if (c === char) {
      count++;
    }
  }
  return count;
}

// 4. Hàm kiểm tra số nguyên tố
function isPrime(n: number): boolean {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// Test
console.log(rectangleInfo(5, 3));
console.log(sumNumbers(1, 2, 3, 4, 5));
console.log(countChar("hello world", "o"));
console.log(isPrime(7));
