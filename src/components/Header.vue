<template>
  <div v-if="loggedIn && user">
    <amplify-greetings :username="user.username">
      <amplify-sign-out></amplify-sign-out>
    </amplify-greetings>
  </div>
</template>

<script>
import { onAuthUIStateChange,AuthState } from '@aws-amplify/ui-components'
import { mapState,mapActions } from "vuex";

export default {
  created() {
    onAuthUIStateChange((authState, authData) => {
      if(this.loggedIn && authState === AuthState.SignedOut){
        this.logout({authState,user: authData})
        this.$router.push({name: "Login"})
      }
    })
  },
  computed: {
  ...mapState("auth", ["loggedIn","user"])
  },
  methods: {
    ...mapActions('auth', ['logout']),
  },
}
</script>