<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title h5">{{item.name | capitalize}}</h5>
      <div
        class="card-subtitle text-gray"
      >Preço: R$ {{item.price}} - Tempo de preparo: {{item.time}}</div>
    </div>
    <div class="card-footer">
      <div class="form-group">
        <label class="form-checkbox">
          <input type="checkbox" :id="item.id" :value="item" v-model="added" />
          <i class="form-icon"></i> Adicionar ao pedido
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import filtersMixins from "../mixins/filters";

export default {
  mixins: [filtersMixins],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      added: false
    };
  },
  watch: {
    added() {
      if (this.added) {
        this.$store.commit("addAditional", this.item);
        return;
      }
      this.$store.commit("removeAditional", { id: this.item.id });
    }
  }
};
</script>

<style>
</style>