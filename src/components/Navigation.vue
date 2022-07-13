<template>
  <div class="navigation">
    <div class="sidebar" v-for="nav in navs" :key="nav.id">
      <div>
        <router-link :to="nav.href">
          <div
            class="sidebar-post"
            @click="active = nav.id"
            :class="{ activeClass: nav.id === active }"
          >
            <div class="sidebar-post-host">
              <div class="sidebar-img">
                <img :src="nav.img" alt="" />
              </div>
              <div class="sidebar-title">{{ nav.title }}</div>
            </div>
            <div class="sidebar-infor" v-if="nav.infor">{{ nav.infor }}</div>
          </div>
          <hr class="hr" v-if="nav.isDisplayBr" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigation-page",
  data() {
    return {
      active: false,
      navs: [
        {
          id: 1,
          href: "/News",
          img: require("../assets/sidebar/siren-on.png"),
          title: "News",
          infor: "12",
        },
        {
          id: 2,
          href: "/",
          img: require("../assets/sidebar/chalkboard.png"),
          title: "Technology",
          infor: "12",
        },
        {
          id: 3,
          href: "/Music",
          img: require("../assets/sidebar/play.png"),
          title: "Music",
          infor: "",
        },
        {
          id: 4,
          href: "/Feedback",
          img: require("../assets/sidebar/comment-alt.png"),
          title: "Feedback",
          infor: "99+",
          isDisplayBr: true,
        },
        {
          id: 5,
          href: "/Survey",
          img: require("../assets/sidebar/clipboard-check.png"),
          title: "Survey",
          infor: "12",
          isDisplayBr: true,
        },
      ],
    };
  },
  methods: {
    handleActive() {
      this.active = true;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gulzar&family=Mingzat&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
.navigation {
  width: 260px;
  position: fixed;
  top: 61px;
  z-index: 10;
  margin-top: 16px;
}
.sidebar {
  width: 260px;
  border-right: 1px solid #f0f0f0;
  /* margin-top: 16px; */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.sidebar-post {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
}
.sidebar-post-host {
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  /* background-color: #fff; */
  width: 228px;
  height: 40px;
  padding: 2px 16px;
}
.sidebar-post-host .sidebar-img {
  padding-right: 16px;
}
.sidebar-post-host .sidebar-img img {
  width: 24px;
  height: 24px;
  padding: 2px 4px;
}
.sidebar-title {
  text-decoration: none;
  font-style: 14px;
  font-weight: 500;
  line-height: 24px;
}
a {
  color: #191919;
  text-decoration: none;
}
.sidebar-infor {
  width: 40px;
  height: 18px;
  border-radius: 40px;
  background-color: #e72511;
  color: #ffffff;
  font-style: 12px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
}
.side-sub {
  width: 260px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
}
.sidebar-border {
  border-bottom: 1px solid #f0f0f0;
}
.activeClass {
  background-color: #007c7c;
  border-radius: 40px;
  color: #ffffff;
}
.hr {
  padding: 0px;
  margin: 12px;
}
</style>