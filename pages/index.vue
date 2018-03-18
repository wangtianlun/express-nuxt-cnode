<template>
  <section class="main">
    <div class="sidebar">
      <div class="panel">
        <div class="inner">
          <p>CNode：Node.js专业中文社区</p>
          <div style="margin-bottom: 5px;">
            您可以
            <nuxt-link to="signin" class="signin">登录</nuxt-link>
            或
            <nuxt-link to="signup" class="signup">注册</nuxt-link>，
            也可以
          </div>
          <a href="/auth/github" class="login-by-github">通过GitHub登录</a>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="panel">
        <div class="header">
          <nuxt-link to="/?tab=all" class="topic-tab current-tab">全部</nuxt-link>
          <nuxt-link to="/?tab=good" class="topic-tab">精华</nuxt-link>
          <nuxt-link to="/?tab=share" class="topic-tab">分享</nuxt-link>
          <nuxt-link to="/?tab=ask" class="topic-tab">问答</nuxt-link>
          <nuxt-link to="/?tab=job" class="topic-tab">招聘</nuxt-link>
          <nuxt-link to="/?tab=dev" class="topic-tab">客户端测试</nuxt-link>
        </div>
        <div class="inner">
          <div class="topic-list">
            <div class="cell clearfix" v-for="topic in topics">
              <a class="user_avatar" :href="cnodeHostName + '/user/' + topic.author.loginname">
                <img :src="topic.author.avatar_url" alt="">
              </a>
              <span class="reply_count">
                <span class="count_of_replies" title="回复数">{{ topic.reply_count }}</span>
                <span class="count_seperator">/</span>
                <span class="count_of_visits" title="点击数">{{ topic.visit_count }}</span>
              </span>
              <a href="" class="last_time">
                <img class="user_small_avatar" src="https://avatars1.githubusercontent.com/u/23202919?v=4&s=120">
                <span class="last_active_time">{{ topic.create_at }}</span>
              </a>
              <div class="topic_title_wrapper">
                <span :class="{ 'put_top': topic.top }">
                  <template v-if="topic.good">置顶</template>
                  <template v-else>
                    <template v-if="topic.tab === 'share'">分享</template>
                    <template v-else-if="topic.tab === 'ask'">问答</template>
                    <template v-else-if="topic.tab === 'job'">招聘</template>
                    <template v-else-if="topic.tab === 'dev'">测试</template>
                  </template>
                </span>
                <a :href="cnodeHostName + '/topic/' + topic.id" class="topic-title" >{{ topic.title }}</a>
              </div>
            </div>
          </div>
          <pagination :total-page="totalPage" :current-page="page" :page-click="handlePageClick"/>
        </div>
      </div>
    </div>
    <div v-if="showBackToTop" id="backtotop">回到顶部</div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import pagination from '~/components/common/pagination'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/topics?page=1&tab=&limit=40')
    return { topics: data }
  },

  head () {
    return {
      title: 'CNode: Node.js专业中文社区'
    }
  },

  data() {
    return {
      page: 1,
      tab: '',
      limit: 40,
      cnodeHostName: 'https://cnodejs.org',
      totalPage: 95,
      showBackToTop: false,
    }
  },

  methods: {
    getTopicsInfo() {
      const self = this;

      axios.get(`/api/topics?page=${this.page}&tab=&limit=40`)
        .then(res => {
          self.topics = res.data
        })
        .catch(ex => {
          console.error(ex)
        })
    },

    handlePageClick(page) {
      this.page = page;
      this.getTopicsInfo();
    },
  },

  mounted () {
    const self = this;

    window.addEventListener('scroll', function () {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

      if (scrollTop > 200) {
        self.showBackToTop = true;
      } else {
        self.showBackToTop = false;
      }
    })
  },

  components: {
    pagination,
  }
}
</script>

<style lang="scss" scoped>
  .main {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 400px;

    .content {
      padding: 0;
      margin-right: 305px;
      .panel {
        .header {
          padding: 10px;
          background: #f6f6f6;
          border-radius: 3px 3px 0 0;
          font-size: 14px;
          a.topic-tab {
            text-decoration: none;
            margin: 0 10px;
            color: #80bd01;
            text-decoration: none;

            &:hover {
              color: #08c;
            }

            &.current-tab {
              background-color: #80bd01;
              color: #fff;
              padding: 3px 4px;
              border-radius: 3px;

              &:hover {
                color: #fff;
              }
            }
          }
        }

        .inner {
          padding: 10px;
          border-radius: 0 0 3px 3px;
          background: #fff;
          line-height: 30px;
          
          .topic-list {
            margin: 0;
            .cell {
              border-top: 1px solid #f0f0f0;
              background: #fff;
              padding: 10px;
              font-size: 14px;

              .user_avatar {
                float: left;
                height: 30px;
                img {
                  width: 30px;
                  height: 30px;
                  border-radius: 3px;
                }
              }

              .reply_count {
                float: left;
                display: inline-block;
                width: 70px;
                text-align: center;

                .count_of_replies {
                  color: #9e78c0;
                  font-size: 14px;
                }

                .count_of_visits {
                  font-size: 10px;
                  color: #b4b4b4;
                }
              }

              .last_time {
                color: #778087;
                float: right;
                font-size: 11px;
                display: inline-block;
                margin-left: 20px;
                color: #778087;

                img {
                  width: 18px;
                  height: 18px;
                  vertical-align: middle;
                  border-radius: 3px;
                  margin-right: .5em;
                }

                .last_active_time {
                  text-align: right;
                  min-width: 50px;
                  display: inline-block;
                  white-space: nowrap;
                }
              }

              .topic_title_wrapper {
                white-space: nowrap;
                .put_top {
                  background: #80bd01;
                  color: #fff;
                }
                
                span {
                  background-color: #e5e5e5;
                  color: #999;
                  font-size: 12px;
                  padding: 2px 4px;
                  border-radius: 3px;
                }

                a.topic-title {
                  text-decoration: none;
                  text-overflow: ellipsis;
                  margin-left: 5px;
                  &:hover {
                    text-decoration: underline;
                  }
                }
              }

              &:nth-child(1) {
                border-top: none;
              }
            }
          }
        }
      }
    }

    .sidebar {
      float: right;
      width: 290px;
      font-size: 14px;
      margin-bottom: 20px;
      .panel {
        background: #fff;

        .inner {
          padding: 10px;
          border-radius: 0 0 3px 3px;
          font-size: 12px;

          .signin, .signup {
            color: #778087;
          }
        }

        p {
          margin: 0;
          font-size: 14px;
          word-break: break-word;
          margin: 0 0 20px;
        }

        .login-by-github {
          display: inline-block;
          padding: 7px 10px;
          background: #5bc0de;
          cursor: pointer;
          border: none;
          margin: 0;
          transition: all .2s ease-in-out;
          letter-spacing: 2px;
          border-radius: 3px;
          color: #fff;
          text-decoration: none;
          font-size: 14px;
        }
      }
    }

    #backtotop {
      position: fixed;
      top: 400px;
      right: 0;
      display: block;
      background: #fff;
      border-radius: 12px 0 0 12px;
      padding: 12px 0 12px 5px;
      color: gray;
      width: 24px;
      cursor: pointer;
      text-align: center;
      z-index: 20;
    }
  }
</style>
