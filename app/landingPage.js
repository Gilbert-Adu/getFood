var app = new Vue({
  el: '#app',
  data: {
    image:"../images/breakfast.jpg",
    breakfast:"../images/breakfast.jpg",
    lunch:"../images/lunch.jpg",
    dinner:"../images/dinner.jpg",
    message: "How about some breakfast?",
    lunchMessage: "ya belly rumbling already? Grab some lunch",
    dinnerMessage: "dinner...Yaay!!",
  },

  methods:{
    updateBreakfast(){
      this.image = this.breakfast
    },
    updateLunch(){
      this.image = this.lunch
    },
    updateDinner(){
      this.image = this.dinner
    },
    updatelunchMessage(){
      this.message = this.lunchMessage
    },
    updatedinnerMessage(){
      this.message = this.dinnerMessage
    }
  }

});
