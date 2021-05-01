<template>
  <div class="small">
    <h1>HERE</h1>

    <line-chart></line-chart>
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>


<script>
import LineChart from "../components/Chart.vue";

export default {
  components: {
    LineChart,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>