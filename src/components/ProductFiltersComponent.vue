<script>
export default {
  data() {
    return {
      sport: 'Alle',
      prijs: 'Alle',
    };
  },

  emits: ['filter-data'],

  watch: {
    sport: 'emitFilterData',
    prijs: 'emitFilterData',
  },

  methods: {
    emitFilterData() {
      this.$emit('filter-data', this.sport, this.prijs);
    },
  },
};
</script>
<template>
    <div class="filters">
        <label>
            <select v-model="sport" class="filter1">
                <option value="Alle">Alle</option>
                <option value="Voetbal">Voetbal</option>
                <option value="Basketbal">Basketbal</option>
                <option value="Racing">Racing</option>
                <option value="Abonnement">Abonnement</option>
            </select>
        </label>
        <label>
            <select v-model="prijs" class="filter2">
                <option value="Alle">Alle</option>
                <option value="-€50">-€50</option>
                <option value="€50-€100">€50-€100</option>
                <option value="€100-€150">€100-€150</option>
                <option value="€150+">€150+</option>
            </select>
        </label>
    </div>
</template>