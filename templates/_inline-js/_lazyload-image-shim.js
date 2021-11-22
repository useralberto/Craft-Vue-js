// From https://web.dev/native-lazy-loading/#how-do-i-handle-browsers-that-don't-yet-support-native-lazy-loading
if ("loading" in HTMLImageElement.prototype) {
  // Replace the img.src with what is in the data-src property
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    let { src } = img.dataset;
    img.src = src;
  });
  // Replace the source.srcset with what is in the data-srcset property
  const sources = document.querySelectorAll("source[data-srcset]");
  sources.forEach((source) => {
    let { srcset } = source.dataset;
    source.srcset = srcset;
  });
} else {
  // Dynamically import the LazySizes library
  const script = document.createElement("script");
  script.src = "/assets/js/lazysizes.min.js";
  document.body.appendChild(script);
}
