<script>
  import { querystring } from "svelte-spa-router";
  import qs from 'qs'

  $: query = qs.parse($querystring)
  $: name = query.name || '김회준'
  $: email = query.email || 'ghlwns1535@gmail.com'
  $: blog = query.blog || 'https://github.com/gillilo/workout-archive'
  $: phone = query.phone || '+82-10-3064-9258'
</script>

<div class="user-profile">
  <div class="photos">
    <div class="photo">
      <img src="/assets/svelte.png" alt="User">
    </div>
    <div class="photo">
      <img src="/assets/scss.png" alt="User">
    </div>
    <div class="photo">
      <img src="/assets/nodejs.png" alt="User">
    </div>
    <div class="photo">
      <img src="/assets/snowpack.png" alt="User">
    </div>
    <div class="photo">
      <img src="/assets/netlify.png" alt="User">
    </div>
  </div>
  <div class="details">
    <div class="name">{name}</div>
    <div class="email">{email}</div>
    <div class="blog">{blog}</div>
    <div class="phone">{phone}</div>
  </div>
</div>

<style lang="scss">
  .user-profile {
    padding: 80px 0;
    .photos {
      display: grid;
      grid-template-columns: repeat(5, 200px);
      grid-gap: 10px;
      justify-content: center;
      @media #{$tablet} {
        grid-template-columns: repeat(3, 200px);
        grid-template-rows: repeat(2, 230px);
      }
      @media #{$mobile} {
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(2, 195px);
      }
      .photo {
        flex-shrink: 0;
        width: 200px;
        height: 230px;
        @media #{$tablet} {
          width: 200px;
          height: 230px;
        }
        @media #{$mobile} {
          width: 150px;
          height: 195px;
        }
        padding: 30px;
        box-sizing: border-box;
        // border: 12px solid $color--primary;
        img {
          width: 100%;
        }
      }
    }
    .details {
      margin-top: 20px;
      text-align: center;
      .name {
        font-size: 40px;
        font-family: 'Noto Sans', sans-serif;
        color: $color--primary;
        font-weight: 600;
        margin-bottom: 20px;
      }
    }
  }
</style>