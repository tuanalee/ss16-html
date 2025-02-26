let math= +prompt("mời nhập điểm toán");
let physics=+prompt("nhập điểm lý");
let chemistry=Number(prompt("nhập điểm hóa"));
let average= (math+physics+chemistry)/3;
let result= average.toFixed(2);
console.log("điểm trung bình",result);