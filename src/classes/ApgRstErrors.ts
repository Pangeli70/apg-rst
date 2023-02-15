/** -----------------------------------------------------------------------
 * @module [Rst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.2.0 [APG 2018/06/02]
 * @version 0.5.1 [APG 2019/02/22]
 * @version 0.7.0 [APG 2019/08/15]
 * @version 0.8.0 [APG 2022/03/12] Porting to Deno
 * @version 0.9.0 [APG 2022/08/16] Code smells
 * @version 0.9.1 [APG 2022/09/18] Github beta
 * @version 0.9.5 [APG 2023/02/14] General simplification
 * -----------------------------------------------------------------------
 */
import { IApgRst } from "../interfaces/IApgRst.ts";
import { TApgRstCodedMessageId } from "../types/TApgRst.ts";

/** 
 * Factory class for error management in Apg Ecosystem
 */
export class ApgRstErrors {

  static Coded(
    aerrCode: TApgRstCodedMessageId,
    aparams?: string[]
  ) {

    const r: IApgRst = {
      ok: false,
      codedMessageId: aerrCode,
      params: aparams
    };
    return r;
  }


  static Simple(
    amessage: string
  ) {
    const r: IApgRst = {
      ok: false,
      message: amessage,
    };
    return r;
  }

  static Parametrized(
    amessage: string,
    aparams?: string[]
  ) {
    const r: IApgRst = {
      ok: false,
      message: amessage,
      params: aparams
    };
    return r;
  }



}


