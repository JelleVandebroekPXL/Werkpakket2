<script>
export default {
  data() {
    return {
      filteredList: this.productList,
      currentPage: 1,
      itemsPerPage: 8,
    };
  },
  components: {},
  inject: ['productList'],
  methods: {
    setFilterData(sport, prijs) {
      this.filteredList = [];
      if (sport !== 'Alle' && prijs !== 'Alle') {
        this.productList.forEach(product => {
          if (product.filter.sport === sport && product.filter.prijs === prijs) {
            this.filteredList.push(product);
          }
        });
        return;
      }
      if (sport !== 'Alle' && prijs === 'Alle') {
        this.productList.forEach(product => {
          if (product.filter.sport === sport) {
            this.filteredList.push(product);
          }
        });
        return;
      }
      if (sport === 'Alle' && prijs !== 'Alle') {
        this.productList.forEach(product => {
          if (product.filter.prijs === prijs) {
            this.filteredList.push(product);
          }
        });
        return;
      }
      this.productList.forEach(product => {
        this.filteredList.push(product);
      });
      this.currentPage = 1;
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
  },
  computed: {
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredList.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredList.length / this.itemsPerPage);
    },
  },
};
</script>
<template>
    <div class="PaginationComponent">
      <ul>
        <li v-for="item in paginatedItems" :key="item.id">{{ item.name }}</li>
      </ul>
  
      <div>
        <button class="PaginationClick" @click="previousPage" :disabled="currentPage === 1"> Vorige</button>
        <span> Pagina {{ currentPage }} van {{ totalPages }} </span>
        <button class="PaginationClick" @click="nextPage" :disabled="currentPage === totalPages"> Volgende</button>
      </div>
    </div>
  </template>
  
