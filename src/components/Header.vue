<template>
  <header class="navbar border-b border-base-300 bg-base-100 px-4 sm:px-8">
    <div class="mx-auto flex w-full max-w-6xl items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-2 text-xl font-bold tracking-tight" aria-label="Ibrahim home">
        <span class="grid size-9 place-items-center rounded-xl bg-primary text-primary-content" aria-hidden="true">i</span>
        <span>Ibrahim</span>
      </RouterLink>

      <nav class="flex items-center gap-2 sm:gap-6" aria-label="Main navigation">
        <a class="btn btn-ghost btn-sm hidden sm:inline-flex" href="#features">Features</a>
        <RouterLink class="btn btn-ghost btn-sm" to="/auth">Sign in</RouterLink>
        <RouterLink class="btn btn-primary btn-sm" to="/auth">Get started</RouterLink>
      </nav>
    </div>
  </header>
</template>
