<template>
	<header class="navbar">
		<div class="navbar-inner">
			<nuxt-link class="brand" to="/">
				<img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="">
			</nuxt-link>
			<form id="search_form" class="navbar-search"  action="/search">
				<input type="text" class="search-query" name="q" v-model="q">
			</form>
			<ul class="nav">
				<li>
					<nuxt-link to="/">首页</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/getstart">新手入门</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/api">API</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/about">关于</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/signup">注册</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/signin">登录</nuxt-link>
				</li>
			</ul>
		</div>
	</header>
</template>

<script>
export default {
  name: 'navbar',

  data() {
  	return {
  		q: ''
  	}
  }
}
</script>

<style lang="scss" scoped>
	.navbar {
		position: relative;
		background: $navbar-bg-color;
		overflow: visible;
		font-size: 13px;
		z-index: 9;

		.navbar-inner {
			width: 90%;
			margin: auto;
			padding: 5px;
			border: none;
			min-height: 40px;
			line-height: 40px;

			.brand {
				float: left;
				display: block;
				width: 120px;
				padding: 3px 20px;
				height: 34px;
				line-height: 34px;
				color: #ccc;
				font-weight: 700;
				text-shadow: none;
				img {
					vertical: initial;
					height: auto;
					max-width: 100%;
					border: 0;
				}
			}

			.navbar-search {
				margin-top: 6px;
				float: left;
				margin-bottom: 0;
				width: 233px;
				height: 28px;
				line-height: 28px;

				input {
					width: 100%;
					background: url(https://o4j806krb.qnssl.com/public/images/search.e53b380a.hashed.png) 4px 4px no-repeat #888;
					padding: 3px 5px 3px 22px;
					color: #666;
					border: none;
					transition: all .5s;
					margin-top: 2px;
					border-radius: 15px;
					line-height: 1;
					font-size: 13px;
					margin-bottom: 0;
					box-sizing: border-box;
					outline: none;
					height: 26px;

					&:hover {
						background-color: #fff;
					}
				}
			}

			.nav {
				float: right;
				margin: 0;
				padding: 0;
				li {
					display: block;
					float: left;
					text-align: center;
					a {
						text-decoration: none;
						padding: 10px 15px;
						color: #ccc;
						&:hover {
							color: #fff;
						}
					}
				}
			}
		}
	}
</style>