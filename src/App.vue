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
        <li>
          <a>
            <router-link to="/patruller">Patruller</router-link>
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
  background-color: rgb(0, 33, 58);
  text-decoration: none;
  color: white;
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
  border-radius: 25px;
}

.badge {
  white-space: pre-line;
  width: 25%;
}

.badge p {
  font-size: 1.6em;
}

.img {
  padding: 2.5em 2.5em 0.5em 2.5em;
}

.badgeinfo {
  text-align: left;
  padding: 2.5em;
  width: 300%;
  margin-left: 50%;
  margin-right: 50%;
  background-color: #ececec;
  border-radius: 25px;
}

.bevis .badgeinfo {
  margin-left: 0;
}

.b-card {
  border: none;
}

h1 {
  padding: 1rem;
}

.card-body {
  flex: none;
  min-height: 0;
  padding: 0;
}

.info-badge {
  width: 90%;
  margin-right: 5%;
  margin-left: 5%;
  margin-top: 5%;
  margin-bottom: 2%;
  padding: 2.5em;
  text-align: left;
  background-color: #ececec;
  border-radius: 25px;
}

.line-left {
  border-left: solid 5px rgb(0, 54, 96);
  padding-left: 20px;
}
</style>
