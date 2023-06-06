const select = document.querySelector("#select");
const modal = document.querySelector(".modal");

window.addEventListener("load", function () {
  modal.remove();

  const params = new URL(document.location).searchParams;
  const category = params.get("category");

  if (category) select.value = category;
});

select.addEventListener("change", function (e) {
  if (e.target.value === "All") {
    return (location.href = `/#games`);
  }

  return (location.href = `/?category=${e.target.value}#games`);
});
