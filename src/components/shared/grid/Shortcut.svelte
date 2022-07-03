<script lang="ts">
    import type { Program } from "$objects/shared/program/Program";

    import { desktop } from "$stores/shared/DeviceTypeStore";

    export let program: Program;

    let mobile = !$desktop;
</script>

<div class="program" class:mobile>
    <div class="image-container">
        <img src={program.icon} alt={program.name} draggable="false" />
    </div>
    <p>{program.name}</p>
</div>

<style lang="scss">
    .program {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;

        .image-container {
            width: 100%;
            height: 100%;
            img {
                width: 65%;
            }
        }
        p {
            margin: 0;
            color: #eeeeee;
            text-shadow: 0px 1px 2px black;

            width: 100%;
            word-wrap: break-word;
        }
    }

    .program.mobile {
        p {
            font-size: 0.75rem;
        }
    }
</style>
