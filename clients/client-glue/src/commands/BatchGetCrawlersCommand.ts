// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetCrawlersRequest, BatchGetCrawlersResponse } from "../models/models_0";
import { de_BatchGetCrawlersCommand, se_BatchGetCrawlersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetCrawlersCommand}.
 */
export interface BatchGetCrawlersCommandInput extends BatchGetCrawlersRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetCrawlersCommand}.
 */
export interface BatchGetCrawlersCommandOutput extends BatchGetCrawlersResponse, __MetadataBearer {}

/**
 * <p>Returns a list of resource metadata for a given list of crawler names. After calling the <code>ListCrawlers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetCrawlersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetCrawlersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // BatchGetCrawlersRequest
 *   CrawlerNames: [ // CrawlerNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetCrawlersCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetCrawlersResponse
 * //   Crawlers: [ // CrawlerList
 * //     { // Crawler
 * //       Name: "STRING_VALUE",
 * //       Role: "STRING_VALUE",
 * //       Targets: { // CrawlerTargets
 * //         S3Targets: [ // S3TargetList
 * //           { // S3Target
 * //             Path: "STRING_VALUE",
 * //             Exclusions: [ // PathList
 * //               "STRING_VALUE",
 * //             ],
 * //             ConnectionName: "STRING_VALUE",
 * //             SampleSize: Number("int"),
 * //             EventQueueArn: "STRING_VALUE",
 * //             DlqEventQueueArn: "STRING_VALUE",
 * //           },
 * //         ],
 * //         JdbcTargets: [ // JdbcTargetList
 * //           { // JdbcTarget
 * //             ConnectionName: "STRING_VALUE",
 * //             Path: "STRING_VALUE",
 * //             Exclusions: [
 * //               "STRING_VALUE",
 * //             ],
 * //             EnableAdditionalMetadata: [ // EnableAdditionalMetadata
 * //               "COMMENTS" || "RAWTYPES",
 * //             ],
 * //           },
 * //         ],
 * //         MongoDBTargets: [ // MongoDBTargetList
 * //           { // MongoDBTarget
 * //             ConnectionName: "STRING_VALUE",
 * //             Path: "STRING_VALUE",
 * //             ScanAll: true || false,
 * //           },
 * //         ],
 * //         DynamoDBTargets: [ // DynamoDBTargetList
 * //           { // DynamoDBTarget
 * //             Path: "STRING_VALUE",
 * //             scanAll: true || false,
 * //             scanRate: Number("double"),
 * //           },
 * //         ],
 * //         CatalogTargets: [ // CatalogTargetList
 * //           { // CatalogTarget
 * //             DatabaseName: "STRING_VALUE", // required
 * //             Tables: [ // CatalogTablesList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             ConnectionName: "STRING_VALUE",
 * //             EventQueueArn: "STRING_VALUE",
 * //             DlqEventQueueArn: "STRING_VALUE",
 * //           },
 * //         ],
 * //         DeltaTargets: [ // DeltaTargetList
 * //           { // DeltaTarget
 * //             DeltaTables: [
 * //               "STRING_VALUE",
 * //             ],
 * //             ConnectionName: "STRING_VALUE",
 * //             WriteManifest: true || false,
 * //             CreateNativeDeltaTable: true || false,
 * //           },
 * //         ],
 * //         IcebergTargets: [ // IcebergTargetList
 * //           { // IcebergTarget
 * //             Paths: [
 * //               "STRING_VALUE",
 * //             ],
 * //             ConnectionName: "STRING_VALUE",
 * //             Exclusions: [
 * //               "STRING_VALUE",
 * //             ],
 * //             MaximumTraversalDepth: Number("int"),
 * //           },
 * //         ],
 * //         HudiTargets: [ // HudiTargetList
 * //           { // HudiTarget
 * //             Paths: "<PathList>",
 * //             ConnectionName: "STRING_VALUE",
 * //             Exclusions: "<PathList>",
 * //             MaximumTraversalDepth: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       DatabaseName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Classifiers: [ // ClassifierNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       RecrawlPolicy: { // RecrawlPolicy
 * //         RecrawlBehavior: "CRAWL_EVERYTHING" || "CRAWL_NEW_FOLDERS_ONLY" || "CRAWL_EVENT_MODE",
 * //       },
 * //       SchemaChangePolicy: { // SchemaChangePolicy
 * //         UpdateBehavior: "LOG" || "UPDATE_IN_DATABASE",
 * //         DeleteBehavior: "LOG" || "DELETE_FROM_DATABASE" || "DEPRECATE_IN_DATABASE",
 * //       },
 * //       LineageConfiguration: { // LineageConfiguration
 * //         CrawlerLineageSettings: "ENABLE" || "DISABLE",
 * //       },
 * //       State: "READY" || "RUNNING" || "STOPPING",
 * //       TablePrefix: "STRING_VALUE",
 * //       Schedule: { // Schedule
 * //         ScheduleExpression: "STRING_VALUE",
 * //         State: "SCHEDULED" || "NOT_SCHEDULED" || "TRANSITIONING",
 * //       },
 * //       CrawlElapsedTime: Number("long"),
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       LastCrawl: { // LastCrawlInfo
 * //         Status: "SUCCEEDED" || "CANCELLED" || "FAILED",
 * //         ErrorMessage: "STRING_VALUE",
 * //         LogGroup: "STRING_VALUE",
 * //         LogStream: "STRING_VALUE",
 * //         MessagePrefix: "STRING_VALUE",
 * //         StartTime: new Date("TIMESTAMP"),
 * //       },
 * //       Version: Number("long"),
 * //       Configuration: "STRING_VALUE",
 * //       CrawlerSecurityConfiguration: "STRING_VALUE",
 * //       LakeFormationConfiguration: { // LakeFormationConfiguration
 * //         UseLakeFormationCredentials: true || false,
 * //         AccountId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   CrawlersNotFound: [ // CrawlerNameList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetCrawlersCommandInput - {@link BatchGetCrawlersCommandInput}
 * @returns {@link BatchGetCrawlersCommandOutput}
 * @see {@link BatchGetCrawlersCommandInput} for command's `input` shape.
 * @see {@link BatchGetCrawlersCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class BatchGetCrawlersCommand extends $Command
  .classBuilder<
    BatchGetCrawlersCommandInput,
    BatchGetCrawlersCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "BatchGetCrawlers", {})
  .n("GlueClient", "BatchGetCrawlersCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetCrawlersCommand)
  .de(de_BatchGetCrawlersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetCrawlersRequest;
      output: BatchGetCrawlersResponse;
    };
    sdk: {
      input: BatchGetCrawlersCommandInput;
      output: BatchGetCrawlersCommandOutput;
    };
  };
}
