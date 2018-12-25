<template>
  <div>
    <b-navbar toggleable="md" type="info" variant="Dark" class="navbar">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">LOGO</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item-dropdown text="电影" class="mr-sm-2">
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
          <!-- <b-nav-item href="#">随便点啥</b-nav-item> -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input class="mr-sm-2" type="text" placeholder="Search"></b-form-input>
            <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="movie-list">
    <span v-for="(o) in jsonData"
        :key="o">
      <div class="card mb-2 list_item">
          <img :src="o.coverImg" alt="Image" class="card-img-top">
          <div class="card-body">
              <p class="card-title">导演:{{o.figures.director[0]}}</p>
              <span class="card-title">主演:{{o.figures.director}}</span>
          </div>
          </div>
    </span>
    </div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  data() {
    return {
      currentDate: new Date(),
      jsonData:"12121"
    };
  },
  methods: {
    getData() {
      this.$fetch('http://106.12.40.55:8087/getMovies.do?videoId=1005&page=1&page_size=20')
      .then((response) => {
        let sData = response.responseBody;
        console.log(sData)
        debugger
        this.jsonData = sData;
      })
  .catch(function (error) {
    console.log(error);
  });

    }
  }, mounted () { 
     this.getData()
     console.log(jsonData)
  },
};
</script>
<style>
/* 头部导航 */
.navbar {
  background: #e7ecec;
  border-bottom: 1px solid #00f;
}
.movie-list {
  margin-top: 20px;
  margin-left: 5%;
}
.card-img-top {
  width: 20rem;
  height: 25rem;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.list_item {
  max-width: 20rem;
  height: 30rem;
  float: left;
  margin-left: 1rem;
}
</style>


