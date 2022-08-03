<template>
  <div id="app">
    <head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    </head>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

* {
    box-sizing:border-box;
    margin: 0;
    padding: 0;
    
}
.error {
  z-index: 100;
  color: #fff;
  background-color: #A62122;
  min-width: 300px;
  min-height: 30px;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 20px;
}
body {
  background-color:#D9DCD6;
  line-height: 1.3;
  font-family: 'Lato', sans-serif;
}
.flex {
  display: flex;
}
.container {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.box {
    min-width: 400px;
    min-height: 400px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 12px;
    color:#000;
    font-size: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.6);
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #777
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
textarea {
  width: 100%;
  min-height: 300px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=submit]:hover {
  background-color: #45a049;
}
a {
  color: #000;
  text-decoration: none;
}
a:hover {
  border-bottom:#000 1px solid;
}
a:visited {
  color: #000;   
}
@media screen and (max-width: 768px) {
  .box {
    height: 100%;
    width: 100%;
  }
  textarea {
    min-height: 250px;
  }
}
</style>
