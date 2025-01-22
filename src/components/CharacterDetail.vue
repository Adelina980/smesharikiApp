<template>
  <div class="character-detail-container">
    <div v-if="isValidId">
      <h2>Информация о персонаже</h2>
      <div v-if="character" class="character-detail">
        <div class="character-image">
          <img :src="getCharacterImage(character.name)" :alt="`${character.name}`">
        </div>
        <div class="character-info">
          <h3>{{ character.name }}</h3>
          <p><strong>Описание:</strong> {{ character.description }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <NotFoundPage/>
    </div>
  </div>
</template>

<script>
import characters from '../data/characters.js';
import NotFoundPage from "@/components/NotFoundPage.vue";

export default {
  name: 'CharacterDetail',
  components: {NotFoundPage},

  props: ['id'],
  data() {
    return {
      characters
    }
  },
  methods: {
    getCharacterImage(name) {
      return require(`../assets/characters/${name}.webp`);
    },
  },
  computed: {
    isValidId() {
      const id = parseInt(this.id, 10);
      return id >= 1 && id <= 9;
    },
    character() {
      if (this.isValidId) {
        return characters.find(c => c.id === parseInt(this.id, 10));
      }
      return null;
    },
  },
};
</script>

<style scoped>
.character-detail-container {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.character-detail {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.character-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50%;
}

.character-image img {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.character-info {
  flex: 1;
  padding: 20px;
  max-width: 50%;
}

.character-info h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

.character-info p {
  font-size: 16px;
  line-height: 1.6;
}
</style>
