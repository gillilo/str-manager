<script>
  import Fa from 'svelte-fa'
  import { faUser, faEnvelope, faCakeCandles, faVenusMars, faWeight } from '@fortawesome/free-solid-svg-icons'

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
  <div class="container">

    <div class="tab">
      <input type="radio" name="acc" id="acc1">
      <label class="label" for="acc1">
        <h2>01</h2>
        <h3>Profile</h3>
      </label>
      <div class="content">
        <div class="p">
          <Fa icon={faUser} fw />
          <input type="text" value={user.name} /><br />
          <Fa icon={faEnvelope} fw />
          <input type="text" value={user.email} /><br />
          <Fa icon={faCakeCandles} fw />
          <input type="number" min="0" value={user.age} /><br />
          <Fa icon={faVenusMars} fw />
          <input type="text" value={user.gender} /><br />
          <Fa icon={faWeight} fw />
          <input type="text" value={user.bodyWeight} /><br />
        </div>
      </div>
    </div>

    <div class="tab">
      <input type="radio" name="acc" id="acc2">
      <label class="label" for="acc2">
        <h2>02</h2>
        <h3>Performance</h3>
      </label>
      <div class="content">
        <div class="p">
          <input type="number" min="0" value={user.squat} /><br />
          <input type="number" min="0" value={user.deadlift} /><br />
          <input type="number" min="0" value={user.benchpress} /><br />
          <input type="number" min="0" value={user.overheadpress} /><br />
          <input type="number" min="0" value={user.barbellrow} /><br />
        </div>
      </div>
    </div>

    <div class="tab">
      <input type="radio" name="acc" id="acc3">
      <label class="label" for="acc3">
        <h2>03</h2>
        <h3>Badge & Trophy</h3>
      </label>
      <div class="content">
        <div class="p">
          {#each user.badges as b}
            <div>{b.name}</div>
          {/each}
        </div>
      </div>
    </div>

    <div class="tab">
      <input type="radio" name="acc" id="acc4">
      <label class="label" for="acc4">
        <h2>04</h2>
        <h3>Injury history</h3>
      </label>
      <div class="content">
        <div class="p">
          {#each user.injuries as i}
            <div>{i.name} {i.intensity}</div>
          {/each}
        </div>
      </div>
    </div>

  </div>
</div>

<style lang="scss">
  .body {
    margin: 0;
    padding: 0;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    max-height: 100vh;
    background-color: $color--black;
    .container {
      margin: 0 40px;
      max-width: 100vw;
      min-width: 600px;
      @media #{$mobile} {
        min-width: 350px;
      }
      display: flex;
      flex-direction: column;
      gap: 20px;
      .tab {
        position: relative;
        background-color: $color--white;
        padding: 0 20px 20px;
        box-shadow: 0 15px 25px rgba($color--white, 0.05);
        border-radius: 5px;
        overflow: hidden;
        input {
          font-size: 1.2em;
          height: 2em;
          padding: 10px;
          border: 0px;
          background: rgba($color--white, 0);
          color: $color--white;
          appearance: none;
          &:checked ~ .label::after {
            transform: rotate(135deg);
            color: $color--white;
          }
          &:checked ~ .content {
            max-height: 100vh;
            .p {
              color: $color--white;
            }
          }
          &:checked ~ .label {
            h2 {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: rgba($color--black, 0.2);
              font-size: 8em;
              justify-content: flex-end;
              padding: 20px;
            }
            h3 {
              background: $color--white;
              padding: 2px 10px;
              color: $color--black;
              box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            }
          }
        }
        .label {
          display: flex;
          align-items: center;
          cursor: pointer;
          &::after {
            content: "+";
            position: absolute;
            right: 20px;
            font-size: 2em;
            color: rgba($color--black, 0.1);
            transition: transform 1s;
          }
          h2 {
            width: 40px;
            height: 40px;
            background: $color--black;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $color--white;
            font-size: 1.25em;
            border-radius: 5px;
            margin-right: 10px;
          }
          h3 {
            font-size: 1.25em;
            position: relative;
            font-weight: 500;
            font-family: 'Noto Sans KR', 'Kanit', sans-serif;
            color: $color--black;
            z-index: 10;
            line-height: 2em;
            border-radius: 5px;
          }
        }
        &:hover {
          .label {
            &::after {
              color: $color--black;
            }
          }
        }
        .content {
          max-height: 0;
          transition: 1s;
          overflow: hidden;
          .p {
            position: relative;
            padding: 10px 0;
            color: $color--black;
            z-index: 10;
          }
        }
      }
      .tab:nth-child(1) {
        .label {
          h2 {
            background: linear-gradient(135deg, $color--primary, $color--success);
          }
        }
      }
      .tab:nth-child(2) {
        .label {
          h2 {
            background: linear-gradient(135deg, $color--primary, $color--info);
          }
        }
      }
      .tab:nth-child(3) {
        .label {
          h2 {
            background: linear-gradient(135deg, $color--primary, $color--warning);
          }
        }
      }
      .tab:nth-child(4) {
        .label {
          h2 {
            background: linear-gradient(135deg, $color--primary, $color--danger);
          }
        }
      }
    }
  }
</style>