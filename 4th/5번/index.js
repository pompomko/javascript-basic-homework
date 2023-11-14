// 여기에 1번 문제의 답을 작성하세요.async await 문법으로 바꿔보세요.

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then(console.log);

const 아무이름 = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  console.log("아무이름", data);
  return data;
};
아무이름();

// 여기에 2번 문제의 답을 작 성하세요.
// fetch("https://dummyjson.com/products/add", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     title: "BMW Pencil",
//     /* other product data */
//   }),
// })
//   .then((res) => res.json())
//   .then(console.log);

const 아무이름2 = async () => {
  const res = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "BMW Pencil",
      /* other product data */
    }),
  });
  const data1 = await res.json();
  console.log("아무이름2", data1);
  return data1;
};
아무이름2();
