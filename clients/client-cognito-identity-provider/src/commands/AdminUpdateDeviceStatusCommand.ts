// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  AdminUpdateDeviceStatusRequest,
  AdminUpdateDeviceStatusRequestFilterSensitiveLog,
  AdminUpdateDeviceStatusResponse,
} from "../models/models_0";
import { de_AdminUpdateDeviceStatusCommand, se_AdminUpdateDeviceStatusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AdminUpdateDeviceStatusCommand}.
 */
export interface AdminUpdateDeviceStatusCommandInput extends AdminUpdateDeviceStatusRequest {}
/**
 * @public
 *
 * The output of {@link AdminUpdateDeviceStatusCommand}.
 */
export interface AdminUpdateDeviceStatusCommandOutput extends AdminUpdateDeviceStatusResponse, __MetadataBearer {}

/**
 * <p>Updates the status of a user's device so that it is marked as remembered or not
 *             remembered for the purpose of device authentication. Device authentication is a
 *             "remember me" mechanism that silently completes sign-in from trusted devices with a
 *             device key instead of a user-provided MFA code. This operation changes the status of a
 *             device without deleting it, so you can enable it again later. For more information about
 *             device authentication, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">Working with devices</a>.</p>
 *          <note>
 *             <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 *     this operation, you must use IAM credentials to authorize requests, and you must
 *     grant yourself the corresponding IAM permission in a policy.</p>
 *             <p class="title">
 *                <b>Learn more</b>
 *             </p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a>
 *                   </p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminUpdateDeviceStatusCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminUpdateDeviceStatusCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminUpdateDeviceStatusRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 *   DeviceKey: "STRING_VALUE", // required
 *   DeviceRememberedStatus: "remembered" || "not_remembered",
 * };
 * const command = new AdminUpdateDeviceStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AdminUpdateDeviceStatusCommandInput - {@link AdminUpdateDeviceStatusCommandInput}
 * @returns {@link AdminUpdateDeviceStatusCommandOutput}
 * @see {@link AdminUpdateDeviceStatusCommandInput} for command's `input` shape.
 * @see {@link AdminUpdateDeviceStatusCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link InvalidUserPoolConfigurationException} (client fault)
 *  <p>This exception is thrown when the user pool configuration is not valid.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class AdminUpdateDeviceStatusCommand extends $Command
  .classBuilder<
    AdminUpdateDeviceStatusCommandInput,
    AdminUpdateDeviceStatusCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoIdentityProviderService", "AdminUpdateDeviceStatus", {})
  .n("CognitoIdentityProviderClient", "AdminUpdateDeviceStatusCommand")
  .f(AdminUpdateDeviceStatusRequestFilterSensitiveLog, void 0)
  .ser(se_AdminUpdateDeviceStatusCommand)
  .de(de_AdminUpdateDeviceStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AdminUpdateDeviceStatusRequest;
      output: {};
    };
    sdk: {
      input: AdminUpdateDeviceStatusCommandInput;
      output: AdminUpdateDeviceStatusCommandOutput;
    };
  };
}
