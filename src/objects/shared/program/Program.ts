import { Process } from "./Process";
import type { Window } from "./Window";
import { processesStore, addProcess } from "$stores/shared/ProcessesStore";
import type { Category } from "./Category";
// import { cloneDeep } from "lodash";
import lodash from "lodash";
import type { Redirect } from "./Redirect";
const { cloneDeep } = lodash;

let c_program_id = 0;
export class Program {
  public readonly id: number = c_program_id++;

  /**
   * A Program contains the initial information needed to instantiate processes
   * @param name Name of program
   * @param description Description of program
   * @param categories Categories of program
   * @param icon Icon src of program
   * @param window Initial window of program
   */
  constructor(
    public name: string,
    public description: string,
    public categories: Array<Category>,
    public icon: string,
    public window: Window | null = null,
    public redirect: Redirect | null = null
  ) {}

  public createProcess(): Process {
    if (this.redirect) {
      return;
    }
    let newProcess = new Process(cloneDeep(this));
    addProcess(newProcess);
    return newProcess;
  }

  public redirectTo(): void {
    window.open(this.redirect.url, "_blank");
  }
}
