// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { PutOutcomeRequest, PutOutcomeResult } from "../models/models_0";
import { de_PutOutcomeCommand, se_PutOutcomeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutOutcomeCommand}.
 */
export interface PutOutcomeCommandInput extends PutOutcomeRequest {}
/**
 * @public
 *
 * The output of {@link PutOutcomeCommand}.
 */
export interface PutOutcomeCommandOutput extends PutOutcomeResult, __MetadataBearer {}

/**
 * <p>Creates or updates an outcome. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, PutOutcomeCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, PutOutcomeCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const input = { // PutOutcomeRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tags: [ // tagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutOutcomeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutOutcomeCommandInput - {@link PutOutcomeCommandInput}
 * @returns {@link PutOutcomeCommandOutput}
 * @see {@link PutOutcomeCommandInput} for command's `input` shape.
 * @see {@link PutOutcomeCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An exception indicating there was a conflict during a delete operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 *
 * @public
 */
export class PutOutcomeCommand extends $Command
  .classBuilder<
    PutOutcomeCommandInput,
    PutOutcomeCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHawksNestServiceFacade", "PutOutcome", {})
  .n("FraudDetectorClient", "PutOutcomeCommand")
  .f(void 0, void 0)
  .ser(se_PutOutcomeCommand)
  .de(de_PutOutcomeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutOutcomeRequest;
      output: {};
    };
    sdk: {
      input: PutOutcomeCommandInput;
      output: PutOutcomeCommandOutput;
    };
  };
}
