<template>
    <div>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">TodoApp</a>
                </div>
                <ul class="nav navbar-nav">
                    <li>
                        <router-link :to="{name: 'Todo'}" exact>Items</router-link>
                    </li>
                </ul>
                <ul class="nav navbar-nav pull-right">
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                            {{username}}
                            <span class="caret">
                            </span>
                        </a>
                        <ul class="dropdown-menu logout-dropdown">
                            <li>
                                <router-link :to="{name: 'Profile'}" exact>
                                    Profile
                                </router-link>
                            </li>
                            <li>
                                <a  @click="logout()" class="pointer">Logout</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'TodoContainer',
  computed: {
    username() {
      const userInfo = JSON.parse(localStorage.getItem('loginInfo'));
      return userInfo.username;
    },
  },
  methods: {
    logout() {
      localStorage.removeItem('loginInfo');
      localStorage.removeItem('todoToken');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
  .logout-dropdown {
    left: -60px;
  }
  .router-link-active {
    color: white !important;
  }
  .pointer {
    cursor: pointer;
  }
</style>
