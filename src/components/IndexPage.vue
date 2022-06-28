<template>
  <div class="index-page">
    <div class="row">
      <div class="col-md-9">
        <div class="row gx-4 gy-4row-cols-3">
          <div class="col" v-for="(product, id) in list_products" key="id">sas</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Stock, Card, Product} from '../manager'


export default {
  name: 'IndexPage',
  props: {
    msg: String
  },
  data: {
    stock: {},
    cart : {},
    listProducts: {},
    listCart: {},
    descProduct: {},
    totalPrice: 0,
    nbrProduct: 0
  },
  created() {
    this.stock = new Stock();
    this.card = new Card();
    this.listProducts = this.stock.getList();
  },
  methods: {
    add_to_cart (id) {
        this.cart.addInCart (id);
        this.update_cart ();
      },
    get_info_product (id) {
      this.desc_product = {};
      this.desc_product = this.stock.get_prod_by_id (id);
    },
    update_cart () {
      this.list_cart = {};
      this.list_cart = this.cart.get_list_cart ();
      this.update_total ();
    },
    update_total () {
      this.total_price = 0;
      this.nbr_product = 0;
      this.total_price = this.cart.get_total_price ( this.stock );
      this.nbr_product = this.cart.get_nbr_product ();
    },
    remove_from_cart (id) {
      this.cart.removeFromCart (id);
      this.update_cart ();
      this.update_total ();
    }
  }
};
</script>
