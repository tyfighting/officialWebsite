<template>
  <div>
    <div class="nav">
      <div class="left">
        <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/logo.png" />
      </div>
      <div class="right">
        <div class="search">
          <i class="el-icon-search"></i>
        </div>
        <div>
          <el-dropdown @command="changeL">
            <span class="el-dropdown-link">
              {{ languageText}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="ch">中文</el-dropdown-item>
              <el-dropdown-item command="en">English</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div>
          <router-link to="/login">登录</router-link>
          <router-link to="/login">注册</router-link>
        </div>
      </div>
    </div>
    <div class="menu">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#20528f" text-color="#fff" @select="handleSelect" active-text-color="#fff">
        <el-menu-item index="1">
          <Language link="/" Chinese="首页" English="Home" :language="language"></Language>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <Language link="" Chinese="关于我们" English="About Us" :language="language"></Language>
          </template>
          <el-menu-item index="2-1">
            <Language link="" Chinese="加入我们" English="Home" :language="language"></Language>
          </el-menu-item>
          <el-menu-item index="2-2">
            <Language link="" Chinese="联系我们" English="Home" :language="language"></Language>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="3">
          <Language link="/news/latest" Chinese="资讯中心" English="News" :language="language"></Language>
        </el-menu-item>
        <el-submenu index="4">
          <template slot="title">
            <Language link="" Chinese="会议活动" English="Events" :language="language"></Language>
          </template>
          <el-menu-item index="4-1">
            <Language link="" Chinese="VIS国际学校发展大会" English="Home" :language="language"></Language>
          </el-menu-item>
          <el-menu-item index="4-2">
            <Language link="" Chinese="地区/专题研讨会" English="Home" :language="language"></Language>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <Language link="" Chinese="研究院" English="Research" :language="language"></Language>
          </template>
          <el-menu-item index="5-1">
            <Language link="" Chinese="国际学校高级管理研修班" English="Home" :language="language"></Language>
          </el-menu-item>
          <el-menu-item index="5-2">
            <Language link="" Chinese="国际学校职能岗位课程" English="Home" :language="language"></Language>
          </el-menu-item>
          <el-menu-item index="5-3">
            <Language link="" Chinese="研究报告" English="Home" :language="language"></Language>
          </el-menu-item>
          <el-menu-item index="5-4">
            <Language link="" Chinese="国际学校内参" English="Home" :language="language"></Language>
          </el-menu-item>
          <el-menu-item index="5-5">
            <Language link="" Chinese="专家智库" English="Home" :language="language"></Language>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="6">
          <Language link="" Chinese="咨询服务" English="Service" :language="language"></Language>
        </el-menu-item>
        <el-menu-item index="7">
          <Language link="/ges" Chinese="G E S" English="G E S" :language="language"></Language>
        </el-menu-item>
        <el-menu-item index="8">
          <Language link="" Chinese="会 员" English="V I P" :language="language"></Language>
        </el-menu-item>
        <el-menu-item index="9">
          <Language link="" Chinese="国际学校四库全书" English="DataBase" :language="language"></Language>
        </el-menu-item>
        <el-menu-item index="10">
          <Language link="" Chinese="在线课堂" English="Class" :language="language"></Language>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="m-menu">
      <el-menu :default-active="mActiveIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">
          <Language link="/" Chinese="首页" English="Home" :language="language"></Language>
        </el-menu-item>
        <el-menu-item index="2">
          <Language link="" Chinese="关于我们" English="About Us" :language="language"></Language>
        </el-menu-item>
        <el-menu-item index="3">
          <Language link="/news/latest" Chinese="资讯中心" English="News" :language="language"></Language>
        </el-menu-item>
        <el-menu-item index="4">
          <Language link="" Chinese="会议活动" English="Events" :language="language"></Language>
        </el-menu-item>
        <el-submenu index="5">
          <template slot="title">
            <Language link="" Chinese="查看其他" English="Other" :language="language"></Language>
          </template>
          <el-menu-item index="5-1">
            <Language link="" Chinese="研究院" English="Research" :language="language"></Language>
          </el-menu-item>
          <el-menu-item index="5-2">
            <Language link="" Chinese="咨询服务" English="Service" :language="language"></Language>
          </el-menu-item>
          <el-menu-item index="5-3">
            <Language link="/ges" Chinese="G E S" English="G E S" :language="language"></Language>
          </el-menu-item>
          <el-menu-item index="5-4">
            <Language link="" Chinese="会 员" English="V I P" :language="language"></Language>
          </el-menu-item>
          <el-menu-item index="5-5">
            <Language link="" Chinese="国际学校四库全书" English="DataBase" :language="language"></Language>
          </el-menu-item>
          <el-menu-item index="5-6">
            <Language link="" Chinese="在线课堂" English="Class" :language="language"></Language>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>
<script>
import Language from "./language";
export default {
  data() {
    return {
      activeIndex: "1",
      mActiveIndex: "1",
      language: "ch",
      languageText: "中文"
    };
  },
  components: {
    Language
  },
  methods: {
    changeL(command) {
      this.language = command;
      this.languageText = command == "ch" ? "中文" : "English";
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  margin: 18px auto;
  .left img {
    width: 220px;
    height: 45px;
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: space-around;
    & > div {
      margin: 0 10px;
    }
  }
}
.search {
  display: none;
}
.menu {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.28);
  display: none;
}
.m-menu {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.28);
  display: block;
}
.el-menu--horizontal > .el-submenu .el-submenu__title,
.el-menu--horizontal > .el-menu-item {
  height: 53px;
  line-height: 53px;
}
.m-menu .router-link-exact-active.router-link-active {
  color: #909399;
}
@media screen and (min-width: 768px) {
  .nav {
    width: 750px;
  }
}
@media screen and (min-width: 992px) {
  .nav {
    width: 970px;
  }
  .m-menu {
    display: none;
  }
  .menu {
    display: block;
    width: 100%;
    background: #20528f;
    .el-menu {
      width: 800px;
      margin: 0 auto;
      border-bottom: solid 1px #20528f;
      .el-menu-item {
        display: block;
      }
      .el-menu-item.is-active {
        border-bottom-color: #20528f;
      }
      .router-link-exact-active,
      .router-link-active {
        text-decoration: none;
        color: #fff;
      }
      .el-submenu__title i {
        color: #fff;
      }
    }
  }
  .el-menu--horizontal .router-link-exact-active,
  .router-link-active {
    text-decoration: none;
    color: #fff;
  }
  .search {
    display: block;
  }
}
@media screen and (min-width: 1200px) {
  .nav {
    width: 1170px;
  }
  .menu {
    display: block;
    width: 100%;
    background: #20528f;
    .el-menu {
      width: 1170px;
      margin: 0 auto;
      border-bottom: solid 1px #20528f;
      .el-menu-item.is-active {
        border-bottom-color: #20528f;
      }
      .router-link-exact-active,
      .router-link-active {
        text-decoration: none;
        color: #fff;
      }
      .el-submenu__title i {
        color: #fff;
      }
    }
    .m-menu {
      display: none;
    }
    .el-menu--horizontal .router-link-exact-active,
    .router-link-active {
      text-decoration: none;
      color: #fff;
    }
    .search {
      display: block;
    }
  }
}
</style>