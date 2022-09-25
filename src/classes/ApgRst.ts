/** -----------------------------------------------------------------------
 * @module [Rst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.2.0 [APG 2018/06/02]
 * @version 0.5.1 [APG 2019/02/23]
 * @version 0.7.0 [APG 2019/08/15]
 * @version 0.7.1 [APG 2019/08/27]
 * @version 0.8.0 [APG 2022/03/12] Porting to Deno
 * @version 0.9.1 [APG 2022/09/18] Github beta
 * -----------------------------------------------------------------------
 */
import { Uts } from '../../deps.ts';
import { eApgRstErrorCodes } from '../enums/eApgRstErrorCodes.ts';
import { IApgRstCodedMessage } from '../interfaces/IApgRstCodedMessage.ts';

import { IApgRst } from '../interfaces/IApgRst.ts';
import { IApgRstPayload } from '../interfaces/IApgRstPayload.ts';


/** 
 * Internal operations result for the Apg Ecosystem, carries informations about errors and data
 */
export class ApgRst {

  private error: eApgRstErrorCodes;
  private message?: string;
  private payload?: IApgRstPayload;
  private codedMessage?: IApgRstCodedMessage;

  get Ok() {
    return this.error == eApgRstErrorCodes.noError;
  }

  constructor(ares?: IApgRst) {
    this.error = eApgRstErrorCodes.noError;
    if (ares) {
      if (ares.error) {
        this.error = ares.error;
      }
      if (ares.message) {
        this.message = ares.message;
      }
      if (ares.codedMessage) {
        this.codedMessage = ares.codedMessage;
      }
      if (ares.payload) {
        this.payload = ares.payload;
      }
    }
  }

  getPayload(asignature: string) {

    if (!this.payload) {
      throw new Error(`Payload is missing. Impossible to extract data from result`);
    }

    if (!this.payload.signature) {
      throw new Error(`Payload signature is missing. Impossible to check and extract data from result`);
    }

    if (this.payload.signature !== asignature) {
      throw new Error(
        `Payload has wrong signature: ` +
        `expected[${asignature}], got[${this.payload.signature}].` +
        `Impossible to extract data from result.`
      );
    }

    return this.payload.data;

  }

  setPayload(apayload: IApgRstPayload) {
    this.payload = apayload;
  }

  /** @Immutable result*/
  get AsIApgRst() {
    return Uts.ApgUtsObj.DeepCopy(this) as IApgRst;
  }

  get AsImmutableIApgRst() {
    return Uts.ApgUtsObj.DeepFreeze(this) as IApgRst;
  }

  static ExtractPayload(asignature: string, ar: IApgRst) {

    if (!ar.payload) {
      throw new Error(`Payload is missing. Impossible to extract data from result`);
    }

    if (!ar.payload.signature) {
      throw new Error(`Payload signature is missing. Impossible to check and extract data from result`);
    }

    if (ar.payload.signature !== asignature) {
      throw new Error(
        `Payload has wrong signature: ` +
        `expected[${asignature}], got[${ar.payload.signature}].` +
        `Impossible to extract data from result.`
      );
    }

    return ar.payload.data;

  }

  messageFromTemplate(
    aparams: string[]
  ): string {

    let r = "";
    
    if (this.codedMessage && this.codedMessage.template) {
      let i = 1;
      r = this.codedMessage.template;

      const placeholdersN = (r.match(/\[%.\]/g) || []).length;

      aparams.forEach(param => {
        const placeholder = `[%${i}]`;
        r = r.replace(placeholder, param);
        i++;
      });

      if (placeholdersN != aparams.length) {
        r += `\nWarning! The number of placeholders [${placeholdersN}] doesn't match the number of parameters [${aparams.length}].`
      }

    }
    else  { 
      r = "Error this result hasn't a valid coded message template."
    }
    return r;
  }


}
