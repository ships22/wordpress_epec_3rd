import DefaultLayout from "~/layouts/Default.vue";

// export default function(Vue) {
//   Vue.component("Layout", DefaultLayout);
// }
//import "~/assets/styles.css";
require("./assets/style.css");
export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Exo:400,700|Rubik:700&display=swap"
  });
}
