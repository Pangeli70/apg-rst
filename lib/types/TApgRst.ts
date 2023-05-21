/** -----------------------------------------------------------------------
 * @module [apg-rst]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.5 [APG 2023/02/14]
 * @version 0.9.6 [APG 2023/04/24] Payload signature
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */


/**
 * Identification code of the multilanguage message carried by the result
 */
export type TApgRstCodedMessageId = string;

/**
 * Also known as discriminator this string is used to make a quick raw check 
 * of the type of the data carried by the payload.
 */ 
export type TApgRstPayloadSignature = string | symbol;