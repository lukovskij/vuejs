<template>
  <div>
    <form class="input-group mt-6">
      <input type="text" class="form-control" placeholder="add film" v-model="title">
      <span class=" input-group-btn">
        <button class=" btn btn-secondary" @click.prevent="addSerial">
          Add Film
        </button>
      </span>
    </form>
    <ol class=" mt-5">
      <li v-for="(serial, index) in data.serials" :key="serial" @click="removeSerial(index)">{{serial}}</li>
    </ol>
    <div class="mt-5">
      <button class=" btn btn-primary" @click="chooseRandomSerial(0, data.serials.length)"> choose random serial</button>
      <h2 class=" md-3 mt-3">{{ data.currentSerial }}</h2>
      <button class=" btn btn-primary" @click="removeCurrentSerial"> choosed serial is watching </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'main-page',
    data() {
      return {
        title: '',
        data: {
          serials: [],
          currentSerial: 'Serial not choose',
          numberOfCurrentSerial: null
        }
      }
    },
    props: ['uid'],
    methods: {
      addSerial() {
        if (this.title != '') {
          this.data.serials.push(this.title);

          firebase.database().ref('users/' + this.uid).set({
            data: this.data
          })

          this.title = '';
        }
      },
      removeSerial(index) {
        this.data.serials.splice(index, 1);

        if (this.data.numberOfCurrentSerial == index) {
          this.data.currentSerial = 'Serial not choose';
          this.data.numberOfCurrentSerial = null;
        }


        for (let i = 0; i < this.data.serials.length; i++) {
          if (this.data.currentSerial === this.data.serials[i]) {
            this.data.numberOfCurrentSerial = i;
          }
        }
        firebase.database().ref('users/' + this.uid).set({
          data: this.data
        })
      },
      chooseRandomSerial(min, max) {
        const random = Math.floor(Math.random() * (max - min) + min);

        if (this.data.serials.length > 0) {
          this.data.currentSerial = this.data.serials[random];
          this.data.numberOfCurrentSerial = random;
        }
        firebase.database().ref('users/' + this.uid).set({
          data: this.data
        })
      },
      removeCurrentSerial() {
        if (this.data.numberOfCurrentSerial != null && this.data.numberOfCurrentSerial) {
          this.data.serials.splice(this.data.numberOfCurrentSerial, 1);
          this.data.numberOfCurrentSerial = null;
          this.data.currentSerial = 'Serial not choose';
        }
        firebase.database().ref('users/' + this.uid).set({
          data: this.data
        })
      },
    },
     created(){
          this.data.serials = [];

          const takeSerials = firebase.database().ref('users/' + this.uid + '/data');
          takeSerials.on('value', (snapshot) => {
              if(snapshot.val().currentSerial && snapshot.val().serials){
                  this.data = snapshot.val();
              }else{
                  this.data.serials = [];
                  this.data.currentSerial = 'Serial not choose';
              }
          })
      }
  }

</script>
