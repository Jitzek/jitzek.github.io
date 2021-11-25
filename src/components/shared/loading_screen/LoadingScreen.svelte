<script lang="ts">
  /**
   * This component should load as fast as possible
   */

  import ProfileIcon from "$components/shared/ProfileIcon.svelte";
</script>

<div class="loading-screen">
  <div class="loading-screen-center">
    <div class="logo-container">
      <ProfileIcon />
    </div>
    <div style="margin-top: 1rem;" />
    <div class="loading-bar-container">
      <div class="loading-bar-outer">
        <div class="loading-bar-inner" />
      </div>
    </div>
    <div class="text-under-loading-bar-container">
      <span class="text-under-loading-bar">Loading Website</span>
    </div>
  </div>
</div>

<style lang="scss">
  :global(html) {
    background: rgb(46, 63, 78);
    background: -moz-radial-gradient(
      100% 100% at 50% bottom,
      rgba(46, 63, 78, 1) 0%,
      rgba(35, 40, 43, 1) 100%
    );
    background: -webkit-radial-gradient(
      100% 100% at 50% bottom,
      rgba(46, 63, 78, 1) 0%,
      rgba(35, 40, 43, 1) 100%
    );
    background: radial-gradient(
      100% 100% at 50% bottom,
      rgba(46, 63, 78, 1) 0%,
      rgba(35, 40, 43, 1) 100%
    );

    overflow: hidden;
  }

  .loading-screen {
    width: 100%;
    height: 100%;
    display: flex;
    $--logo-size: 15rem;
    .loading-screen-center {
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      position: absolute;

      top: calc(40% - #{$--logo-size}/ 2);
      left: calc(50% - #{$--logo-size}/ 2);

      .logo-container {
        width: $--logo-size;
        height: $--logo-size;
        border-radius: 100%;
        overflow: hidden;
      }

      .loading-bar-container {
        width: $--logo-size;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        max-width: 100%;

        .loading-bar-outer {
          width: $--logo-size;
          margin: 0.5rem auto;
          border-radius: 100%;
          border: 0.25rem solid transparent;
          position: relative;
          padding: 0.35rem;
        }
        .loading-bar-outer:before {
          content: "";
          border: 0.25rem solid #eee;
          border-radius: 10px;
          position: absolute;
          top: -0.25rem;
          right: -0.25rem;
          bottom: -0.25rem;
          left: -0.25rem;
        }
        .loading-bar-outer .loading-bar-inner {
          position: absolute;
          border-radius: 10px;
          top: 0;
          right: 100%;
          bottom: 0;
          left: 0;
          background: #eee;
          width: 0;
          animation: borealisBar 2.5s linear infinite;
        }

        @keyframes borealisBar {
          0% {
            left: 0%;
            right: 100%;
            width: 0%;
          }
          20% {
            left: 0%;
            right: 75%;
            width: 25%;
          }
          80% {
            right: 0%;
            left: 75%;
            width: 25%;
          }
          100% {
            left: 100%;
            right: 0%;
            width: 0%;
          }
        }
      }

      .text-under-loading-bar-container {
        width: $--logo-size;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        max-width: 100%;

        .text-under-loading-bar {
          color: #eee;
          font-size: 1rem;
        }
      }
    }

    @media only screen and (max-width: $--logo-size) {
      .loading-screen-center {
        left: 0;

        .logo-container {
          width: 80%;
          height: auto;
          margin-left: calc(50% - (80% / 2));
        }
      }
    }
  }
</style>
