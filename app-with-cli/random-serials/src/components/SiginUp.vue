<template>
  <form class="mt-5" @submit.prevent="registerUser">
    <div class="form-group">
      <label for="email">Your email</label>
      <input type="email" class="form-control" id="email" required v-model="user.email">
    </div>
    <div class="form-group">
        <label for="password"> Your password (min 6 symbols)</label>
        <input type="password" class="form-control" id="password" required v-model="user.password">
    </div>
    <div class="form-group">
        <label for="password2"> Repeat your password </label>
        <input type="password" class="form-control" id="password2" required v-model="user.confirmPassword">
    </div>

    <div class="alert alert-danger" role="alert" v-if="error"><strong>Oppss..</strong> your passwords are differend </div>
    <button type="submit" class="btn btn-primary"> Register </button>
  </form>
</template>

<script>
export default {
  name : 'sign-up',
  data() { //all methods in components must be fucntions
      return {
          user : {
             email : '',
             password : '',
             confirmPassword : ''
          },
          error : false
      }
  },
  methods: {//method == object
     registerUser() {
         if(this.user.password !== this.user.confirmPassword || this.user.password.length < 6){
             this.error = true;
         }else{
            firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
            .then(() => {
                this.$emit('reqSuccess', 'sign-in') // з цим методом ми передаэм значення до батька
            })
            .catch((error)=>{
                console.log(error)
            })
         }
     }
  }
}
</script>
