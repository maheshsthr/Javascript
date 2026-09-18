const p1 = Promise.resolve("users");
const p2 = Promise.resolve("posts");
const p3 = Promise.resolve("comments");

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values);
});
