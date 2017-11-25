<template>
 
<div>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="navbar  navbar-dark bg-dark d-flex justify-content-end">
          <form action="" class="from-inline d-flex">
            <div v-if="!signComplate">
              <button class="btn btn-outline-succes mr-3" type="button" @click="switchSign('sign-in')">Log in</button>
              <button class="btn btn-outline-success" type="button" @click="switchSign('sign-up')"> Register </button>
            </div>
            <span v-else>{{email}}</span>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="container" v-if="!isMainPage">
    <div class="row">
      <div class="col">
        <sigin-in v-if="sign == 'sign-in'" @logIn="isMainPage = $event.isMainPage, signComplate = $event.signComplate, email = $event.email, uid = $event.uid"></sigin-in>
        <sigin-up v-else @reqSuccess="sign = $event"></sigin-up> <!-- ставим слушатэля якому буде метод з першого аргумента emit а приймати юуде зм1нну $event (з другого аргумента $emit) -->
      </div>
    </div>
  </div>
  <div class="container" v-else>
    <div class="row">
      <div class="col">
        <main-page :uid = "uid"></main-page>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import SiginIn from './components/SiginIn';
import SiginUp from './components/SiginUp';
import MainPage from './components/MainPage'
export default {
  name: 'app',
  data () {
    return {
      sign : 'sign-in',
      isMainPage : false,
      signComplate : false,
      email : '',
      uid : ''
    }
  },
  components : { // показываем какие компоненты будем использовать внутри шаблона
     SiginIn,
     SiginUp,
     MainPage
  },
  methods : {
    switchSign(switcher) {
       this.sign = switcher
    }
  }
}
</script>

<style>
span{
  color: #fff;
}
</style>
