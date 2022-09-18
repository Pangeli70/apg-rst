/** -----------------------------------------------------------------------
 * @module [Utils]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.8.0 [APG 2022/08/09]
 * @version 0.9.1 [APG 2022/09/18] Deno Deploy
 * -----------------------------------------------------------------------
 */

import { Uts } from "../../deps.ts";
import { eApgRstErrorCodes } from "../enums/eApgRstErrorCodes.ts";
import { ApgRst } from "./ApgRst.ts";
import { ApgRstErrors } from "./ApgRstErrors.ts";


export class ApgRstAssert {

    static IsNotOk(achecked: ApgRst, amessage: string, athrow = false) {
        let r = new ApgRst();
        if (!achecked.Ok) {

            const title = 'ASSERTED ERROR RESULT ! ';
            r = ApgRstErrors.Coded(
                eApgRstErrorCodes.notAValidValue,
                "",
                title + amessage
            );

            ApgRstAssert.#console(title, amessage);

            console.dir(achecked.AsIApgRst);

            if (athrow) {
                throw new Error(amessage);
            }
        }
        return r;

    }

    static IsUndefined(achecked: unknown | undefined, amessage: string, athrow = false) {

        let r = new ApgRst();

        if (achecked === undefined) {

            const title = 'ASSERTED UNDEFINED ! ';
            r = ApgRstErrors.Coded(
                eApgRstErrorCodes.notAValidValue,
                "",
                title + amessage
            );

            ApgRstAssert.#console(title, amessage);

            if (athrow) {
                throw new Error(amessage);
            }
        }
        return r;
    }



    static IsFalse(achecked: boolean, amessage: string, athrow = false) {
        let r = new ApgRst();
        if (achecked === false) {

            const title = 'ASSERTED FALSE ! ';
            r = ApgRstErrors.Coded(
                eApgRstErrorCodes.notAValidValue,
                "",
                title + amessage
            );

            ApgRstAssert.#console(title, amessage);

            if (athrow) {
                throw new Error(amessage);
            }
        }
        return r;
    }

    static IsTrue(achecked: boolean, amessage: string, athrow = false) {
        const r = new ApgRst();
        if (achecked === true) {
            const title = ('ASSERTED TRUE ! ');

            ApgRstAssert.#console(title, amessage);

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