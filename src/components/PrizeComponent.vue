<script>
export default {
    inject: [
        'cartList'
    ],

    computed: {
        subtotalCalc(){
            var i = 0
            this.cartList.forEach(product => {
                i = (Math.round((parseFloat(i) + (product.price * product.quantity)) * 100) / 100).toFixed(2)
            });
            return i
        },
        BTWCalc(){
            var i = 0
            this.cartList.forEach(product => {
                i = (Math.round((parseFloat(i) + (((product.price / 100) * product.btw) * product.quantity)) * 100) / 100).toFixed(2)
            });
            return i
        },
        totalCalc(){
            var i = 0
            i = (Math.round((parseFloat(this.subtotalCalc) + parseFloat(this.BTWCalc)) * 100) / 100).toFixed(2)
            return i
        },

        showSubtotal(){
            return this.subtotalCalc
        },
        showBTW(){
            return this.BTWCalc
        },
        showTotal(){
            return this.totalCalc
        }
    }
}
</script>
<template>
    <div class="prijsoverzicht">
      <h1>Besteloverzicht</h1>
           <h3>Totaal artikelen:</h3>
           <p>€ {{showSubtotal}}</p>
           <h3>Totaal BTW:</h3>
           <p>€ {{showBTW}}</p>
           <h3>Totaal prijs</h3>
           <p>€ {{showTotal}}</p>
    </div>
</template>
  

  
<style>
</style>