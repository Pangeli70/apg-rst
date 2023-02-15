/** -----------------------------------------------------------------------
 * @module [Rst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.2.0 [APG 2018/06/02]
 * @version 0.5.1 [APG 2019/02/21]
 * @version 0.7.0 [APG 2019/08/15]
 * @version 0.8.0 [APG 2022/03/12] Porting to Deno
 * @version 0.9.1 [APG 2022/09/18] Github beta
 * @version 0.9.5 [APG 2023/02/14] General simplification
 * -----------------------------------------------------------------------
 */
import { TApgRstCodedMessageId } from "../types/TApgRst.ts";
import { IApgRstPayload } from './IApgRstPayload.ts';


/** 
 * Result of the operations for functions and methods. Carries informations about errors or data.
 */
export interface IApgRst {

  /** Result */
  ok: boolean;
  /** Message template supports placeholders for parameters */
  message?: string;
  /** Parameters values to be used to fill the placeholders in message */
  params?: string[];
  /** Additional data to describe successful or error operations  */
  payload?: IApgRstPayload;
  /** Code message for multilanguage support */
  codedMessageId?: TApgRstCodedMessageId;
}
