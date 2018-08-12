<template>
    <nav>
        <ul>
            <li>
                <router-link to="/" exact>Blog</router-link>
                <router-link to="/add" exact>Add</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'blog-header'
}
</script>
<style scope>
ul{
  list-style: none;
  text-align: center;
  margin: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}
a{
    text-decoration: none;
    color: #fff;
    padding: 12px;
    border-radius: 4px;
}
nav{
    background: #6677cc;
    padding: 24px 0;
    margin-bottom: 24px;
}
.router-link-active{
    background: rgba(255, 255, 255, 0.1);
    color: #444;
}
</style>
