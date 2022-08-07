<script lang="ts">
  import ProfileIcon from "$components/shared/ProfileIcon.svelte";

  export let name: string;
</script>

<button class="about-me-button">
  <div class="about-me-button-content">
    <div class="profile-icon-container">
      <ProfileIcon zoom={4} />
    </div>
    <p class="profile-name-container">{name}</p>
  </div>
</button>

<style lang="scss">
  .about-me-button {
    @include input-inherit;
    border: none;
    outline: none;

    padding: 0.5rem 1rem 0.5rem 1rem;

    width: 100%;
    min-height: 6rem;

    cursor: pointer;

    transition: background-color 0.5s;

    .about-me-button-content {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;

      max-height: 100px;

      .profile-icon-container {
        display: inline;
        margin: 0;
        margin-right: 8px;
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
        overflow: hidden;

        transition: width 0.25s;
      }

      .profile-name-container {
        font-size: 1.25rem;
        transition: font-size 0.5s;
      }
    }
  }

  .about-me-button:hover {
    @include input-hover-inherit;
  }

  @media only screen and (min-width: 600px) {
    .about-me-button:hover {
      .profile-name-container {
        font-size: 1.35rem;
      }
    }
  }
</style>
