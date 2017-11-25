<template>
 <form class="mt-5" @submit.prevent="logIn">
    <div class="form-group">
      <label for="email">Your email</label>
      <input type="email" class="form-control" id="email" required v-model="user.email">
    </div>
    <div class="form-group">
        <label for="password"> Your password (min 6 symbols)</label>
        <input type="password" class="form-control" id="password" required v-model="user.password">
    </div>
    <button type="submit" class="btn btn-primary"> Register </button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            user : {
                email : '',
                password : ''
            }
        }
    },
    methods : {
        logIn() {
            firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
            .then( (resp) => {
               const sett = {
                   email : resp.email,
                   uid : resp.uid,
                   isMainPage : true,
                   signComplate: true 
               }
               this.$emit('logIn', sett)
            })
            
        }
    }
}
</script>

