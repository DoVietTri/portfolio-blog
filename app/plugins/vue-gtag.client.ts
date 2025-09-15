import VueGtag, { trackRouter } from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const { gaId } = config.public;

  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: gaId,
    },
  });
  trackRouter(useRouter());
});
