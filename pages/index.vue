<template>
  <div>
    <h1>Lista de Usuários</h1>
    <section id="usersList">
      <NuxtLink
        v-for="user in users"
        :key="user.id"
        :to="`/users/${user.id}`"
        class="user-button"
      >
        {{ user.name }}
      </NuxtLink>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const users = ref([]);

const fetchUsers = async () => {
  try {
    users.value = await $fetch("https://jsonplaceholder.typicode.com/users");
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
  }
};

onMounted(fetchUsers);
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  padding: 1.5rem;
  color: #ff324e;
  font-family: "Boldonse", "Quicksand", Arial, Helvetica, sans-serif;
  letter-spacing: 2px;
}
section#usersList {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  width: 100%;
  /* width: clamp(200px, 1200px, 80%); */
  /* max-width: 80%; */
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0 auto;

  .user-button {
    padding: 0.5rem;
    font-size: 1.4rem;
    transition: 0.2s ease-in-out;
    overflow: hidden;
    position: relative;
    color: #161616;
    text-decoration: none;
    border: 2px solid #161616;
    background-color: #e4e4e4;
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      top: 100%;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: #cb3145;
      z-index: -1;
      transition: 0.3s ease-in-out;
    }

    &:hover {
      color: #e4e4e4;
      &::before {
        transform: translateY(-100%);
      }
    }
  }
}
</style>
