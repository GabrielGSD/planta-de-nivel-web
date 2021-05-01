<template>
  <div class="home">
    <h1 class="title">Planta de nível - Equipe 2</h1>
    <v-row style="margin: 30px 10px;">
    <!-- <v-icon dark>
            mdi-heart
          </v-icon> -->
      <v-col>
        <v-hover>
          <v-card class="mx-auto" max-width="344" min-width="250">
            <v-avatar
              color="#fff"
              size="50"
              style="margin: 10px auto;"
            >
              <img src="../assets/img/carbon_chart-average.svg" style="width:35px" alt="">
            </v-avatar>
            <h2 class="name">Overshoot</h2>
            <h3 class="value">100 %</h3>
          </v-card>
        </v-hover>
      </v-col>
      <v-col>
        <v-hover>
          <v-card class="mx-auto" max-width="344" min-width="250">
            <v-avatar 
              color="#fff"
              size="50"
              style="margin: 10px auto;"
            >
              <h1 style="font-size: 1.5em; color: #63819F;">Kp</h1>
            </v-avatar>
            <h2 class="name">Ganho proporcional</h2>
            <h3 class="value">6,29939</h3>
          </v-card>
        </v-hover>
      </v-col>
      <v-col>
        <v-hover>
          <v-card class="mx-auto" max-width="344" min-width="250">
            <v-avatar 
              color="#fff"
              size="50"
              style="margin: 10px auto;"
            >
              <h1 style="font-size: 1.5em; color: #63819F;">Ki</h1>
            </v-avatar>
            <h2 class="name">Ganho integral</h2>
            <h3 class="value">0,3688</h3>
          </v-card>
        </v-hover>
      </v-col>
      <v-col>
        <v-hover>
          <v-card class="mx-auto" max-width="344" min-width="250">
            <v-avatar 
              color="#fff"
              size="50"
              style="margin: 10px auto;"
            >
              <img src="../assets/img/bi_clock-history.svg" style="width:35px" alt="">
            </v-avatar>
            <h2 class="name">Tempo de acomodação</h2>
            <h3 class="value">70s</h3>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <v-row class="box">
      <v-col class="btn-group">
        <v-btn max-width="300" color="#6236F1">Minimos quadrados</v-btn>
        <v-btn max-width="300" color="#7956EC">Malha aberta</v-btn>
      </v-col>
      <v-col class="btn-group">
        <v-btn max-width="300" color="#6079F0">Malha fechada</v-btn>
        <v-btn max-width="300" color="#40A1F5">Malha fechada com ganho</v-btn>
      </v-col>
      <v-col class="btn-group">
        <v-btn max-width="300" color="#30B7F8">M. F. com controlador PI</v-btn>
        <v-btn max-width="300" color="#90DAFE">Comparativo</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <h1>Chart test</h1>
    </v-row>
    
  </div>
</template>

<style>

body {
  background-color: #fafbfc;
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
  box-shadow: 1px 2px 7px 5px rgb(0 0 0 / 36%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 11%) !important;
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
  box-shadow: 0 3px 3px 1px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
}

</style>

<script>

export default {
  name: "Home",
  components: {
    
  },
  data(){ 
    return { 
      data: {},
    }
  },

  created() {
    this.getData()
  },

  methods: {

    async getData() {
      const res = await fetch(this.$api_url);
      const dados = await res.json();
      this.data = dados;
      console.log(this.data)
    },
  }
};
</script>
