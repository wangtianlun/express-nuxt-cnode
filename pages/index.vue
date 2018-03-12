<template>
  <section class="main">
    <div class="sidebar">
      <div class="panel">
        <div class="inner">
          <p>CNode：Node.js专业中文社区</p>
          <div>
            您可以
            <nuxt-link to="signin">登录</nuxt-link>
            或
            <nuxt-link to="signup">注册</nuxt-link>，
            也可以<br/>
            <a href="/auth/github">
              通过GitHub登录
            </a>
          </div>
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
            <div class="cell clearfix">
              <nuxt-link class="user_avatar" to="/user">
                <img src="https://avatars3.githubusercontent.com/u/327019?v=4&s=120" alt="">
              </nuxt-link>
              <span class="reply_count">
                <span class="count_of_replies" title="回复数">9</span>
                <span class="count_seperator">/</span>
                <span class="count_of_visits" title="点击数">3228</span>
              </span>
              <a href="" class="last_time">
                <img class="user_small_avatar" src="https://avatars1.githubusercontent.com/u/23202919?v=4&s=120">
                <span class="last_active_time">1天前</span>
              </a>
              <div class="topic_title_wrapper">
                <span class="put_top">置顶</span>
                <a href="" class="topic-title" > 请不要让薅羊毛的帖子入侵技术社区。</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { users: data }
  },
  head () {
    return {
      title: 'Users'
    }
  },
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
              padding-right: 10px;
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
                  padding: 2px 4px;
                  color: #fff;
                  font-size: 12px;
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
        p {
          margin: 0;
        }
      }
    }
  }
</style>
