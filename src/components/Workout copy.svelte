<script>
  import { theWorkout } from '~/store/workouts'

  // export let showModal
</script>

{#if $theWorkout.name != undefined}
  <div class="modal">
    <div class="workout-details">
      <div class="image">
        <img src="/assets/a1.jpg" alt=" ">
        <img src="/assets/a2.jpg" alt=" ">
      </div>
      <div class="specs">
        <div class="name">
          {$theWorkout.name}
        </div>
        <div class="labels">
          <span>
            {$theWorkout.muscle}
          </span>
          <span class="dot">▪</span>
          <span>
            {$theWorkout.equipment}
          </span>
          <span class="dot">▪</span>
          <span>
            {$theWorkout.difficulty}
          </span>
          <span class="dot">▪</span>
          <span>
            {$theWorkout.type}
          </span>
        </div>
        <div class="instructions">
          <span>Instructions</span>
            {$theWorkout.instructions}
        </div>
      </div>
    </div>
    <button 
      class="btn"
      on:click={()=>{theWorkout.set({})}}>
      Close
    </button>
  </div>
{/if}

<style lang="scss">
  .modal {
    font-family: 'Noto Sans', sans-serif;
    color: $color--black;
    padding: 50px;
    background-color: $color--black-80;
    position: absolute;
    width: calc(100% - 100px);
    height: 100%;
    z-index: 9999;
    .workout-details {
      display: flex;
      @media #{$mobile} {
        display: block;
      }
    }

    .btn {
      margin-top: 30px;
      width: 100%;
      height: 50px;
      padding: 0 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      background-color: $color--primary;
      font-weight: 700;
      color: $color--white;
      outline: none;
      transition: .4s;
      @media #{$mobile} {
        grid-column: 1 / -1;
      }
      &:hover {
        background-color: lighten($color--primary, 10%);
      }
    }
  }
  .image {
    flex-shrink: 0;
    padding: 10px;
    width: 400px;
    height: 100%;
    border-radius: 10px;
    margin-right: 30px;
    background-color: $color--area;
    background-position: center;
    background-size: cover;
    position: relative;
    @media #{$tablet} {
      width: 300px;
      height: 300px * 3/2;
      margin-right: 30px;
    }
    @media #{$mobile} {
      margin-right: 0;
      margin-bottom: 50px;
    }
    img {
      width: 100%;
    }
  }
  .specs {
    background-color: $color--area;
    padding: 20px;
    border-radius: 10px;
    .name {
      font-size: 70px;
      line-height: 1;
      margin-bottom: 30px;
      @media #{$mobile} {
        font-size: 50px;
      }
    }
    .labels {
      color: $color--primary;
      .dot {
        margin: 0 6px;
      }
    }
    .instructions {
      span {
        display: block;
        font-size: 12px;
        color: $color--black-50;
        font-weight: 600;
      }
      text-align: justify;
      margin-top: 20px;
    }
  }
</style>