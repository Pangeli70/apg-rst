/** -----------------------------------------------------------------------
 * @module [Rst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.2.0 [APG 2018/06/02]
 * @version 0.5.1 [APG 2019/02/21]
 * @version 0.7.0 [APG 2019/08/15]
 * @version 0.8.0 [APG 2022/03/12] Porting to Deno
 * @version 0.9.1 [APG 2022/09/18] Github beta
 * @version 0.9.5 [APG 2023/02/14] General simplification
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */

import { TApgRstCodedMessageId } from "../types/TApgRst.ts";

/** 
 * Coded translatable error messages inside results
 */
export interface IApgRstCodedMessage {

  /** Code of the message. Is used to search into the multilanguage messages dictionary*/
  readonly code: TApgRstCodedMessageId;
  /** Message template with placeholders for parameters */
  readonly message?: string;
  /** Language ID */
  readonly languageId?: string;
}
