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
  defaultForecastHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  CreateAutoPredictorCommandInput,
  CreateAutoPredictorCommandOutput,
} from "./commands/CreateAutoPredictorCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import { CreateDatasetGroupCommandInput, CreateDatasetGroupCommandOutput } from "./commands/CreateDatasetGroupCommand";
import {
  CreateDatasetImportJobCommandInput,
  CreateDatasetImportJobCommandOutput,
} from "./commands/CreateDatasetImportJobCommand";
import {
  CreateExplainabilityCommandInput,
  CreateExplainabilityCommandOutput,
} from "./commands/CreateExplainabilityCommand";
import {
  CreateExplainabilityExportCommandInput,
  CreateExplainabilityExportCommandOutput,
} from "./commands/CreateExplainabilityExportCommand";
import { CreateForecastCommandInput, CreateForecastCommandOutput } from "./commands/CreateForecastCommand";
import {
  CreateForecastExportJobCommandInput,
  CreateForecastExportJobCommandOutput,
} from "./commands/CreateForecastExportJobCommand";
import { CreateMonitorCommandInput, CreateMonitorCommandOutput } from "./commands/CreateMonitorCommand";
import {
  CreatePredictorBacktestExportJobCommandInput,
  CreatePredictorBacktestExportJobCommandOutput,
} from "./commands/CreatePredictorBacktestExportJobCommand";
import { CreatePredictorCommandInput, CreatePredictorCommandOutput } from "./commands/CreatePredictorCommand";
import {
  CreateWhatIfAnalysisCommandInput,
  CreateWhatIfAnalysisCommandOutput,
} from "./commands/CreateWhatIfAnalysisCommand";
import {
  CreateWhatIfForecastCommandInput,
  CreateWhatIfForecastCommandOutput,
} from "./commands/CreateWhatIfForecastCommand";
import {
  CreateWhatIfForecastExportCommandInput,
  CreateWhatIfForecastExportCommandOutput,
} from "./commands/CreateWhatIfForecastExportCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import { DeleteDatasetGroupCommandInput, DeleteDatasetGroupCommandOutput } from "./commands/DeleteDatasetGroupCommand";
import {
  DeleteDatasetImportJobCommandInput,
  DeleteDatasetImportJobCommandOutput,
} from "./commands/DeleteDatasetImportJobCommand";
import {
  DeleteExplainabilityCommandInput,
  DeleteExplainabilityCommandOutput,
} from "./commands/DeleteExplainabilityCommand";
import {
  DeleteExplainabilityExportCommandInput,
  DeleteExplainabilityExportCommandOutput,
} from "./commands/DeleteExplainabilityExportCommand";
import { DeleteForecastCommandInput, DeleteForecastCommandOutput } from "./commands/DeleteForecastCommand";
import {
  DeleteForecastExportJobCommandInput,
  DeleteForecastExportJobCommandOutput,
} from "./commands/DeleteForecastExportJobCommand";
import { DeleteMonitorCommandInput, DeleteMonitorCommandOutput } from "./commands/DeleteMonitorCommand";
import {
  DeletePredictorBacktestExportJobCommandInput,
  DeletePredictorBacktestExportJobCommandOutput,
} from "./commands/DeletePredictorBacktestExportJobCommand";
import { DeletePredictorCommandInput, DeletePredictorCommandOutput } from "./commands/DeletePredictorCommand";
import { DeleteResourceTreeCommandInput, DeleteResourceTreeCommandOutput } from "./commands/DeleteResourceTreeCommand";
import {
  DeleteWhatIfAnalysisCommandInput,
  DeleteWhatIfAnalysisCommandOutput,
} from "./commands/DeleteWhatIfAnalysisCommand";
import {
  DeleteWhatIfForecastCommandInput,
  DeleteWhatIfForecastCommandOutput,
} from "./commands/DeleteWhatIfForecastCommand";
import {
  DeleteWhatIfForecastExportCommandInput,
  DeleteWhatIfForecastExportCommandOutput,
} from "./commands/DeleteWhatIfForecastExportCommand";
import {
  DescribeAutoPredictorCommandInput,
  DescribeAutoPredictorCommandOutput,
} from "./commands/DescribeAutoPredictorCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
import {
  DescribeDatasetGroupCommandInput,
  DescribeDatasetGroupCommandOutput,
} from "./commands/DescribeDatasetGroupCommand";
import {
  DescribeDatasetImportJobCommandInput,
  DescribeDatasetImportJobCommandOutput,
} from "./commands/DescribeDatasetImportJobCommand";
import {
  DescribeExplainabilityCommandInput,
  DescribeExplainabilityCommandOutput,
} from "./commands/DescribeExplainabilityCommand";
import {
  DescribeExplainabilityExportCommandInput,
  DescribeExplainabilityExportCommandOutput,
} from "./commands/DescribeExplainabilityExportCommand";
import { DescribeForecastCommandInput, DescribeForecastCommandOutput } from "./commands/DescribeForecastCommand";
import {
  DescribeForecastExportJobCommandInput,
  DescribeForecastExportJobCommandOutput,
} from "./commands/DescribeForecastExportJobCommand";
import { DescribeMonitorCommandInput, DescribeMonitorCommandOutput } from "./commands/DescribeMonitorCommand";
import {
  DescribePredictorBacktestExportJobCommandInput,
  DescribePredictorBacktestExportJobCommandOutput,
} from "./commands/DescribePredictorBacktestExportJobCommand";
import { DescribePredictorCommandInput, DescribePredictorCommandOutput } from "./commands/DescribePredictorCommand";
import {
  DescribeWhatIfAnalysisCommandInput,
  DescribeWhatIfAnalysisCommandOutput,
} from "./commands/DescribeWhatIfAnalysisCommand";
import {
  DescribeWhatIfForecastCommandInput,
  DescribeWhatIfForecastCommandOutput,
} from "./commands/DescribeWhatIfForecastCommand";
import {
  DescribeWhatIfForecastExportCommandInput,
  DescribeWhatIfForecastExportCommandOutput,
} from "./commands/DescribeWhatIfForecastExportCommand";
import { GetAccuracyMetricsCommandInput, GetAccuracyMetricsCommandOutput } from "./commands/GetAccuracyMetricsCommand";
import { ListDatasetGroupsCommandInput, ListDatasetGroupsCommandOutput } from "./commands/ListDatasetGroupsCommand";
import {
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput,
} from "./commands/ListDatasetImportJobsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
import {
  ListExplainabilitiesCommandInput,
  ListExplainabilitiesCommandOutput,
} from "./commands/ListExplainabilitiesCommand";
import {
  ListExplainabilityExportsCommandInput,
  ListExplainabilityExportsCommandOutput,
} from "./commands/ListExplainabilityExportsCommand";
import {
  ListForecastExportJobsCommandInput,
  ListForecastExportJobsCommandOutput,
} from "./commands/ListForecastExportJobsCommand";
import { ListForecastsCommandInput, ListForecastsCommandOutput } from "./commands/ListForecastsCommand";
import {
  ListMonitorEvaluationsCommandInput,
  ListMonitorEvaluationsCommandOutput,
} from "./commands/ListMonitorEvaluationsCommand";
import { ListMonitorsCommandInput, ListMonitorsCommandOutput } from "./commands/ListMonitorsCommand";
import {
  ListPredictorBacktestExportJobsCommandInput,
  ListPredictorBacktestExportJobsCommandOutput,
} from "./commands/ListPredictorBacktestExportJobsCommand";
import { ListPredictorsCommandInput, ListPredictorsCommandOutput } from "./commands/ListPredictorsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListWhatIfAnalysesCommandInput, ListWhatIfAnalysesCommandOutput } from "./commands/ListWhatIfAnalysesCommand";
import {
  ListWhatIfForecastExportsCommandInput,
  ListWhatIfForecastExportsCommandOutput,
} from "./commands/ListWhatIfForecastExportsCommand";
import {
  ListWhatIfForecastsCommandInput,
  ListWhatIfForecastsCommandOutput,
} from "./commands/ListWhatIfForecastsCommand";
import { ResumeResourceCommandInput, ResumeResourceCommandOutput } from "./commands/ResumeResourceCommand";
import { StopResourceCommandInput, StopResourceCommandOutput } from "./commands/StopResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDatasetGroupCommandInput, UpdateDatasetGroupCommandOutput } from "./commands/UpdateDatasetGroupCommand";
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
  | CreateAutoPredictorCommandInput
  | CreateDatasetCommandInput
  | CreateDatasetGroupCommandInput
  | CreateDatasetImportJobCommandInput
  | CreateExplainabilityCommandInput
  | CreateExplainabilityExportCommandInput
  | CreateForecastCommandInput
  | CreateForecastExportJobCommandInput
  | CreateMonitorCommandInput
  | CreatePredictorBacktestExportJobCommandInput
  | CreatePredictorCommandInput
  | CreateWhatIfAnalysisCommandInput
  | CreateWhatIfForecastCommandInput
  | CreateWhatIfForecastExportCommandInput
  | DeleteDatasetCommandInput
  | DeleteDatasetGroupCommandInput
  | DeleteDatasetImportJobCommandInput
  | DeleteExplainabilityCommandInput
  | DeleteExplainabilityExportCommandInput
  | DeleteForecastCommandInput
  | DeleteForecastExportJobCommandInput
  | DeleteMonitorCommandInput
  | DeletePredictorBacktestExportJobCommandInput
  | DeletePredictorCommandInput
  | DeleteResourceTreeCommandInput
  | DeleteWhatIfAnalysisCommandInput
  | DeleteWhatIfForecastCommandInput
  | DeleteWhatIfForecastExportCommandInput
  | DescribeAutoPredictorCommandInput
  | DescribeDatasetCommandInput
  | DescribeDatasetGroupCommandInput
  | DescribeDatasetImportJobCommandInput
  | DescribeExplainabilityCommandInput
  | DescribeExplainabilityExportCommandInput
  | DescribeForecastCommandInput
  | DescribeForecastExportJobCommandInput
  | DescribeMonitorCommandInput
  | DescribePredictorBacktestExportJobCommandInput
  | DescribePredictorCommandInput
  | DescribeWhatIfAnalysisCommandInput
  | DescribeWhatIfForecastCommandInput
  | DescribeWhatIfForecastExportCommandInput
  | GetAccuracyMetricsCommandInput
  | ListDatasetGroupsCommandInput
  | ListDatasetImportJobsCommandInput
  | ListDatasetsCommandInput
  | ListExplainabilitiesCommandInput
  | ListExplainabilityExportsCommandInput
  | ListForecastExportJobsCommandInput
  | ListForecastsCommandInput
  | ListMonitorEvaluationsCommandInput
  | ListMonitorsCommandInput
  | ListPredictorBacktestExportJobsCommandInput
  | ListPredictorsCommandInput
  | ListTagsForResourceCommandInput
  | ListWhatIfAnalysesCommandInput
  | ListWhatIfForecastExportsCommandInput
  | ListWhatIfForecastsCommandInput
  | ResumeResourceCommandInput
  | StopResourceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDatasetGroupCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateAutoPredictorCommandOutput
  | CreateDatasetCommandOutput
  | CreateDatasetGroupCommandOutput
  | CreateDatasetImportJobCommandOutput
  | CreateExplainabilityCommandOutput
  | CreateExplainabilityExportCommandOutput
  | CreateForecastCommandOutput
  | CreateForecastExportJobCommandOutput
  | CreateMonitorCommandOutput
  | CreatePredictorBacktestExportJobCommandOutput
  | CreatePredictorCommandOutput
  | CreateWhatIfAnalysisCommandOutput
  | CreateWhatIfForecastCommandOutput
  | CreateWhatIfForecastExportCommandOutput
  | DeleteDatasetCommandOutput
  | DeleteDatasetGroupCommandOutput
  | DeleteDatasetImportJobCommandOutput
  | DeleteExplainabilityCommandOutput
  | DeleteExplainabilityExportCommandOutput
  | DeleteForecastCommandOutput
  | DeleteForecastExportJobCommandOutput
  | DeleteMonitorCommandOutput
  | DeletePredictorBacktestExportJobCommandOutput
  | DeletePredictorCommandOutput
  | DeleteResourceTreeCommandOutput
  | DeleteWhatIfAnalysisCommandOutput
  | DeleteWhatIfForecastCommandOutput
  | DeleteWhatIfForecastExportCommandOutput
  | DescribeAutoPredictorCommandOutput
  | DescribeDatasetCommandOutput
  | DescribeDatasetGroupCommandOutput
  | DescribeDatasetImportJobCommandOutput
  | DescribeExplainabilityCommandOutput
  | DescribeExplainabilityExportCommandOutput
  | DescribeForecastCommandOutput
  | DescribeForecastExportJobCommandOutput
  | DescribeMonitorCommandOutput
  | DescribePredictorBacktestExportJobCommandOutput
  | DescribePredictorCommandOutput
  | DescribeWhatIfAnalysisCommandOutput
  | DescribeWhatIfForecastCommandOutput
  | DescribeWhatIfForecastExportCommandOutput
  | GetAccuracyMetricsCommandOutput
  | ListDatasetGroupsCommandOutput
  | ListDatasetImportJobsCommandOutput
  | ListDatasetsCommandOutput
  | ListExplainabilitiesCommandOutput
  | ListExplainabilityExportsCommandOutput
  | ListForecastExportJobsCommandOutput
  | ListForecastsCommandOutput
  | ListMonitorEvaluationsCommandOutput
  | ListMonitorsCommandOutput
  | ListPredictorBacktestExportJobsCommandOutput
  | ListPredictorsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWhatIfAnalysesCommandOutput
  | ListWhatIfForecastExportsCommandOutput
  | ListWhatIfForecastsCommandOutput
  | ResumeResourceCommandOutput
  | StopResourceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDatasetGroupCommandOutput;

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
export type ForecastClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ForecastClient class constructor that set the region, credentials and other options.
 */
export interface ForecastClientConfig extends ForecastClientConfigType {}

/**
 * @public
 */
export type ForecastClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ForecastClient class. This is resolved and normalized from the {@link ForecastClientConfig | constructor configuration interface}.
 */
export interface ForecastClientResolvedConfig extends ForecastClientResolvedConfigType {}

/**
 * <p>Provides APIs for creating and managing Amazon Forecast resources.</p>
 * @public
 */
export class ForecastClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ForecastClientResolvedConfig
> {
  /**
   * The resolved configuration of ForecastClient class. This is resolved and normalized from the {@link ForecastClientConfig | constructor configuration interface}.
   */
  readonly config: ForecastClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ForecastClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultForecastHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ForecastClientResolvedConfig) =>
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
