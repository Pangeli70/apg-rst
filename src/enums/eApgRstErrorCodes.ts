/** -----------------------------------------------------------------------
 * @module [Rst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.2.0 [APG 2018/06/02]
 * @version 0.5.0 [APG 2018/11/25]
 * @version 0.7.1 [APG 2019/08/15]
 * @version 0.8.0 [APG 2022/03/12] Porting to Deno
 * @version 0.9.1 [APG 2022/09/18] Deno Deploy
 * -----------------------------------------------------------------------
 */

/**
 * Error codes managed by the Apg Ecosystem
 */
export enum eApgRstErrorCodes {

  noError,
  notANumber,
  notAnInteger,
  notAFloat,
  notAString,
  notAnArray,
  notAnObject,
  notInsideLimits,
  notAValidCode,
  notAValidValue,
  notAValidObject,
  notValidParameters,
  notValidLimits,
  notInitialized,
  notFound,
  notInBounds,
  fsError,
  managedError,
  genericError,
  alreadyExist,
  wrongOrder,
  unmanagedError

}
