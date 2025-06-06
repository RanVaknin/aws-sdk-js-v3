// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { DeleteReplicatorRequest, DeleteReplicatorResponse } from "../models/models_0";
import { de_DeleteReplicatorCommand, se_DeleteReplicatorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteReplicatorCommand}.
 */
export interface DeleteReplicatorCommandInput extends DeleteReplicatorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteReplicatorCommand}.
 */
export interface DeleteReplicatorCommandOutput extends DeleteReplicatorResponse, __MetadataBearer {}

/**
 * <p>Deletes a replicator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DeleteReplicatorCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DeleteReplicatorCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // DeleteReplicatorRequest
 *   CurrentVersion: "STRING_VALUE",
 *   ReplicatorArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteReplicatorCommand(input);
 * const response = await client.send(command);
 * // { // DeleteReplicatorResponse
 * //   ReplicatorArn: "STRING_VALUE",
 * //   ReplicatorState: "RUNNING" || "CREATING" || "UPDATING" || "DELETING" || "FAILED",
 * // };
 *
 * ```
 *
 * @param DeleteReplicatorCommandInput - {@link DeleteReplicatorCommandInput}
 * @returns {@link DeleteReplicatorCommandOutput}
 * @see {@link DeleteReplicatorCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicatorCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 *
 * @public
 */
export class DeleteReplicatorCommand extends $Command
  .classBuilder<
    DeleteReplicatorCommandInput,
    DeleteReplicatorCommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Kafka", "DeleteReplicator", {})
  .n("KafkaClient", "DeleteReplicatorCommand")
  .f(void 0, void 0)
  .ser(se_DeleteReplicatorCommand)
  .de(de_DeleteReplicatorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReplicatorRequest;
      output: DeleteReplicatorResponse;
    };
    sdk: {
      input: DeleteReplicatorCommandInput;
      output: DeleteReplicatorCommandOutput;
    };
  };
}
