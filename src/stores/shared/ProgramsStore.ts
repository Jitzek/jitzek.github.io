import { Program } from "$objects/shared/program/Program";
import { Window } from "$objects/shared/program/Window";
import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

import {
    getCategoryByName,
    categoryFavourites,
} from "$stores/shared/CategoriesStore";
import { Category } from "$objects/shared/program/Category";
import BrowserContent from "$components/desktop/window/content/browser/BrowserContent.svelte";
import { Redirect } from "$objects/shared/program/Redirect";
import type { Process } from "$objects/shared/program/Process";

let _programsStore: Array<Program> = [];
export const programsStore: Writable<Array<Program>> = writable([
    new Program(
        "Croma",
        "Official website for the Croma Robot made in Webots.",
        [categoryFavourites],
        "/images/program-icons/croma.png",
        new Window(
            BrowserContent,
            { title: "Croma", url: "https://jitzek.github.io/croma-web-site/" },
            800,
            1000
        )
    ),
    new Program(
        "Fillcan",
        "A C++20 library for rendering graphics using Vulkan.",
        [categoryFavourites],
        "/images/program-icons/fillcan-128x128.png",
        new Window(
            BrowserContent,
            { title: "Fillcan", url: "https://jitzek.github.io/fillcan/" },
            800,
            1000
        )
    ),
    new Program(
        "GitHub",
        "Open a new tab to my GitHub profile page",
        [getCategoryByName(Category.Name.SOCIALS)],
        "/images/program-icons/github.png",
        null,
        new Redirect("https://github.com/Jitzek")
    ),

    new Program(
        "LinkedIn",
        "Open a new tab to my LinkedIn profile page",
        [getCategoryByName(Category.Name.SOCIALS)],
        "/images/program-icons/linkedin.png",
        null,
        new Redirect("https://www.linkedin.com/in/jitze-jan-kerkstra/")
    ),
]);
programsStore.subscribe((programs) => (_programsStore = programs));

export function addProgram(program: Program) {
    programsStore.update((programs) => programs.concat(program));
}

export function removeProgram(program: Program) {
    programsStore.update((programs) => {
        programs.splice(programs.indexOf(program), 1);
        return programs;
    });
}

export function removeProgramById(id: number) {
    programsStore.update((programs) =>
        programs.filter((program) => program.id !== id)
    );
}

export function getProgramById(id: number): Program | undefined {
    return _programsStore.find((_program) => _program.id === id);
}

export function executeProgramById(id: number): Process | null {
    let program = getProgramById(id);
    if (program === undefined) return null;
    if (program.window !== null) {
        return program.createProcess();
    }
    if (program.redirect !== null) {
        program.redirectTo();
    }
    return null;
}
