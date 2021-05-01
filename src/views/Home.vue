<template>
  <div class="home">
    <h1 class="title">Planta de nível - Equipe 2</h1>
    <v-row style="margin: 30px 10px">
      <v-col>
        <v-hover>
          <v-card class="mx-auto" max-width="344" min-width="250">
            <v-avatar color="#fff" size="50" style="margin: 10px auto">
              <img
                src="../assets/img/carbon_chart-average.svg"
                style="width: 35px"
                alt=""
              />
            </v-avatar>
            <h2 class="name">Overshoot</h2>
            <h3 class="value">100 %</h3>
          </v-card>
        </v-hover>
      </v-col>
      <v-col>
        <v-hover>
          <v-card class="mx-auto" max-width="344" min-width="250">
            <v-avatar color="#fff" size="50" style="margin: 10px auto">
              <h1 style="font-size: 1.5em; color: #63819f">Kp</h1>
            </v-avatar>
            <h2 class="name">Ganho proporcional</h2>
            <h3 class="value">6,29939</h3>
          </v-card>
        </v-hover>
      </v-col>
      <v-col>
        <v-hover>
          <v-card class="mx-auto" max-width="344" min-width="250">
            <v-avatar color="#fff" size="50" style="margin: 10px auto">
              <h1 style="font-size: 1.5em; color: #63819f">Ki</h1>
            </v-avatar>
            <h2 class="name">Ganho integral</h2>
            <h3 class="value">0,3688</h3>
          </v-card>
        </v-hover>
      </v-col>
      <v-col>
        <v-hover>
          <v-card class="mx-auto" max-width="344" min-width="250">
            <v-avatar color="#fff" size="50" style="margin: 10px auto">
              <img
                src="../assets/img/bi_clock-history.svg"
                style="width: 35px"
                alt=""
              />
            </v-avatar>
            <h2 class="name">Tempo de acomodação</h2>
            <h3 class="value">70s</h3>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <v-row>
      <h3>Calculos</h3>
      <v-col v-for="(item, i) in items" :key="i"
        ><img :src="item.src" alt=""
      /></v-col>
    </v-row>

    <v-row class="box">
      <v-col class="btn-group">
        <v-btn
          max-width="300"
          color="#6236F1"
          @click="(load = true), createOMQ()"
          >Minimos quadrados</v-btn
        >
        <v-btn
          max-width="300"
          color="#7956EC"
          @click="(load = true), createMA()"
          >Malha aberta</v-btn
        >
      </v-col>
      <v-col class="btn-group">
        <v-btn
          max-width="300"
          color="#6079F0"
          @click="(load = true), createMF()"
          >Malha fechada</v-btn
        >
        <v-btn
          max-width="300"
          color="#40A1F5"
          @click="(load = true), createMFGP()"
          >Malha fechada com ganho</v-btn
        >
      </v-col>
      <v-col class="btn-group">
        <v-btn
          max-width="300"
          color="#30B7F8"
          @click="(load = true), createMFC()"
          >M. F. com controlador PI</v-btn
        >
        <v-btn
          max-width="300"
          color="#90DAFE"
          @click="(load = true), createComp()"
          >Comparativo</v-btn
        >
      </v-col>
    </v-row>

    <v-row v-if="!load">
      <section class="chart-container">
        <vue-anychart
          :options="CombineOptions"
          ref="combineChart"
        ></vue-anychart>
      </section>
    </v-row>
  </div>
</template>

<style>
@import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

body {
  background-color: #fafbfc;
}

h1,
h2,
h3 {
  margin-bottom: 0;
}

.title {
  font-weight: 600;
  font-size: 2em;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

.v-card {
  background: linear-gradient(to right, rgb(121, 86, 236), rgb(47, 185, 248));
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.v-card:hover {
  box-shadow: 1px 2px 7px 5px rgb(0 0 0 / 36%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 11%) !important;
}

.v-avatar {
  border-radius: 100% !important;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 36%);
}

.name {
  font-size: 1.2em;
  font-weight: 500;
  color: white;
  text-align: center;
}

.value {
  color: white;
  font-weight: 500;
  text-align: center;
  font-size: 2.5em;
}

.btn-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn-group .v-btn {
  margin: 10px 0;
}

.v-btn__content {
  overflow-wrap: break-word !important;
  color: #fff !important;
  text-shadow: 1px 1px #000000c4;
  text-transform: none;
}

.box {
  margin: 0 10vw;
  background: white;
  border-radius: 20px;
  box-shadow: 0 3px 3px 1px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
}

.chart {
  width: 100%;
  height: 400px;
  margin-bottom: 10px;
}

.chart-container {
  text-align: center;
  margin-top: 75px;
  margin-bottom: 15px;
  width: 50vw;
  margin: 30px auto;
}

.chart-list .chart-container:first-child {
  margin-top: 35px;
}
</style>

<script>
/* eslint-disable */

import VueAnychart from "../components/VueAnychart";
import * as data from "../data/data";
import Anychart from "anychart";

export default {
  name: "Home",
  components: {
    VueAnychart,
  },
  data() {
    return {
      Anychart: Anychart,
      areaOptions: data.AreaData,
      pieOptions: data.PieData,
      lineOptions: data.LineData,
      CombineOptions: data.CombineData,
      lineSeriesCount: 0,
      xAxisIsModified: false,
      pieDataIsModified: false,
      data: [],
      load: true,
      items: [
        {
          src: require("../assets/img/conta_1.jpg"),
        },
        {
          src: require("../assets/img/conta_2.jpg"),
        },
        {
          src: require("../assets/img/conta_3.jpg"),
        },
        {
          src: require("../assets/img/conta_4.jpg"),
        },
        {
          src: require("../assets/img/conta_5.jpg"),
        },
        {
          src: require("../assets/img/conta_6.jpg"),
        },
      ],
    };
  },
  mounted() {
    // this.lineSeriesCount = this.$refs.lineChart.chart.getSeriesCount();
    this.getData();
  },
  methods: {
    createMA() {
      let sizeX = this.data.malhaAberta.x.length;
      let d = [];

      for (let index = 0; index < sizeX; index++) {
        if (Number.isInteger(this.data.malhaAberta.x[index])) {
          d.push({
            x: this.data.malhaAberta.x[index],
            value: this.data.malhaAberta.value[index],
          });
        }
      }

      this.CombineOptions = {
        chart: {
          title: "Malha Aberta",
          animation: true,
          tooltip: { displayMode: "union" },
          interactivity: { hoverMode: "by-x" },
          series: [
            {
              seriesType: "spline",
              name: "Line",
              normal: { stroke: { color: "#7956EC", thickness: 2.5 } },
              data: d,
            },
          ],
          type: "column",
        },
      };

      this.load = false;
    },

    createMF() {
      let sizeX = this.data.malhaFechada.x.length;
      let d = [];

      for (let index = 0; index < sizeX; index++) {
        if (Number.isInteger(this.data.malhaFechada.x[index])) {
          d.push({
            x: this.data.malhaFechada.x[index],
            value: this.data.malhaFechada.value[index],
          });
        }
      }

      this.CombineOptions = {
        chart: {
          title: "Malha Fechada",
          animation: true,
          tooltip: { displayMode: "union" },
          interactivity: { hoverMode: "by-x" },
          series: [
            {
              seriesType: "spline",
              name: "Line",
              normal: { stroke: { color: "#6079F0", thickness: 2.5 } },
              data: d,
            },
          ],
          type: "column",
        },
      };

      this.load = false;
    },
    createMFC() {
      let sizeX = this.data.malhaFechadaControlador.x.length;
      let d = [];

      for (let index = 0; index < sizeX; index++) {
        if (Number.isInteger(this.data.malhaFechadaControlador.x[index])) {
          d.push({
            x: this.data.malhaFechadaControlador.x[index],
            value: this.data.malhaFechadaControlador.value[index],
          });
        }
      }

      this.CombineOptions = {
        chart: {
          title: "Malha Fechada com Controlador PI",
          animation: true,
          tooltip: { displayMode: "union" },
          interactivity: { hoverMode: "by-x" },
          series: [
            {
              seriesType: "spline",
              name: "Line",
              normal: { stroke: { color: "#30B7F8", thickness: 2.5 } },
              data: d,
            },
          ],
          type: "column",
        },
      };

      this.load = false;
    },
    createMFGP() {
      let sizeX = this.data.malhaFechadaGanhoProporcional.x.length;
      let d = [];

      for (let index = 0; index < sizeX; index++) {
        if (
          Number.isInteger(this.data.malhaFechadaGanhoProporcional.x[index])
        ) {
          d.push({
            x: this.data.malhaFechadaGanhoProporcional.x[index],
            value: this.data.malhaFechadaGanhoProporcional.value[index],
          });
        }
      }

      this.CombineOptions = {
        chart: {
          title: "Malha Fechada com Ganho Proporcional",
          animation: true,
          tooltip: { displayMode: "union" },
          interactivity: { hoverMode: "by-x" },
          series: [
            {
              seriesType: "spline",
              name: "Line",
              normal: { stroke: { color: "#40A1F5", thickness: 2.5 } },
              data: d,
            },
          ],
          type: "column",
        },
      };

      this.load = false;
    },
    createOMQ() {
      let sizeX = this.data.original.x.length;
      let d = [];
      let mq = [];

      for (let index = 0; index < sizeX; index++) {
        if (Number.isInteger(this.data.original.x[index])) {
          d.push({
            x: this.data.original.x[index],
            value: this.data.original.value[index],
          });
        }
      }

      for (let index = 0; index < sizeX; index++) {
        if (Number.isInteger(this.data.originalMinimoQuadrado.x[index])) {
          mq.push({
            x: this.data.originalMinimoQuadrado.x[index],
            value: this.data.originalMinimoQuadrado.value[index],
          });
        }
      }

      this.CombineOptions = {
        chart: {
          title: "Minimos Quadrados",
          animation: true,
          tooltip: { displayMode: "union" },
          interactivity: { hoverMode: "by-x" },
          series: [
            {
              seriesType: "spline",
              name: "Original",
              normal: { stroke: { color: "#90DAFE", thickness: 2.5 } },
              data: d,
            },
            {
              seriesType: "spline",
              name: "Min. Quadrados",
              normal: { stroke: { color: "#6236F1", thickness: 2.5 } },
              data: mq,
            },
          ],
          type: "column",
        },
      };

      this.load = false;
    },
    createComp() {
      let sizeX = this.data.malhaAberta.x.length;
      let ma = [];
      let mf = [];
      let mfpi = [];

      for (let index = 0; index < sizeX; index++) {
        if (Number.isInteger(this.data.malhaAberta.x[index])) {
          ma.push({
            x: this.data.malhaAberta.x[index],
            value: this.data.malhaAberta.value[index],
          });
        }
      }

      for (let index = 0; index < sizeX; index++) {
        if (Number.isInteger(this.data.malhaFechada.x[index])) {
          mf.push({
            x: this.data.malhaFechada.x[index],
            value: this.data.malhaFechada.value[index],
          });
        }
      }

      for (let index = 0; index < sizeX; index++) {
        if (
          Number.isInteger(this.data.malhaFechadaGanhoProporcional.x[index])
        ) {
          mfpi.push({
            x: this.data.malhaFechadaGanhoProporcional.x[index],
            value: this.data.malhaFechadaGanhoProporcional.value[index],
          });
        }
      }

      this.CombineOptions = {
        chart: {
          title: "Comparativo",
          animation: true,
          tooltip: { displayMode: "union" },
          interactivity: { hoverMode: "by-x" },
          series: [
            {
              seriesType: "spline",
              name: "Malha Aberta",
              normal: { stroke: { color: "#7956EC", thickness: 2.5 } },
              data: ma,
            },
            {
              seriesType: "spline",
              name: "Malha Fechada",
              normal: { stroke: { color: "#6079F0", thickness: 2.5 } },
              data: mf,
            },
            {
              seriesType: "spline",
              name: "Malha Fechada com Ganho PI",
              normal: { stroke: { color: "#40A1F5", thickness: 2.5 } },
              data: mfpi,
            },
          ],
          type: "column",
        },
      };

      this.load = false;
    },
    async getData() {
      const res = await fetch("http://localhost:5000/");
      const dados = await res.json();
      this.data = dados;
    },
  },
};
</script>
