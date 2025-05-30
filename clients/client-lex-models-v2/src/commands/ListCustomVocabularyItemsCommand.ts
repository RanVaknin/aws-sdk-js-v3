// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListCustomVocabularyItemsRequest, ListCustomVocabularyItemsResponse } from "../models/models_1";
import { de_ListCustomVocabularyItemsCommand, se_ListCustomVocabularyItemsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCustomVocabularyItemsCommand}.
 */
export interface ListCustomVocabularyItemsCommandInput extends ListCustomVocabularyItemsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomVocabularyItemsCommand}.
 */
export interface ListCustomVocabularyItemsCommandOutput extends ListCustomVocabularyItemsResponse, __MetadataBearer {}

/**
 * <p>Paginated list of custom vocabulary items for a given bot locale's
 *          custom vocabulary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListCustomVocabularyItemsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListCustomVocabularyItemsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // ListCustomVocabularyItemsRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListCustomVocabularyItemsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomVocabularyItemsResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   customVocabularyItems: [ // CustomVocabularyItems
 * //     { // CustomVocabularyItem
 * //       itemId: "STRING_VALUE", // required
 * //       phrase: "STRING_VALUE", // required
 * //       weight: Number("int"),
 * //       displayAs: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomVocabularyItemsCommandInput - {@link ListCustomVocabularyItemsCommandInput}
 * @returns {@link ListCustomVocabularyItemsCommandOutput}
 * @see {@link ListCustomVocabularyItemsCommandInput} for command's `input` shape.
 * @see {@link ListCustomVocabularyItemsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 *
 * @public
 */
export class ListCustomVocabularyItemsCommand extends $Command
  .classBuilder<
    ListCustomVocabularyItemsCommandInput,
    ListCustomVocabularyItemsCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LexModelBuildingServiceV2", "ListCustomVocabularyItems", {})
  .n("LexModelsV2Client", "ListCustomVocabularyItemsCommand")
  .f(void 0, void 0)
  .ser(se_ListCustomVocabularyItemsCommand)
  .de(de_ListCustomVocabularyItemsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomVocabularyItemsRequest;
      output: ListCustomVocabularyItemsResponse;
    };
    sdk: {
      input: ListCustomVocabularyItemsCommandInput;
      output: ListCustomVocabularyItemsCommandOutput;
    };
  };
}
