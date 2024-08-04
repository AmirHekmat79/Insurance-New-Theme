<template>
  <q-toolbar>
    <div class="row justify-between items-center toolbar-content">
      <div class="row justify-start items-center q-ml-auto">
        <q-btn   v-if="$q.screen.lt.lg"
      @click="toggleSidebar"
      icon="menu">
    </q-btn>
        <div class="row justify-around items-center q-gutter-sm">
          <q-btn class="register-btn"
            ><a class="q-mx-md">ثبت نام</a
            ><q-img src="../../assets/RegisterIcon.png" width="24px"></q-img
          ></q-btn>
          <q-btn class="entrance-btn"
            ><a class="q-mx-md">ورود</a
            ><q-img src="../../assets/LoginIcon.png" width="24px"></q-img
          ></q-btn>
          <q-btn class="text-black q-px-md search-btn" icon="search"></q-btn>
        </div>
        <q-list
          v-if="!sidebarVisible"
          class="navLink-container row justify-start items-center"
        >
          <q-item
            v-for="(item, index) in sortedMenuItems"
            :key="index"
            class="navLink-item"
          >
            <submenu
              class="navLink-btn"
              :isSubMenu="hasChildItems(item.id)"
              :menus="getChildItems(item.id)"
              :menu="item"
              :allMenu="InsuranceNavbarMenuItems"
              isFirst
            />
          </q-item>
        </q-list>
        <q-drawer
          v-else
          v-model="sidebarVisible"
          side="left"
          show-if-above
        :breakpoint="700"
          class="q-py-md"
          :style="{ width: '200px'  }"
        >
          <q-separator class="q-my-xl" color="gray-blue-10" inset />
          <div
            class="column justify-center items-center sidebar-login-btn-container"
          >
            <q-btn class="register-btn btn-fixed-width"
              ><a class="q-mx-md">ثبت نام</a
              ><q-img src="../../assets/RegisterIcon.png" width="24px"></q-img
            ></q-btn>
            <q-btn class="entrance-btn btn-fixed-width"
              ><a class="q-mx-md">ورود</a
              ><q-img src="../../assets/LoginIcon.png" width="24px"></q-img
            ></q-btn>
          </div>
          <q-list class="q-mt-md">
            <q-item
              v-for="(item, index) in sortedMenuItems.reverse()"
              :key="index"
              class="navLink-item"
            >
              <submenu
                class="navLink-btn"
                :isSubMenu="hasChildItems(item.id)"
                :menus="getChildItems(item.id)"
                :menu="item"
                :allMenu="InsuranceNavbarMenuItems"
                isFirst
              />
            </q-item>
          </q-list>
        </q-drawer>
        <div class="logo-container q-ml-auto">
          <q-img src="../../assets/logo.png" width="110px"></q-img>
        </div>
      </div>
    </div>
  </q-toolbar>
</template>

<script>
import { defineComponent, ref } from "vue";
import apiService from "src/services/api-services";
import submenu from "src/components/Header/submenu.vue";

export default defineComponent({
  name: "ToolbarNavigation",
  components: {
    submenu,
  },
  data() {
    return {
      InsuranceHeaderInfo: null,
      InsuranceNavbarMenuItems: [],
    };
  },

  mounted() {
    this.getMenuesItem();
  },

  methods: {
    getMenuesItem() {
      apiService
        .getMenuesItem("sabz")
        .then((response) => {
          this.InsuranceNavbarMenuItems = response.data.message;
        })
        .catch((error) => {
          console.error("Error fetching insurance centre info:", error);
        });
    },
    hasChildItems(itemId) {
      return (
        this.InsuranceNavbarMenuItems.filter((item) => item.parentId == itemId)
          .length > 0
      );
    },
    getChildItems(itemId) {
      return this.InsuranceNavbarMenuItems.filter(
        (item) => item.parentId == itemId
      );
    },
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    }
  },
  computed: {
    sortedMenuItems() {
      return this.InsuranceNavbarMenuItems.filter(
        (item) => item.parentId == null
      ).sort((a, b) => b.order - a.order);
    },
  },
  setup() {
    const sidebarVisible = ref(false);
    

    return {
      sidebarVisible,
     
    };
  },
});
</script>
<style scoped>
@media screen and (max-width:1020px) {
  .only-desktop{
  display: none;
 }}
.search-btn {
  width: 48px;
  border: 2px solid #ababab;
  border-radius: 16px;
  background: #ffffff;
}
.entrance-btn {
  width: 160px;
  height: 40px;
  background: #eee;
  color: #007bff;
  font-size: 17px;
  border: 2px solid #007bff;
  border-radius: 16px;
}
.register-btn {
  width: 160px;
  height: 40px;
  background: #007bff;
  color: #ffffff;
  font-size: 17px;
  border-radius: 16px;
}
.toolbar-content {
  width: 100%;
}

.title-container {
  margin-left: 440px !important;
  text-align: right !important;
}
.title {
  font-size: 17px;
  white-space: nowrap;
  width: 100%;
  margin-left: auto;
  font-weight: 500;
}
* {
  padding: 0 !important;
}
.entrance-btn {
  /* padding: 8px 50px !important; */
  background: #eee;
  color: #007bff;
  border: 2px solid #007bff;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  margin-left: 20px !important;
  font-size: 14px;
  font-weight: 500;
  width: 160px;
  height: 40px;
}
.register-btn {
  width: 160px;
  height: 40px;
  margin-right: 10px;
  background: #007bff;
  color: #ffffff;
  font-size: 17px;
  border-radius: 16px;
}

.navLink-container {
  list-style-type: none;
}

.navLink-item a {
  text-decoration: none;
  color: #000;
  cursor: pointer;
}
.navLink-btn {
  font-size: 14px;
}
.hambergur-menu {
  display: none;
}

.sidebar-navLink-container {
  display: none !important;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: space-between;
}

.sidebar-login-btn-container {
  text-align: center;
}
.sidebar-navLink-item {
  margin: 5px 10px;
}
.sidebar-login-btn-container .entrance-btn {
  max-width: 100%; /* Make the buttons fill the full width */
  padding: 8px 30px !important;
  background: #3c9e75 !important;
  color: #fff;
  text-align: center;
  cursor: pointer;
  margin-top: 5px;
  font-size: 14px;
  font-weight: 500;
}
.sidebar-login-btn-container .register-btn {
  /* Make the buttons fill the full width */
  padding: 8px 50px !important;
  background: #3c9e75 !important;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  margin-top: 5px;
  font-size: 14px;
  font-weight: 500;
}

.sidebar-navLink-item a {
  text-decoration: none;
  color: #000;
  cursor: pointer;
}

.sidebar-navLink-btn {
  font-size: 14px;
}

@media only screen and (max-width: 990px) {
  .navLink-container {
    display: none;
  }
  .title-container {
    margin-left: 300px !important;
    text-align: right !important;
  }
  .login-btn-group {
    display: none;
  }

  .title {
    font-size: 17px;
  }

  .hambergur-menu {
    display: block;
    margin-left: 10px;
  }

  .sidebar-navLink-container {
    display: block;
  }
  .register-btn,
  .entrance-btn {
    min-width: 230px;
    width: 60%;
    text-align: center;
    margin: 6px auto !important;
  }
}
@media only screen and (max-width: 727px) {
  .hambergur-menu {
    display: block;
    /* margin-left: 65px; */
  }
  .title-container {
    margin-left: 200px !important;
  }
}
</style>
