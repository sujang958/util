function mentionToID(value) {
  return value.replace(/[<@!]/g, '').replace('>', '');
};
/*
 * @example mentionToID("@MadeGOD")
 * @output 552103947662524416
 */
