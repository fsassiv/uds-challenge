<template>
  <div class="app__content">
    <!-- HEADER COMPONENT -->
    <slot name="header" />
    <!-- MAIN ROUTE -->
    <main class="main">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <!-- FOOTER COMPONENT -->
    <slot name="footer" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.slide-leave-active {
  transition: opacity 0.25s ease;
  opacity: 0;
  animation: slide-out 0.25s ease-out forwards;
}

.slide-leave {
  opacity: 1;
  transform: translateX(0);
}

.slide-enter-active {
  animation: slide-in 0.25s ease-out forwards;
}

@keyframes slide-out {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-30px);
  }
}

@keyframes slide-in {
  0% {
    transform: translateX(30px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
