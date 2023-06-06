const selectOptions = document.querySelectorAll("#options");
const modal = document.querySelector(".modal");
const applyFilterBtn = document.querySelector("#apply-filter");

const url = new URL(window.location.href);
const searchParam = new URLSearchParams(url);

window.addEventListener("load", function () {
  modal.remove();

  const params = new URL(document.location).searchParams;
  const category = params.get("category");
  const platform = params.get("platform");
  const sortBy = params.get("sort-by");

  selectOptions.forEach((option) => {
    if (category && option.dataset.type === "category") {
      searchParam.append("category", category);
      option.value = category;
    }
    if (platform && option.dataset.type === "platform") {
      searchParam.append("platform", platform);

      option.value = platform;
    }
    if (sortBy && option.dataset.type === "sort-by") {
      searchParam.append("sort-by", sortBy);
      option.value = sortBy;
    }
  });
});

selectOptions.forEach((option) => {
  option.addEventListener("change", (e) => {
    const { type } = option.dataset;

    if (type === "category" && e.target.value !== "all") {
      searchParam.set("category", e.target.value);
    }

    if (type === "platform") {
      searchParam.set("platform", e.target.value);
    }

    if (type === "sort-by") {
      searchParam.set("sort-by", e.target.value);
    }
  });
});

applyFilterBtn.addEventListener("click", () => {
  window.location.href = `/?${searchParam.toString()}#games`;
});
