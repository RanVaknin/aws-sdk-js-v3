// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutEventsConfigurationRequest,
  PutEventsConfigurationRequestFilterSensitiveLog,
  PutEventsConfigurationResponse,
  PutEventsConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_PutEventsConfigurationCommand, se_PutEventsConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutEventsConfigurationCommand}.
 */
export interface PutEventsConfigurationCommandInput extends PutEventsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutEventsConfigurationCommand}.
 */
export interface PutEventsConfigurationCommandOutput extends PutEventsConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates an events configuration that allows a bot to receive outgoing events sent by Amazon
 *             Chime. Choose either an HTTPS endpoint or a Lambda function ARN. For more information,
 *             see <a>Bot</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutEventsConfigurationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutEventsConfigurationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // PutEventsConfigurationRequest
 *   AccountId: "STRING_VALUE", // required
 *   BotId: "STRING_VALUE", // required
 *   OutboundEventsHTTPSEndpoint: "STRING_VALUE",
 *   LambdaFunctionArn: "STRING_VALUE",
 * };
 * const command = new PutEventsConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutEventsConfigurationResponse
 * //   EventsConfiguration: { // EventsConfiguration
 * //     BotId: "STRING_VALUE",
 * //     OutboundEventsHTTPSEndpoint: "STRING_VALUE",
 * //     LambdaFunctionArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutEventsConfigurationCommandInput - {@link PutEventsConfigurationCommandInput}
 * @returns {@link PutEventsConfigurationCommandOutput}
 * @see {@link PutEventsConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutEventsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 *
 * @public
 */
export class PutEventsConfigurationCommand extends $Command
  .classBuilder<
    PutEventsConfigurationCommandInput,
    PutEventsConfigurationCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "PutEventsConfiguration", {})
  .n("ChimeClient", "PutEventsConfigurationCommand")
  .f(PutEventsConfigurationRequestFilterSensitiveLog, PutEventsConfigurationResponseFilterSensitiveLog)
  .ser(se_PutEventsConfigurationCommand)
  .de(de_PutEventsConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEventsConfigurationRequest;
      output: PutEventsConfigurationResponse;
    };
    sdk: {
      input: PutEventsConfigurationCommandInput;
      output: PutEventsConfigurationCommandOutput;
    };
  };
}
