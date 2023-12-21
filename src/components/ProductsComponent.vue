<script>
import ProductFiltersComponent from '../components/ProductFiltersComponent.vue'
import ProductPaginationComponent from '../components/ProductPaginationComponent.vue'
import ProductsOverviewComponent from '../components/ProductsOverviewComponent.vue'
    export default {
    data() {
        return {
        filteredList: this.productList,
        currentPage: 1,
        itemsPerPage: 8,
        };
    }, 
    inject: ['productList'],   
    methods: {
        setFilterData(sport,  prijs) {
        this.filteredList = [];
        if (sport !== 'Alle' &&  prijs !== 'Alle') {
            this.productList.forEach(product => {
            if (product.filter.sport === sport && product.filter.prijs ===  prijs) {
                this.filteredList.push(product);
            }
            });
            return
        }
        if (sport !== 'Alle' &&  prijs === 'Alle') {
            this.productList.forEach(product => {
            if (product.filter.sport === sport) {
                this.filteredList.push(product);
            }
            });
            return
        }
        if (sport === 'Alle' &&  prijs !== 'Alle') {
            this.productList.forEach(product => {
            if (product.filter.prijs ===  prijs) {
                this.filteredList.push(product);
            }
            });
            return
        }
        this.productList.forEach(product => {
            this.filteredList.push(product);
        });
        this.currentPage = 1;
        },

    handlePageChange(page) {
      this.currentPage = page;
    },
    
    goToLink() {
    this.$router.push('/Details')
    }
    },
    computed: {
    paginatedList() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredList.slice(start, end);
    },
    },
    components:
    {
        ProductFiltersComponent,
        ProductsOverviewComponent,
        ProductPaginationComponent,
    }
    }
</script>

<template>
    <ProductFiltersComponent @filter-data="setFilterData"/>
    <ProductPaginationComponent></ProductPaginationComponent>
    <ProductsOverviewComponent :filteredList="this.filteredList" />
</template>
