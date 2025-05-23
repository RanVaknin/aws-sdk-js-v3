// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterVolumeRequest } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DeregisterVolumeCommand, se_DeregisterVolumeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterVolumeCommand}.
 */
export interface DeregisterVolumeCommandInput extends DeregisterVolumeRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterVolumeCommand}.
 */
export interface DeregisterVolumeCommandOutput extends __MetadataBearer {}

/**
 * <p>Deregisters an Amazon EBS volume. The volume can then be registered by another stack. For more
 *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource
 *         Management</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DeregisterVolumeCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DeregisterVolumeCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // DeregisterVolumeRequest
 *   VolumeId: "STRING_VALUE", // required
 * };
 * const command = new DeregisterVolumeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterVolumeCommandInput - {@link DeregisterVolumeCommandInput}
 * @returns {@link DeregisterVolumeCommandOutput}
 * @see {@link DeregisterVolumeCommandInput} for command's `input` shape.
 * @see {@link DeregisterVolumeCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that a request was not valid.</p>
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 *
 * @public
 */
export class DeregisterVolumeCommand extends $Command
  .classBuilder<
    DeregisterVolumeCommandInput,
    DeregisterVolumeCommandOutput,
    OpsWorksClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpsWorksClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpsWorks_20130218", "DeregisterVolume", {})
  .n("OpsWorksClient", "DeregisterVolumeCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterVolumeCommand)
  .de(de_DeregisterVolumeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterVolumeRequest;
      output: {};
    };
    sdk: {
      input: DeregisterVolumeCommandInput;
      output: DeregisterVolumeCommandOutput;
    };
  };
}
