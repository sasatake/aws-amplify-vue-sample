<template>
  <b-container>
    <b-jumbotron
      header="Amplify Vue Sample"
      header-level="4"
      lead="with vue.js"
      bg-variant="light"
      class="text-center"
    >
    </b-jumbotron>

    <b-row align-h="center">
      <b-col cols="6">
        <b-table striped hover :items="items"></b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      items: [{ id: 1, task: '牛乳を買う', expired_date: '2021-02-10' }]
    };
  }
};
</script>

<style scoped></style>
