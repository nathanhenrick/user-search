<template>
  <footer>
    <p>Desenvolvido por Nathan Henrick Martempe Constantino</p>
    <p>&copy; 2025 - Todos os direitos reservados.</p>
  </footer>
</template>

<style lang="scss" scoped>

footer {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  border-top: 1px solid #161616;
  background-color: #e4e4e4;
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;

  p {
    color: #161616;
    font-weight: 600;
    font-size: clamp(0.25rem, 1rem, 1rem);
  }
}
</style>
