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
        [getCategoryByName(Category.Name.CATEGORY_1), categoryFavourites],
        "/images/program-icons/croma.png",
        new Window(
            BrowserContent,
            { title: "Croma", url: "https://jitzek.github.io/croma-web-site/" },
            800,
            1000
        )
    ),
    new Program(
        "LocalHost 3000",
        "",
        [getCategoryByName(Category.Name.CATEGORY_2)],
        "/images/program-icons/utilities-terminal.svg",
        new Window(
            BrowserContent,
            { title: "Croma", url: "http://localhost:3000/" },
            800,
            600
        )
    ),
    new Program(
        "GitHub",
        "",
        [getCategoryByName(Category.Name.SOCIALS)],
        "https://github.com/fluidicon.png",
        null,
        new Redirect("https://github.com/Jitzek")
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
