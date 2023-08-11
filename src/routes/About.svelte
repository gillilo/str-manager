<!-- How to Create Random Website Background Generator using CSS & Javascript | Anime.js -->
<!-- https://www.youtube.com/watch?v=TR6TmT1A_uI -->
<script>
  import anime from "animejs";

  let count = 1

  function clickEventHandler() {
    console.log("step", count)
    function allTextHide() {
      const texts = document.getElementsByTagName('span')
      var textlist = Array.prototype.slice.call(texts)
      textlist.map((e) => {
        e.style.display = "none"
      })
    }
    allTextHide()
    
    if (count <= 2) {
      generate1()
    }
    if (count > 2) {
      generate2()
      document.querySelector('.container1').style.display = "none"
      document.querySelector('.container2').style.display = "flex"
    }
    document.querySelector('.text'+count).style.display = "block"
    count++
  }

  //======================generate1======================
  let array1 = []
  for (let i = 1; i <= 90 ; i++) {
    array1.push(i)
  }
  let flag1 = true
  function generate1() {
    anime({
      targets: '.loader',
      scale: 0,
    })
    if (flag1) {
      flag1 = false
      const blocks = document.querySelectorAll('.block')
      blocks.forEach(block => {
        block.style.width = "50px"
        block.style.height = "50px"
      })
    }
    anime({
      targets: '.block',
      translateX : function() {
        return anime.random(-1000, 1000)
      },
      translateY : function() {
        return anime.random(-800, 800)
      },
      scale: function() {
        return anime.random(2,5);
      }
    })
  }
  //======================generate1======================

  //======================generate2======================
  function generate2() {
    anime({
      targets: '.loader',
      scale: 1,
    })
  }
  //======================generate2======================
</script>

<div class="body1">
  <div class="textdiv" on:click={clickEventHandler}>
    <span class="text">클릭!</span>
    <span class="text textn text1">╰(*°▽°*)╯<br/>안녕하세요!<br/>만나서 반갑습니다!</span>
    <span class="text textn text2">(❁´◡`❁)<br/>저는 여러분들의 운동 매니저<br/>STR 이라고 해요!</span>
    <span class="text textn text3">저는 여러분들의 운동을<br/>(⌐■_■) 체계적으로<br/>하실 수 있게 도와드려요!</span>
    <span class="text textn text4">예를 들어<br/>몸의 변화나 수행능력의 향상을<br/>그래프로 보여드릴 수 있어요!</span>
    <span class="text textn text5">또,<br/>운동 계획과 루틴을<br/>관리 해 드릴 수 있어요!</span>
    <span class="text textn text6">운동 로그로 운동을 했는지, 안했는지<br/>기록은 물론이고요!</span>
    <span class="text textn text7">혹시 운동 초보자 이신가요?</span>
    <span class="text textn text8">걱정하지 마세요! 우리는 WorkoutArchive.com과 친구거든요!</span>
    <span class="text textn text9">WorkoutArchive.com에서 운동 정보를 검색해 Bookmark에 추가해보세요!</span>
    <span class="text textn text10">Bookmark에 추가한 운동들을 루틴에 포함시킬 수 있거든요!</span>
    <span class="text textn text11">이제 저에 대해 잘 알게 되었나요?</span>
    <span class="text textn text12">혹시라도 궁금한게 있으시면<br/>언제든지 연락해주세요!</span>
    <span class="text textn text13"></span>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="container1">
    {#each array1 as item (item)}
      <div class="block"></div>
    {/each}
  </div>
  <div class="container2">
    <div class="loader">
      <div class="div" style="--i:0"></div>
      <div class="div" style="--i:1"></div>
      <div class="div" style="--i:2"></div>
      <div class="div" style="--i:3"></div>
      <div class="div" style="--i:4"></div>
      <div class="div" style="--i:5"></div>
      <div class="div" style="--i:6"></div>
      <div class="div" style="--i:7"></div>
      <div class="div" style="--i:8"></div>
      <div class="div" style="--i:9"></div>
    </div>
  </div>
</div>


<style lang="scss">
  $color--1: #444;
  $color--2: #fff;
  $color--3: #03a9f4;
  $color--4: #6200ff;
  $color--5: #00df82;
  $color--6: #e5ff00;
  $color--7: #ff2626;

  .body1 {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: $color--white;
    .textdiv {
      z-index: 9999;
      cursor: pointer;
      padding: 30px;
      background-color: rgba($color--black, 0.8);
      border-radius: 50px;
      .text {
        color: $color--white;
        text-shadow: $color--black 1px 0 10px;
        line-height: 1.2em;
        text-align: center;
        font-size: 5em;
        font-weight: 600;
      }
      .textn {
        display: none;
      }
    }
    .container1 {
      overflow: hidden;
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .block {
        position: absolute;
        width: 0px;
        height: 0px;
        background: #444;
        box-shadow: 10px 10px 30px rgba(0,0,0,0.5);
        border-radius: 50%;
      }
      .block:nth-child(7n + 1) {
        background: $color--1;
      }
      .block:nth-child(7n + 2) {
        background: $color--2;
      }
      .block:nth-child(7n + 3) {
        background: $color--3;
      }
      .block:nth-child(7n + 4) {
        background: $color--4;
      }
      .block:nth-child(7n + 5) {
        background: $color--5;
      }
      .block:nth-child(7n + 6) {
        background: $color--6;
      }
      .block:nth-child(7n + 7) {
        background: $color--7;
      }
    }
    
    .container2 {
      overflow: hidden;
      margin: 0;
      padding: 0;

      overflow: hidden;
      position: absolute;
      min-width: 100vw;
      max-width: 100vw;

      box-sizing: border-box;
      // display: flex;
      display: none;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      max-height: 100vh;
      background: $color--white;
      .loader {
        display: flex;
        flex-direction: row;
        overflow: hidden;
        .div {
          position: relative;
          width: 100px;
          height: 70vh;
          margin: 20px;
          overflow: hidden;
          border-radius: 40px;
          background: linear-gradient(to bottom, rgba($color--white,0.05));
          border: 2px solid $color--white;
          box-shadow: 15px 15px 20px rgba($color--black,0.1),
                      -15px -15px 20px $color--white,
                      inset -5px -5px 5px rgba($color--white,0.5),
                      inset 5px 5px 5px rgba($color--black,0.05);
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 70vh;
            z-index: 10;
            border-radius: 40px;
            box-shadow: 15px 15px 20px rgba($color--black,0.1),
                        -15px -15px 20px $color--white,
                        inset -5px -5px 5px rgba($color--white,0.5),
                        inset 5px 5px 5px rgba($color--black,0.05);
          }
          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 180vh;
            background: $color--white;
            border-radius: 50%;
            box-shadow: inset -5px -5px 5px rgba($color--black,0.2),
            0 420px 0 400px $color--primary;
            animation: ani calc(0.40 * 7s) ease-in-out infinite;
            transform: translateY(70vh);
            animation-delay: calc(0.40s * var(--i));
          }
        }
      }
      @keyframes ani {
        0% {
          transform: translateY(70vh);
          filter: hue-rotate(180deg);
        }
        50% {
          transform: translateY(0vh);
        }
        100% {
          transform: translateY(70vh);
          filter: hue-rotate(0deg);
        }
      }
    }
  }

</style>