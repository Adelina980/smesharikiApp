<template>
  <div class="search-container">
    <div class="search-bar">
      <input
          v-model="searchQuery"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleFocus"
          type="text"
          placeholder="Поиск персонажей..."
          class="search-input"
      >

      <select v-model="sortOrder" class="sort-select"
              @change="handleSortChange"
              @focus="handleFocus"
              @blur="handleFocus">

        <option value="asc">По имени (А-Я)</option>
        <option value="desc">По имени (Я-А)</option>
      </select>
    </div>

    <ul v-if="showResults && filteredCharacters.length && this.searchQuery.trim() !== ''" class="search-results">
      <li
          v-for="character in filteredCharacters"
          :key="character.id"
          class="search-result-item"
      >
        <!-- Оборачиваем весь li в ButtonLink -->
        <ButtonLink
            :to="`/character/${character.id}`"
            @click="clearResults"
            class="full-link"
        >
          {{ character.name }}
        </ButtonLink>
      </li>
    </ul>
    <ul v-else-if="showResults && searchQuery.trim()" class="search-results">
      <li class="search-result-item">Нет совпадений.</li>
    </ul>

  </div>
</template>

<script>
import ButtonLink from "@/components/ButtonLink.vue";

export default {
  name: 'SearchBar',
  components: {ButtonLink},
  props: {
    filteredCharacters: {
      type: Array,
    }
  },
  data() {

    return {
      searchQuery: "",
      sortOrder: "asc",
      showResults: true,
    };
  },
  methods: {
    handleInput() {
      this.$emit('filterQueryChanged', this.searchQuery);
    },
    handleSortChange() {
      this.$emit('sortOrderChanged', this.sortOrder);
    },
    clearResults() {
      this.searchQuery = "";
    },
    handleFocus() {
      setTimeout(() => {
            if (this.searchQuery.trim() !== "") {
              this.showResults = !this.showResults;
            }
          }, 100)
    }
  },

  watch: {
    $route() {
      this.clearResults(); // Срабатывает при изменении маршрута
    },
  },
}
;
</script>

<style scoped>
.search-container {
  position: relative;
  width: 300px;
}

.search-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px; /* Отступ между input и select */
}

.search-input {
  width: 100%;
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.sort-select {
  width: 48px;
  height: 48px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  text-align: center;
  background: #f9f9f9;
  cursor: pointer;
}

.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
  list-style: none;
  padding: 0;
  margin: 4px 0 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.search-result-item {
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}


.full-link {
  width: 100%;
  padding: 8px;
  text-decoration: none;
  color: inherit;
}

.full-link:hover {
  transform: scale(1.02);
  transform-origin: center;
}


</style>
