/** -----------------------------------------------------------------------
 * @module [Rst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.2.0 [APG 2018/06/02]
 * @version 0.5.1 [APG 2019/02/22]
 * @version 0.7.0 [APG 2019/08/15]
 * @version 0.8.0 [APG 2022/03/12] Porting to Deno
 * @version 0.9.0 [APG 2022/08/16] Code smells
 * @version 0.9.1 [APG 2022/09/18] Github beta
 * -----------------------------------------------------------------------
 */
import { eApgRstErrorCodes } from '../enums/eApgRstErrorCodes.ts';
import { ApgRst } from './ApgRst.ts';

/** 
 * Factory class for error management in Apg Ecosystem
 */
export class ApgRstErrors {

  static Coded(
    acode: eApgRstErrorCodes,
    aerrCode: string,
    atemplate?: string,
    aparams?: string[]
  ) {

    const r = new ApgRst({
      error: acode,
      codedMessage: {
        code: aerrCode,
        template: atemplate,
        params: aparams
      }
    });
    return r;
  }

  static Unmanaged(
    amessage: string
  ) {

    const r = new ApgRst({
      error: eApgRstErrorCodes.unmanagedError,
      message: amessage
    });

    return r;
  }

  static AlreadyExists(aerrCode: string, atemplate?: string, aparams?: string[]) {
    return this.Coded(eApgRstErrorCodes.alreadyExist, aerrCode, atemplate, aparams);
  }

  static NotFound(aerrCode: string, atemplate?: string, aparams?: string[]) {
    return this.Coded(eApgRstErrorCodes.notFound, aerrCode, atemplate, aparams);
  }

  static FsError(aerrCode: string, atemplate?: string, aparams?: string[]) {
    return this.Coded(eApgRstErrorCodes.fsError, aerrCode, atemplate, aparams);
  }

  static NotValidParameters(aerrCode: string, atemplate?: string, aparams?: string[]) {
    return this.Coded(eApgRstErrorCodes.notValidParameters, aerrCode, atemplate, aparams);
  }

  static NotInitialized(aerrCode: string, atemplate?: string, aparams?: string[]) {
    return this.Coded(eApgRstErrorCodes.notInitialized, aerrCode, atemplate, aparams);
  }

  static NotAValidObject(aerrCode: string, atemplate?: string, aparams?: string[]) {
    return this.Coded(eApgRstErrorCodes.notAValidObject, aerrCode, atemplate, aparams);
  }

  static NotAnArray(aerrCode: string, atemplate?: string, aparams?: string[]) {
    return this.Coded(eApgRstErrorCodes.notAnArray, aerrCode, atemplate, aparams);
  }

  static Managed(aerrCode: string, atemplate?: string, aparams?: string[]) {
    return this.Coded(eApgRstErrorCodes.managedError, aerrCode, atemplate, aparams);
  }

}


