<script lang="ts">
  export let src: string =
    "/static/images/wallpapers/custom-design-01-1920x1080.png";
</script>

<img {src} alt="wallpaper" unselectable={true} draggable={false} />

<style lang="scss">
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
    z-index: -1;

    // pointer-events: none;
  }
</style>
