/* eslint-disable */
/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import { WebAPICallResult } from '../WebClient';
export type DndSetSnoozeResponse = WebAPICallResult & {
  ok?:                   boolean;
  error?:                string;
  snooze_enabled?:       boolean;
  snooze_endtime?:       number;
  snooze_remaining?:     number;
  snooze_is_indefinite?: boolean;
  needed?:               string;
  provided?:             string;
};