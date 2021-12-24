<template>
  <router-view/>
</template>

<script>
import 'nouislider/dist/nouislider.css'
export default {
  name: 'App'
}
</script>
<style lang="scss">
  @import "@/assets/scss/hope-ui.scss";
  @import url("./plugins/Leaflet/leaflet.css");
  @import url("./assets/vendor/fullcalendar/core/main.css");
  @import url("./assets/vendor/fullcalendar/daygrid/main.css");
  @import url("./assets/vendor/fullcalendar/timegrid/main.css");
  @import url("./assets/vendor/fullcalendar/list/main.css");
</style>
