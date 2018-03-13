<template>
	<div class="pagination">
		<ul>
			<li v-for="page in pageRange" :class="{ 'active': page.className === 'current', 'disabled': page.className === 'disabled' }">
				<a @click.prev="onPageClick(page.num)">{{ page.text }}</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'pagination',

		props: {
			totalPage: {
				default: 1,
				type: Number
			},

			currentPage: {
				default: 1,
				type: Number
			},

			pageClick: {
				default: () => {},
				type: Function
			}
		},

		data() {
			return {
				pageRange: [],
				prevShow: 1,
				nextShow: 1
			}
		},

		watch: {
			currentPage: function () {
				this.getPageRange()
			}
		},

		methods: {
	    getPageRange () {
        let start = 0
        let end = 0
        let showLen = this.prevShow + this.nextShow + 1
        let totalPage = Math.max(this.totalPage, 1)
        let currentPage = this.currentPage

        if (totalPage <= 1){
          start = end = 1
        }
        else if (totalPage <= showLen){
          start = 1
          end = totalPage
        }
        else {
          if (currentPage <= this.prevShow + 1){
            start = 1
            end = showLen
          }
          else if (currentPage >= totalPage - this.nextShow){
            end = totalPage
            start = totalPage - showLen + 1
          }
          else {
            start = currentPage - this.prevShow
            end = currentPage + this.nextShow
          }
        }

        this.pageRange = []

        //上一页
        if (currentPage != 1){
          this.pageRange.push({num:currentPage-1, text:'«', className: 'prev'})
        } else {
          this.pageRange.push({className:'disabled', icon: 'prev', text: '«'});
        }

        //第一页
        if (start >= 2){
          this.pageRange.push({num:1, text:1})
        }
        //省略号
        if (start > 2){
            this.pageRange.push({text:'...', className:'ellipsis'})
        }
        //显示的页码列表
        for (var i=start; i<=end; i++){
          this.pageRange.push({
            num : i,
            text : i,
            className : (i==currentPage) ? 'current' : ''
          })
        }
        //省略号
        if (end < totalPage-1){
          this.pageRange.push({text:'...', className:'ellipsis'})
        }
        //最后一页
        if (end <= totalPage-1){
          this.pageRange.push({num:totalPage, text:totalPage})
        }
        //下一页
        if (currentPage != totalPage){
          this.pageRange.push({num:currentPage+1, text:'»', className: 'next'})
        } else {
          this.pageRange.push({className:'disabled', icon: 'next', text: '»'})
        }
    	},

    	onPageClick(page) {
    		if (!isNaN(parseInt(page))) {
    			this.pageClick(page)
    		}
    	}
		},

		mounted() {
			this.getPageRange()
		}
	}
</script>

<style lang="scss" scoped>
	.pagination {
		height: 40px;
		margin: 10px 0 0 10px;

		ul {
			margin: 0;
			padding: 0;
			list-style: none;
			li {
				cursor: pointer;
				&:first-child {
					a {
						border-left: 1px solid #ddd;
						border-bottom-left-radius: 4px;
						border-top-left-radius: 4px;
					}
				}

				&:last-child {
					a {
						border-bottom-right-radius: 4px;
						border-top-right-radius: 4px;
					}
				}

				&.active {
					a {
						color: #80bd01;
					}
				}

				a {
					float: left;
					font-size: 14px;
					padding: 4px 12px;
					line-height: 20px;
					text-decoration: none;
					background: #fff;
					border: 1px solid #ddd;
					border-left-width: 0;
					color: #778087;

					&:hover {
						background: #f5f5f5;
					}
				}
			}
		}
	}
</style>