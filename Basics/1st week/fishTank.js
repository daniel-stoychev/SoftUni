function filters(input) {
  let length = Number(input[0]) / 10;
  let wide = Number(input[1]) / 10;
  let height = Number(input[2]) / 10;
  let percentage = Number(input[3]) / 100;
  console.log(length * wide * height - percentage * length * wide * height);
}

filters(["85 ", "75 ", "47 ", "17 "]);
