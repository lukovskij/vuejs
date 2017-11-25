<template>
 
<div>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="navbar  navbar-dark bg-dark d-flex justify-content-end">
          <form action="" class="from-inline d-flex">
            <div>
              <button class="btn btn-outline-succes mr-3" type="button" @click="switchSign('sign-in')">Log in</button>
              <button class="btn btn-outline-success" type="button" @click="switchSign('sign-up')"> Register </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col">
        <sigin-in v-if="sign == 'sign-in'"></sigin-in>
        <sigin-up v-else></sigin-up>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import SiginIn from './components/SiginIn';
import SiginUp from './components/SiginUp';
export default {
  name: 'app',
  data () {
    return {
      sign : 'sign-in'
    }
  },
  components : { // показываем какие компоненты будем использовать внутри шаблона
     SiginIn,
     SiginUp
  },
  methods : {
    switchSign(switcher) {
       this.sign = switcher
    }
  }
}
</script>

<style>

</style>
