<template>
    <div class="col-sm-offset-4 col-sm-4">
        <div class="card">
            <article class="card-body">
                <h4 class="card-title text-center mb-4 mt-1">Sign in</h4>
                <hr>
                <form>
                    <div class="form-group">
                        <div class="input-group align-center">
                            <input name="" class="form-control" placeholder="Username"
                                type="text" v-model="loginModel.username">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group align-center">
                            <input class="form-control" placeholder="******" type="password"
                                v-model="loginModel.password">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group align-center">
                            <button type="submit" class="btn btn-primary btn-block"
                                @click="loginTodo">
                                Login
                            </button>
                        </div>
                    </div>
                    <p class="text-center"><a href="#" class="btn">Forgot password?</a></p>
                    <router-link :to="{name: 'Signup'}" exact>Signup</router-link>
                </form>
            </article>
        </div>
    </div>
</template>
<script>

import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'Login',
  props: [
  ],
  data() {
    return {
      loginModel: {},
    };
  },
  methods: {
    ...mapActions('loginStore', ['login']),
    ...mapMutations('loginStore', ['updateLocalStore']),
    loginTodo(event) {
      event.preventDefault();
      this.login(this.loginModel)
        .then((result) => {
          this.updateLocalStore(result.data);
          this.$router.push('/todo/items');
        }).catch(console.error);
    },
  },
};
</script>
<style scoped>
.align-center {
 margin:auto;
}
</style>
