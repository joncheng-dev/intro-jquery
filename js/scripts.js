$(document).ready(function () {
  // This is what I want to replicate, but do it with arrays & loops.
  // $("h1").click(function () {
  //   alert("This is a heading.");
  // });

  // $("p").click(function () {
  //   alert("This is a paragraph.");
  // });

  // $("img").click(function () {
  //   alert("This is an image.");
  // });
  const tags = ["h1", "p", "img"];

  let object;
  tags.forEach(function (tag) {
    $(tag).click(function () {
      if (tag === "h1") {
        object = "heading";
      } else if (tag === "p") {
        object = "paragraph";
      } else if (tag === "img") {
        object = "image";
      }
      alert("This is a(n) " + object + ".");
    });
  });
});
