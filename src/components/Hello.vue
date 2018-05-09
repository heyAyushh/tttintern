<template>
  <div id="hello">

        <div id="background-container" class="background-container">
            <div id="background-output" class="background-output">
                  <flat-surface-shader class="shader"
                         type="canvas" 
                         :light="{ambient: '#0e0b16', diffuse: '#fff', draw: true, autopilot: false, count:'3'}" 
                         :mesh="{segments: 30, slices: 15, width: 2, height: 2}"/>
            </div>

        </div>
		    <h1><i>ttt intern test</i></h1>
		<div class = "content"  v-show="sub">
    
      <h2>Enter N: </h2>
        <el-input-number v-model="num1"  :min="1" ></el-input-number>
        <br>
        <br>
          <el-button round :loading="yo" size:medium v-on:click='getit' native-type=submit>Check top N Word frequencies</el-button>
		</div>

    <div class = "content" id = "" v-show="restable">

    <data-tables :data="data">
    <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" :key="title.label" sortable="custom">
    </el-table-column>
  </data-tables>

    </div>

    
  </div>
</template>

<script>
import axios from "axios";

var datares;

export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      num1: "",
      sub: true,
      restable: false,
      data:[{}],
      yo: false,
      titles: [
        {
          prop: "word",
          label: "Word"
        },
        {
          prop: "count",
          label: "no. of occurence"
        }
      ]
    };
  },
  methods: {
    getit: function() {
      this.yo = true;
      var url = "https://intttern.azurewebsites.net/api/test?n=" + this.num1;

      axios
        .get("https://interndev.azurewebsites.net/api/freq?n=" + this.num1)
        .then(res => {
          console.log(res.data);
          this.data = res.data;
          this.restable = true;
          this.sub = false;
        })
        .catch(function(res) {
          if (res instanceof Error) {
            console.log(res.message);
          } else {
            console.log(res.data);
          }
        });
    }
  }
};
</script>

<style scoped>
.background-container {
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
noindex:-o-prefocus,
.background-container {
  display: none;
} /* Hide background in old Opera because of lags */

.content {
  background: rgba(236, 234, 234, 0.5);
  padding: 40px 40px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30em;
  height: 18em;
  margin-top: -9em; /*set to a negative number 1/2 of your height*/
  margin-left: -15em; /*set to a negative number 1/2 of your width*/
  border: 1px solid #ccc;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

</style>

