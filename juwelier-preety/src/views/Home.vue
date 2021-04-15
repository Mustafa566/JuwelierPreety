<template>
  <div class="home">
    <Header></Header>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  components: {
    Header
  },
  name: 'Home',
  data() {
    return {

    }
  },
  head: {
		title: function () {
			return {
				inner: 'Juwelier Preety',
        separator: '|',
        complement: 'Home'
			}
		}
	},
}
</script>
