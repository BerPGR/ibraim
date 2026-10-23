<template>
  <main>
    <section class="mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8">
      <div class="max-w-xl">
        <div class="badge badge-primary badge-outline mb-6">A calmer way to manage money</div>
        <h1 class="text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
          Your money, <span class="text-primary">in good hands.</span>
        </h1>
        <p class="mt-6 text-lg leading-8 text-base-content/70">
          Ibrahim brings your spending, saving, and plans together so you can feel more confident about what comes next.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <RouterLink to="/auth" class="btn btn-primary">Get started <span aria-hidden="true">→</span></RouterLink>
          <a href="#features" class="btn btn-outline">Explore features</a>
        </div>
        <p class="mt-5 text-sm text-base-content/60">Simple tools for making every day with money feel clearer.</p>
      </div>

      <div class="card border border-base-300 bg-base-100 shadow-xl">
        <div class="card-body p-6 sm:p-8">
          <div class="flex items-start justify-between">
            <div>
              <p class="text-sm text-base-content/60">Total balance</p>
              <p class="mt-1 text-3xl font-bold">$12,840.50</p>
            </div>
            <span class="badge badge-success badge-outline">+8.2%</span>
          </div>
          <div class="mt-8 rounded-2xl bg-primary/10 p-5">
            <p class="text-sm font-medium text-base-content/70">Monthly spending</p>
            <div class="mt-2 flex items-end justify-between gap-4">
              <p class="text-2xl font-bold">$2,460 <span class="text-sm font-normal text-base-content/60">of $3,200</span></p>
              <span class="text-sm font-medium text-primary">77%</span>
            </div>
            <progress class="progress progress-primary mt-4 w-full" value="77" max="100" aria-label="Monthly spending: 77 percent"></progress>
          </div>
          <div class="mt-6 space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3"><span class="grid size-10 place-items-center rounded-xl bg-secondary/15">↗</span><div><p class="font-medium">Groceries</p><p class="text-sm text-base-content/60">Today</p></div></div>
              <span class="font-semibold">−$64.20</span>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3"><span class="grid size-10 place-items-center rounded-xl bg-accent/15">↓</span><div><p class="font-medium">Paycheck</p><p class="text-sm text-base-content/60">Yesterday</p></div></div>
              <span class="font-semibold text-success">+$2,850.00</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="bg-base-100 px-6 py-16">
      <div class="mx-auto max-w-6xl">
        <h2 class="text-3xl font-bold">A clearer picture, every day</h2>
        <div class="mt-8 grid gap-4 md:grid-cols-3">
          <article class="card border border-base-300"><div class="card-body"><h3 class="card-title">Know where it goes</h3><p class="text-base-content/70">See your spending in one clear, easy-to-follow view.</p></div></article>
          <article class="card border border-base-300"><div class="card-body"><h3 class="card-title">Plan with confidence</h3><p class="text-base-content/70">Keep your goals close and track the progress you make.</p></div></article>
          <article class="card border border-base-300"><div class="card-body"><h3 class="card-title">Build healthy habits</h3><p class="text-base-content/70">Make small, thoughtful choices that add up over time.</p></div></article>
        </div>
      </div>
    </section>
  </main>
</template>
