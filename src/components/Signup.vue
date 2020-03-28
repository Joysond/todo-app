<template>
    <div class="col-sm-offset-4 col-sm-4">
        <div class="card">
            <article class="card-body">
                <h4 class="card-title text-center mb-4 mt-1">Sign Up</h4>
                <div class="text-danger">{{validationMessage}}</div>
                <div class="text-info">{{userCreationMessage}}</div>
                <hr>
                <form>
                    <div class="form-group">
                        <div class="input-group align-center">
                            <input name="" class="form-control" placeholder="Username"
                                type="text" v-model="signupModel.username">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group align-center">
                            <input name="" class="form-control" placeholder="Email"
                                type="email" v-model="signupModel.email">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group align-isadmin">
                            <label>Is Admin ?
                                <input type="checkbox" v-model="signupModel.isAdmin">
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group align-center">
                            <input class="form-control" placeholder="Password" type="password"
                                v-model="signupModel.password">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group align-center">
                            <input class="form-control" placeholder="Repeat" type="password"
                                v-model="signupModel.repeatPass">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group align-center">
                            <button type="submit" class="btn btn-primary btn-block"
                                @click="signupTodo">
                                SignUp
                            </button>
                        </div>
                    </div>
                    <router-link :to="{name: 'Login'}" exact>Login</router-link>
                </form>
            </article>
        </div>
    </div>
</template>
<script>

import { mapActions } from 'vuex';

export default {
  name: 'Signup',
  props: [
  ],
  data() {
    return {
      signupModel: {},
      validationMessage: '',
      userCreationMessage: '',
    };
  },
  methods: {
    ...mapActions('loginStore', ['signup']),
    signupTodo(event) {
      this.validationMessage = '';
      event.preventDefault();
      if (this.signupModel.username === undefined
        || this.signupModel.username === '') {
        this.validationMessage = 'Username can not be empty';
        return;
      }
      if (this.signupModel.password === undefined
      || this.signupModel.password !== this.signupModel.repeatPass) {
        this.validationMessage = 'Passwords do not match';
        return;
      }
      if (this.signupModel.password.length < 6) {
        this.validationMessage = 'Password should be atleast of 6 characters';
        return;
      }
      if (this.signupModel.email === undefined
      || this.signupModel.email === '') {
        this.validationMessage = 'Enter a valid email address';
      }
      if (this.signupModel.isAdmin) {
        this.signupModel.role = ['admin'];
      } else {
        this.signupModel.role = ['user'];
      }

      this.signup(this.signupModel)
        .then((result) => {
          if (result.status === 200) {
            this.userCreationMessage = `${result.data.message}, 
            You will redirected to Login page shortly`;
            setTimeout(() => {
              this.$router.push({ name: 'Login' });
            }, 3000);
          } else {
            this.userCreationMessage = result.data.message;
          }
        }).catch(console.error);
    },
  },
};
</script>
<style scoped>
  .align-center {
    margin:auto;
  }
  .align-isadmin {
    margin-left: 110px;
  }
</style>
