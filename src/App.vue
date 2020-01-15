<template>
  <div id="app">
    <div class="nav-bar" id="nav">
      <ul>
        <li>
          <a>
            <router-link to="/">Hem</router-link>
          </a>
        </li>
        <li>
          <a>
            <router-link to="/intresse">Intressemärken</router-link>
          </a>
        </li>
        <li>
          <a>
            <router-link to="/bevis">Bevismärken</router-link>
          </a>
        </li>
        <li>
          <a>
            <router-link to="/deltagande">Deltagandemärken</router-link>
          </a>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(0, 54, 96);
  background-color: #ececec;
  line-height: 150%;
}

.nav-bar ul {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  list-style-type: none;
  margin-bottom: 0;
  padding: 0;
  overflow: hidden;
  background: rgb(0, 54, 96);
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 8px 14px;
  text-decoration: none;
}

li a:hover {
  background-color: rgb(0, 29, 51);
}

.gallery {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
}

.badge p {
  font-weight: bold;
}

.img {
  padding: 2.5em 2.5em 0.5em 2.5em;
}

.badgeinfo {
  text-align: left;
  padding: 2.5em;
}
</style>
