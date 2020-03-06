<template>
  <div id="app">
    <div class="header">
      <img
        class="scoutsymbol-header"
        src="../public/scoutsymbolen-bla.png"
        alt="Scoutsymbolen"
      />
      <h1>Scoutmärken</h1>
      <img
        class="scoutsymbol-header"
        src="../public/scoutsymbolen-bla.png"
        alt="Scoutsymbolen"
      />
    </div>
    <div class="nav-bar" id="nav">
      <ul>
        <li>
          <a>
            <router-link to="/">
              <img src="../public/scoutsymbolen-vit.png" class="scoutsymbol" />
            </router-link>
          </a>
        </li>
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
  background-image: url("wood2.jpg");
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

.nav-bar li {
  float: left;
}

.nav-bar li a {
  display: block;
  color: white;
  text-align: center;
  padding: 8px 14px;
  text-decoration: none;
}

.nav-bar li a:hover {
  background-color: rgb(0, 33, 58);
  text-decoration: none;
  color: white;
}

.scoutsymbol {
  width: 25px;
  height: auto;
}

.scoutsymbol-header {
  width: 50px;
  height: auto;
}

.header {
  padding: 1.5%;
  background-color: #ececec;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.sideName {
  color: white;
  width: 75%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(0, 54, 96);
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 25px;
}

.gallery {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  border-radius: 25px;
  padding-bottom: 20px;
}

.badge {
  white-space: pre-line;
  flex: 1 0 25%;
  max-width: 25%;
}

.badge p {
  font-size: 1.6em;
  line-height: 125%;
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
  margin-bottom: 5%;
  background-color: #ececec;
  border-radius: 25px;
}

.badgeinfo p {
  font-size: 1.3rem;
}

.badgeinfo ul {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
}

.badgeinfo li {
  float: left;
  font-size: 1.6em;
  word-wrap: break-word;
}
.ageGroup {
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
}

.ageImage {
  width: 40px;
  height: auto;
}

#list-desc {
  padding-top: 15px;
  list-style-type: none;
  width: 110%;
}

.b-card {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

h1 {
  padding: 1rem;
}

.card-body {
  flex: none;
  min-height: 0;
  padding: 0;
  background-color: transparent;
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
  border-left: solid 3px rgb(0, 54, 96);
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.ageGroupLogo {
  width: 50px;
  height: auto;
  margin: 15px;
}

.fyllnad {
  padding: 200px;
}

@media only screen and (max-width: 600px) {
  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .scoutsymbol-header {
    width: 50px;
    height: auto;
  }

  .badge {
    max-width: 50%;
  }
}
</style>
