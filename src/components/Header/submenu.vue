<template>
  <div class="q-gutter-md text-center row justify-center q-mx-auto items-center only-desktop">
    <q-btn v-if="!isSubMenu" flat class="text-dark" :label="menu.title" @click="handleUrl(menu.url)"></q-btn>
    <div v-else>
      <q-btn v-if="isFirst" flat class="text-dark" :label="menu.title" @mouseenter="openMenu" >
        <q-item-section side>
          <q-icon color="black" name="keyboard_arrow_down" />
        </q-item-section>
        <q-menu ref="menu" dir="rtl" anchor="bottom left" self="top left" >
          <q-list>
            <q-item
              v-for="subMenu in menus"
              flat
              clickable
              :key="subMenu.id"
              class="linkItems text-dark"
              @click="handleUrl(subMenu.url)"
            >
              <submenu
                :isSubMenu="computeIsSubMenu(subMenu.id)"
                :menus="computeMenus(subMenu.id)"
                :menu="computeMenu(subMenu.id)"
                :allMenu="allMenu"
              />
              <q-separator light />
            </q-item>
            <q-separator dark />
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn v-else flat class="text-dark" :label="menu.title" @mouseenter="openMenu">
        <q-item-section side>
          <q-icon color="black" name="keyboard_arrow_left" />
        </q-item-section>
        <q-menu ref="menu" dir="rtl" anchor="top start" self="top end"  >
          <q-list @mouseenter="openMenu">
            <q-item
              flat
              v-for="subMenu in menus"
              dense
              clickable
              :key="subMenu.id"
              class="linkItems text-dark"
              @click="handleUrl(subMenu.url)"
            >
              <submenu
                :isSubMenu="computeIsSubMenu(subMenu.id)"
                :menus="computeMenus(subMenu.id)"
                :menu="computeMenu(subMenu.id)"
                :allMenu="allMenu"
              />
              <q-separator light />
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ToolbarNavigation",
  data() {
    return {
      
    };
  },
  props: {
    isSubMenu: Boolean,
    menus: [Object],
    menu: Object,
    allMenu: [Object],
    isFirst: Boolean,
  },
  methods: {
    computeMenus(id) {
      let newMenus = this.allMenu.filter((item) => item.parentId == id);
      return newMenus;
    },
    computeMenu(id) {
      let newMenu = this.allMenu.filter((item) => item.id == id)[0];
      return newMenu;
    },
    computeIsSubMenu(id) {
      let newIsSubMenu = this.allMenu.some((item) => item.parentId == id);
      return newIsSubMenu;
    },
    handleUrl(URL) {
      const urlObject = JSON.parse(URL);
      const { type, url: urlPath } = urlObject;

      const baseUrl = 'https://sabz.easybimeh.com';

      if (type === 'open') {
        window.location.href = `${baseUrl}${urlPath}`;
      } else if (type === 'redirect') {
        window.location.href = `/`;
      } else {
        console.error("Unsupported URL type:", type);
        return '#';
      }
    },
    openMenu() {
      this.$refs.menu.show();
    },
    closeMenu() {
      this.$refs.menu.hide();

    },
    
  },
});
</script>