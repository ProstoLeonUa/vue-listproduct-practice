<template>
  <li :class="{ istop: isTop, last: isLast, saled : isSaled} ">
    <img :src="imgUrl" />
    <div class="title">{{item.title}}</div>
    <div class="buy">
      <div class="all">
        <span class="all__price">{{item.price}}</span>
        <span class="all__sale">{{item.sale}}</span>
      </div>
      <button>buy</button>
    </div>
    <div class="description">{{item.description}}</div>
  </li>
</template>
<script>
export default {
  props: ["payload"],
  data() {
    return {
      item: this.payload,
    };
  },
  computed: {
    imgUrl() {
      const url = this.item.img.toLowerCase();
      return require(`../assets/${url}.webp`);
    },
    isTop() {
      const isTop = this.item.isTop;
      return isTop;
    },
    isLast() {
      const count = this.item.count;
      return count == 1 ? true : false;
    },
    isSaled() {
      const count = this.item.count;
      return count == 0 ? true : false;
    },
  },
};
</script>
<style lang="sass">
.istop
	position: relative
	&::after
		position: absolute
		content: 'TOP-SALE'
		top: 0
		left: 0
		color: white
		padding: 5px
		background-color: red
.last
	position: relative
	&::after
		position: absolute
		content: 'LAST-PRODUCT'
		top: 0
		left: 0
		color: white
		padding: 5px
		background-color: orange
.saled
	position: relative
	&::after
		position: absolute
		content: 'SALED'
		top: 0
		left: 0
		color: white
		font-size: 48px
		font-weight: bold
		width: 100%
		height: 100%
		padding: 0
		background-color: rgba(0, 0,0 , 0.6)
.title,.description
	padding: 5px 0
.buy
	display: flex
	justify-content: space-around
	width: 100%
	padding: 5px 0
.all
	display: flex
	flex-direction: column
	span::after
		content: 'UAH'
		padding-left: 5px
	&__sale
		color: red
		font-size: 24px
		font-weight: bold
	&__price
		color: grey
		font-size: 14px
		text-decoration: line-through
li
	border: 1px solid black
	height: 300px
	width: 300px
	display: flex
	flex-direction: column
	align-items: center
	padding: 20px
img
	max-width: 100%
	object-fit: cover
	height: auto
	padding: 5px 0
</style>