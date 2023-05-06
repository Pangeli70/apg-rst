/** -----------------------------------------------------------------------
 * @module [Rst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.7.0 [APG 2019/08/15]
 * @version 0.8.0 [APG 2022/03/12] Porting to Deno
 * @version 0.9.1 [APG 2022/09/18] Github beta
 * @version 0.9.5 [APG 2023/02/14] General simplification
 * @version 0.9.6 [APG 2023/04/24] Payload signature
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */

import { TApgRstPayloadSignature } from "../types/TApgRst.ts";

/** 
 * Payload useful to carry additional data with the result
 */
export interface IApgRstPayload {
  /** Is the name of the Data type carried by the payload */
  readonly signature: TApgRstPayloadSignature;
  /** Data carried by the payload */
  readonly data: unknown;
}
