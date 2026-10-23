<template>
  <main class="grid min-h-screen place-items-center px-4 py-12">
    <section class="card w-full max-w-md border border-base-300 bg-base-100 shadow-xl">
      <div class="card-body p-8 sm:p-10">
        <RouterLink to="/" class="mb-8 flex w-fit items-center gap-2 text-lg font-bold" aria-label="Back to Ibrahim home">
          <span class="grid size-9 place-items-center rounded-xl bg-primary text-primary-content" aria-hidden="true">i</span>
          Ibrahim
        </RouterLink>
        <h1 class="text-3xl font-bold">Welcome back</h1>
        <p class="mt-1 text-base-content/70">Sign in to continue to your finances.</p>

        <form class="mt-7 space-y-4" @submit.prevent>
          <label class="form-control w-full">
            <span class="label-text mb-2 font-medium">Email address</span>
            <input class="input input-bordered w-full" type="email" autocomplete="email" placeholder="you@example.com" required />
          </label>
          <label class="form-control w-full">
            <span class="label-text mb-2 font-medium">Password</span>
            <input class="input input-bordered w-full" type="password" autocomplete="current-password" placeholder="Your password" required />
          </label>
          <button class="btn btn-primary mt-2 w-full" type="submit">Sign in</button>
        </form>
        <p class="mt-6 text-center text-sm text-base-content/70">New to Ibrahim? <a class="link link-primary font-medium" href="#signup">Create an account</a></p>
      </div>
    </section>
  </main>
</template>
