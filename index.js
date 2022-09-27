/**
 * Bài 1: Tính tiền lương nhân viên
 * 
 * Sơ đồ 3 khối
 * 
 * - Input: lương 1 ngày (100.000), số ngày làm (20)
 * 
 * - Process:
 * + Lấy input: var dailyPayment = 100.000; var workingDays = 20;
 * + Lập công thức: var totalPayment = dailyPayment * workingDays; 
 * 
 * - Output:
 * Tiền lương nhân viên
 * 
 * 
 */

var dailyPayment = 100000;
var workingDays = 20;
var totalPayment = dailyPayment * workingDays;

console.log("Kết quả bài 1:", totalPayment);


/*********************************************************************************************************/

/**
 * Bài 2: Tính giá trị trung bình
 * 
 * Sơ đồ 3 khối
 * 
 * - Input: 5 số thực (a, b, c, d, e)
 * 
 * - Process:
 * + Lấy input: var a = 1; var b = 2; var c = 2.5; var d = 5.6; var e = 120;
 * + Lập công thức: average = (a + b + c + d + e)/5;
 * 
 * - Output: Trung bình của 5 số thực
 * 
 *  
 */

 var a = 1;
 var b = 2; 
 var c = 2.5; 
 var d = 5.6; 
 var e = 120;

 var average = (a + b + c + d + e)/5;

 console.log("Kết quả bài 2:", average);



 /*********************************************************************************************************/


 /**
  * Bài 3: Quy đổi tiền
  * 
  * - Input: Tỷ giá USD (23500VND), Số tiền USD (2USD)
  * 
  * - Process:
  * + Lấy input: var exchangeRate = 23500; var USD = 2;
  * + Lập công thức: var VND = exchangeRate * USD;
  * 
  * - Output: Số tiền sau qui đổi VND
  */

 var exchangeRate = 23500;
 var USD = 2;

 var VND = exchangeRate * USD;

 console.log("Kết quả bài 3:", VND);

/*********************************************************************************************************/

/**
 * Bài 4: Tính diện tích, chu vi hình chữ nhật
 * 
 * - Input: chiều dài, chiều rộng (hình chữ nhật)
 * 
 * - Process:
 * + Lấy input: var w = 6 (cm); var h = 5 (cm)
 * + Lập công thức chu vi: var perimeter = w + h (cm)
 * + Lập công thức tính diện tích: var area = w * h (cm2)  
 * 
 * - Output: chu vi, diện tích (hình chữ nhật)
 * 
 * 
 * 
 */

var w = 6;
var h = 5;

var perimeter = w + h;
var area = w*h;

console.log ("Kết quả bài 4: chu vi:", perimeter + "(cm), diện tích:", area + "(cm2)")


/*********************************************************************************************************/


/**
 * Bài 5: Tính tổng 2 ký số 
 * 
 * - Input: 1 số có 2 chữ số (12)
 * 
 * - Process:
 * + Lấy input: var number = 12, var ones = number % 10 (số hàng đơn vị), var tens = Math.floor(number / 10)
 * + Lập công thức var total = ones + tens
 *
 * 
 * 
 * - Output: Tổng 2 ký số vừa nhập
 */

var number = 12;
var ones = number % 10;
var tens = Math.floor(number / 10);
var total = ones + tens;

console.log("Kết quả bài 5:", total);