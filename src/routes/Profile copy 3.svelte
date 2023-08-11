<script>
  import Fa from 'svelte-fa'
  import { faUser, faMobile, faEnvelope, faCakeCandles, faVenusMars, faWeight } from '@fortawesome/free-solid-svg-icons'
  import anime from "animejs"

  
  
  const user = {
    name: '김덕배',
    phone: '010-0000-0000',
    email: 'ejrqo@zmail.com',
    age: '30',
    gender: 'male',
    bodyWeight: 80,

    squat: 200,
    deadlift: 220,
    benchpress: 180,
    overheadpress: 100,
    barbellrow: 150,

    badges: [
      { id: 4, name: '1000파운드 클럽', description: '3대 1000파운드를 들었다!', getTime: '2023-01-01' },
      { id: 5, name: '언더아머 소유자', description: '3대 500을 들었다. 야호!', getTime: '2023-01-12' },
      { id: 6, name: '언더아머 단속반', description: '3대 500이 안되는 자의 언더아머를 찢어버릴 수 있다.', getTime: '2023-02-22' },
      { id: 9, name: '고인물', description: '운동경력 10년차... 내가 곧 헬스장이다.', getTime: '2023-06-04' },
    ],
    trophies: [],

    injuries: [
      { id: 3, name: 'back', intensity: 4 },
      { id: 5, name: 'knee', intensity: 3 },
    ],
  }
</script>

<div class="body">
  <div class="backtext">PROFILE</div>
  <div class="card1">
    <div class="infoGroup">
      <Fa icon={faUser} fw />{user.name}
    </div>
    <div class="infoGroup">
      <Fa icon={faMobile} fw />{user.phone}
    </div>
    <div class="infoGroup">
      <Fa icon={faEnvelope} fw />{user.email}
    </div>
    <div class="infoGroup">
      <Fa icon={faCakeCandles} fw />{user.age}
    </div>
    <div class="infoGroup">
      <Fa icon={faVenusMars} fw />{user.gender}
    </div>
    <div class="infoGroup">
      <Fa icon={faWeight} fw />{user.bodyWeight}
    </div>
  </div>
</div>

<style lang="scss">
  .body {
    background: $color--black;
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    color: $color--white;
    font-family: 'Noto Sans KR', 'Kanit', sans-serif;
    overflow: hidden;
    .backtext {
      font-size: 10em;
      position: absolute;
      top: 40vh;
      left: 0;
      padding-left: 5vw;
      text-align: center;
      color: rgba($color--white, 0.5);
      transform: rotate(-15deg);
      text-shadow: 0 5px 5px rgba($color--white, 0.3);
      font-weight: 900;
    }
    .card1 {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .infoGroup {
        display: flex;
        flex-direction: row;
        gap: 10px;
        font-size: 2em;
        // cursor: pointer;
        &:hover {
          transition: 0.2s;
          color: $color--primary;
        }
      }
    }
  }

  @keyframes ani {
    0% {
      // color: $color--primary;
    }
    50% {
      // color: $color--success;
    }
    100% {
      // color: $color--primary;
    }
  }
</style>