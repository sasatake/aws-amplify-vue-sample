<template>
  <amplify-authenticator>
    <amplify-sign-in></amplify-sign-in>
  </amplify-authenticator>
</template>

<script>
import { onAuthUIStateChange, AuthState } from '@aws-amplify/ui-components';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Login',
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      if (!this.loggedIn && authState === AuthState.SignedIn) {
        this.login({ authState, user: authData });
        this.$router.push({ name: 'List' });
      }
    });
  },
  computed: {
    ...mapState('auth', ['loggedIn', 'user'])
  },
  methods: {
    ...mapActions('auth', ['login'])
  }
};
</script>
