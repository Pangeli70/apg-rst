/** -----------------------------------------------------------------------
 * @module [Rst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.2.0 [APG 2018/06/02]
 * @version 0.5.1 [APG 2019/02/21]
 * @version 0.7.0 [APG 2019/08/15]
 * @version 0.8.0 [APG 2022/03/12] Porting to Deno
 * @version 0.9.1 [APG 2022/09/18] Deno Deploy
 * -----------------------------------------------------------------------
 */
import { eApgRstErrorCodes } from '../enums/eApgRstErrorCodes.ts';
import { IApgRstCodedMessage } from '../interfaces/IApgRstCodedMessage.ts';
import { IApgRstPayload } from './IApgRstPayload.ts';


/** 
 * Result of the operations for functions and methods. Carries informations about errors or data.
 */
export interface IApgRst {

  /** Internal error code */
  error?: eApgRstErrorCodes;
  /** Details of the result ready to be logged and that don't need translation*/
  message?: string;
  /** Additional data to describe successful or error operations  */
  payload?: IApgRstPayload;
  /** Templateized message with multilanguage support */
  codedMessage?: IApgRstCodedMessage;
}
