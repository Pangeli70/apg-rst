/** -----------------------------------------------------------------------
 * @module [apg-rst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.2.0 [APG 2018/06/02]
 * @version 0.5.1 [APG 2019/02/23]
 * @version 0.7.0 [APG 2019/08/15]
 * @version 0.7.1 [APG 2019/08/27]
 * @version 0.8.0 [APG 2022/03/12] Porting to Deno
 * @version 0.9.1 [APG 2022/09/18] Github beta
 * @version 0.9.5 [APG 2023/02/14] General simplification
 * @version 0.9.6 [APG 2023/03/26] Refactoring of ExtractPayload to CheckPayload
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */

import { IApgRst } from '../interfaces/IApgRst.ts';
import { IApgRstPayload } from "../interfaces/IApgRstPayload.ts";
import { TApgRstPayloadSignature } from "../types/TApgRst.ts";

/** 
 * Manipulator of result data in ApgEcosystem
 */
export class ApgRst {


  static New() {
    return { ok: true } as IApgRst;
  }

  static NewWithPayload(asignature: string, adata: unknown) {
    const p: IApgRstPayload = { 
      signature: asignature,
      data: adata
    }
    return {
      ok: true,
      payload: p
    } as IApgRst;
  }


  static CheckPayload(ares: IApgRst, asignature: TApgRstPayloadSignature): IApgRst {

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

      let signature1;
      let signature2;
      if (typeof (ares.payload.signature) == "symbol") {
        signature1 = asignature.toString();
        signature2 = ares.payload.signature.toString();
      }
      else { 
        signature1 = asignature as string;
        signature2 = ares.payload.signature as string;
      }

      r.ok = false;
      r.message =
        `Payload has wrong signature: ` +
        `expected[%1], got[%2].` +
        `It might be impossible to extract data from payload.`
      r.params = [signature1, signature2]
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
