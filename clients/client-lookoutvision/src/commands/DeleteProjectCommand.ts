// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { DeleteProjectRequest, DeleteProjectResponse } from "../models/models_0";
import { de_DeleteProjectCommand, se_DeleteProjectCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProjectCommand}.
 */
export interface DeleteProjectCommandInput extends DeleteProjectRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProjectCommand}.
 */
export interface DeleteProjectCommandOutput extends DeleteProjectResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon Lookout for Vision project.</p>
 *          <p>To delete a project, you must first delete each version of the model associated with
 *          the project. To delete a model use the <a>DeleteModel</a> operation.</p>
 *          <p>You also have to delete the dataset(s) associated with the model. For more information, see
 *          <a>DeleteDataset</a>.  The images referenced by the training and test datasets aren't deleted.
 *       </p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:DeleteProject</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, DeleteProjectCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, DeleteProjectCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const input = { // DeleteProjectRequest
 *   ProjectName: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DeleteProjectCommand(input);
 * const response = await client.send(command);
 * // { // DeleteProjectResponse
 * //   ProjectArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteProjectCommandInput - {@link DeleteProjectCommandInput}
 * @returns {@link DeleteProjectCommandOutput}
 * @see {@link DeleteProjectCommandInput} for command's `input` shape.
 * @see {@link DeleteProjectCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The update or deletion of a resource caused an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Lookout for Vision experienced a service issue. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Amazon Lookout for Vision is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An input validation error occured. For example, invalid characters in a project name,
 *       or if a pagination token is invalid.</p>
 *
 * @throws {@link LookoutVisionServiceException}
 * <p>Base exception class for all service exceptions from LookoutVision service.</p>
 *
 *
 * @public
 */
export class DeleteProjectCommand extends $Command
  .classBuilder<
    DeleteProjectCommandInput,
    DeleteProjectCommandOutput,
    LookoutVisionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutVisionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LookoutVisionService", "DeleteProject", {})
  .n("LookoutVisionClient", "DeleteProjectCommand")
  .f(void 0, void 0)
  .ser(se_DeleteProjectCommand)
  .de(de_DeleteProjectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProjectRequest;
      output: DeleteProjectResponse;
    };
    sdk: {
      input: DeleteProjectCommandInput;
      output: DeleteProjectCommandOutput;
    };
  };
}
