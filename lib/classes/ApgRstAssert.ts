/** -----------------------------------------------------------------------
 * @module [apg-uts]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.8.0 [APG 2022/08/09]
 * @version 0.9.1 [APG 2022/09/18] Github beta
 * @version 0.9.5 [APG 2023/02/14] General simplification
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */

import { Uts } from "../deps.ts";
import { IApgRst } from "../interfaces/IApgRst.ts";
import { ApgRstErrors } from "./ApgRstErrors.ts";

/**
 * Check for unrecoverable errors in Apg Exosystem
 */
export class ApgRstAssert {

    static IsNotOk(achecked: IApgRst, amessage: string, athrow = false) {

        let r: IApgRst = { ok: true };

        if (!achecked.ok) {

            const title = 'ASSERTED ERROR RESULT ! ';

            r = ApgRstErrors.Simple(
                title + amessage
            );

            this.#console(title, amessage);

            console.dir(achecked);

            if (athrow) {
                throw new Error(amessage);
            }
        }
        return r;

    }

    static IsUndefined(
        achecked: unknown | undefined,
        amessage: string,
        athrow = false
    ) {

        let r: IApgRst = { ok: true };

        if (achecked === undefined) {

            const title = 'ASSERTED UNDEFINED ! ';

            r = ApgRstErrors.Simple(
                title + amessage
            );

            this.#console(title, amessage);

            if (athrow) {
                throw new Error(amessage);
            }
        }
        return r;
    }



    static IsFalse(achecked: boolean, amessage: string, athrow = false) {

        let r: IApgRst = { ok: true };

        if (achecked === false) {

            const title = 'ASSERTED FALSE ! ';

            r = ApgRstErrors.Simple(
                title + amessage
            );

            this.#console(title, amessage);

            if (athrow) {
                throw new Error(amessage);
            }
        }
        return r;
    }

    static IsTrue(achecked: boolean, amessage: string, athrow = false) {

        let r: IApgRst = { ok: true };

        if (achecked === true) {

            const title = 'ASSERTED TRUE ! ';

            r = ApgRstErrors.Simple(
                title + amessage
            );

            this.#console(title, amessage);

            if (athrow) {
                throw new Error(amessage);
            }
        }
        return r;

    }

    static #console(title: string, amessage: string) {

        const consoleTitle = Uts.ApgUtsStr.FilledCentered(title, 80, "+", "-");
        console.error('\n\n' + consoleTitle);

        const consoleMessage = Uts.ApgUtsStr.FilledCentered(amessage, 80, "|", " ");
        console.error(consoleMessage);

        const consoleFooter = Uts.ApgUtsStr.FilledCentered("", 80, "+", "-");
        console.error(consoleFooter + '\n\n');

    }
}