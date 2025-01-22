<template>
  <div class="not-found">
    <h1>404 - Страница не найдена</h1>
    <p>К сожалению, запрашиваемая страница не существует.</p>
    <ButtonLink class="to-home" to="/">Вернуться на главную</ButtonLink>

  </div>
</template>

<script>
import ButtonLink from "@/components/ButtonLink.vue";

export default {
  name: 'NotFoundPage',
  components: {ButtonLink},
};
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
}

.to-home {
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid #007bff;
  border-radius: 8px;
  background-color: #007bff;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.to-home:hover {
  background-color: #0056b3;
  border-color: #0056b3;
  transform: scale(1.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}


</style>


