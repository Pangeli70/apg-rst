/** -----------------------------------------------------------------------
 * @module [Rst/lib] Results
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.5 [APG 2023/02/14] General simplification
 * @version 0.9.6 [APG 2023/03/26] Refactoring of ExtractPayload to CheckPayload
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * ------------------------------------------------------------------------
 */

export type { IApgRst } from "./interfaces/IApgRst.ts";
export type { IApgRstPayload } from "./interfaces/IApgRstPayload.ts";
export type { IApgRstCodedMessage } from "./interfaces/IApgRstCodedMessage.ts";

export type {
    TApgRstCodedMessageId,
    TApgRstPayloadSignature
} from "./types/TApgRst.ts";

export { ApgRst } from "./classes/ApgRst.ts";
export { ApgRstErrors } from "./classes/ApgRstErrors.ts";
export { ApgRstAssert } from "./classes/ApgRstAssert.ts";


