document.addEventListener("astro:after-swap", (e) => {
  console.log("astro:after-swap", e);
});

document.addEventListener("astro:page-load", (e) => {
  console.log("astro:page-load", e);
});
