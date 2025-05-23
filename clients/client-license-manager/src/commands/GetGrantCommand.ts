// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { GetGrantRequest, GetGrantResponse } from "../models/models_0";
import { de_GetGrantCommand, se_GetGrantCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGrantCommand}.
 */
export interface GetGrantCommandInput extends GetGrantRequest {}
/**
 * @public
 *
 * The output of {@link GetGrantCommand}.
 */
export interface GetGrantCommandOutput extends GetGrantResponse, __MetadataBearer {}

/**
 * <p>Gets detailed information about the specified grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetGrantCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetGrantCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const input = { // GetGrantRequest
 *   GrantArn: "STRING_VALUE", // required
 *   Version: "STRING_VALUE",
 * };
 * const command = new GetGrantCommand(input);
 * const response = await client.send(command);
 * // { // GetGrantResponse
 * //   Grant: { // Grant
 * //     GrantArn: "STRING_VALUE", // required
 * //     GrantName: "STRING_VALUE", // required
 * //     ParentArn: "STRING_VALUE", // required
 * //     LicenseArn: "STRING_VALUE", // required
 * //     GranteePrincipalArn: "STRING_VALUE", // required
 * //     HomeRegion: "STRING_VALUE", // required
 * //     GrantStatus: "PENDING_WORKFLOW" || "PENDING_ACCEPT" || "REJECTED" || "ACTIVE" || "FAILED_WORKFLOW" || "DELETED" || "PENDING_DELETE" || "DISABLED" || "WORKFLOW_COMPLETED", // required
 * //     StatusReason: "STRING_VALUE",
 * //     Version: "STRING_VALUE", // required
 * //     GrantedOperations: [ // AllowedOperationList // required
 * //       "CreateGrant" || "CheckoutLicense" || "CheckoutBorrowLicense" || "CheckInLicense" || "ExtendConsumptionLicense" || "ListPurchasedLicenses" || "CreateToken",
 * //     ],
 * //     Options: { // Options
 * //       ActivationOverrideBehavior: "DISTRIBUTED_GRANTS_ONLY" || "ALL_GRANTS_PERMITTED_BY_ISSUER",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGrantCommandInput - {@link GetGrantCommandInput}
 * @returns {@link GetGrantCommandOutput}
 * @see {@link GetGrantCommandInput} for command's `input` shape.
 * @see {@link GetGrantCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 *
 * @public
 */
export class GetGrantCommand extends $Command
  .classBuilder<
    GetGrantCommandInput,
    GetGrantCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLicenseManager", "GetGrant", {})
  .n("LicenseManagerClient", "GetGrantCommand")
  .f(void 0, void 0)
  .ser(se_GetGrantCommand)
  .de(de_GetGrantCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGrantRequest;
      output: GetGrantResponse;
    };
    sdk: {
      input: GetGrantCommandInput;
      output: GetGrantCommandOutput;
    };
  };
}
