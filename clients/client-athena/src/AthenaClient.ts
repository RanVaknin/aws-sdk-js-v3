// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultAthenaHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { BatchGetNamedQueryCommandInput, BatchGetNamedQueryCommandOutput } from "./commands/BatchGetNamedQueryCommand";
import {
  BatchGetPreparedStatementCommandInput,
  BatchGetPreparedStatementCommandOutput,
} from "./commands/BatchGetPreparedStatementCommand";
import {
  BatchGetQueryExecutionCommandInput,
  BatchGetQueryExecutionCommandOutput,
} from "./commands/BatchGetQueryExecutionCommand";
import {
  CancelCapacityReservationCommandInput,
  CancelCapacityReservationCommandOutput,
} from "./commands/CancelCapacityReservationCommand";
import {
  CreateCapacityReservationCommandInput,
  CreateCapacityReservationCommandOutput,
} from "./commands/CreateCapacityReservationCommand";
import { CreateDataCatalogCommandInput, CreateDataCatalogCommandOutput } from "./commands/CreateDataCatalogCommand";
import { CreateNamedQueryCommandInput, CreateNamedQueryCommandOutput } from "./commands/CreateNamedQueryCommand";
import { CreateNotebookCommandInput, CreateNotebookCommandOutput } from "./commands/CreateNotebookCommand";
import {
  CreatePreparedStatementCommandInput,
  CreatePreparedStatementCommandOutput,
} from "./commands/CreatePreparedStatementCommand";
import {
  CreatePresignedNotebookUrlCommandInput,
  CreatePresignedNotebookUrlCommandOutput,
} from "./commands/CreatePresignedNotebookUrlCommand";
import { CreateWorkGroupCommandInput, CreateWorkGroupCommandOutput } from "./commands/CreateWorkGroupCommand";
import {
  DeleteCapacityReservationCommandInput,
  DeleteCapacityReservationCommandOutput,
} from "./commands/DeleteCapacityReservationCommand";
import { DeleteDataCatalogCommandInput, DeleteDataCatalogCommandOutput } from "./commands/DeleteDataCatalogCommand";
import { DeleteNamedQueryCommandInput, DeleteNamedQueryCommandOutput } from "./commands/DeleteNamedQueryCommand";
import { DeleteNotebookCommandInput, DeleteNotebookCommandOutput } from "./commands/DeleteNotebookCommand";
import {
  DeletePreparedStatementCommandInput,
  DeletePreparedStatementCommandOutput,
} from "./commands/DeletePreparedStatementCommand";
import { DeleteWorkGroupCommandInput, DeleteWorkGroupCommandOutput } from "./commands/DeleteWorkGroupCommand";
import { ExportNotebookCommandInput, ExportNotebookCommandOutput } from "./commands/ExportNotebookCommand";
import {
  GetCalculationExecutionCodeCommandInput,
  GetCalculationExecutionCodeCommandOutput,
} from "./commands/GetCalculationExecutionCodeCommand";
import {
  GetCalculationExecutionCommandInput,
  GetCalculationExecutionCommandOutput,
} from "./commands/GetCalculationExecutionCommand";
import {
  GetCalculationExecutionStatusCommandInput,
  GetCalculationExecutionStatusCommandOutput,
} from "./commands/GetCalculationExecutionStatusCommand";
import {
  GetCapacityAssignmentConfigurationCommandInput,
  GetCapacityAssignmentConfigurationCommandOutput,
} from "./commands/GetCapacityAssignmentConfigurationCommand";
import {
  GetCapacityReservationCommandInput,
  GetCapacityReservationCommandOutput,
} from "./commands/GetCapacityReservationCommand";
import { GetDatabaseCommandInput, GetDatabaseCommandOutput } from "./commands/GetDatabaseCommand";
import { GetDataCatalogCommandInput, GetDataCatalogCommandOutput } from "./commands/GetDataCatalogCommand";
import { GetNamedQueryCommandInput, GetNamedQueryCommandOutput } from "./commands/GetNamedQueryCommand";
import {
  GetNotebookMetadataCommandInput,
  GetNotebookMetadataCommandOutput,
} from "./commands/GetNotebookMetadataCommand";
import {
  GetPreparedStatementCommandInput,
  GetPreparedStatementCommandOutput,
} from "./commands/GetPreparedStatementCommand";
import { GetQueryExecutionCommandInput, GetQueryExecutionCommandOutput } from "./commands/GetQueryExecutionCommand";
import { GetQueryResultsCommandInput, GetQueryResultsCommandOutput } from "./commands/GetQueryResultsCommand";
import {
  GetQueryRuntimeStatisticsCommandInput,
  GetQueryRuntimeStatisticsCommandOutput,
} from "./commands/GetQueryRuntimeStatisticsCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import { GetSessionStatusCommandInput, GetSessionStatusCommandOutput } from "./commands/GetSessionStatusCommand";
import { GetTableMetadataCommandInput, GetTableMetadataCommandOutput } from "./commands/GetTableMetadataCommand";
import { GetWorkGroupCommandInput, GetWorkGroupCommandOutput } from "./commands/GetWorkGroupCommand";
import { ImportNotebookCommandInput, ImportNotebookCommandOutput } from "./commands/ImportNotebookCommand";
import {
  ListApplicationDPUSizesCommandInput,
  ListApplicationDPUSizesCommandOutput,
} from "./commands/ListApplicationDPUSizesCommand";
import {
  ListCalculationExecutionsCommandInput,
  ListCalculationExecutionsCommandOutput,
} from "./commands/ListCalculationExecutionsCommand";
import {
  ListCapacityReservationsCommandInput,
  ListCapacityReservationsCommandOutput,
} from "./commands/ListCapacityReservationsCommand";
import { ListDatabasesCommandInput, ListDatabasesCommandOutput } from "./commands/ListDatabasesCommand";
import { ListDataCatalogsCommandInput, ListDataCatalogsCommandOutput } from "./commands/ListDataCatalogsCommand";
import { ListEngineVersionsCommandInput, ListEngineVersionsCommandOutput } from "./commands/ListEngineVersionsCommand";
import { ListExecutorsCommandInput, ListExecutorsCommandOutput } from "./commands/ListExecutorsCommand";
import { ListNamedQueriesCommandInput, ListNamedQueriesCommandOutput } from "./commands/ListNamedQueriesCommand";
import {
  ListNotebookMetadataCommandInput,
  ListNotebookMetadataCommandOutput,
} from "./commands/ListNotebookMetadataCommand";
import {
  ListNotebookSessionsCommandInput,
  ListNotebookSessionsCommandOutput,
} from "./commands/ListNotebookSessionsCommand";
import {
  ListPreparedStatementsCommandInput,
  ListPreparedStatementsCommandOutput,
} from "./commands/ListPreparedStatementsCommand";
import {
  ListQueryExecutionsCommandInput,
  ListQueryExecutionsCommandOutput,
} from "./commands/ListQueryExecutionsCommand";
import { ListSessionsCommandInput, ListSessionsCommandOutput } from "./commands/ListSessionsCommand";
import { ListTableMetadataCommandInput, ListTableMetadataCommandOutput } from "./commands/ListTableMetadataCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListWorkGroupsCommandInput, ListWorkGroupsCommandOutput } from "./commands/ListWorkGroupsCommand";
import {
  PutCapacityAssignmentConfigurationCommandInput,
  PutCapacityAssignmentConfigurationCommandOutput,
} from "./commands/PutCapacityAssignmentConfigurationCommand";
import {
  StartCalculationExecutionCommandInput,
  StartCalculationExecutionCommandOutput,
} from "./commands/StartCalculationExecutionCommand";
import {
  StartQueryExecutionCommandInput,
  StartQueryExecutionCommandOutput,
} from "./commands/StartQueryExecutionCommand";
import { StartSessionCommandInput, StartSessionCommandOutput } from "./commands/StartSessionCommand";
import {
  StopCalculationExecutionCommandInput,
  StopCalculationExecutionCommandOutput,
} from "./commands/StopCalculationExecutionCommand";
import { StopQueryExecutionCommandInput, StopQueryExecutionCommandOutput } from "./commands/StopQueryExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TerminateSessionCommandInput, TerminateSessionCommandOutput } from "./commands/TerminateSessionCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateCapacityReservationCommandInput,
  UpdateCapacityReservationCommandOutput,
} from "./commands/UpdateCapacityReservationCommand";
import { UpdateDataCatalogCommandInput, UpdateDataCatalogCommandOutput } from "./commands/UpdateDataCatalogCommand";
import { UpdateNamedQueryCommandInput, UpdateNamedQueryCommandOutput } from "./commands/UpdateNamedQueryCommand";
import { UpdateNotebookCommandInput, UpdateNotebookCommandOutput } from "./commands/UpdateNotebookCommand";
import {
  UpdateNotebookMetadataCommandInput,
  UpdateNotebookMetadataCommandOutput,
} from "./commands/UpdateNotebookMetadataCommand";
import {
  UpdatePreparedStatementCommandInput,
  UpdatePreparedStatementCommandOutput,
} from "./commands/UpdatePreparedStatementCommand";
import { UpdateWorkGroupCommandInput, UpdateWorkGroupCommandOutput } from "./commands/UpdateWorkGroupCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | BatchGetNamedQueryCommandInput
  | BatchGetPreparedStatementCommandInput
  | BatchGetQueryExecutionCommandInput
  | CancelCapacityReservationCommandInput
  | CreateCapacityReservationCommandInput
  | CreateDataCatalogCommandInput
  | CreateNamedQueryCommandInput
  | CreateNotebookCommandInput
  | CreatePreparedStatementCommandInput
  | CreatePresignedNotebookUrlCommandInput
  | CreateWorkGroupCommandInput
  | DeleteCapacityReservationCommandInput
  | DeleteDataCatalogCommandInput
  | DeleteNamedQueryCommandInput
  | DeleteNotebookCommandInput
  | DeletePreparedStatementCommandInput
  | DeleteWorkGroupCommandInput
  | ExportNotebookCommandInput
  | GetCalculationExecutionCodeCommandInput
  | GetCalculationExecutionCommandInput
  | GetCalculationExecutionStatusCommandInput
  | GetCapacityAssignmentConfigurationCommandInput
  | GetCapacityReservationCommandInput
  | GetDataCatalogCommandInput
  | GetDatabaseCommandInput
  | GetNamedQueryCommandInput
  | GetNotebookMetadataCommandInput
  | GetPreparedStatementCommandInput
  | GetQueryExecutionCommandInput
  | GetQueryResultsCommandInput
  | GetQueryRuntimeStatisticsCommandInput
  | GetSessionCommandInput
  | GetSessionStatusCommandInput
  | GetTableMetadataCommandInput
  | GetWorkGroupCommandInput
  | ImportNotebookCommandInput
  | ListApplicationDPUSizesCommandInput
  | ListCalculationExecutionsCommandInput
  | ListCapacityReservationsCommandInput
  | ListDataCatalogsCommandInput
  | ListDatabasesCommandInput
  | ListEngineVersionsCommandInput
  | ListExecutorsCommandInput
  | ListNamedQueriesCommandInput
  | ListNotebookMetadataCommandInput
  | ListNotebookSessionsCommandInput
  | ListPreparedStatementsCommandInput
  | ListQueryExecutionsCommandInput
  | ListSessionsCommandInput
  | ListTableMetadataCommandInput
  | ListTagsForResourceCommandInput
  | ListWorkGroupsCommandInput
  | PutCapacityAssignmentConfigurationCommandInput
  | StartCalculationExecutionCommandInput
  | StartQueryExecutionCommandInput
  | StartSessionCommandInput
  | StopCalculationExecutionCommandInput
  | StopQueryExecutionCommandInput
  | TagResourceCommandInput
  | TerminateSessionCommandInput
  | UntagResourceCommandInput
  | UpdateCapacityReservationCommandInput
  | UpdateDataCatalogCommandInput
  | UpdateNamedQueryCommandInput
  | UpdateNotebookCommandInput
  | UpdateNotebookMetadataCommandInput
  | UpdatePreparedStatementCommandInput
  | UpdateWorkGroupCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchGetNamedQueryCommandOutput
  | BatchGetPreparedStatementCommandOutput
  | BatchGetQueryExecutionCommandOutput
  | CancelCapacityReservationCommandOutput
  | CreateCapacityReservationCommandOutput
  | CreateDataCatalogCommandOutput
  | CreateNamedQueryCommandOutput
  | CreateNotebookCommandOutput
  | CreatePreparedStatementCommandOutput
  | CreatePresignedNotebookUrlCommandOutput
  | CreateWorkGroupCommandOutput
  | DeleteCapacityReservationCommandOutput
  | DeleteDataCatalogCommandOutput
  | DeleteNamedQueryCommandOutput
  | DeleteNotebookCommandOutput
  | DeletePreparedStatementCommandOutput
  | DeleteWorkGroupCommandOutput
  | ExportNotebookCommandOutput
  | GetCalculationExecutionCodeCommandOutput
  | GetCalculationExecutionCommandOutput
  | GetCalculationExecutionStatusCommandOutput
  | GetCapacityAssignmentConfigurationCommandOutput
  | GetCapacityReservationCommandOutput
  | GetDataCatalogCommandOutput
  | GetDatabaseCommandOutput
  | GetNamedQueryCommandOutput
  | GetNotebookMetadataCommandOutput
  | GetPreparedStatementCommandOutput
  | GetQueryExecutionCommandOutput
  | GetQueryResultsCommandOutput
  | GetQueryRuntimeStatisticsCommandOutput
  | GetSessionCommandOutput
  | GetSessionStatusCommandOutput
  | GetTableMetadataCommandOutput
  | GetWorkGroupCommandOutput
  | ImportNotebookCommandOutput
  | ListApplicationDPUSizesCommandOutput
  | ListCalculationExecutionsCommandOutput
  | ListCapacityReservationsCommandOutput
  | ListDataCatalogsCommandOutput
  | ListDatabasesCommandOutput
  | ListEngineVersionsCommandOutput
  | ListExecutorsCommandOutput
  | ListNamedQueriesCommandOutput
  | ListNotebookMetadataCommandOutput
  | ListNotebookSessionsCommandOutput
  | ListPreparedStatementsCommandOutput
  | ListQueryExecutionsCommandOutput
  | ListSessionsCommandOutput
  | ListTableMetadataCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWorkGroupsCommandOutput
  | PutCapacityAssignmentConfigurationCommandOutput
  | StartCalculationExecutionCommandOutput
  | StartQueryExecutionCommandOutput
  | StartSessionCommandOutput
  | StopCalculationExecutionCommandOutput
  | StopQueryExecutionCommandOutput
  | TagResourceCommandOutput
  | TerminateSessionCommandOutput
  | UntagResourceCommandOutput
  | UpdateCapacityReservationCommandOutput
  | UpdateDataCatalogCommandOutput
  | UpdateNamedQueryCommandOutput
  | UpdateNotebookCommandOutput
  | UpdateNotebookMetadataCommandOutput
  | UpdatePreparedStatementCommandOutput
  | UpdateWorkGroupCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type AthenaClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of AthenaClient class constructor that set the region, credentials and other options.
 */
export interface AthenaClientConfig extends AthenaClientConfigType {}

/**
 * @public
 */
export type AthenaClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of AthenaClient class. This is resolved and normalized from the {@link AthenaClientConfig | constructor configuration interface}.
 */
export interface AthenaClientResolvedConfig extends AthenaClientResolvedConfigType {}

/**
 * <p>Amazon Athena is an interactive query service that lets you use standard SQL
 *             to analyze data directly in Amazon S3. You can point Athena at your
 *             data in Amazon S3 and run ad-hoc queries and get results in seconds. Athena is serverless, so there is no infrastructure to set up or manage. You pay
 *             only for the queries you run. Athena scales automatically—executing queries
 *             in parallel—so results are fast, even with large datasets and complex queries. For more
 *             information, see <a href="http://docs.aws.amazon.com/athena/latest/ug/what-is.html">What is Amazon Athena</a> in the <i>Amazon Athena User
 *                 Guide</i>.</p>
 *          <p>If you connect to Athena using the JDBC driver, use version 1.1.0 of the
 *             driver or later with the Amazon Athena API. Earlier version drivers do not
 *             support the API. For more information and to download the driver, see <a href="https://docs.aws.amazon.com/athena/latest/ug/connect-with-jdbc.html">Accessing
 *                     Amazon Athena with JDBC</a>.</p>
 * @public
 */
export class AthenaClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AthenaClientResolvedConfig
> {
  /**
   * The resolved configuration of AthenaClient class. This is resolved and normalized from the {@link AthenaClientConfig | constructor configuration interface}.
   */
  readonly config: AthenaClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<AthenaClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultAthenaHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: AthenaClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
