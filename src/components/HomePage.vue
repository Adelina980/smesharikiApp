<template>
  <div class="home">
    <img src="../assets/smeshariki-valley.webp" alt="Долина смешариков" class="valley-image"/>
    <div class="character-houses">
      <ButtonLink
          v-for="character in characters()"
          :key="character.id"
          :to="`/character/${character.id}`"
          :class="`${character.name === 'Пин' ? character.name: 'character-house '}`"
          :style="{ top: character.position.top, left: character.position.left }"
      >
        <img :src="getCharacterImage(character.name)" :alt="`Дом ${character.name}`"/>
      </ButtonLink>
    </div>
  </div>
</template>

<script>
import characters from '../data/characters.js';
import ButtonLink from "@/components/ButtonLink.vue";

export default {
  name: 'HomePage',
  components: {ButtonLink},
  data() {
    return characters
  },
  methods: {
    characters() {
      return characters
    },
    getCharacterImage(name) {
      return require(`../assets/houses/${name}.png`);
    },
  },
};
</script>

<style scoped>
.valley-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1
}

.character-houses {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 100px);
}

.character-house {
  position: absolute;
  border-radius: 5px;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.Пин {
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.character-house img {
  width: 56%;
  height: 56%;
  max-width: none;
  max-height: none;
}

.Пин img {
  width: 72%;
  height: 72%;
  max-width: none;
  max-height: none;
}


</style>
