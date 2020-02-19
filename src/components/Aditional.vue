<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title h5">{{ item.name | capitalize }}</h5>
      <div class="card-subtitle text-gray">
        Price: {{ item.price | formatToCurrency }} - Time:
        {{ item.time | formatToMin }}
      </div>
    </div>
    <div class="card-footer">
      <div class="form-group">
        <label class="form-checkbox">
          <input type="checkbox" :id="item.id" :value="item.name" v-model="added" />
          <i class="form-icon"></i> Add to order
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import filtersMixins from "../mixins/filters";
import { mapMutations, mapGetters } from "vuex";
import orderMutations from "../store/order/mutations.type";
import orderGetters from "../store/order/getters.type";

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
  computed: {
    ...mapGetters("order", {
      aditionalsInOrdered: orderGetters.getAditionals
    })
  },
  created() {
    //CHECK IF THE ADITIONAL IS ALREADY ADDED TO THE ORDER
    //TO KEEP IT ON NAVIGATION

    this.aditionalsInOrdered.forEach(item => {
      if (item.id === this.item.id) {
        this.added = true;
      }
    });
  },
  methods: {
    ...mapMutations("order", {
      addAditional: orderMutations.addAditional,
      removeAditional: orderMutations.removeAditional
    })
  },
  watch: {
    added() {
      if (this.added) {
        this.addAditional(this.item);
        return;
      }
      this.removeAditional({ id: this.item.id });
    }
  }
};
</script>

<style></style>
