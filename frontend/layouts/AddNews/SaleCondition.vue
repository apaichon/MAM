<template>
  <md-card>
    <md-card-content>
      <p class="text-left">Sale condition</p>
      <md-checkbox v-model="limit_sale">Limit Sale</md-checkbox>
      <md-field>
        <label for="category">Select Buyer</label>
        <md-select name="category" id="category">
          <md-option value="fight-club">item1</md-option>
          <md-option value="godfather">item2</md-option>
          <md-option value="godfather-ii">item3</md-option>
        </md-select>
      </md-field>
      <div>
        <md-radio value="accent">Forever</md-radio>
        <md-radio value="Primary" class="md-primary">Before 6PM</md-radio>
        <md-radio value="Primary" class="md-primary">Before 5PM</md-radio>
      </div>
      <md-field>
        <label for="category">Term of Usage</label>
        <md-select name="category" id="category">
          <md-option value="fight-club">item1</md-option>
          <md-option value="godfather">item2</md-option>
          <md-option value="godfather-ii">item3</md-option>
        </md-select>
      </md-field>
      <md-field>
        <label>Price</label>
        <md-input></md-input>
      </md-field>
      <div class="text-right">
        <md-button>Set to Default</md-button>
      </div>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  name: "sale-condition",
  data() {
    return {
      limit_sale: false
    };
  }
};
</script>

<style lang="scss" scoped>
.md-button {
  text-align: center;
  // background-color: transparent !important;
  background: linear-gradient(60deg, #26c6da, #00acc1);
  border-radius: 20px;
  box-shadow: none !important;
  color: #ffffff !important;
  i {
    color: #ffffff !important;
  }
}
</style>
