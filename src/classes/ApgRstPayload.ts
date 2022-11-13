/** -----------------------------------------------------------------------
 * @module [Rst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.2.0 [APG 2018/06/02]
 * @version 0.5.1 [APG 2019/02/22]
 * @version 0.7.0 [APG 2019/08/15]
 * @version 0.8.0 [APG 2022/03/12] Porting to Deno
 * @version 0.9.0 [APG 2022/08/16] Code smells
 * @version 0.9.1 [APG 2022/09/18] Github beta
 * @version 0.9.2 [APG 2022/11/13] Payload
 * -----------------------------------------------------------------------
 */

import { IApgRstPayload } from "../interfaces/IApgRstPayload.ts";

export class ApgRstPayload implements IApgRstPayload { 

    /** Is the name of the Data type carried by the payload */
    readonly signature: string;
    /** Data carried by the payload */
    readonly data: unknown;

    constructor(asignature: string, adata: unknown) { 
        this.signature = asignature;
        this.data = adata; 
    }

} 