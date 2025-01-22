<template>
  <div id="app">
    <header v-if="showHeaderFooter">
      <h1>Смешарики: Персонажи</h1>

      <SearchBar :filtered-characters="filteredCharacters"
          @filterQueryChanged="handleFilterQueryChanged"
          @sortOrderChanged="handleSortOrderChanged"
      />
        <ButtonLink class="to-home" to="/">Главная</ButtonLink>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer v-if="showHeaderFooter">
      <p>Все права защищены &copy; 2025</p>
    </footer>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import ButtonLink from "@/components/ButtonLink.vue";
import characters from "@/data/characters";

export default {
  name: 'App',
  components: {ButtonLink, SearchBar},
  data(){
    return {
      characters,
      filteredCharacters: characters,
      searchQuery: "",
      sortOrder: "asc",
    };
  },
  computed: {
    showHeaderFooter() {
      // Проверяем имя текущего маршрута
      return this.$route.name !== 'NotFound';
    },
  },
  methods: {
    handleFilterQueryChanged(query) {
      this.searchQuery = query;
      this.filterCharacters();
    },
    handleSortOrderChanged(sortOrder) {
      this.sortOrder = sortOrder;
      this.filterCharacters();
    },
    filterCharacters() {
      let filtered = this.characters.filter(character =>
          character.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      // Сортируем по выбранному порядку
      if (this.sortOrder === 'asc') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        filtered.sort((a, b) => b.name.localeCompare(a.name));
      }

      this.filteredCharacters = filtered;
    },
  }
};
</script>

<style scoped>


* {
  box-sizing: border-box;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #f4f4f4;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  display: flex;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: #f4f4f4;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

header h1 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}


main {
  margin-top: 60px;
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
}
.to-home {
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid #00b362;
  border-radius: 8px;
  background-color: #00b362;
  /*#007bff*/
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.to-home:hover {
  background-color: #00b362;
  border-color: #00b362;
  /*0056b3*/
  transform: scale(1.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}


</style>
