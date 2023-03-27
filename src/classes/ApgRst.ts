/** -----------------------------------------------------------------------
 * @module [Rst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.2.0 [APG 2018/06/02]
 * @version 0.5.1 [APG 2019/02/23]
 * @version 0.7.0 [APG 2019/08/15]
 * @version 0.7.1 [APG 2019/08/27]
 * @version 0.8.0 [APG 2022/03/12] Porting to Deno
 * @version 0.9.1 [APG 2022/09/18] Github beta
 * @version 0.9.5 [APG 2023/02/14] General simplification
 * @version 0.9.6 [APG 2023/03/26] Refactoring of ExtractPayload to CheckPayload
 * -----------------------------------------------------------------------
 */

import { IApgRst } from '../interfaces/IApgRst.ts';

/** 
 * Manipulator of result data in ApgEcosystem
 */
export class ApgRst {


  static CheckPayload(ares: IApgRst, asignature: string):  IApgRst {

    const r: IApgRst = {
      ok: true
    }

    if (!ares.payload) {
      r.ok = false;
      r.message = `Payload is missing. Impossible to check data from result payload`;
    }
    else if (!ares.payload.signature) {
      r.ok = false;
      r.message = `Payload signature is missing. Impossible to check data from result`;
    }
    else if (ares.payload.signature !== asignature) {
      r.ok = false;
      r.message =
        `Payload has wrong signature: ` +
        `expected[%1], got[%2].` +
        `It might be impossible to extract data from payload.`
      r.params = [asignature, ares.payload.signature]
    }
    else { 
      r.payload = ares.payload;
    }

    return r;

  }



  static InterpolateMessage(
    ares: IApgRst,
    aparams?: string[]
  ): string {

    let r = "";

    if (ares.message) {
      let i = 1;
      r = ares.message;

      const placeholdersN = (r.match(/\[%.\]/g) || []).length;

      let params: string[];
      if (aparams != undefined) {
        params = aparams;
      }
      else if (ares.params != undefined) {
        params = ares.params
      }
      else { 
        params = [];
      }

      params.forEach(param => {
        const placeholder = `[%${i}]`;
        r = r.replace(placeholder, param);
        i++;
      });

      if (placeholdersN != params.length) {
        r += `\nWarning! The number of placeholders [${placeholdersN}] doesn't match the number of parameters [${params.length}].`
      }

    }
    else {
      r = "Interpolation error! This result hasn't a valid message template."
    }
    return r;
  }


}
