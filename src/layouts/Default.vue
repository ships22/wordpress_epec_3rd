<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/"><img src="../assets/logo/logo.png" alt="logo"></g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Accueil</g-link>
        <g-link class="nav__link" to="/category/apprendre">Apprendre</g-link>
        <g-link class="nav__link" to="/category/utiliser">Utiliser</g-link>
        <g-link class="nav__link" to="/category/sinspirer">S'inspirer</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<style>
/* body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
} */

img {
  max-width: 100%;
  height: auto;
}

nav[role="navigation"] {
  text-align: center;
}
nav[role="navigation"] a {
  display: inline-block;
  margin: 1em 0.75em 2em;
}

.layout {
  max-width: 68%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
}
.header img {
  height: 90px;
  width: 320px;
  max-width: 100%;
}
nav {
  text-align: right;
  padding-right: 20px;
  padding-top: 20px;
}
.nav__link {
  margin-left: 20px;
}
.post-list {
  list-style: none;
  padding-left: 0;
}
.post-list li {
  padding: 1em 0;
}
</style>
