<template>
  <div id="userContainer" v-if="user">
    <h1>Usuário: {{ user.id }}</h1>
    <section>
      <p><span>Nome:</span> {{ user.name }}</p>
      <p><span>E-mail:</span> {{ user.email }}</p>
      <p><span>Telefone:</span> {{ user.phone }}</p>
      <p><span>Nome da empresa:</span> {{ user.company.name }}</p>
    </section>

    <NuxtLink class="backButton" to="/">← Voltar para a lista</NuxtLink>
  </div>
  <p v-else style="padding: 2rem; font-size: 2.25rem">Carregando...</p>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const user = ref(null);

const fetchUser = async () => {
  try {
    user.value = await $fetch(
      `https://jsonplaceholder.typicode.com/users/${route.params.id}`
    );
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
  }
};

onMounted(fetchUser);
definePageMeta({
  middleware: "users",
});
</script>

<style lang="scss" scoped>

#userContainer {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #cb3145;
  }
  p {
  font-size: 1.25rem;
  }
  span {
    font-weight: 700;
    font-size: 1.5rem;
  }
}

.backButton {
  color: #161616;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 700;
  border: 2px solid #161616;
  padding: 0.5rem;
  border-radius: 1rem;
  margin-top: 5rem;
  transition: .1s ease-in-out;

  &:hover {
    color: #e4e4e4;
    background-color: #161616;
  }
}
</style>
